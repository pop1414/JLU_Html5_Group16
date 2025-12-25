<template>
  <div class="page">
    <!-- 顶部栏 -->
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="router.back()"
    />

    <!-- 搜索框（可选） -->
    <div class="search-bar">
      <van-search
        v-model="keyword"
        placeholder="搜索商品/品牌/分类"
        readonly
        @click="goSearch"
      />
    </div>

    <!-- 排序 -->
    <div class="sort-bar">
      <van-tabs v-model:active="activeSortIndex" @change="onSortChange" shrink>
        <van-tab title="默认" />
        <van-tab title="销量" />
        <van-tab title="价格↑" />
        <van-tab title="价格↓" />
        <van-tab title="评分" />
      </van-tabs>
    </div>

    <!-- 列表 -->
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadMore"
    >
      <div v-if="!loading && products.length === 0" class="empty">
        <van-empty description="暂无商品" />
      </div>

      <van-card
        v-for="item in products"
        :key="item.id"
        :title="item.name"
        :desc="item.description"
        :thumb="item.mainImg || item.skuImg"
        :price="item.price"
        :origin-price="item.originalPrice"
        @click="goDetail(item)"
      >
        <template #tags>
          <van-tag plain type="primary" style="margin-right: 6px">
            {{ item.brandName }}
          </van-tag>
          <van-tag plain type="success">
            {{ item.categoryName }}
          </van-tag>
        </template>

        <template #footer>
          <div class="meta">
            <span>销量 {{ item.sales }}</span>
            <span>评分 {{ item.ratings }}</span>
            <span>库存 {{ item.stock }}</span>
          </div>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getProductsByCategory, getProductsByQuery } from "@/api/product.js";

const route = useRoute();
const router = useRouter();

const keyword = ref(route.query.query ? String(route.query.query) : "");
const categoryId = computed(() =>
  route.query.categoryId ? Number(route.query.categoryId) : null
);

const products = ref([]);
const page = ref(1);
const limit = 8;

const loading = ref(false);
const finished = ref(false);

const activeSortIndex = ref(0);
const sortKey = computed(() => {
  return (
    ["default", "sales_desc", "price_asc", "price_desc", "rating_desc"][
      activeSortIndex.value
    ] || "default"
  );
});

const title = computed(() => {
  if (categoryId.value) return "分类商品";
  if (keyword.value) return `搜索：${keyword.value}`;
  return "商品列表";
});

async function fetchList(reset = false) {
  if (reset) {
    page.value = 1;
    finished.value = false;
    products.value = [];
  }

  if (finished.value) return;

  loading.value = true;

  try {
    let res;
    if (categoryId.value) {
      res = await getProductsByCategory(
        categoryId.value,
        page.value,
        limit,
        sortKey.value
      );
    } else {
      res = await getProductsByQuery(
        keyword.value,
        page.value,
        limit,
        sortKey.value
      );
    }

    products.value.push(...res.list);
    finished.value = !res.hasMore;
    page.value++;
  } catch (err) {
    console.error("加载商品失败：", err);
    finished.value = true;
  } finally {
    loading.value = false;
  }
}

function goSearch() {
  router.push("/search");
}

// 上拉加载触发
function loadMore() {
  fetchList(false);
}

// 排序改变
function onSortChange() {
  fetchList(true);
}

// 点击进入详情
function goDetail(item) {
  router.push({ name: "productDetail", params: { id: item.id } });
  //router.push(`/product/${item.id}`);
}

// 监听路由 query 改变（分类切换 / 搜索切换）
watch(
  () => route.query,
  () => {
    keyword.value = route.query.query ? String(route.query.query) : "";
    fetchList(true);
  },
  { immediate: true }
);
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f7f8fa;
}

.search-bar {
  padding: 8px 12px;
  background: #fff;
}

.sort-bar {
  background: #fff;
  margin-bottom: 6px;
}

.meta {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  color: #999;
}

.empty {
  padding-top: 40px;
}
</style>
