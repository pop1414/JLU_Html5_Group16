<template>
  <div class="product-list">
    <van-nav-bar title="商品列表" fixed>
      <template #left>
        <van-icon name="arrow-left" @click="router.back()" />
      </template>
    </van-nav-bar>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- 新增：空状态 -->
        <van-empty
          v-if="!loading && products.length === 0"
          description="暂无商品"
        />
        <van-grid :column-num="2" :gutter="10">
          <van-grid-item v-for="product in products" :key="product.id">
            <van-image :src="product.img" fit="cover" />
            <div class="product-info">
              <p>{{ product.title || product.name }}</p>
              <!-- 兼容 title/name -->
              <p class="price">¥{{ product.price }}</p>
              <p class="promo">
                {{ product.promo || product.description.slice(0, 20) + "..." }}
              </p>
            </div>
          </van-grid-item>
        </van-grid>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getProductsByQuery, getProductsByCategory } from "@/api/product"; // 导入

const route = useRoute();
const router = useRouter();
const products = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const page = ref(1);

const onLoad = async () => {
  loading.value = true;
  let data = [];
  const q = route.query.q; // 搜索关键词
  const categoryId = route.query.categoryId; // 分类ID（改用 categoryId）
  try {
    if (q) {
      data = await getProductsByQuery(q, page.value);
    } else if (categoryId) {
      data = await getProductsByCategory(categoryId, page.value);
    }
  } catch (error) {
    console.error("加载商品失败:", error);
    // 可添加 van-toast 提示
  }
  products.value.push(...data);
  page.value++;
  if (data.length < 10) finished.value = true; // 假设 limit=10
  loading.value = false;
};

const onRefresh = () => {
  refreshing.value = true;
  products.value = [];
  page.value = 1;
  finished.value = false;
  onLoad().finally(() => (refreshing.value = false));
};

onMounted(onLoad); // 初始加载
</script>

<style scoped>
.product-list {
  margin-top: 46px;
}
.product-info {
  text-align: center;
}
.price {
  color: red;
}
</style>
