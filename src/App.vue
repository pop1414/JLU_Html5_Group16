<template>
  <NavBar />
  <router-view />
  <van-tabbar v-model="active">
    <!-- 底部 Tab -->
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    <!-- 更多，如果需要添加 -->
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user.js"; // 修正为user.js（假设文件名）

const userStore = useUserStore();
onMounted(() => {
  userStore.loadFromLocal(); // 只调用userStore加载（包括cart数据）
  // 移除: cartStore.loadFromLocal();  // 已删除，因为cart.js无此方法
});

const active = ref(0); // 默认选中第一个（首页），可选：根据路由动态设置
</script>
