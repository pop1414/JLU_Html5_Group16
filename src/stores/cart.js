import { defineStore } from "pinia";
//import { ref } from "vue"; // 如果需要额外ref

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [], // [{ productId, skuId, quantity, product: {name, price, img, ...}, sku: {attributes, ...} }]
  }),
  actions: {
    // 添加商品（从详情页调用）
    addItem(product, sku, quantity = 1) {
      const existing = this.items.find(
        (item) => item.productId === product.id && item.skuId === sku.skuId
      );
      if (existing) {
        existing.quantity += quantity;
        if (existing.quantity > sku.stock) existing.quantity = sku.stock; // 防超库存
      } else {
        this.items.push({
          productId: product.id,
          skuId: sku.skuId,
          quantity,
          product, // 存快照，防数据变
          sku, // 存选中SKU
        });
      }
      this.saveToLocal();
    },
    // 移除商品
    removeItem(productId, skuId) {
      this.items = this.items.filter(
        (item) => !(item.productId === productId && item.skuId === skuId)
      );
      this.saveToLocal();
    },
    // 更新数量
    updateQuantity(productId, skuId, quantity) {
      const item = this.items.find(
        (item) => item.productId === productId && item.skuId === skuId
      );
      if (item) {
        item.quantity = Math.max(1, Math.min(quantity, item.sku.stock)); // 1~库存间
        this.saveToLocal();
      }
    },
    // 清空购物车（结算后用）
    clearCart() {
      this.items = [];
      this.saveToLocal();
    },
    // 持久化
    saveToLocal() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
    // 初始化从local加载
    loadFromLocal() {
      const saved = localStorage.getItem("cart");
      if (saved) this.items = JSON.parse(saved);
    },
  },
  getters: {
    // 总件数
    totalCount: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
    // 总价
    totalPrice: (state) =>
      state.items.reduce(
        (sum, item) => sum + item.sku.price * item.quantity,
        0
      ),
    // 是否为空
    isEmpty: (state) => state.items.length === 0,
  },
});
