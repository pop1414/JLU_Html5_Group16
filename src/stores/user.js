import { defineStore } from "pinia";
import CryptoJS from "crypto-js"; // 导入用于hash

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    currentUserId: null, // 当前用户ID
    users: [], // 所有用户数据 [{id, username, passwordHash, info: {name, addresses: [], orders: [], cartItems: [], favorites: []}}]
  }),
  actions: {
    // 注册新用户
    register(username, password, email = "") {
      if (this.users.some((u) => u.username === username)) {
        throw new Error("用户名已存在");
      }
      const id = this.users.length + 1; // 自增ID，实际用uuid
      const passwordHash = CryptoJS.SHA256(password).toString();
      const newUser = {
        id,
        username,
        passwordHash,
        info: {
          name: username, // 默认昵称
          email,
          addresses: [],
          orders: [],
          cartItems: [], // 用户专属购物车
          favorites: [], // 收藏
        },
      };
      this.users.push(newUser);
      this.saveToLocal();
      // 自动登录
      this.login(username, password);
    },
    // 登录
    login(username, password) {
      const user = this.users.find((u) => u.username === username);
      if (!user) throw new Error("用户不存在");
      const passwordHash = CryptoJS.SHA256(password).toString();
      if (user.passwordHash !== passwordHash) throw new Error("密码错误");
      this.isLoggedIn = true;
      this.currentUserId = user.id;
      this.saveToLocal();
      // 同步购物车等（调用cartStore.loadUserCart(this.currentUserId)）
    },
    // 注销
    logout() {
      this.isLoggedIn = false;
      this.currentUserId = null;
      this.saveToLocal();
    },
    // 更新个人信息
    updateInfo(newInfo) {
      if (!this.currentUserId) return;
      const user = this.users.find((u) => u.id === this.currentUserId);
      if (user) {
        user.info = { ...user.info, ...newInfo };
        this.saveToLocal();
      }
    },
    // 添加地址（示例扩展）
    addAddress(address) {
      if (!this.currentUserId) return;
      const user = this.users.find((u) => u.id === this.currentUserId);
      if (user) {
        user.info.addresses.push(address);
        this.saveToLocal();
      }
    },
    // 持久化
    saveToLocal() {
      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem(
        "currentUserId",
        this.currentUserId ? this.currentUserId.toString() : ""
      );
      localStorage.setItem("isLoggedIn", this.isLoggedIn.toString());
    },
    loadFromLocal() {
      const savedUsers = localStorage.getItem("users");
      if (savedUsers) this.users = JSON.parse(savedUsers);
      this.currentUserId =
        parseInt(localStorage.getItem("currentUserId") || "") || null;
      this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    },
  },
  getters: {
    currentUserInfo: (state) => {
      if (!state.currentUserId) return null;
      return (
        state.users.find((u) => u.id === state.currentUserId)?.info || null
      );
    },
  },
});
