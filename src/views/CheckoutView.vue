<template>
  <div class="checkout-page">
    <van-nav-bar title="订单确认" left-arrow @click-left="router.back()" />

    <!-- 地址选择 -->
    <van-cell-group inset>
      <van-cell title="收货地址" is-link @click="selectAddress">
        <template #default>
          {{
            selectedAddress
              ? `${selectedAddress.name}: ${selectedAddress.detail}`
              : "请选择地址"
          }}
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 订单商品列表 -->
    <van-cell-group inset>
      <van-cell
        v-for="item in orderItems"
        :key="`${item.product.id}-${item.sku.skuId}`"
      >
        <template #icon>
          <van-image :src="item.sku.img" width="60" height="60" />
        </template>
        <template #title>
          {{ item.product.name }} - {{ formatSpecs(item.sku.attributes) }}
        </template>
        <template #label>
          ¥{{ item.sku.price }} x {{ item.quantity }}
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 总价 -->
    <van-cell-group inset>
      <van-cell title="商品总额" :value="`¥${totalPrice.toFixed(2)}`" />
      <van-cell title="运费" value="¥0.00" />
      <!-- mock -->
      <van-cell
        title="实付款"
        :value="`¥${totalPrice.toFixed(2)}`"
        class="total"
      />
    </van-cell-group>

    <!-- 底部支付栏 -->
    <van-submit-bar
      :price="totalPrice * 100"
      button-text="提交订单"
      @submit="submitOrder"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user";
import { showToast, showDialog } from "vant";

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const userStore = useUserStore();

const orderItems = ref([]);
const selectedAddress = ref(null);

onMounted(() => {
  const itemsStr = route.query.items;
  if (itemsStr) {
    orderItems.value = JSON.parse(itemsStr);
  }
  // 默认选第一个地址
  if (userStore.currentUserInfo?.addresses?.length) {
    // 改用currentUserInfo（getters）
    selectedAddress.value = userStore.currentUserInfo.addresses[0];
  }
});

// 计算总价
const totalPrice = computed(() => {
  return orderItems.value.reduce(
    (sum, item) => sum + item.sku.price * item.quantity,
    0
  );
});

// 格式化规格（同cart）
const formatSpecs = (attributes) => {
  return attributes
    .map((a) => `${a.attrName || "规格"}: ${a.valueName || ""}`)
    .join(" ");
};

// 选地址（mock弹窗）
const selectAddress = () => {
  showDialog({
    title: "选择地址",
    message: "模拟地址列表：默认地址", // 未来用van-action-sheet
  });
};

// 提交订单（模拟支付）
const submitOrder = () => {
  if (!selectedAddress.value) {
    showToast("请选择地址");
    return;
  }
  showToast("支付成功！");
  if (route.query.fromCart) cartStore.clearCart(userStore.currentUserId); // 新增userId
  router.push("/orders"); // 跳订单列表（后续做）
};
</script>

<style scoped>
.checkout-page {
  background: #f7f8fa;
  min-height: 100vh;
  padding-bottom: 50px;
}
.total {
  color: #ee0a24;
  font-weight: bold;
}
</style>
