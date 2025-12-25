<template>
  <div class="login-page">
    <van-nav-bar title="登录" left-arrow @click-left="router.back()" />
    <van-form @submit="onLogin">
      <van-field
        v-model="identifier"
        label="用户名/手机号"
        placeholder="请输入用户名或手机号"
        required
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-button type="primary" block native-type="submit">登录</van-button>
      <van-button type="default" block @click="goRegister"
        >注册新账户</van-button
      >
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { showToast } from "vant";

const identifier = ref(""); // 修改为 identifier，支持用户名或手机号
const password = ref("");
const router = useRouter();
const userStore = useUserStore();

const onLogin = async () => {
  try {
    userStore.login(identifier.value, password.value);
    showToast("登录成功");
    router.back(); // 或push('/user')
  } catch (err) {
    showToast(err.message);
  }
};

const goRegister = () => {
  router.push("/register");
};
</script>

<style scoped>
.login-page {
  padding: 20px;
  background: #f7f8fa;
  min-height: 100vh;
}
</style>
