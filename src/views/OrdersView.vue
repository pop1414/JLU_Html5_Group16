<template>
  <div class="orders">
    <van-nav-bar title="我的订单" left-arrow @click-left="router.back()" />
    <van-tabs v-model:active="activeTab">
      <van-tab title="全部" />
      <van-tab title="待付款" />
      <van-tab title="已完成" />
    </van-tabs>
    <van-list v-if="filteredOrders.length">
      <van-cell-group v-for="order in filteredOrders" :key="order.id" inset>
        <van-cell
          :title="`订单号: ${order.id}`"
          :label="`总价: ¥${order.totalPrice}`"
        />
        <van-cell :value="order.status" />
      </van-cell-group>
    </van-list>
    <van-empty v-else description="暂无订单" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const userStore = useUserStore();
const orders = ref(userStore.currentUserInfo?.orders || []); // mock: [{id:1, totalPrice:100, status:'待付款'}]
const activeTab = ref(0);

const filteredOrders = computed(() => {
  const statusMap = ["全部", "待付款", "已完成"];
  const filter = statusMap[activeTab.value];
  return filter === "全部"
    ? orders.value
    : orders.value.filter((o) => o.status === filter);
});
</script>

<style scoped>
.orders {
  background: #f7f8fa;
  min-height: 100vh;
}
</style>
