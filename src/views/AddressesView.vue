<template>
  <div class="addresses">
    <van-nav-bar title="地址管理" left-arrow @click-left="router.back()" />
    <van-list v-if="addresses.length">
      <van-cell-group v-for="(addr, index) in addresses" :key="index" inset>
        <van-cell :title="addr.name" :label="addr.detail + ' ' + addr.phone">
          <template #right-icon>
            <van-icon name="delete-o" @click="removeAddress(index)" />
          </template>
        </van-cell>
        <van-button
          v-if="!addr.isDefault"
          size="small"
          @click="setDefault(index)"
          >设为默认</van-button
        >
      </van-cell-group>
    </van-list>
    <van-empty v-else description="暂无地址" />
    <van-button type="primary" block @click="addAddress">添加新地址</van-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { showToast, showDialog, showConfirmDialog } from "vant";

const router = useRouter();
const userStore = useUserStore();
const addresses = ref(userStore.currentUserInfo?.addresses || []); // ref同步

const addAddress = () => {
  showDialog({
    title: "添加地址",
    showCancelButton: true,
    confirmButtonText: "保存",
    message: "模拟输入：名称、详情、电话", // 未来用van-form弹窗
  })
    .then(() => {
      const newAddr = {
        name: "新地址",
        detail: "xx路",
        phone: "123456",
        isDefault: false,
      };
      userStore.addAddress(newAddr);
      addresses.value = userStore.currentUserInfo.addresses;
      showToast("添加成功");
    })
    .catch(() => {});
};

const removeAddress = (index) => {
  showConfirmDialog({ title: "确认删除？" })
    .then(() => {
      addresses.value.splice(index, 1);
      userStore.updateInfo({ addresses: addresses.value });
      showToast("删除成功");
    })
    .catch(() => {});
};

const setDefault = (index) => {
  addresses.value.forEach((a, i) => (a.isDefault = i === index));
  userStore.updateInfo({ addresses: addresses.value });
  showToast("设置成功");
};
</script>

<style scoped>
.addresses {
  background: #f7f8fa;
  min-height: 100vh;
  padding: 10px;
}
</style>
