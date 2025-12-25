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
import { useCartStore } from "@/stores/cart.js";
import { useUserStore } from "@/stores/user.js"; // 引入 userStore
const cartStore = useCartStore();
const userStore = useUserStore();
onMounted(() => {
  cartStore.loadFromLocal();
  userStore.loadFromLocal();
});

const active = ref(0); // 默认选中第一个（首页），可选：根据路由动态设置
</script>
