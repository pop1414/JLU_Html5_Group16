import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useMainStore } from "@/stores/index"; // 注意：路径需匹配你的仓库实际存放位置

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../views/CategoryView.vue"),
  }, // 懒加载
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/SearchView.vue"),
  },
  {
    path: "/products",
    name: "productList",
    component: () => import("../views/ProductListView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useMainStore(); // 注意在路由外导入 Pinia
  let title = "电商平台"; // 默认
  if (to.path === "/") title = "首页";
  if (to.path === "/category") title = "分类";
  if (to.path === "/cart") title = "购物车";
  if (to.path === "/user") title = "我的";
  // 添加更多页面
  store.setPageTitle(title);
  next();
});

export default router;
