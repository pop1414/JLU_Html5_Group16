<template>
  <!-- 顶部固定搜索栏 -->
  <div class="search-header">
    <van-search
      v-model="searchQuery"
      placeholder="搜索商品，如 手机 或 笔记本"
      shape="round"
      :show-action="false"
      @focus="handleFocus"
      readonly
    />
  </div>

  <van-swipe class="banner" :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img :src="image" alt="banner" style="width: 100%; height: auto" />
    </van-swipe-item>
  </van-swipe>

  <van-grid :column-num="4" :gutter="10">
    <van-grid-item
      v-for="category in categories"
      :key="category.id"
      :icon="category.icon"
      :text="category.name"
    />
  </van-grid>

  <!-- 猜你喜欢 -->
  <div class="hot-products-container">
    <div class="hot-products-header">
      <h3>猜你喜欢</h3>
    </div>

    <van-loading v-if="loading" size="30px" class="loading" />

    <div v-else class="product-grid">
      <div
        class="product-card"
        v-for="product in randomProducts"
        :key="product.id"
        @click="toProductDetail(product.id)"
      >
        <div class="product-img-wrapper">
          <img
            :src="product.mainImg"
            :alt="product.name"
            class="product-img"
            @error="handleImgError"
          />
          <div class="sales-tag">销量 {{ product.sales }}+</div>
        </div>

        <div class="product-info">
          <div class="product-brand">{{ getBrandName(product.brandId) }}</div>
          <div class="product-name">{{ product.name }}</div>

          <div class="product-meta">
            <span class="price">¥{{ getProductPrice(product.id) }}</span>
            <div class="rating">
              <van-rate :value="product.ratings" readonly size="12px" />
              <span class="rating-text">{{ product.ratings }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 热门推荐 -->
  <div class="hot-products">
    <h3>热门推荐</h3>
    <van-loading v-if="loading" size="24px" />
    <van-cell-group v-else>
      <van-cell
        v-for="product in hotProducts"
        :key="product.id"
        :title="product.name"
        :label="`￥${getProductPrice(product.id)}`"
        :icon="product.mainImg"
        @click="toProduct(product.id)"
      >
        <template #right-icon>
          <van-icon name="arrow" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { products, brands, productSkus } from "@/data/index.js";

import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import banner4 from "@/assets/banner4.jpg";

import category1 from "@/assets/c1.png";
import category2 from "@/assets/c2.png";
import category3 from "@/assets/c3.png";
import category4 from "@/assets/c4.png";

const router = useRouter();

const searchQuery = ref("");
const loading = ref(true);

const images = ref([banner1, banner2, banner3, banner4]);

const categories = ref([
  { id: 1, name: "专题", icon: category1 },
  { id: 2, name: "话题", icon: category2 },
  { id: 3, name: "优选", icon: category3 },
  { id: 4, name: "特惠", icon: category4 },
]);

const randomProducts = ref([]);
const SHOW_COUNT = 6;

onMounted(() => {
  const productCopy = [...products];

  // 洗牌
  for (let i = productCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [productCopy[i], productCopy[j]] = [productCopy[j], productCopy[i]];
  }

  randomProducts.value = productCopy.slice(0, SHOW_COUNT);

  // ✅ 关键：关闭 loading，否则永远不渲染列表
  loading.value = false;
});

const hotProducts = computed(() => {
  // 这里简单取猜你喜欢后面几个作为热门推荐，也可以按销量排序取前 N
  return randomProducts.value.slice(0, 4);
});

const getBrandName = (brandId) => {
  const brand = brands.find((b) => b.id === brandId);
  return brand ? brand.name : "未知品牌";
};

const getProductPrice = (productId) => {
  const sku = productSkus.find((s) => s.productId === productId);
  return sku ? sku.price.toFixed(2) : "0.00";
};

const handleFocus = () => {
  router.push("/search");
};

// ✅ 修复：按路由 /product/:id 传 params（而不是 query）:contentReference[oaicite:1]{index=1}
const toProductDetail = (productId) => {
  router.push({ name: "productDetail", params: { id: productId } });
};

// 热门推荐点击也跳详情
const toProduct = (productId) => {
  router.push({ name: "productDetail", params: { id: productId } });
};

// 图片加载失败兜底
const handleImgError = (e) => {
  e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
};
</script>

<style scoped>
.banner {
  height: 150px;
}
.hot-products {
  margin: 10px;
}
h3 {
  font-size: 18px;
  margin: 10px 0;
}
.van-cell__icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

/* 顶部固定搜索栏 */
.search-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 避免被搜索栏遮挡 */
.banner,
.van-grid,
.hot-products-container,
.hot-products {
  margin-top: 44px;
}

/* 猜你喜欢卡片简单样式（你也可以按需改） */
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
}
.product-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}
.product-img-wrapper {
  position: relative;
}
.product-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
}
.sales-tag {
  position: absolute;
  left: 8px;
  bottom: 8px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 12px;
}
.product-info {
  padding: 8px;
}
.product-brand {
  font-size: 12px;
  color: #888;
}
.product-name {
  font-size: 14px;
  margin: 4px 0;
}
.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  color: #ee0a24;
  font-weight: 600;
}
.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}
.rating-text {
  font-size: 12px;
  color: #666;
}
</style>
