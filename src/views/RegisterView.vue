<template>
  <div class="register-page">
    <van-nav-bar title="注册" left-arrow @click-left="router.back()" />
    <van-form @submit="onRegister">
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        required
      />
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        required
      />
      <!-- 新增手机号字段 -->
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-field v-model="email" label="邮箱" placeholder="请输入邮箱" />
      <van-button type="primary" block native-type="submit">注册</van-button>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { showToast } from "vant";

const username = ref("");
const phone = ref(""); // 新增 phone
const password = ref("");
const email = ref("");
const router = useRouter();
const userStore = useUserStore();

const onRegister = async () => {
  try {
    userStore.register(
      username.value,
      password.value,
      phone.value,
      email.value
    );
    showToast("注册成功，已自动登录");
    router.push("/user");
  } catch (err) {
    showToast(err.message);
  }
};
</script>

<style scoped>
.register-page {
  padding: 20px;
  background: #f7f8fa;
  min-height: 100vh;
}
</style>
