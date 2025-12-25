<template>
  <div class="user-page">
    <!-- <van-nav-bar title="我的" /> -->
    <van-cell-group v-if="userStore.isLoggedIn">
      <van-cell title="昵称" :value="userInfo.name" is-link @click="goEdit" />
      <van-cell title="邮箱" :value="userInfo.email" />
      <van-cell title="地址管理" is-link @click="goAddresses" />
      <van-cell title="我的订单" is-link @click="goOrders" />
      <van-cell title="收藏" is-link @click="goFavorites" />
      <van-button type="danger" block @click="logout">退出登录</van-button>
    </van-cell-group>
    <van-empty v-else description="请登录">
      <van-button type="primary" @click="goLogin">去登录</van-button>
    </van-empty>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { showConfirmDialog, showToast } from "vant";

const router = useRouter();
const userStore = useUserStore();
const userInfo = userStore.currentUserInfo;

const goLogin = () => router.push("/login");
const goEdit = () => router.push({ name: "editProfile" });
// const goAddresses = () => router.push("/addresses");
// const goOrders = () => router.push("/orders");
// const goFavorites = () => router.push("/favorites");

const goAddresses = () => router.push({ name: "addresses" });
const goOrders = () => router.push({ name: "orders" });
const goFavorites = () => router.push({ name: "favorites" });

const logout = () => {
  showConfirmDialog({ title: "确认退出？" })
    .then(() => {
      userStore.logout();
      showToast("已退出");
      router.push("/");
    })
    .catch(() => {
      // 如果需要，可以在这里添加逻辑，但留空即可处理“取消”
    });
};
</script>

<style scoped>
.user-page {
  background: #f7f8fa;
  min-height: 100vh;
}
</style>
