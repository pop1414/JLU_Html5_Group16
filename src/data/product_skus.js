// 商品SKU数据：关联商品ID、属性字典、价格/库存，SKU_ID规则为「商品ID-属性1ID-值1ID-属性2ID-值2ID」
export default [
  /************************** 服装类（categoryId:11/12/13/14/15）**************************/
  // 1101 轻量连帽防风外套
  {
    skuId: "1101-1-101-2-203",
    productId: 1101,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 2, valueId: 203 }, // 尺码：M
    ],
    price: 259,
    originalPrice: 299,
    stock: 350,
    img: "https://placeholder.com/coat1-black-m",
  },
  {
    skuId: "1101-1-104-2-205",
    productId: 1101,
    attributes: [
      { attrId: 1, valueId: 104 }, // 颜色：蓝色
      { attrId: 2, valueId: 205 }, // 尺码：XL
    ],
    price: 259,
    originalPrice: 299,
    stock: 280,
    img: "https://placeholder.com/coat1-blue-xl",
  },

  // 1102 羊羔绒加厚夹克
  {
    skuId: "1102-1-106-2-204",
    productId: 1102,
    attributes: [
      { attrId: 1, valueId: 106 }, // 颜色：灰色
      { attrId: 2, valueId: 204 }, // 尺码：L
    ],
    price: 399,
    originalPrice: 459,
    stock: 220,
    img: "https://placeholder.com/coat2-gray-l",
  },
  {
    skuId: "1102-1-101-2-206",
    productId: 1102,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 2, valueId: 206 }, // 尺码：XXL
    ],
    price: 399,
    originalPrice: 459,
    stock: 180,
    img: "https://placeholder.com/coat2-black-xxl",
  },

  // 1103 摇粒绒拉链开衫
  {
    skuId: "1103-1-103-2-203",
    productId: 1103,
    attributes: [
      { attrId: 1, valueId: 103 }, // 颜色：银色
      { attrId: 2, valueId: 203 }, // 尺码：M
    ],
    price: 229,
    originalPrice: 269,
    stock: 420,
    img: "https://placeholder.com/coat3-silver-m",
  },
  {
    skuId: "1103-1-107-2-205",
    productId: 1103,
    attributes: [
      { attrId: 1, valueId: 107 }, // 颜色：粉色
      { attrId: 2, valueId: 205 }, // 尺码：XL
    ],
    price: 229,
    originalPrice: 269,
    stock: 350,
    img: "https://placeholder.com/coat3-pink-xl",
  },

  // 1201 纯棉圆领基础T恤
  {
    skuId: "1201-1-102-2-203",
    productId: 1201,
    attributes: [
      { attrId: 1, valueId: 102 }, // 颜色：白色
      { attrId: 2, valueId: 203 }, // 尺码：M
    ],
    price: 79,
    originalPrice: 99,
    stock: 850,
    img: "https://placeholder.com/tshirt1-white-m",
  },
  {
    skuId: "1201-1-101-2-205",
    productId: 1201,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 2, valueId: 205 }, // 尺码：XL
    ],
    price: 79,
    originalPrice: 99,
    stock: 720,
    img: "https://placeholder.com/tshirt1-black-xl",
  },

  // 1202 宽松落肩印花T恤
  {
    skuId: "1202-1-105-2-204",
    productId: 1202,
    attributes: [
      { attrId: 1, valueId: 105 }, // 颜色：红色
      { attrId: 2, valueId: 204 }, // 尺码：L
    ],
    price: 109,
    originalPrice: 139,
    stock: 450,
    img: "https://placeholder.com/tshirt2-red-l",
  },
  {
    skuId: "1202-1-108-2-206",
    productId: 1202,
    attributes: [
      { attrId: 1, valueId: 108 }, // 颜色：绿色
      { attrId: 2, valueId: 206 }, // 尺码：XXL
    ],
    price: 109,
    originalPrice: 139,
    stock: 380,
    img: "https://placeholder.com/tshirt2-green-xxl",
  },

  // 1203 条纹短袖Polo衫
  {
    skuId: "1203-1-104-2-203",
    productId: 1203,
    attributes: [
      { attrId: 1, valueId: 104 }, // 颜色：蓝色
      { attrId: 2, valueId: 203 }, // 尺码：M
    ],
    price: 99,
    originalPrice: 129,
    stock: 320,
    img: "https://placeholder.com/tshirt3-blue-m",
  },
  {
    skuId: "1203-1-106-2-205",
    productId: 1203,
    attributes: [
      { attrId: 1, valueId: 106 }, // 颜色：灰色
      { attrId: 2, valueId: 205 }, // 尺码：XL
    ],
    price: 99,
    originalPrice: 129,
    stock: 280,
    img: "https://placeholder.com/tshirt3-gray-xl",
  },

  // 1301 直筒休闲长裤
  {
    skuId: "1301-1-101-2-204",
    productId: 1301,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 2, valueId: 204 }, // 尺码：L
    ],
    price: 169,
    originalPrice: 199,
    stock: 280,
    img: "https://placeholder.com/pants1-black-l",
  },
  {
    skuId: "1301-1-106-2-206",
    productId: 1301,
    attributes: [
      { attrId: 1, valueId: 106 }, // 颜色：灰色
      { attrId: 2, valueId: 206 }, // 尺码：XXL
    ],
    price: 169,
    originalPrice: 199,
    stock: 220,
    img: "https://placeholder.com/pants1-gray-xxl",
  },

  // 1302 弹力束脚运动休闲裤
  {
    skuId: "1302-1-104-2-203",
    productId: 1302,
    attributes: [
      { attrId: 1, valueId: 104 }, // 颜色：蓝色
      { attrId: 2, valueId: 203 }, // 尺码：M
    ],
    price: 149,
    originalPrice: 179,
    stock: 350,
    img: "https://placeholder.com/pants2-blue-m",
  },
  {
    skuId: "1302-1-101-2-205",
    productId: 1302,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 2, valueId: 205 }, // 尺码：XL
    ],
    price: 149,
    originalPrice: 179,
    stock: 300,
    img: "https://placeholder.com/pants2-black-xl",
  },

  // 1401 经典直筒牛仔裤
  {
    skuId: "1401-1-106-2-204",
    productId: 1401,
    attributes: [
      { attrId: 1, valueId: 106 }, // 颜色：灰色
      { attrId: 2, valueId: 204 }, // 尺码：L
    ],
    price: 199,
    originalPrice: 249,
    stock: 210,
    img: "https://placeholder.com/jeans1-gray-l",
  },
  {
    skuId: "1401-1-101-2-206",
    productId: 1401,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 2, valueId: 206 }, // 尺码：XXL
    ],
    price: 199,
    originalPrice: 249,
    stock: 180,
    img: "https://placeholder.com/jeans1-black-xxl",
  },

  // 1402 高腰微喇牛仔裤
  {
    skuId: "1402-1-104-2-203",
    productId: 1402,
    attributes: [
      { attrId: 1, valueId: 104 }, // 颜色：蓝色
      { attrId: 2, valueId: 203 }, // 尺码：M
    ],
    price: 229,
    originalPrice: 279,
    stock: 150,
    img: "https://placeholder.com/jeans2-blue-m",
  },
  {
    skuId: "1402-1-101-2-205",
    productId: 1402,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 2, valueId: 205 }, // 尺码：XL
    ],
    price: 229,
    originalPrice: 279,
    stock: 120,
    img: "https://placeholder.com/jeans2-black-xl",
  },

  // 1403 修身小脚牛仔裤
  {
    skuId: "1403-1-102-2-204",
    productId: 1403,
    attributes: [
      { attrId: 1, valueId: 102 }, // 颜色：白色
      { attrId: 2, valueId: 204 }, // 尺码：L
    ],
    price: 219,
    originalPrice: 269,
    stock: 180,
    img: "https://placeholder.com/jeans3-white-l",
  },
  {
    skuId: "1403-1-105-2-203",
    productId: 1403,
    attributes: [
      { attrId: 1, valueId: 105 }, // 颜色：红色
      { attrId: 2, valueId: 203 }, // 尺码：M
    ],
    price: 219,
    originalPrice: 269,
    stock: 150,
    img: "https://placeholder.com/jeans3-red-m",
  },

  // 1501 免烫商务衬衫
  {
    skuId: "1501-1-102-2-204",
    productId: 1501,
    attributes: [
      { attrId: 1, valueId: 102 }, // 颜色：白色
      { attrId: 2, valueId: 204 }, // 尺码：L
    ],
    price: 159,
    originalPrice: 199,
    stock: 220,
    img: "https://placeholder.com/shirt1-white-l",
  },
  {
    skuId: "1501-1-101-2-206",
    productId: 1501,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 2, valueId: 206 }, // 尺码：XXL
    ],
    price: 159,
    originalPrice: 199,
    stock: 180,
    img: "https://placeholder.com/shirt1-black-xxl",
  },

  // 1502 条纹宽松衬衫
  {
    skuId: "1502-1-104-2-205",
    productId: 1502,
    attributes: [
      { attrId: 1, valueId: 104 }, // 颜色：蓝色
      { attrId: 2, valueId: 205 }, // 尺码：XL
    ],
    price: 139,
    originalPrice: 169,
    stock: 250,
    img: "https://placeholder.com/shirt2-blue-xl",
  },
  {
    skuId: "1502-1-106-2-203",
    productId: 1502,
    attributes: [
      { attrId: 1, valueId: 106 }, // 颜色：灰色
      { attrId: 2, valueId: 203 }, // 尺码：M
    ],
    price: 139,
    originalPrice: 169,
    stock: 220,
    img: "https://placeholder.com/shirt2-gray-m",
  },

  /************************** 手机数码类（categoryId:21/22/23/24/25）**************************/
  // 2101 iPhone 14 Pro
  {
    skuId: "2101-6-603-1-101",
    productId: 2101,
    attributes: [
      { attrId: 6, valueId: 603 }, // 存储容量：256GB
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 7999,
    originalPrice: 8499,
    stock: 120,
    img: require("@/assets/iphone14/black-256.jpg"),
  },
  {
    skuId: "2101-6-605-1-102",
    productId: 2101,
    attributes: [
      { attrId: 6, valueId: 605 }, // 存储容量：1TB
      { attrId: 1, valueId: 102 }, // 颜色：白色
    ],
    price: 9999,
    originalPrice: 10499,
    stock: 86,
    img: require("@/assets/iphone14/white-1tb.jpg"),
  },

  // 2102 Samsung Galaxy S22
  {
    skuId: "2102-6-602-1-104",
    productId: 2102,
    attributes: [
      { attrId: 6, valueId: 602 }, // 存储容量：128GB
      { attrId: 1, valueId: 104 }, // 颜色：蓝色
    ],
    price: 4999,
    originalPrice: 5799,
    stock: 150,
    img: "https://placeholder.com/s22-blue-128.jpg",
  },
  {
    skuId: "2102-6-603-1-103",
    productId: 2102,
    attributes: [
      { attrId: 6, valueId: 603 }, // 存储容量：256GB
      { attrId: 1, valueId: 103 }, // 颜色：银色
    ],
    price: 5599,
    originalPrice: 6399,
    stock: 120,
    img: "https://placeholder.com/s22-silver-256.jpg",
  },

  // 2103 华为Mate60 Pro
  {
    skuId: "2103-6-603-1-101",
    productId: 2103,
    attributes: [
      { attrId: 6, valueId: 603 }, // 存储容量：256GB
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 6999,
    originalPrice: 7499,
    stock: 95,
    img: "https://placeholder.com/mate60-black-256.jpg",
  },
  {
    skuId: "2103-6-605-1-102",
    productId: 2103,
    attributes: [
      { attrId: 6, valueId: 605 }, // 存储容量：1TB
      { attrId: 1, valueId: 102 }, // 颜色：白色
    ],
    price: 8999,
    originalPrice: 9499,
    stock: 65,
    img: "https://placeholder.com/mate60-white-1tb.jpg",
  },

  // 2104 小米14
  {
    skuId: "2104-6-602-1-105",
    productId: 2104,
    attributes: [
      { attrId: 6, valueId: 602 }, // 存储容量：128GB
      { attrId: 1, valueId: 105 }, // 颜色：红色
    ],
    price: 3999,
    originalPrice: 4499,
    stock: 180,
    img: "https://placeholder.com/mi14-red-128.jpg",
  },
  {
    skuId: "2104-6-604-1-101",
    productId: 2104,
    attributes: [
      { attrId: 6, valueId: 604 }, // 存储容量：512GB
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 4999,
    originalPrice: 5499,
    stock: 150,
    img: "https://placeholder.com/mi14-black-512.jpg",
  },

  // 2201 20W快充充电套装
  {
    skuId: "2201-1-101-9-901",
    productId: 2201,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 9, valueId: 901 }, // 功率：20W
    ],
    price: 69,
    originalPrice: 99,
    stock: 2000,
    img: "https://placeholder.com/charger1-black-20w.jpg",
  },
  {
    skuId: "2201-1-102-9-901",
    productId: 2201,
    attributes: [
      { attrId: 1, valueId: 102 }, // 颜色：白色
      { attrId: 9, valueId: 901 }, // 功率：20W
    ],
    price: 69,
    originalPrice: 99,
    stock: 2500,
    img: "https://placeholder.com/charger1-white-20w.jpg",
  },

  // 2202 磁吸无线充电器
  {
    skuId: "2202-1-103-9-901",
    productId: 2202,
    attributes: [
      { attrId: 1, valueId: 103 }, // 颜色：银色
      { attrId: 9, valueId: 901 }, // 功率：20W（实际15W，复用20W属性）
    ],
    price: 129,
    originalPrice: 159,
    stock: 1200,
    img: "https://placeholder.com/charger2-silver-15w.jpg",
  },
  {
    skuId: "2202-1-101-9-901",
    productId: 2202,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 9, valueId: 901 }, // 功率：20W（实际15W）
    ],
    price: 129,
    originalPrice: 159,
    stock: 1000,
    img: "https://placeholder.com/charger2-black-15w.jpg",
  },

  // 2203 手机钢化膜（全屏）
  {
    skuId: "2203-8-802-1-102",
    productId: 2203,
    attributes: [
      { attrId: 8, valueId: 802 }, // 屏幕尺寸：6.1英寸
      { attrId: 1, valueId: 102 }, // 颜色：透明（复用白色值）
    ],
    price: 29,
    originalPrice: 49,
    stock: 3000,
    img: "https://placeholder.com/tempered-6.1.jpg",
  },
  {
    skuId: "2203-8-803-1-102",
    productId: 2203,
    attributes: [
      { attrId: 8, valueId: 803 }, // 屏幕尺寸：6.7英寸
      { attrId: 1, valueId: 102 }, // 颜色：透明
    ],
    price: 39,
    originalPrice: 59,
    stock: 2500,
    img: "https://placeholder.com/tempered-6.7.jpg",
  },

  // 2301 入门微单相机套机
  {
    skuId: "2301-6-603-8-804",
    productId: 2301,
    attributes: [
      { attrId: 6, valueId: 603 }, // 存储容量：256GB
      { attrId: 8, valueId: 804 }, // 屏幕尺寸：11英寸（实际为相机屏，复用属性）
    ],
    price: 3699,
    originalPrice: 3999,
    stock: 180,
    img: "https://placeholder.com/camera1-256.jpg",
  },
  {
    skuId: "2301-6-605-8-804",
    productId: 2301,
    attributes: [
      { attrId: 6, valueId: 605 }, // 存储容量：1TB
      { attrId: 8, valueId: 804 }, // 屏幕尺寸：11英寸
    ],
    price: 4299,
    originalPrice: 4599,
    stock: 120,
    img: "https://placeholder.com/camera1-1tb.jpg",
  },

  // 2302 运动相机防抖版
  {
    skuId: "2302-6-602-1-101",
    productId: 2302,
    attributes: [
      { attrId: 6, valueId: 602 }, // 存储容量：128GB
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 1899,
    originalPrice: 2199,
    stock: 250,
    img: "https://placeholder.com/camera2-black-128.jpg",
  },
  {
    skuId: "2302-6-603-1-103",
    productId: 2302,
    attributes: [
      { attrId: 6, valueId: 603 }, // 存储容量：256GB
      { attrId: 1, valueId: 103 }, // 颜色：银色
    ],
    price: 2299,
    originalPrice: 2599,
    stock: 200,
    img: "https://placeholder.com/camera2-silver-256.jpg",
  },

  // 2401 Sony WH-1000XM5
  {
    skuId: "2401-1-101-9-901",
    productId: 2401,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 9, valueId: 901 }, // 功率：20W（充电功率）
    ],
    price: 2799,
    originalPrice: 2999,
    stock: 132,
    img: "https://placeholder.com/headset1-black.jpg",
  },
  {
    skuId: "2401-1-102-9-901",
    productId: 2401,
    attributes: [
      { attrId: 1, valueId: 102 }, // 颜色：白色
      { attrId: 9, valueId: 901 }, // 功率：20W
    ],
    price: 2799,
    originalPrice: 2999,
    stock: 100,
    img: "https://placeholder.com/headset1-white.jpg",
  },

  // 2402 便携蓝牙音箱
  {
    skuId: "2402-1-104-9-901",
    productId: 2402,
    attributes: [
      { attrId: 1, valueId: 104 }, // 颜色：蓝色
      { attrId: 9, valueId: 901 }, // 功率：20W
    ],
    price: 199,
    originalPrice: 249,
    stock: 620,
    img: "https://placeholder.com/speaker1-blue.jpg",
  },
  {
    skuId: "2402-1-105-9-901",
    productId: 2402,
    attributes: [
      { attrId: 1, valueId: 105 }, // 颜色：红色
      { attrId: 9, valueId: 901 }, // 功率：20W
    ],
    price: 199,
    originalPrice: 249,
    stock: 580,
    img: "https://placeholder.com/speaker1-red.jpg",
  },

  // 2403 真无线蓝牙耳机
  {
    skuId: "2403-1-101-6-602",
    productId: 2403,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 6, valueId: 602 }, // 存储容量：128GB（耳机仓存储，复用属性）
    ],
    price: 899,
    originalPrice: 999,
    stock: 450,
    img: "https://placeholder.com/earbuds1-black.jpg",
  },
  {
    skuId: "2403-1-103-6-603",
    productId: 2403,
    attributes: [
      { attrId: 1, valueId: 103 }, // 颜色：银色
      { attrId: 6, valueId: 603 }, // 存储容量：256GB
    ],
    price: 999,
    originalPrice: 1099,
    stock: 380,
    img: "https://placeholder.com/earbuds1-silver.jpg",
  },

  // 2501 高速U盘 128GB
  {
    skuId: "2501-6-602-1-101",
    productId: 2501,
    attributes: [
      { attrId: 6, valueId: 602 }, // 存储容量：128GB
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 79,
    originalPrice: 99,
    stock: 3000,
    img: "https://placeholder.com/usb1-black-128.jpg",
  },
  {
    skuId: "2501-6-603-1-102",
    productId: 2501,
    attributes: [
      { attrId: 6, valueId: 603 }, // 存储容量：256GB
      { attrId: 1, valueId: 102 }, // 颜色：白色
    ],
    price: 129,
    originalPrice: 159,
    stock: 2500,
    img: "https://placeholder.com/usb1-white-256.jpg",
  },

  // 2502 Type-C多功能扩展坞
  {
    skuId: "2502-1-101-8-805",
    productId: 2502,
    attributes: [
      { attrId: 1, valueId: 101 }, // 颜色：黑色
      { attrId: 8, valueId: 805 }, // 屏幕尺寸：14英寸（适配笔记本）
    ],
    price: 149,
    originalPrice: 199,
    stock: 1500,
    img: "https://placeholder.com/dock1-black.jpg",
  },
  {
    skuId: "2502-1-103-8-806",
    productId: 2502,
    attributes: [
      { attrId: 1, valueId: 103 }, // 颜色：银色
      { attrId: 8, valueId: 806 }, // 屏幕尺寸：16英寸
    ],
    price: 169,
    originalPrice: 219,
    stock: 1200,
    img: "https://placeholder.com/dock1-silver.jpg",
  },

  // 2503 TF存储卡 256GB
  {
    skuId: "2503-6-603-1-101",
    productId: 2503,
    attributes: [
      { attrId: 6, valueId: 603 }, // 存储容量：256GB
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 69,
    originalPrice: 99,
    stock: 4500,
    img: "https://placeholder.com/tf1-black-256.jpg",
  },
  {
    skuId: "2503-6-605-1-102",
    productId: 2503,
    attributes: [
      { attrId: 6, valueId: 605 }, // 存储容量：1TB
      { attrId: 1, valueId: 102 }, // 颜色：白色
    ],
    price: 199,
    originalPrice: 249,
    stock: 3200,
    img: "https://placeholder.com/tf1-white-1tb.jpg",
  },

  /************************** 家用电器类（categoryId:31/32/33/34/35）**************************/
  // 3101 55英寸4K智能电视
  {
    skuId: "3101-8-807-12-1201",
    productId: 3101,
    attributes: [
      { attrId: 8, valueId: 807 }, // 屏幕尺寸：55英寸
      { attrId: 12, valueId: 1201 }, // 能效等级：一级
    ],
    price: 2199,
    originalPrice: 2599,
    stock: 120,
    img: "https://placeholder.com/tv1-55.jpg",
  },
  {
    skuId: "3101-8-808-12-1202",
    productId: 3101,
    attributes: [
      { attrId: 8, valueId: 808 }, // 屏幕尺寸：65英寸
      { attrId: 12, valueId: 1202 }, // 能效等级：二级
    ],
    price: 3299,
    originalPrice: 3799,
    stock: 85,
    img: "https://placeholder.com/tv1-65.jpg",
  },

  // 3102 65英寸高刷电视
  {
    skuId: "3102-8-808-12-1201",
    productId: 3102,
    attributes: [
      { attrId: 8, valueId: 808 }, // 屏幕尺寸：65英寸
      { attrId: 12, valueId: 1201 }, // 能效等级：一级
    ],
    price: 3299,
    originalPrice: 3799,
    stock: 85,
    img: "https://placeholder.com/tv2-65.jpg",
  },
  {
    skuId: "3102-8-807-12-1202",
    productId: 3102,
    attributes: [
      { attrId: 8, valueId: 807 }, // 屏幕尺寸：55英寸
      { attrId: 12, valueId: 1202 }, // 能效等级：二级
    ],
    price: 2499,
    originalPrice: 2899,
    stock: 110,
    img: "https://placeholder.com/tv2-55.jpg",
  },

  // 3201 1.5匹变频冷暖空调
  {
    skuId: "3201-11-1102-12-1201",
    productId: 3201,
    attributes: [
      { attrId: 11, valueId: 1102 }, // 空调匹数：1.5匹
      { attrId: 12, valueId: 1201 }, // 能效等级：一级
    ],
    price: 2799,
    originalPrice: 3199,
    stock: 95,
    img: "https://placeholder.com/ac1-1.5.jpg",
  },
  {
    skuId: "3201-11-1101-12-1202",
    productId: 3201,
    attributes: [
      { attrId: 11, valueId: 1101 }, // 空调匹数：1匹
      { attrId: 12, valueId: 1202 }, // 能效等级：二级
    ],
    price: 2299,
    originalPrice: 2699,
    stock: 120,
    img: "https://placeholder.com/ac1-1.jpg",
  },

  // 3202 新风空调挂机
  {
    skuId: "3202-11-1102-12-1201",
    productId: 3202,
    attributes: [
      { attrId: 11, valueId: 1102 }, // 空调匹数：1.5匹
      { attrId: 12, valueId: 1201 }, // 能效等级：一级
    ],
    price: 3499,
    originalPrice: 3999,
    stock: 65,
    img: "https://placeholder.com/ac2-1.5.jpg",
  },
  {
    skuId: "3202-11-1103-12-1202",
    productId: 3202,
    attributes: [
      { attrId: 11, valueId: 1103 }, // 空调匹数：2匹
      { attrId: 12, valueId: 1202 }, // 能效等级：二级
    ],
    price: 4299,
    originalPrice: 4799,
    stock: 45,
    img: "https://placeholder.com/ac2-2.jpg",
  },

  // 3203 3匹立式柜机空调
  {
    skuId: "3203-11-1104-12-1201",
    productId: 3203,
    attributes: [
      { attrId: 11, valueId: 1104 }, // 空调匹数：3匹
      { attrId: 12, valueId: 1201 }, // 能效等级：一级
    ],
    price: 5999,
    originalPrice: 6599,
    stock: 40,
    img: "https://placeholder.com/ac3-3.jpg",
  },
  {
    skuId: "3203-11-1103-12-1202",
    productId: 3203,
    attributes: [
      { attrId: 11, valueId: 1103 }, // 空调匹数：2匹
      { attrId: 12, valueId: 1202 }, // 能效等级：二级
    ],
    price: 4999,
    originalPrice: 5499,
    stock: 55,
    img: "https://placeholder.com/ac3-2.jpg",
  },

  // 3301 10KG变频滚筒洗衣机
  {
    skuId: "3301-13-1303-14-1401",
    productId: 3301,
    attributes: [
      { attrId: 13, valueId: 1303 }, // 容量：10KG
      { attrId: 14, valueId: 1401 }, // 洗衣机类型：滚筒
    ],
    price: 1999,
    originalPrice: 2399,
    stock: 80,
    img: "https://placeholder.com/wash1-10.jpg",
  },
  {
    skuId: "3301-13-1302-14-1401",
    productId: 3301,
    attributes: [
      { attrId: 13, valueId: 1302 }, // 容量：8KG
      { attrId: 14, valueId: 1401 }, // 洗衣机类型：滚筒
    ],
    price: 1699,
    originalPrice: 2099,
    stock: 100,
    img: "https://placeholder.com/wash1-8.jpg",
  },

  // 3302 波轮洗衣机 8KG
  {
    skuId: "3302-13-1302-14-1402",
    productId: 3302,
    attributes: [
      { attrId: 13, valueId: 1302 }, // 容量：8KG
      { attrId: 14, valueId: 1402 }, // 洗衣机类型：波轮
    ],
    price: 999,
    originalPrice: 1199,
    stock: 110,
    img: "https://placeholder.com/wash2-8.jpg",
  },
  {
    skuId: "3302-13-1303-14-1402",
    productId: 3302,
    attributes: [
      { attrId: 13, valueId: 1303 }, // 容量：10KG
      { attrId: 14, valueId: 1402 }, // 洗衣机类型：波轮
    ],
    price: 1299,
    originalPrice: 1499,
    stock: 90,
    img: "https://placeholder.com/wash2-10.jpg",
  },

  // 3401 双开门风冷冰箱 450L
  {
    skuId: "3401-13-1306-15-1501",
    productId: 3401,
    attributes: [
      { attrId: 13, valueId: 1306 }, // 容量：450L
      { attrId: 15, valueId: 1501 }, // 冰箱门型：双开门
    ],
    price: 2499,
    originalPrice: 2899,
    stock: 75,
    img: "https://placeholder.com/fridge1-450.jpg",
  },
  {
    skuId: "3401-13-1305-15-1502",
    productId: 3401,
    attributes: [
      { attrId: 13, valueId: 1305 }, // 容量：220L
      { attrId: 15, valueId: 1502 }, // 冰箱门型：三门
    ],
    price: 1599,
    originalPrice: 1899,
    stock: 100,
    img: "https://placeholder.com/fridge1-220.jpg",
  },

  // 3402 三门节能冰箱 220L
  {
    skuId: "3402-13-1305-15-1502",
    productId: 3402,
    attributes: [
      { attrId: 13, valueId: 1305 }, // 容量：220L
      { attrId: 15, valueId: 1502 }, // 冰箱门型：三门
    ],
    price: 1299,
    originalPrice: 1499,
    stock: 90,
    img: "https://placeholder.com/fridge2-220.jpg",
  },
  {
    skuId: "3402-13-1306-15-1501",
    productId: 3402,
    attributes: [
      { attrId: 13, valueId: 1306 }, // 容量：450L
      { attrId: 15, valueId: 1501 }, // 冰箱门型：双开门
    ],
    price: 2199,
    originalPrice: 2599,
    stock: 65,
    img: "https://placeholder.com/fridge2-450.jpg",
  },

  // 3501 蒸烤一体机 32L
  {
    skuId: "3501-13-1307-12-1202",
    productId: 3501,
    attributes: [
      { attrId: 13, valueId: 1307 }, // 容量：32L
      { attrId: 12, valueId: 1202 }, // 能效等级：二级
    ],
    price: 899,
    originalPrice: 1099,
    stock: 150,
    img: "https://placeholder.com/oven1-32.jpg",
  },
  {
    skuId: "3501-13-1301-12-1201",
    productId: 3501,
    attributes: [
      { attrId: 13, valueId: 1301 }, // 容量：4L
      { attrId: 12, valueId: 1201 }, // 能效等级：一级
    ],
    price: 699,
    originalPrice: 899,
    stock: 180,
    img: "https://placeholder.com/oven1-4.jpg",
  },

  // 3502 侧吸式抽油烟机
  {
    skuId: "3502-9-901-12-1201",
    productId: 3502,
    attributes: [
      { attrId: 9, valueId: 901 }, // 功率：20W（实际为风量，复用属性）
      { attrId: 12, valueId: 1201 }, // 能效等级：一级
    ],
    price: 1099,
    originalPrice: 1399,
    stock: 85,
    img: "https://placeholder.com/hood1-20.jpg",
  },
  {
    skuId: "3502-9-902-12-1202",
    productId: 3502,
    attributes: [
      { attrId: 9, valueId: 902 }, // 功率：48W
      { attrId: 12, valueId: 1202 }, // 能效等级：二级
    ],
    price: 899,
    originalPrice: 1199,
    stock: 110,
    img: "https://placeholder.com/hood1-48.jpg",
  },

  // 3503 燃气热水器 16L
  {
    skuId: "3503-13-1304-12-1201",
    productId: 3503,
    attributes: [
      { attrId: 13, valueId: 1304 }, // 容量：16L
      { attrId: 12, valueId: 1201 }, // 能效等级：一级
    ],
    price: 1299,
    originalPrice: 1599,
    stock: 95,
    img: "https://placeholder.com/heater1-16.jpg",
  },
  {
    skuId: "3503-13-1301-12-1202",
    productId: 3503,
    attributes: [
      { attrId: 13, valueId: 1301 }, // 容量：4L
      { attrId: 12, valueId: 1202 }, // 能效等级：二级
    ],
    price: 899,
    originalPrice: 1099,
    stock: 120,
    img: "https://placeholder.com/heater1-4.jpg",
  },

  /************************** 家具家装类（categoryId:41/42/43/44/45）**************************/
  // 4101 恒温花洒套装
  {
    skuId: "4101-16-1606-1-101",
    productId: 4101,
    attributes: [
      { attrId: 16, valueId: 1606 }, // 家具材质：铜
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 299,
    originalPrice: 399,
    stock: 450,
    img: "https://placeholder.com/shower1-black.jpg",
  },
  {
    skuId: "4101-16-1606-1-103",
    productId: 4101,
    attributes: [
      { attrId: 16, valueId: 1606 }, // 家具材质：铜
      { attrId: 1, valueId: 103 }, // 颜色：银色
    ],
    price: 299,
    originalPrice: 399,
    stock: 400,
    img: "https://placeholder.com/shower1-silver.jpg",
  },

  // 4102 304不锈钢水槽套餐
  {
    skuId: "4102-16-1605-1-101",
    productId: 4102,
    attributes: [
      { attrId: 16, valueId: 1605 }, // 家具材质：304不锈钢
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 399,
    originalPrice: 499,
    stock: 320,
    img: "https://placeholder.com/sink1-black.jpg",
  },
  {
    skuId: "4102-16-1605-1-102",
    productId: 4102,
    attributes: [
      { attrId: 16, valueId: 1605 }, // 家具材质：304不锈钢
      { attrId: 1, valueId: 102 }, // 颜色：白色
    ],
    price: 399,
    originalPrice: 499,
    stock: 280,
    img: "https://placeholder.com/sink1-white.jpg",
  },

  // 4103 厨房水龙头（抽拉式）
  {
    skuId: "4103-16-1606-1-104",
    productId: 4103,
    attributes: [
      { attrId: 16, valueId: 1606 }, // 家具材质：铜
      { attrId: 1, valueId: 104 }, // 颜色：蓝色
    ],
    price: 199,
    originalPrice: 259,
    stock: 250,
    img: "https://placeholder.com/tap1-blue.jpg",
  },
  {
    skuId: "4103-16-1605-1-103",
    productId: 4103,
    attributes: [
      { attrId: 16, valueId: 1605 }, // 家具材质：304不锈钢
      { attrId: 1, valueId: 103 }, // 颜色：银色
    ],
    price: 179,
    originalPrice: 229,
    stock: 220,
    img: "https://placeholder.com/tap1-silver.jpg",
  },

  // 4201 客厅吸顶灯 三色变光
  {
    skuId: "4201-9-902-1-101",
    productId: 4201,
    attributes: [
      { attrId: 9, valueId: 902 }, // 功率：48W
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 159,
    originalPrice: 199,
    stock: 650,
    img: "https://placeholder.com/light1-black.jpg",
  },
  {
    skuId: "4201-9-901-1-102",
    productId: 4201,
    attributes: [
      { attrId: 9, valueId: 901 }, // 功率：20W
      { attrId: 1, valueId: 102 }, // 颜色：白色
    ],
    price: 99,
    originalPrice: 129,
    stock: 720,
    img: "https://placeholder.com/light1-white.jpg",
  },

  // 4202 台灯 护眼无频闪
  {
    skuId: "4202-9-901-1-103",
    productId: 4202,
    attributes: [
      { attrId: 9, valueId: 901 }, // 功率：20W
      { attrId: 1, valueId: 103 }, // 颜色：银色
    ],
    price: 99,
    originalPrice: 129,
    stock: 850,
    img: "https://placeholder.com/light2-silver.jpg",
  },
  {
    skuId: "4202-9-902-1-101",
    productId: 4202,
    attributes: [
      { attrId: 9, valueId: 902 }, // 功率：48W
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 129,
    originalPrice: 159,
    stock: 780,
    img: "https://placeholder.com/light2-black.jpg",
  },

  // 4301 家用电钻套装
  {
    skuId: "4301-9-901-1-101",
    productId: 4301,
    attributes: [
      { attrId: 9, valueId: 901 }, // 功率：20W（实际为电压12V，复用属性）
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 219,
    originalPrice: 269,
    stock: 420,
    img: "https://placeholder.com/tools1-black.jpg",
  },
  {
    skuId: "4301-9-902-1-103",
    productId: 4301,
    attributes: [
      { attrId: 9, valueId: 902 }, // 功率：48W
      { attrId: 1, valueId: 103 }, // 颜色：银色
    ],
    price: 259,
    originalPrice: 309,
    stock: 380,
    img: "https://placeholder.com/tools1-silver.jpg",
  },

  // 4302 多功能工具箱 32件套
  {
    skuId: "4302-16-1604-1-101",
    productId: 4302,
    attributes: [
      { attrId: 16, valueId: 1604 }, // 家具材质：金属
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 129,
    originalPrice: 159,
    stock: 750,
    img: "https://placeholder.com/tools2-black.jpg",
  },
  {
    skuId: "4302-16-1604-1-104",
    productId: 4302,
    attributes: [
      { attrId: 16, valueId: 1604 }, // 家具材质：金属
      { attrId: 1, valueId: 104 }, // 颜色：蓝色
    ],
    price: 129,
    originalPrice: 159,
    stock: 680,
    img: "https://placeholder.com/tools2-blue.jpg",
  },

  // 4401 智能加湿器 4L
  {
    skuId: "4401-13-1301-1-101",
    productId: 4401,
    attributes: [
      { attrId: 13, valueId: 1301 }, // 容量：4L
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 149,
    originalPrice: 199,
    stock: 580,
    img: "https://placeholder.com/humidifier1-black.jpg",
  },
  {
    skuId: "4401-13-1301-1-102",
    productId: 4401,
    attributes: [
      { attrId: 13, valueId: 1301 }, // 容量：4L
      { attrId: 1, valueId: 102 }, // 颜色：白色
    ],
    price: 149,
    originalPrice: 199,
    stock: 620,
    img: "https://placeholder.com/humidifier1-white.jpg",
  },

  // 4402 除螨仪 家用床铺
  {
    skuId: "4402-9-904-1-101",
    productId: 4402,
    attributes: [
      { attrId: 9, valueId: 904 }, // 功率：1500W
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 199,
    originalPrice: 249,
    stock: 420,
    img: "https://placeholder.com/mite1-black.jpg",
  },
  {
    skuId: "4402-9-905-1-103",
    productId: 4402,
    attributes: [
      { attrId: 9, valueId: 905 }, // 功率：3000W
      { attrId: 1, valueId: 103 }, // 颜色：银色
    ],
    price: 259,
    originalPrice: 309,
    stock: 380,
    img: "https://placeholder.com/mite1-silver.jpg",
  },

  // 4403 卧室空气净化器
  {
    skuId: "4403-9-904-1-102",
    productId: 4403,
    attributes: [
      { attrId: 9, valueId: 904 }, // 功率：1500W
      { attrId: 1, valueId: 102 }, // 颜色：白色
    ],
    price: 899,
    originalPrice: 999,
    stock: 220,
    img: "https://placeholder.com/air1-white.jpg",
  },
  {
    skuId: "4403-9-905-1-101",
    productId: 4403,
    attributes: [
      { attrId: 9, valueId: 905 }, // 功率：3000W
      { attrId: 1, valueId: 101 }, // 颜色：黑色
    ],
    price: 1299,
    originalPrice: 1499,
    stock: 180,
    img: "https://placeholder.com/air1-black.jpg",
  },

  // 4501 北欧布艺三人沙发
  {
    skuId: "4501-16-1603-17-1701",
    productId: 4501,
    attributes: [
      { attrId: 16, valueId: 1603 }, // 家具材质：布艺
      { attrId: 17, valueId: 1701 }, // 风格：北欧
    ],
    price: 1599,
    originalPrice: 1899,
    stock: 65,
    img: "https://placeholder.com/sofa1-nordic.jpg",
  },
  {
    skuId: "4501-16-1603-17-1702",
    productId: 4501,
    attributes: [
      { attrId: 16, valueId: 1603 }, // 家具材质：布艺
      { attrId: 17, valueId: 1702 }, // 风格：现代简约
    ],
    price: 1699,
    originalPrice: 1999,
    stock: 55,
    img: "https://placeholder.com/sofa1-modern.jpg",
  },

  // 4502 茶几 伸缩储物款
  {
    skuId: "4502-16-1602-17-1702",
    productId: 4502,
    attributes: [
      { attrId: 16, valueId: 1602 }, // 家具材质：板材
      { attrId: 17, valueId: 1702 }, // 风格：现代简约
    ],
    price: 699,
    originalPrice: 899,
    stock: 95,
    img: "https://placeholder.com/table1-modern.jpg",
  },
  {
    skuId: "4502-16-1601-17-1701",
    productId: 4502,
    attributes: [
      { attrId: 16, valueId: 1601 }, // 家具材质：实木
      { attrId: 17, valueId: 1701 }, // 风格：北欧
    ],
    price: 899,
    originalPrice: 1099,
    stock: 75,
    img: "https://placeholder.com/table1-nordic.jpg",
  },
];
