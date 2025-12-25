<template>
  <div class="checkout-page">
    <van-nav-bar title="订单确认" left-arrow @click-left="router.back()" />

    <template v-if="!isSubmitted">
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
    </template>

    <van-empty v-else image="success" description="支付成功！订单已提交" />
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
const isSubmitted = ref(false); // 新增：支付完成状态

onMounted(() => {
  const itemsStr = route.query.items;
  if (itemsStr) {
    orderItems.value = JSON.parse(itemsStr);
  }
  // 默认选第一个地址
  if (userStore.currentUserInfo?.addresses?.length) {
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

  // 生成新订单
  const newOrder = {
    id: Date.now(), // mock ID
    items: orderItems.value,
    totalPrice: totalPrice.value,
    address: selectedAddress.value,
    status: "已完成", // 或'待发货'等
    createTime: new Date().toLocaleString(),
  };

  // 添加到用户订单列表
  const currentOrders = userStore.currentUserInfo?.orders || [];
  userStore.updateInfo({ orders: [...currentOrders, newOrder] });

  showToast("支付成功！");
  isSubmitted.value = true; // 设置完成状态，更新UI
  if (route.query.fromCart) cartStore.clearCart(userStore.currentUserId); // 清车

  // 延迟跳转到订单列表，允许用户看到成功UI
  setTimeout(() => {
    router.push({ name: "orders" });
  }, 1500); // 1.5秒后跳转
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
