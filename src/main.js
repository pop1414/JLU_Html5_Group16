import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import vant from "vant";
import "vant/lib/index.css"; // 引入 Vant 样式

createApp(App).use(router).use(createPinia()).use(vant).mount("#app");
