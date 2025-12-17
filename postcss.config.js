// postcss.config.js 最终正确配置
module.exports = {
  plugins: {
    // 若项目有 autoprefixer，需保留（Vue CLI 项目默认有）
    autoprefixer: {},
    "postcss-px-to-viewport-8-plugin": {
      viewportWidth: 375, // 设计稿宽度（iPhone 6/7/8 基准）
      unitPrecision: 5, // px 转 vw 的小数精度
      viewportUnit: "vw", // 转换后的单位（选 vw 适配更友好）
      selectorBlackList: [], // 不需要转换的选择器（比如 .ignore-*）
      minPixelValue: 1, // 小于 1px 不转换
      mediaQuery: false, // 媒体查询里的 px 不转换
      exclude: /(node_modules)/, // 关键：排除 node_modules（避免 Vant 组件被错误转换）
      include: /src/, // 关键：只处理 src 目录下的代码（精准生效）
    },
  },
};
