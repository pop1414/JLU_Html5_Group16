<template>
  <div class="edit-profile">
    <van-nav-bar title="编辑个人信息" left-arrow @click-left="router.back()" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.name"
        label="昵称"
        placeholder="请输入昵称"
        required
      />
      <van-field
        v-model="form.email"
        label="邮箱"
        placeholder="请输入邮箱"
        type="email"
      />
      <van-button type="primary" block native-type="submit">保存</van-button>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { showToast } from "vant";

const router = useRouter();
const userStore = useUserStore();
const form = ref({
  name: userStore.currentUserInfo?.name || "",
  email: userStore.currentUserInfo?.email || "",
});

const onSubmit = () => {
  userStore.updateInfo(form.value);
  showToast("保存成功");
  router.back();
};
</script>

<style scoped>
.edit-profile {
  padding: 20px;
  background: #f7f8fa;
  min-height: 100vh;
}
</style>
