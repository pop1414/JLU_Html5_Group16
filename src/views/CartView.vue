<template>
  <div class="cart-page">
    <van-nav-bar title="购物车" left-arrow @click-left="router.back()" />

    <van-list v-if="!cartStore.isEmpty">
      <van-cell-group
        v-for="item in cartStore.items"
        :key="`${item.productId}-${item.skuId}`"
        inset
      >
        <van-cell>
          <template #icon>
            <van-image
              :src="item.sku.img || item.product.mainImg"
              width="80"
              height="80"
              fit="cover"
            />
          </template>
          <template #title>
            {{ item.product.name }}
            <p class="specs">{{ formatSpecs(item.sku.attributes) }}</p>
          </template>
          <template #label>
            <p class="price">¥{{ item.sku.price }} x {{ item.quantity }}</p>
            <p>小计: ¥{{ (item.sku.price * item.quantity).toFixed(2) }}</p>
          </template>
          <template #right-icon>
            <van-icon name="delete-o" @click="removeItem(item)" />
          </template>
        </van-cell>
        <van-cell>
          <van-stepper
            v-model="item.quantity"
            integer
            min="1"
            :max="item.sku.stock"
            @change="updateQuantity(item)"
          />
        </van-cell>
      </van-cell-group>
    </van-list>

    <van-empty v-if="cartStore.isEmpty" description="购物车空空如也" />

    <!-- 底部结算栏 -->
    <van-submit-bar
      v-if="!cartStore.isEmpty"
      :price="cartStore.totalPrice * 100"
      :label="`共${cartStore.totalCount}件`"
      button-text="去结算"
      @submit="goCheckout"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user"; // 新增导入
import { showToast, showConfirmDialog } from "vant";

const router = useRouter();
const cartStore = useCartStore();
const userStore = useUserStore(); // 新增实例化

// 格式化规格显示（如"颜色:黑色 尺码:M"）
const formatSpecs = (attributes) => {
  return attributes
    .map((a) => `${a.attrName || "规格"}: ${a.valueName || ""}`)
    .join(" ");
};

// 移除确认
const removeItem = (item) => {
  if (!userStore.currentUserId) {
    showToast("请先登录");
    return;
  }
  showConfirmDialog({
    title: "确认删除？",
    message: "删除后不可恢复",
  }).then(() => {
    cartStore.removeItem(item.productId, item.skuId, userStore.currentUserId); // 新增userId
    showToast("已删除");
  });
};

// 更新数量
const updateQuantity = (item) => {
  if (!userStore.currentUserId) {
    showToast("请先登录");
    return;
  }
  cartStore.updateQuantity(
    item.productId,
    item.skuId,
    item.quantity,
    userStore.currentUserId
  ); // 新增userId
};

// 去结算（占位，后续实现订单页）
const goCheckout = () => {
  if (cartStore.totalCount === 0) return;
  if (!userStore.isLoggedIn) {
    showConfirmDialog({
      title: "未登录",
      message: "请先登录以继续结算",
    }).then(() => {
      router.push("/login");
    });
    return;
  }
  // 传cart items到结算
  router.push({
    path: "/checkout",
    query: { items: JSON.stringify(cartStore.items), fromCart: true },
  });
};
</script>

<style scoped>
.cart-page {
  background: #f7f8fa;
  min-height: 100vh;
  padding-bottom: 50px;
}
.specs {
  font-size: 12px;
  color: #999;
}
.price {
  color: #ee0a24;
}
</style>
