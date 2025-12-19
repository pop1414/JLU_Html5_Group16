<template>
  <div class="category-page">
    <div class="content">
      <!-- 左侧导航栏 -->
      <van-sidebar v-model="activeKey" class="left-nav">
        <van-sidebar-item
          v-for="(category, index) in categories"
          :key="index"
          :title="category.name"
        />
      </van-sidebar>
      <!-- 右侧子分类 -->
      <div class="right-content">
        <h3 v-if="currentCategory">{{ currentCategory.name }}</h3>
        <!-- 显示当前大类 -->
        <van-grid :column-num="3" :gutter="10">
          <!-- 3列网格 -->
          <van-grid-item
            v-for="sub in currentCategory?.children || []"
            :key="sub.id"
            :icon="sub.img"
            :text="sub.name"
            @click="toSubCategory(sub.id)"
          />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { getCategories } from "@/api/category.js"; // 你的 API

const router = useRouter();
const categories = ref([]);
const activeKey = ref(0); // 默认选中第一个大类
const loading = ref(true);

// 计算当前选中大类
const currentCategory = computed(() => categories.value[activeKey.value] || {});

// 加载数据
onMounted(async () => {
  try {
    categories.value = await getCategories();
  } catch (error) {
    console.error("加载分类失败:", error);
  } finally {
    loading.value = false;
  }
});

// 点击子类跳转（到商品列表页）
const toSubCategory = (id) => {
  router.push(`/products/${id}`); // 跳转到 /products/:categoryId
};
</script>

<style scoped>
.category-page {
  height: 100vh; /* 全屏 */
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  display: flex;
  overflow: hidden;
}
.left-nav {
  width: 100px; /* 左侧宽度 */
  background: #f7f8fa;
  overflow-y: auto;
}
.right-content {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}
h3 {
  font-size: 18px;
  margin: 10px 0;
}
.van-grid-item__icon {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
</style>
