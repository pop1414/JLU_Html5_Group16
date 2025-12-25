<template>
  <!-- 新增：顶部固定搜索栏，使用 van-search -->
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
    <!-- 轮播图 -->
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
      @click="toCategory(category.id)"
    />
  </van-grid>
  <div class="hot-products">
    <h3>热门推荐</h3>
    <van-loading v-if="loading" size="24px" />
    <van-cell-group v-else>
      <!-- 商品列表 -->
      <van-cell
        v-for="product in products"
        :key="product.id"
        :title="product.name"
        :label="`￥${product.price}`"
        :icon="product.img"
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
import { ref } from "vue";
import { useRouter } from "vue-router";

// 导入图片（用 import 方式）
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import banner4 from "@/assets/banner4.jpg";

// 导入 category 图标图片（假设文件名为 category1.jpg 等，放在 assets 下）
import category1 from "@/assets/c1.png"; // 对应电子产品
import category2 from "@/assets/c2.png"; // 对应服装
import category3 from "@/assets/c3.png"; // 对应图书
import category4 from "@/assets/c4.png"; // 对应家居

// 先定义 router 和 loading
const router = useRouter();
const loading = ref(true);

// mock 数据，用导入的图片赋值
const images = ref([banner1, banner2, banner3, banner4]);

// categories mock 数据，保持其他属性不变，只改 icon 为导入的图片
const categories = ref([
  { id: 1, name: "电子产品", icon: category1 },
  { id: 2, name: "服装", icon: category2 },
  { id: 3, name: "图书", icon: category3 },
  { id: 4, name: "家居", icon: category4 },
  // 添加更多
]);

// 新增：处理焦点/点击，跳转到搜索页
const handleFocus = () => {
  router.push("/search"); // 跳转到专用搜索页
};
</script>

<style scoped>
.banner {
  height: 150px; /* 调整高度，根据设计稿 */
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

/* 新增：固定搜索栏样式 */
.search-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 确保在最上层 */
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 调整内容位置，避免被搜索栏遮挡 */
.banner,
.van-grid,
.hot-products {
  margin-top: 44px; /* van-search 默认高度约44px，根据实际调整 */
}
</style>
