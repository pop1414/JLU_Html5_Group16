import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user.js"; // 导入userStore

export const useCartStore = defineStore("cart", {
  state: () => ({}), // 移除items，使用动态getters
  actions: {
    // 添加商品（传入userId）
    addItem(product, sku, quantity = 1, userId) {
      const userStore = useUserStore();
      const user = userStore.users.find((u) => u.id === userId);
      if (!user) throw new Error("用户不存在");
      const items = user.info.cartItems || [];
      const existing = items.find(
        (item) => item.productId === product.id && item.skuId === sku.skuId
      );
      if (existing) {
        existing.quantity += quantity;
        if (existing.quantity > sku.stock) existing.quantity = sku.stock;
      } else {
        items.push({
          productId: product.id,
          skuId: sku.skuId,
          quantity,
          product,
          sku,
        });
      }
      user.info.cartItems = items;
      userStore.saveToLocal(); // 统一保存到userStore
    },
    // 移除商品
    removeItem(productId, skuId, userId) {
      const userStore = useUserStore();
      const user = userStore.users.find((u) => u.id === userId);
      if (!user) return;
      user.info.cartItems = (user.info.cartItems || []).filter(
        (item) => !(item.productId === productId && item.skuId === skuId)
      );
      userStore.saveToLocal();
    },
    // 更新数量
    updateQuantity(productId, skuId, quantity, userId) {
      const userStore = useUserStore();
      const user = userStore.users.find((u) => u.id === userId);
      if (!user) return;
      const item = (user.info.cartItems || []).find(
        (item) => item.productId === productId && item.skuId === skuId
      );
      if (item) {
        item.quantity = Math.max(1, Math.min(quantity, item.sku.stock));
        userStore.saveToLocal();
      }
    },
    // 清空购物车
    clearCart(userId) {
      const userStore = useUserStore();
      const user = userStore.users.find((u) => u.id === userId);
      if (user) {
        user.info.cartItems = [];
        userStore.saveToLocal();
      }
    },
    // 加载：无需单独load，由userStore.loadFromLocal()处理
  },
  getters: {
    // 当前用户items
    items: () => {
      const userStore = useUserStore();
      if (!userStore.currentUserId) return [];
      const user = userStore.users.find(
        (u) => u.id === userStore.currentUserId
      );
      return user ? user.info.cartItems || [] : [];
    },
    // 总件数
    totalCount: (state) => {
      const items = state.items; // 使用getters chaining
      return items.reduce((sum, item) => sum + item.quantity, 0);
    },
    // 总价
    totalPrice: (state) => {
      const items = state.items;
      return items.reduce(
        (sum, item) => sum + item.sku.price * item.quantity,
        0
      );
    },
    // 是否为空
    isEmpty: (state) => state.items.length === 0,
  },
});
