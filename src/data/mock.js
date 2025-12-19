export const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 7999,
    img: require("@/assets/cate1.jpg"), // 图片链接
    description: "苹果公司最新款iPhone，强大性能与完美设计。",
    specs: [
      "屏幕: 6.1寸 OLED",
      "电池: 3125mAh",
      "处理器: A16 Bionic",
      "摄像头: 4800万像素",
    ],
  },
  {
    id: 2,
    name: "MacBook Pro 16",
    price: 15999,
    img: require("@/assets/cate2.jpg"), // 图片链接
    description: "高性能工作站，适合开发者和创作者。",
    specs: [
      "屏幕: 16寸 Retina",
      "处理器: M1 Pro",
      "内存: 32GB",
      "存储: 1TB SSD",
    ],
  },
  {
    id: 3,
    name: "NVIDIA RTX 3080",
    price: 6500,
    img: require("@/assets/cate3.jpg"), // 图片链接
    description: "超高性能显卡，适合游戏和创作工作。",
    specs: [
      "显存: 10GB GDDR6X",
      "核心频率: 1440 MHz",
      "光追支持: 是",
      "推荐系统: Windows 10",
    ],
  },
  {
    id: 4,
    name: "Samsung Galaxy S22",
    price: 4999,
    img: require("@/assets/cate4.jpg"), // 图片链接
    description: "三星旗舰智能手机，出色的屏幕和摄像头。",
    specs: [
      "屏幕: 6.1寸 Dynamic AMOLED",
      "电池: 3700mAh",
      "摄像头: 5000万像素",
      "处理器: Exynos 2200",
    ],
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    price: 2799,
    img: require("@/assets/cate5.jpg"), // 图片链接
    description: "行业领先的降噪耳机，适合长时间佩戴。",
    specs: [
      "降噪: 主动降噪",
      "续航: 30小时",
      "连接方式: 蓝牙",
      "音质: 高解析度音频",
    ],
  },
];

export const categories = [
  { id: 1, name: "电子产品", children: [{ id: 11, name: "手机" }] },
  // 树状分类
];

// 其他如 brands, orders 等
