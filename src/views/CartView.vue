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
import { showToast, showConfirmDialog } from "vant";

const router = useRouter();
const cartStore = useCartStore();

// 格式化规格显示（如"颜色:黑色 尺码:M"）
const formatSpecs = (attributes) => {
  return attributes
    .map((a) => `${a.attrName || "规格"}: ${a.valueName || ""}`)
    .join(" ");
};

// 移除确认
const removeItem = (item) => {
  showConfirmDialog({
    title: "确认删除？",
    message: "删除后不可恢复",
  }).then(() => {
    cartStore.removeItem(item.productId, item.skuId);
    showToast("已删除");
  });
};

// 更新数量
const updateQuantity = (item) => {
  cartStore.updateQuantity(item.productId, item.skuId, item.quantity);
};

// 去结算（占位，后续实现订单页）
const goCheckout = () => {
  if (cartStore.totalCount === 0) return;
  showToast("跳转到结算页");
  // router.push('/checkout');  // 后续添加路由
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
