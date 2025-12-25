import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useMainStore } from "@/stores/index";
import { useUserStore } from "@/stores/user.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "首页", showTabbar: true },
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../views/CategoryView.vue"),
    meta: { title: "分类", showTabbar: true },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
    meta: { title: "购物车", showTabbar: true },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/SearchView.vue"),
    meta: { title: "搜索", showNavBar: false },
  },
  {
    path: "/products",
    name: "productList",
    component: () => import("../views/ProductListView.vue"),
    meta: { title: "商品列表" },
  },
  {
    path: "/product/:id",
    name: "productDetail",
    component: () => import("../views/ProductDetailView.vue"),
    meta: { title: "商品详情" },
  },

  // 结算页需要登录
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/CheckoutView.vue"),
    meta: { title: "结算", requiresAuth: true },
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta: { title: "登录", showNavBar: false },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
    meta: { title: "注册", showNavBar: false },
  },
  // ✅ user 作为父路由，子页面都挂在 children 下
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserView.vue"),
    meta: { title: "我的", requiresAuth: true, showTabbar: true }, // ✅ 父级加 requiresAuth：默认所有子页面都要登录
    children: [
      // 默认子路由：访问 /user 时显示这个（比如个人中心首页）
      {
        path: "",
        name: "userHome",
        component: () => import("../views/UserHomeView.vue"),
        meta: { title: "个人中心" },
      },

      {
        path: "edit-profile",
        name: "editProfile",
        component: () => import("../views/EditProfileView.vue"),
        meta: { title: "修改资料", showTabbar: false },
      },
      {
        path: "addresses",
        name: "addresses",
        component: () => import("../views/AddressesView.vue"),
        meta: { title: "地址管理", showTabbar: false, showNavBar: false },
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("../views/OrdersView.vue"),
        meta: { title: "我的订单", showTabbar: false, showNavBar: false },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// ✅ 只写一次 next：用 matched 判断（嵌套路由会把父子都放进 matched）
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  const requiresAuth = to.matched.some((record) => record.meta?.requiresAuth);
  if (requiresAuth && !userStore.isLoggedIn) {
    // 登录后跳回原目标页
    return next({ name: "login", query: { redirect: to.fullPath } });
  }

  next();
});

// ✅ 标题建议放 afterEach，避免和 next 纠缠
router.afterEach((to) => {
  const store = useMainStore();

  // 从 matched 里找最后一个有 title 的（子路由优先）
  const nearestWithTitle = [...to.matched].reverse().find((r) => r.meta?.title);
  const title = nearestWithTitle?.meta?.title || "电商平台";

  store.setPageTitle(title);
  document.title = title;
});

export default router;
