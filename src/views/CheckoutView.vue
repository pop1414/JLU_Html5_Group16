<template>
  <div class="checkout-page">
    <van-nav-bar title="订单确认" left-arrow @click-left="router.back()" />

    <template v-if="!isSubmitted">
      <!-- 地址选择 -->
      <van-cell-group inset>
        <van-cell title="收货地址" is-link @click="selectAddress">
          <template #default>
            <span v-if="selectedAddress">
              {{ selectedAddress.name }}
              <span v-if="selectedAddress.phone"
                >（{{ selectedAddress.phone }}）</span
              >
              ：{{ selectedAddress.detail }}
            </span>
            <span v-else>请选择地址</span>
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

      <!-- ✅ 地址选择弹层 -->
      <van-action-sheet
        v-model:show="showAddressSheet"
        title="选择收货地址"
        :actions="addressActions"
        close-on-click-action
        @select="onSelectAddress"
      />
    </template>

    <van-empty v-else image="success" description="支付成功！订单已提交" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user";
import { showToast, showConfirmDialog } from "vant";

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const userStore = useUserStore();

const orderItems = ref([]);
const selectedAddress = ref(null);
const isSubmitted = ref(false);

// ✅ 地址列表（从用户信息里取）
const addresses = computed(() => userStore.currentUserInfo?.addresses || []);

// ✅ 弹层开关
const showAddressSheet = ref(false);

// ✅ ActionSheet actions
const addressActions = computed(() => {
  const list = addresses.value.map((a, index) => ({
    name: `${a.name}${a.phone ? "  " + a.phone : ""}${
      a.isDefault ? "（默认）" : ""
    }`,
    subname: a.detail,
    index,
  }));

  list.push({
    name: "管理 / 新增地址",
    type: "manage",
    color: "#1989fa",
  });

  return list;
});

// 初始化/回填选中地址：默认地址优先，其次第一个
const initSelectedAddress = () => {
  if (!addresses.value.length) {
    selectedAddress.value = null;
    return;
  }
  const def = addresses.value.find((a) => a.isDefault);
  selectedAddress.value = def || addresses.value[0];
};

onMounted(() => {
  // 订单商品来源：query.items
  const itemsStr = route.query.items;
  if (itemsStr) {
    orderItems.value = JSON.parse(itemsStr);
  }

  initSelectedAddress();

  // ✅ 如果从地址管理页带回 addrIndex，则选中它
  if (route.query.addrIndex != null) {
    const idx = Number(route.query.addrIndex);
    if (!Number.isNaN(idx) && addresses.value[idx]) {
      selectedAddress.value = addresses.value[idx];
    }
  }
});

// ✅ 地址列表变化（新增/删除/设默认）时，保证选中地址有效
watch(
  () => addresses.value,
  () => {
    if (!addresses.value.length) {
      selectedAddress.value = null;
      return;
    }
    // 选中的地址被删了/不存在了 -> 重新初始化
    const stillExists = selectedAddress.value
      ? addresses.value.some(
          (a) =>
            a.detail === selectedAddress.value.detail &&
            a.phone === selectedAddress.value.phone
        )
      : false;
    if (!stillExists) initSelectedAddress();
  },
  { deep: true }
);

// ✅ 监听 addrIndex（返回 checkout 时变化）
watch(
  () => route.query.addrIndex,
  (v) => {
    if (v == null) return;
    const idx = Number(v);
    if (!Number.isNaN(idx) && addresses.value[idx]) {
      selectedAddress.value = addresses.value[idx];
    }
  }
);

// 计算总价
const totalPrice = computed(() => {
  return orderItems.value.reduce(
    (sum, item) => sum + item.sku.price * item.quantity,
    0
  );
});

// 格式化规格（同 cart）
const formatSpecs = (attributes) => {
  return (attributes || [])
    .map((a) => `${a.attrName || "规格"}: ${a.valueName || ""}`)
    .join(" ");
};

// ✅ 点击“收货地址”
const selectAddress = () => {
  // 没有地址：弹窗去地址管理
  if (!addresses.value.length) {
    showConfirmDialog({
      title: "暂无收货地址",
      message: "请先添加收货地址后再下单。",
      confirmButtonText: "去地址管理",
      cancelButtonText: "取消",
    })
      .then(() => {
        router.push({
          name: "addresses",
          query: { mode: "select", redirect: route.fullPath },
        });
      })
      .catch(() => {}); // 必须 catch，避免 ERROR cancel
    return;
  }

  // 有地址：弹出选择列表
  showAddressSheet.value = true;
};

// ✅ 选择 ActionSheet 项
const onSelectAddress = (action) => {
  if (action.type === "manage") {
    router.push({
      name: "addresses",
      query: { mode: "select", redirect: route.fullPath },
    });
    return;
  }
  selectedAddress.value = addresses.value[action.index];
  showToast("已选择收货地址");
};

// 提交订单（模拟支付）
const submitOrder = () => {
  // ✅ 没选地址：给出可跳转地址管理的确认框
  if (!selectedAddress.value) {
    showConfirmDialog({
      title: "未选择地址",
      message: "请先选择/添加收货地址后再提交订单。",
      confirmButtonText: "去地址管理",
      cancelButtonText: "取消",
    })
      .then(() => {
        router.push({
          name: "addresses",
          query: { mode: "select", redirect: route.fullPath },
        });
      })
      .catch(() => {});
    return;
  }

  // 生成新订单
  const newOrder = {
    id: Date.now(),
    items: orderItems.value,
    totalPrice: totalPrice.value,
    address: selectedAddress.value,
    status: "已完成",
    createTime: new Date().toLocaleString(),
  };

  // 添加到用户订单列表
  const currentOrders = userStore.currentUserInfo?.orders || [];
  //userStore.updateInfo({ orders: [...currentOrders, newOrder] });

  userStore.updateProfile({
    info: { orders: [...currentOrders, newOrder] }, // 修改为 updateProfile，并用 info 包裹
  });
  showToast("支付成功！");
  isSubmitted.value = true;

  // 如果来自购物车结算，清空购物车
  if (route.query.fromCart) cartStore.clearCart(userStore.currentUserId);

  // 延迟跳转到订单列表
  setTimeout(() => {
    router.push({ name: "orders" });
  }, 1500);
};
</script>

<style scoped>
.checkout-page {
  background: #f7f8fa;
  min-height: 100vh;
  padding-bottom: 56px; /* submit-bar 占位（可按实际微调） */
}
.total {
  color: #ee0a24;
  font-weight: bold;
}
</style>
