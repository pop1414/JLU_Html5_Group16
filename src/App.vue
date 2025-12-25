<template>
  <NavBar />

  <!-- 页面容器：tabbar 显示时给底部留空间 -->
  <div :class="['page', { 'with-tabbar': showTabbar }]">
    <router-view />
  </div>

  <!-- 只在 meta.showTabbar = true 的页面显示 -->
  <van-tabbar v-if="showTabbar" route safe-area-inset-bottom>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import { useUserStore } from "@/stores/user.js";

const route = useRoute();
const userStore = useUserStore();

/**
 * 规则：只有少数“特殊页面”显示 tabbar
 * - 在路由 meta 里写 showTabbar: true 的页面才显示
 * - 嵌套路由时，用 matched 倒序取“离当前页面最近”的 meta 配置（子页优先）
 */
const showTabbar = computed(() => {
  const record = [...route.matched]
    .reverse()
    .find((r) =>
      Object.prototype.hasOwnProperty.call(r.meta || {}, "showTabbar")
    );
  return record?.meta?.showTabbar === true;
});

onMounted(() => {
  userStore.loadFromLocal();
});
</script>

<style scoped>
.page {
  min-height: 100vh;
}

/* tabbar 显示时，给内容留出底部空间（避免被 tabbar 挡住） */
.with-tabbar {
  padding-bottom: 56px; /* vant tabbar 常见高度，略留富余 */
}
</style>
