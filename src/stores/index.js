import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    cart: [], // 示例：购物车状态
  }),
  actions: {
    addToCart(item) {
      this.cart.push(item);
    },
  },
  getters: {
    cartTotal: (state) => state.cart.length,
  },
});

// 在组件中使用：如在 Home.vue 的 <script setup> 中 import { useMainStore } from '@/stores/index'; const store = useMainStore(); store.addToCart({...});
// 这样，你就用上了 Pinia，而不依赖 Vuex。Pinia 更简单，API 更友好，尤其适合这个电商项目（管理购物车、用户状态等）。
