const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0", // 监听所有网卡
    port: 5173, // 想用别的端口也可改
  },
});
