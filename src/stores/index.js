import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    pageTitle: "电商平台", // 默认标题
    // 其他状态
  }),
  actions: {
    setPageTitle(newTitle) {
      this.pageTitle = newTitle;
    },
  },
});

// 在组件中使用：如在 Home.vue 的 <script setup> 中 import { useMainStore } from '@/stores/index'; const store = useMainStore(); store.addToCart({...});
// 这样，你就用上了 Pinia，而不依赖 Vuex。Pinia 更简单，API 更友好，尤其适合这个电商项目（管理购物车、用户状态等）。
