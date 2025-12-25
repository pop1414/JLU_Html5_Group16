import { defineStore } from "pinia";
import CryptoJS from "crypto-js"; // 导入用于hash

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    currentUserId: null, // 当前用户ID
    users: [], // 所有用户数据 [{id, username, phone, passwordHash, info: {name, email, addresses: [], orders: [], cartItems: [], favorites: []}}]
  }),
  actions: {
    // 注册新用户（添加 phone 参数，必填）
    register(username, password, phone, email = "") {
      if (
        this.users.some((u) => u.username === username || u.phone === phone)
      ) {
        throw new Error("用户名或手机号已存在");
      }
      const id = this.users.length + 1; // 自增ID，实际用uuid
      const passwordHash = CryptoJS.SHA256(password).toString();
      const newUser = {
        id,
        username,
        phone, // 新增 phone 字段
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
      this.login(username, password); // 使用 username 登录，或根据需要改用 phone
    },
    // 登录（identifier 可以是 username 或 phone）
    login(identifier, password) {
      const user = this.users.find(
        (u) => u.username === identifier || u.phone === identifier
      );
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
    // 更新个人信息（扩展支持 phone）
    updateProfile(newProfile) {
      if (!this.currentUserId) return;
      const user = this.users.find((u) => u.id === this.currentUserId);
      if (user) {
        // 如果有新 username，检查唯一性（排除自己）
        if (newProfile.username && newProfile.username !== user.username) {
          if (
            this.users.some(
              (u) =>
                u.username === newProfile.username &&
                u.id !== this.currentUserId
            )
          ) {
            throw new Error("用户名已存在");
          }
          user.username = newProfile.username;
        }
        // 如果有新 phone，检查唯一性（排除自己）
        if (newProfile.phone && newProfile.phone !== user.phone) {
          if (
            this.users.some(
              (u) => u.phone === newProfile.phone && u.id !== this.currentUserId
            )
          ) {
            throw new Error("手机号已存在");
          }
          user.phone = newProfile.phone;
        }
        // 更新 info
        user.info = { ...user.info, ...newProfile.info };
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
    currentUser: (state) => {
      if (!state.currentUserId) return null;
      return state.users.find((u) => u.id === state.currentUserId) || null;
    },
    currentUserInfo: (state) => {
      return state.currentUser?.info || null;
    },
  },
});
