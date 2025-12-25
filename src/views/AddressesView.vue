<template>
  <div class="addresses">
    <!-- 页面内自己的标题栏（有返回箭头） -->
    <van-nav-bar title="地址管理" left-arrow @click-left="router.back()" />

    <!-- 地址列表 -->
    <van-empty v-if="!addresses.length" description="暂无地址" />

    <van-cell-group v-else inset>
      <van-cell
        v-for="(addr, index) in addresses"
        :key="index"
        is-link
        @click="setDefault(index)"
      >
        <template #title>
          <div class="title-row">
            <span class="name">{{ addr.name }}</span>
            <van-tag v-if="addr.isDefault" type="primary" size="medium"
              >默认</van-tag
            >
          </div>
        </template>

        <template #label>
          <div class="label">
            <div class="phone">电话：{{ addr.phone }}</div>
            <div class="detail">地址：{{ addr.detail }}</div>
          </div>
        </template>

        <template #right-icon>
          <span class="delete-wrap" @click.stop="removeAddress(index)">
            <van-icon name="delete-o" class="delete"
          /></span>
        </template>
      </van-cell>
    </van-cell-group>

    <div class="footer">
      <van-button type="primary" block @click="openAdd">添加新地址</van-button>
    </div>

    <!-- 新增地址弹层 -->
    <van-popup
      v-model:show="showAdd"
      position="bottom"
      round
      :style="{ height: '70%' }"
    >
      <van-nav-bar
        title="新增地址"
        left-text="取消"
        right-text="保存"
        @click-left="closeAdd"
        @click-right="saveAdd"
      />

      <div class="form">
        <van-field
          v-model="form.name"
          label="收货人"
          placeholder="请输入收货人姓名"
          clearable
        />
        <van-field
          v-model="form.phone"
          label="手机号"
          placeholder="请输入手机号"
          clearable
          type="tel"
        />
        <van-field
          v-model="form.detail"
          label="详细地址"
          placeholder="例如：xx路xx号xx室"
          clearable
          rows="2"
          autosize
          type="textarea"
        />

        <van-cell center title="设为默认地址">
          <template #right-icon>
            <van-switch v-model="form.isDefault" />
          </template>
        </van-cell>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { showToast, showConfirmDialog } from "vant";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const userStore = useUserStore();

// 本地展示用（初始化从 store 取）
const addresses = ref(userStore.currentUserInfo?.addresses || []);

// 如果 store 里地址变化（比如别处修改），同步一下
watch(
  () => userStore.currentUserInfo?.addresses,
  (val) => {
    if (val) addresses.value = val;
  },
  { deep: true }
);

const showAdd = ref(false);
const form = reactive({
  name: "",
  phone: "",
  detail: "",
  isDefault: false,
});

const openAdd = () => {
  form.name = "";
  form.phone = "";
  form.detail = "";
  form.isDefault = addresses.value.length === 0; // 第一个地址默认设为默认
  showAdd.value = true;
};

const closeAdd = () => {
  showAdd.value = false;
};

// 简单校验：你也可以按需求改成更严格
const isValidPhone = (phone) => /^1\d{10}$/.test(phone);

const saveAdd = () => {
  if (!form.name.trim()) return showToast("请填写收货人");
  if (!form.phone.trim()) return showToast("请填写手机号");
  if (!isValidPhone(form.phone.trim())) return showToast("手机号格式不正确");
  if (!form.detail.trim()) return showToast("请填写详细地址");

  const newAddr = {
    name: form.name.trim(),
    phone: form.phone.trim(),
    detail: form.detail.trim(),
    isDefault: !!form.isDefault,
  };

  // 如果设为默认，则把其它全部取消默认
  if (newAddr.isDefault) {
    addresses.value.forEach((a) => (a.isDefault = false));
  }

  // 写入 store（你原来就有 addAddress / updateInfo 逻辑的话沿用即可）
  userStore.addAddress(newAddr);

  // 重新同步展示
  addresses.value = userStore.currentUserInfo.addresses;

  showToast("添加成功");
  showAdd.value = false;
};

const removeAddress = (index) => {
  showConfirmDialog({
    title: "确认删除",
    message: "确定要删除该地址吗？",
    confirmButtonText: "删除",
    cancelButtonText: "取消",
  })
    .then(() => {
      // 1) 删除本地列表
      const list = [...addresses.value];
      const removed = list.splice(index, 1)[0];

      // 2) 如果删的是默认地址，且还有其它地址 -> 自动把第一个设为默认
      if (removed?.isDefault && list.length) {
        list[0].isDefault = true;
      }

      // 3) 写回 store（持久化）
      userStore.updateInfo({ addresses: list });

      // 4) 同步页面显示
      addresses.value = list;

      showToast("删除成功");
    })
    .catch(() => {
      // 用户取消：不做事，但必须 catch，避免 ERROR cancel
    });
};

const setDefault = (index) => {
  addresses.value.forEach((a, i) => (a.isDefault = i === index));
  userStore.updateInfo({ addresses: addresses.value });
  showToast("已设为默认地址");
};
</script>

<style scoped>
.addresses {
  background: #f7f8fa;
  min-height: 100vh;
}
.title-row {
  display: flex;
  gap: 8px;
  align-items: center;
}
.name {
  font-weight: 600;
}
.label {
  margin-top: 4px;
  line-height: 18px;
}
.delete {
  font-size: 18px;
  padding: 6px;
}
.footer {
  padding: 12px;
}
.form {
  padding: 10px 12px 24px;
}
</style>
