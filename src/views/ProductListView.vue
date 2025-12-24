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
        <van-grid :column-num="2" :gutter="10">
          <van-grid-item v-for="product in products" :key="product.id">
            <van-image :src="product.img" fit="cover" />
            <div class="product-info">
              <p>{{ product.title }}</p>
              <p class="price">¥{{ product.price }}</p>
              <p class="promo">{{ product.promo }}</p>
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
import { getProductsByQuery, getProductsByCategory } from "@/api/product"; // 假设API

const route = useRoute();
const router = useRouter();
const products = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const page = ref(1);

const onLoad = async () => {
  loading.value = true;
  let data;
  const q = route.query.q; // 从搜索来
  const category = route.query.category; // 从分类来
  if (q) {
    data = await getProductsByQuery(q, page.value); // API: 搜索匹配
  } else if (category) {
    data = await getProductsByCategory(category, page.value); // API: 分类过滤
  }
  products.value.push(...data);
  page.value++;
  if (data.length === 0) finished.value = true;
  loading.value = false;
};

const onRefresh = () => {
  refreshing.value = true;
  products.value = [];
  page.value = 1;
  finished.value = false;
  onLoad().finally(() => (refreshing.value = false));
};

onMounted(onLoad);
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
