// 商品基础信息：关联分类ID/品牌ID，包含核心展示与业务字段
export default [
  /************************** 服装类（分类ID：1）**************************/
  // 11 外套（3个商品）
  {
    id: 1101,
    categoryId: 11,
    brandId: 7, // 优衣库
    name: "轻量连帽防风外套",
    mainImg: require("@/assets/c11.jpg"),
    gallery: [
      "https://placeholder.com/coat1-1",
      "https://placeholder.com/coat1-2",
      "https://placeholder.com/coat1-3",
    ],
    description: "春秋通勤防风外套，轻薄透气可收纳，聚酯纤维面料抗皱耐磨",
    sales: 2150, // 销量
    ratings: 4.5, // 评分
  },
  {
    id: 1102,
    categoryId: 11,
    brandId: 11, // 新增品牌：李宁
    name: "羊羔绒加厚夹克",
    mainImg: "https://placeholder.com/coat2",
    gallery: [
      "https://placeholder.com/coat2-1",
      "https://placeholder.com/coat2-2",
    ],
    description: "冬季羊羔绒内里夹克，棉混纺面料保暖性强，宽松版型不挑身材",
    sales: 1820,
    ratings: 4.7,
  },
  {
    id: 1103,
    categoryId: 11,
    brandId: 7, // 优衣库
    name: "摇粒绒拉链开衫",
    mainImg: "https://placeholder.com/coat3",
    gallery: ["https://placeholder.com/coat3-1"],
    description: "摇粒绒保暖开衫，居家外出两用，多色可选",
    sales: 3200,
    ratings: 4.6,
  },

  // 12 T恤（3个商品）
  {
    id: 1201,
    categoryId: 12,
    brandId: 7, // 优衣库
    name: "纯棉圆领基础T恤",
    mainImg: require("@/assets/c12.jpg"),
    gallery: [
      "https://placeholder.com/tshirt1-1",
      "https://placeholder.com/tshirt1-2",
    ],
    description: "高支纯棉基础款T恤，亲肤透气，不易变形，日常百搭",
    sales: 5600,
    ratings: 4.8,
  },
  {
    id: 1202,
    categoryId: 12,
    brandId: 11, // 李宁
    name: "宽松落肩印花T恤",
    mainImg: "https://placeholder.com/tshirt2",
    gallery: [
      "https://placeholder.com/tshirt2-1",
      "https://placeholder.com/tshirt2-2",
      "https://placeholder.com/tshirt2-3",
    ],
    description: "潮流印花落肩T恤，棉氨混纺面料有弹力，街头风设计",
    sales: 2850,
    ratings: 4.4,
  },
  {
    id: 1203,
    categoryId: 12,
    brandId: 7, // 优衣库
    name: "条纹短袖Polo衫",
    mainImg: "https://placeholder.com/tshirt3",
    gallery: ["https://placeholder.com/tshirt3-1"],
    description: "珠地网眼Polo衫，条纹设计，商务休闲皆可",
    sales: 1980,
    ratings: 4.7,
  },

  // 13 休闲裤（2个商品）
  {
    id: 1301,
    categoryId: 13,
    brandId: 7, // 优衣库
    name: "直筒休闲长裤",
    mainImg: require("@/assets/c13.jpg"),
    gallery: [
      "https://placeholder.com/pants1-1",
      "https://placeholder.com/pants1-2",
    ],
    description: "棉混纺直筒休闲裤，松紧抽绳腰头，易搭配不挑腿型",
    sales: 1760,
    ratings: 4.6,
  },
  {
    id: 1302,
    categoryId: 13,
    brandId: 11, // 李宁
    name: "弹力束脚运动休闲裤",
    mainImg: "https://placeholder.com/pants2",
    gallery: ["https://placeholder.com/pants2-1"],
    description: "涤纶氨纶弹力面料，束脚设计，运动通勤两不误",
    sales: 2100,
    ratings: 4.5,
  },

  // 14 牛仔裤（3个商品）
  {
    id: 1401,
    categoryId: 14,
    brandId: 7, // 优衣库
    name: "经典直筒牛仔裤",
    mainImg: require("@/assets/c14.jpg"),
    gallery: [
      "https://placeholder.com/jeans1-1",
      "https://placeholder.com/jeans1-2",
    ],
    description: "经典水洗直筒牛仔裤，牛仔棉面料耐穿，复古百搭",
    sales: 1950,
    ratings: 4.7,
  },
  {
    id: 1402,
    categoryId: 14,
    brandId: 11, // 李宁
    name: "高腰微喇牛仔裤",
    mainImg: "https://placeholder.com/jeans2",
    gallery: [
      "https://placeholder.com/jeans2-1",
      "https://placeholder.com/jeans2-2",
    ],
    description: "高腰弹力牛仔面料，微喇版型显腿长，复古做旧工艺",
    sales: 1280,
    ratings: 4.4,
  },
  {
    id: 1403,
    categoryId: 14,
    brandId: 7, // 优衣库
    name: "修身小脚牛仔裤",
    mainImg: "https://placeholder.com/jeans3",
    gallery: ["https://placeholder.com/jeans3-1"],
    description: "修身小脚剪裁，弹力牛仔布，适合搭配运动鞋/皮鞋",
    sales: 1560,
    ratings: 4.6,
  },

  // 15 衬衫（2个商品）
  {
    id: 1501,
    categoryId: 15,
    brandId: 7, // 优衣库
    name: "免烫商务衬衫",
    mainImg: require("@/assets/c15.jpg"),
    gallery: [
      "https://placeholder.com/shirt1-1",
      "https://placeholder.com/shirt1-2",
    ],
    description: "棉混纺免烫衬衫，抗皱易打理，商务通勤必备",
    sales: 1320,
    ratings: 4.8,
  },
  {
    id: 1502,
    categoryId: 15,
    brandId: 11, // 李宁
    name: "条纹宽松衬衫",
    mainImg: "https://placeholder.com/shirt2",
    gallery: ["https://placeholder.com/shirt2-1"],
    description: "纯棉条纹宽松衬衫，单穿叠穿皆可，休闲风设计",
    sales: 1680,
    ratings: 4.5,
  },

  /************************** 手机数码类（分类ID：2）**************************/
  // 21 手机通讯（4个商品）
  {
    id: 2101,
    categoryId: 21,
    brandId: 1, // 苹果
    name: "iPhone 14 Pro",
    mainImg: require("@/assets/cate1.jpg"),
    gallery: [
      "https://placeholder.com/iphone14-1",
      "https://placeholder.com/iphone14-2",
      "https://placeholder.com/iphone14-3",
    ],
    description: "苹果旗舰手机，A16仿生芯片，4800万像素主摄，超视网膜XDR显示屏",
    sales: 3280,
    ratings: 4.9,
  },
  {
    id: 2102,
    categoryId: 21,
    brandId: 2, // 三星
    name: "Samsung Galaxy S22",
    mainImg: require("@/assets/cate4.jpg"),
    gallery: ["https://placeholder.com/s22-1", "https://placeholder.com/s22-2"],
    description:
      "三星旗舰手机，Dynamic AMOLED屏幕，Exynos 2200处理器，5000万像素主摄",
    sales: 1890,
    ratings: 4.7,
  },
  {
    id: 2103,
    categoryId: 21,
    brandId: 6, // 华为
    name: "华为Mate60 Pro",
    mainImg: "https://placeholder.com/mate60",
    gallery: [
      "https://placeholder.com/mate60-1",
      "https://placeholder.com/mate60-2",
    ],
    description: "华为旗舰手机，麒麟芯片，鸿蒙4.0系统，卫星通信功能",
    sales: 4520,
    ratings: 4.9,
  },
  {
    id: 2104,
    categoryId: 21,
    brandId: 5, // 小米
    name: "小米14",
    mainImg: "https://placeholder.com/mi14",
    gallery: [
      "https://placeholder.com/mi14-1",
      "https://placeholder.com/mi14-2",
      "https://placeholder.com/mi14-3",
    ],
    description: "小米旗舰手机，骁龙8 Gen3处理器，徕卡影像，6.36英寸直屏",
    sales: 3150,
    ratings: 4.8,
  },

  // 22 手机配件（3个商品）
  {
    id: 2201,
    categoryId: 22,
    brandId: 1, // 苹果
    name: "20W快充充电套装",
    mainImg: "https://placeholder.com/charger1",
    gallery: ["https://placeholder.com/charger1-1"],
    description: "苹果原装20W快充头+Lightning数据线，适配iPhone全系列",
    sales: 5800,
    ratings: 4.7,
  },
  {
    id: 2202,
    categoryId: 22,
    brandId: 5, // 小米
    name: "磁吸无线充电器",
    mainImg: "https://placeholder.com/charger2",
    gallery: [
      "https://placeholder.com/charger2-1",
      "https://placeholder.com/charger2-2",
    ],
    description: "15W磁吸无线充，适配iPhone/安卓磁吸手机，桌面充电更便捷",
    sales: 3200,
    ratings: 4.6,
  },
  {
    id: 2203,
    categoryId: 22,
    brandId: 6, // 华为
    name: "手机钢化膜（全屏）",
    mainImg: "https://placeholder.com/tempered",
    gallery: ["https://placeholder.com/tempered-1"],
    description: "华为原装全屏钢化膜，抗指纹防刮，高清高透",
    sales: 4500,
    ratings: 4.5,
  },

  // 23 摄影摄像（2个商品）
  {
    id: 2301,
    categoryId: 23,
    brandId: 3, // 索尼
    name: "入门微单相机套机",
    mainImg: "https://placeholder.com/camera1",
    gallery: [
      "https://placeholder.com/camera1-1",
      "https://placeholder.com/camera1-2",
    ],
    description: "索尼APS-C画幅微单，4K视频录制，人眼追焦，15-45mm套机镜头",
    sales: 980,
    ratings: 4.8,
  },
  {
    id: 2302,
    categoryId: 23,
    brandId: 3, // 索尼
    name: "运动相机防抖版",
    mainImg: "https://placeholder.com/camera2",
    gallery: ["https://placeholder.com/camera2-1"],
    description: "索尼运动相机，4K60帧录制，电子防抖，10米防水，适合户外拍摄",
    sales: 1250,
    ratings: 4.7,
  },

  // 24 影音娱乐（3个商品）
  {
    id: 2401,
    categoryId: 24,
    brandId: 3, // 索尼
    name: "Sony WH-1000XM5",
    mainImg: require("@/assets/cate5.jpg"),
    gallery: [
      "https://placeholder.com/headset1-1",
      "https://placeholder.com/headset1-2",
    ],
    description: "索尼旗舰降噪耳机，主动降噪，30小时续航，高解析度音频",
    sales: 2100,
    ratings: 4.9,
  },
  {
    id: 2402,
    categoryId: 24,
    brandId: 5, // 小米
    name: "便携蓝牙音箱",
    mainImg: "https://placeholder.com/speaker1",
    gallery: ["https://placeholder.com/speaker1-1"],
    description: "小米便携蓝牙音箱，IPX7防水，12小时续航，低音增强",
    sales: 3500,
    ratings: 4.6,
  },
  {
    id: 2403,
    categoryId: 24,
    brandId: 6, // 华为
    name: "真无线蓝牙耳机",
    mainImg: "https://placeholder.com/earbuds1",
    gallery: [
      "https://placeholder.com/earbuds1-1",
      "https://placeholder.com/earbuds1-2",
    ],
    description: "华为FreeBuds Pro 2，主动降噪，空间音频，超长续航",
    sales: 4200,
    ratings: 4.8,
  },

  // 25 数码配件（3个商品）
  {
    id: 2501,
    categoryId: 25,
    brandId: 13, // 新增品牌：金士顿
    name: "高速U盘 128GB",
    mainImg: "https://placeholder.com/usb1",
    gallery: ["https://placeholder.com/usb1-1"],
    description: "金士顿USB3.2高速U盘，即插即用，128GB大容量",
    sales: 6200,
    ratings: 4.7,
  },
  {
    id: 2502,
    categoryId: 25,
    brandId: 5, // 小米
    name: "Type-C多功能扩展坞",
    mainImg: "https://placeholder.com/dock1",
    gallery: [
      "https://placeholder.com/dock1-1",
      "https://placeholder.com/dock1-2",
    ],
    description: "小米一拖五扩展坞，HDMI/USB/PD快充，适配笔记本/平板",
    sales: 2800,
    ratings: 4.6,
  },
  {
    id: 2503,
    categoryId: 25,
    brandId: 13, // 金士顿
    name: "TF存储卡 256GB",
    mainImg: "https://placeholder.com/tf1",
    gallery: ["https://placeholder.com/tf1-1"],
    description: "金士顿U3高速TF卡，适配手机/相机/行车记录仪，256GB容量",
    sales: 4500,
    ratings: 4.8,
  },

  /************************** 家用电器类（分类ID：3）**************************/
  // 31 电视（2个商品）
  {
    id: 3101,
    categoryId: 31,
    brandId: 8, // 美的
    name: "55英寸4K智能电视",
    mainImg: "https://placeholder.com/tv1",
    gallery: ["https://placeholder.com/tv1-1", "https://placeholder.com/tv1-2"],
    description: "美的55英寸4K超清电视，智能语音操控，MEMC运动补偿",
    sales: 1850,
    ratings: 4.6,
  },
  {
    id: 3102,
    categoryId: 31,
    brandId: 12, // 新增品牌：格力
    name: "65英寸高刷电视",
    mainImg: "https://placeholder.com/tv2",
    gallery: ["https://placeholder.com/tv2-1"],
    description: "格力65英寸120Hz高刷电视，4K HDR，游戏观影更顺滑",
    sales: 1200,
    ratings: 4.7,
  },

  // 32 空调（3个商品）
  {
    id: 3201,
    categoryId: 32,
    brandId: 12, // 格力
    name: "1.5匹变频冷暖空调",
    mainImg: "https://placeholder.com/ac1",
    gallery: ["https://placeholder.com/ac1-1", "https://placeholder.com/ac1-2"],
    description: "格力1.5匹一级能效空调，变频省电，自清洁功能",
    sales: 2100,
    ratings: 4.8,
  },
  {
    id: 3202,
    categoryId: 32,
    brandId: 8, // 美的
    name: "新风空调挂机",
    mainImg: "https://placeholder.com/ac2",
    gallery: ["https://placeholder.com/ac2-1"],
    description: "美的1.5匹新风空调，变频冷暖，新风换气，一级能效",
    sales: 1500,
    ratings: 4.7,
  },
  {
    id: 3203,
    categoryId: 32,
    brandId: 9, // 海尔
    name: "3匹立式柜机空调",
    mainImg: "https://placeholder.com/ac3",
    gallery: ["https://placeholder.com/ac3-1", "https://placeholder.com/ac3-2"],
    description: "海尔3匹立式空调，变频冷暖，一键自清洁，适用客厅",
    sales: 980,
    ratings: 4.6,
  },

  // 33 洗衣机（2个商品）
  {
    id: 3301,
    categoryId: 33,
    brandId: 9, // 海尔
    name: "10KG变频滚筒洗衣机",
    mainImg: "https://placeholder.com/wash1",
    gallery: [
      "https://placeholder.com/wash1-1",
      "https://placeholder.com/wash1-2",
    ],
    description: "海尔10KG滚筒洗衣机，变频电机，蒸汽除菌，一级能效",
    sales: 1650,
    ratings: 4.8,
  },
  {
    id: 3302,
    categoryId: 33,
    brandId: 8, // 美的
    name: "波轮洗衣机 8KG",
    mainImg: "https://placeholder.com/wash2",
    gallery: ["https://placeholder.com/wash2-1"],
    description: "美的8KG波轮洗衣机，免清洗内桶，一键脱水，租房必备",
    sales: 1900,
    ratings: 4.5,
  },

  // 34 冰箱（2个商品）
  {
    id: 3401,
    categoryId: 34,
    brandId: 9, // 海尔
    name: "双开门风冷冰箱 450L",
    mainImg: "https://placeholder.com/fridge1",
    gallery: [
      "https://placeholder.com/fridge1-1",
      "https://placeholder.com/fridge1-2",
    ],
    description: "海尔450L对开门冰箱，风冷无霜，双变频，一级能效",
    sales: 1200,
    ratings: 4.7,
  },
  {
    id: 3402,
    categoryId: 34,
    brandId: 8, // 美的
    name: "三门节能冰箱 220L",
    mainImg: "https://placeholder.com/fridge2",
    gallery: ["https://placeholder.com/fridge2-1"],
    description: "美的220L三门冰箱，中门软冷冻，二级能效，静音设计",
    sales: 1500,
    ratings: 4.6,
  },

  // 35 厨卫大电（3个商品）
  {
    id: 3501,
    categoryId: 35,
    brandId: 8, // 美的
    name: "蒸烤一体机 32L",
    mainImg: "https://placeholder.com/oven1",
    gallery: [
      "https://placeholder.com/oven1-1",
      "https://placeholder.com/oven1-2",
    ],
    description: "美的32L蒸烤一体机，蒸烤合一，智能预约，家用烘焙必备",
    sales: 1100,
    ratings: 4.7,
  },
  {
    id: 3502,
    categoryId: 35,
    brandId: 9, // 海尔
    name: "侧吸式抽油烟机",
    mainImg: "https://placeholder.com/hood1",
    gallery: ["https://placeholder.com/hood1-1"],
    description: "海尔20m³大吸力抽油烟机，侧吸式设计，易拆洗油网",
    sales: 1300,
    ratings: 4.6,
  },
  {
    id: 3503,
    categoryId: 35,
    brandId: 8, // 美的
    name: "燃气热水器 16L",
    mainImg: "https://placeholder.com/heater1",
    gallery: [
      "https://placeholder.com/heater1-1",
      "https://placeholder.com/heater1-2",
    ],
    description: "美的16L燃气热水器，恒温出水，零冷水，一级能效",
    sales: 1050,
    ratings: 4.8,
  },

  /************************** 家具家装类（分类ID：4）**************************/
  // 41 厨房卫浴（3个商品）
  {
    id: 4101,
    categoryId: 41,
    brandId: 8, // 美的
    name: "恒温花洒套装",
    mainImg: "https://placeholder.com/shower1",
    gallery: [
      "https://placeholder.com/shower1-1",
      "https://placeholder.com/shower1-2",
    ],
    description: "美的恒温花洒套装，铜主体，顶喷+手持，防烫设计",
    sales: 1800,
    ratings: 4.6,
  },
  {
    id: 4102,
    categoryId: 41,
    brandId: 9, // 海尔
    name: "304不锈钢水槽套餐",
    mainImg: "https://placeholder.com/sink1",
    gallery: ["https://placeholder.com/sink1-1"],
    description: "海尔304不锈钢水槽，加厚拉丝工艺，含龙头下水配件",
    sales: 1200,
    ratings: 4.7,
  },
  {
    id: 4103,
    categoryId: 41,
    brandId: 8, // 美的
    name: "厨房水龙头（抽拉式）",
    mainImg: "https://placeholder.com/tap1",
    gallery: ["https://placeholder.com/tap1-1"],
    description: "美的抽拉式厨房龙头，360°旋转，冷热双控",
    sales: 1500,
    ratings: 4.5,
  },

  // 42 灯饰照明（2个商品）
  {
    id: 4201,
    categoryId: 42,
    brandId: 5, // 小米
    name: "客厅吸顶灯 三色变光",
    mainImg: "https://placeholder.com/light1",
    gallery: [
      "https://placeholder.com/light1-1",
      "https://placeholder.com/light1-2",
    ],
    description: "小米客厅吸顶灯，48W三色变光，遥控+APP双控，LED长寿命",
    sales: 2200,
    ratings: 4.7,
  },
  {
    id: 4202,
    categoryId: 42,
    brandId: 8, // 美的
    name: "台灯 护眼无频闪",
    mainImg: "https://placeholder.com/light2",
    gallery: ["https://placeholder.com/light2-1"],
    description: "美的护眼台灯，无频闪防蓝光，多档亮度调节，USB供电",
    sales: 3000,
    ratings: 4.8,
  },

  // 43 五金工具（2个商品）
  {
    id: 4301,
    categoryId: 43,
    brandId: 14, // 新增品牌：博世
    name: "家用电钻套装",
    mainImg: "https://placeholder.com/tools1",
    gallery: [
      "https://placeholder.com/tools1-1",
      "https://placeholder.com/tools1-2",
    ],
    description: "博世12V家用电钻，双速调节，正反转，含批头钻头配件",
    sales: 1600,
    ratings: 4.8,
  },
  {
    id: 4302,
    categoryId: 43,
    brandId: 14, // 博世
    name: "多功能工具箱 32件套",
    mainImg: "https://placeholder.com/tools2",
    gallery: ["https://placeholder.com/tools2-1"],
    description: "博世32件家用工具箱，合金钢材质，便携收纳，日常维修够用",
    sales: 2100,
    ratings: 4.7,
  },

  // 44 卧室家电（3个商品）
  {
    id: 4401,
    categoryId: 44,
    brandId: 5, // 小米
    name: "智能加湿器 4L",
    mainImg: "https://placeholder.com/humidifier1",
    gallery: [
      "https://placeholder.com/humidifier1-1",
      "https://placeholder.com/humidifier1-2",
    ],
    description: "小米智能加湿器，4L大容量，静音加湿，APP远程控制",
    sales: 2500,
    ratings: 4.6,
  },
  {
    id: 4402,
    categoryId: 44,
    brandId: 8, // 美的
    name: "除螨仪 家用床铺",
    mainImg: "https://placeholder.com/mite1",
    gallery: ["https://placeholder.com/mite1-1"],
    description: "美的除螨仪，UV杀菌+拍打吸尘，HEPA过滤，适配床铺沙发",
    sales: 1900,
    ratings: 4.7,
  },
  {
    id: 4403,
    categoryId: 44,
    brandId: 9, // 海尔
    name: "卧室空气净化器",
    mainImg: "https://placeholder.com/air1",
    gallery: [
      "https://placeholder.com/air1-1",
      "https://placeholder.com/air1-2",
    ],
    description: "海尔空气净化器，除甲醛PM2.5，静音设计，适配卧室",
    sales: 1200,
    ratings: 4.6,
  },

  // 45 客厅家具（2个商品）
  {
    id: 4501,
    categoryId: 45,
    brandId: 15, // 新增品牌：全友
    name: "北欧布艺三人沙发",
    mainImg: "https://placeholder.com/sofa1",
    gallery: [
      "https://placeholder.com/sofa1-1",
      "https://placeholder.com/sofa1-2",
    ],
    description: "全友北欧布艺沙发，实木框架，耐磨布艺，三人位设计",
    sales: 850,
    ratings: 4.7,
  },
  {
    id: 4502,
    categoryId: 45,
    brandId: 15, // 全友
    name: "茶几 伸缩储物款",
    mainImg: "https://placeholder.com/table1",
    gallery: ["https://placeholder.com/table1-1"],
    description: "全友伸缩茶几，板材材质，储物空间，现代简约风格",
    sales: 1100,
    ratings: 4.6,
  },

  /************************** 汽车用品类（分类ID：5）**************************/
  // 51 全新整车（2个商品）
  {
    id: 5101,
    categoryId: 51,
    brandId: 10, // 丰田
    name: "新能源家用轿车",
    mainImg: "https://placeholder.com/car1",
    gallery: [
      "https://placeholder.com/car1-1",
      "https://placeholder.com/car1-2",
    ],
    description: "丰田纯电家用轿车，500km续航，快充功能，5座设计（mock数据）",
    sales: 320,
    ratings: 4.8,
  },
  {
    id: 5102,
    categoryId: 51,
    brandId: 10, // 丰田
    name: "燃油SUV",
    mainImg: "https://placeholder.com/car2",
    gallery: ["https://placeholder.com/car2-1"],
    description: "丰田1.5T燃油SUV，前驱，车联网功能，5座布局（mock数据）",
    sales: 280,
    ratings: 4.7,
  },

  // 52 车载汽车（3个商品）
  {
    id: 5201,
    categoryId: 52,
    brandId: 5, // 小米
    name: "车载吸尘器 无线",
    mainImg: "https://placeholder.com/carvac1",
    gallery: ["https://placeholder.com/carvac1-1"],
    description: "小米无线车载吸尘器，强劲吸力，20分钟续航，多吸嘴配件",
    sales: 3500,
    ratings: 4.6,
  },
  {
    id: 5202,
    categoryId: 52,
    brandId: 6, // 华为
    name: "行车记录仪 2K",
    mainImg: "https://placeholder.com/dvr1",
    gallery: [
      "https://placeholder.com/dvr1-1",
      "https://placeholder.com/dvr1-2",
    ],
    description: "华为2K行车记录仪，夜视增强，停车监控，支持TF卡存储",
    sales: 2800,
    ratings: 4.7,
  },
  {
    id: 5203,
    categoryId: 52,
    brandId: 1, // 苹果
    name: "车载手机支架（磁吸）",
    mainImg: "https://placeholder.com/holder1",
    gallery: ["https://placeholder.com/holder1-1"],
    description: "苹果磁吸车载支架，适配iPhone磁吸系列，360°旋转",
    sales: 4200,
    ratings: 4.8,
  },

  // 53 维修保养（2个商品）
  {
    id: 5301,
    categoryId: 53,
    brandId: 16, // 新增品牌：壳牌
    name: "全合成机油 4L",
    mainImg: "https://placeholder.com/oil1",
    gallery: ["https://placeholder.com/oil1-1"],
    description: "壳牌5W-30全合成机油，4L装，适配多车型发动机",
    sales: 2500,
    ratings: 4.8,
  },
  {
    id: 5302,
    categoryId: 53,
    brandId: 5, // 小米
    name: "汽车应急电源",
    mainImg: "https://placeholder.com/power1",
    gallery: [
      "https://placeholder.com/power1-1",
      "https://placeholder.com/power1-2",
    ],
    description: "小米12000mAh汽车应急电源，亏电启动，支持USB快充",
    sales: 1800,
    ratings: 4.7,
  },

  // 54 汽车装饰（3个商品）
  {
    id: 5401,
    categoryId: 54,
    brandId: 10, // 丰田
    name: "全包围脚垫",
    mainImg: "https://placeholder.com/mat1",
    gallery: ["https://placeholder.com/mat1-1"],
    description: "丰田专用全包围脚垫，TPE材质，防滑耐磨，可水洗",
    sales: 3200,
    ratings: 4.6,
  },
  {
    id: 5402,
    categoryId: 54,
    brandId: 5, // 小米
    name: "车载香薰摆件",
    mainImg: "https://placeholder.com/fragrance1",
    gallery: ["https://placeholder.com/fragrance1-1"],
    description: "小米车载香薰，持久留香，多香型可选，中控台摆放",
    sales: 4500,
    ratings: 4.7,
  },
  {
    id: 5403,
    categoryId: 54,
    brandId: 6, // 华为
    name: "汽车遮阳挡（前挡）",
    mainImg: "https://placeholder.com/shade1",
    gallery: [
      "https://placeholder.com/shade1-1",
      "https://placeholder.com/shade1-2",
    ],
    description: "华为汽车遮阳挡，防晒隔热，折叠设计，适配多数车型",
    sales: 2900,
    ratings: 4.5,
  },

  /************************** 电脑办公类（分类ID：6）**************************/
  // 61 平板电脑（3个商品）
  {
    id: 6101,
    categoryId: 61,
    brandId: 1, // 苹果
    name: "iPad Pro 11英寸",
    mainImg: "https://placeholder.com/tablet1",
    gallery: [
      "https://placeholder.com/tablet1-1",
      "https://placeholder.com/tablet1-2",
    ],
    description:
      "苹果iPad Pro 11英寸，M2芯片，Liquid视网膜屏，支持Apple Pencil",
    sales: 1900,
    ratings: 4.9,
  },
  {
    id: 6102,
    categoryId: 61,
    brandId: 5, // 小米
    name: "学习平板（含手写笔）",
    mainImg: "https://placeholder.com/tablet2",
    gallery: ["https://placeholder.com/tablet2-1"],
    description: "小米学习平板，护眼屏，配套手写笔，分屏学习功能",
    sales: 2500,
    ratings: 4.7,
  },
  {
    id: 6103,
    categoryId: 61,
    brandId: 6, // 华为
    name: "华为MatePad 11.5",
    mainImg: "https://placeholder.com/tablet3",
    gallery: [
      "https://placeholder.com/tablet3-1",
      "https://placeholder.com/tablet3-2",
    ],
    description: "华为MatePad 11.5，鸿蒙系统，柔光版屏幕，办公学习两用",
    sales: 2200,
    ratings: 4.8,
  },

  // 62 笔记本（3个商品）
  {
    id: 6201,
    categoryId: 62,
    brandId: 1, // 苹果
    name: "MacBook Pro 16",
    mainImg: require("@/assets/cate2.jpg"),
    gallery: [
      "https://placeholder.com/macbook1-1",
      "https://placeholder.com/macbook1-2",
    ],
    description:
      "苹果MacBook Pro 16英寸，M1 Pro芯片，32GB内存，1TB SSD，专业工作站",
    sales: 1050,
    ratings: 4.9,
  },
  {
    id: 6202,
    categoryId: 62,
    brandId: 17, // 新增品牌：联想
    name: "小新Pro16 轻薄本",
    mainImg: "https://placeholder.com/laptop1",
    gallery: ["https://placeholder.com/laptop1-1"],
    description: "联想小新Pro16，锐龙7处理器，16GB内存，512GB SSD，2.5K大屏",
    sales: 2100,
    ratings: 4.7,
  },
  {
    id: 6203,
    categoryId: 62,
    brandId: 17, // 联想
    name: "拯救者Y9000P 游戏本",
    mainImg: "https://placeholder.com/laptop2",
    gallery: [
      "https://placeholder.com/laptop2-1",
      "https://placeholder.com/laptop2-2",
    ],
    description: "联想拯救者Y9000P，酷睿i7，RTX4060显卡，16GB内存，1TB SSD",
    sales: 1500,
    ratings: 4.8,
  },

  // 63 硬盘（3个商品）
  {
    id: 6301,
    categoryId: 63,
    brandId: 4, // NVIDIA（原数据关联，实际可替换为希捷/西数）
    name: "NVIDIA RTX 3080",
    mainImg: require("@/assets/cate3.jpg"),
    gallery: [
      "https://placeholder.com/rtx3080-1",
      "https://placeholder.com/rtx3080-2",
    ],
    description:
      "NVIDIA RTX 3080显卡，10GB GDDR6X显存，光追支持，游戏/创作利器",
    sales: 2170,
    ratings: 4.8,
  },
  {
    id: 6302,
    categoryId: 63,
    brandId: 13, // 金士顿
    name: "移动固态硬盘 1TB",
    mainImg: "https://placeholder.com/ssd1",
    gallery: ["https://placeholder.com/ssd1-1"],
    description: "金士顿1TB移动固态硬盘，Type-C接口，高速读写，小巧便携",
    sales: 2800,
    ratings: 4.7,
  },
  {
    id: 6303,
    categoryId: 63,
    brandId: 13, // 金士顿
    name: "机械硬盘 4TB",
    mainImg: "https://placeholder.com/hdd1",
    gallery: [
      "https://placeholder.com/hdd1-1",
      "https://placeholder.com/hdd1-2",
    ],
    description: "金士顿4TB机械硬盘，SATA接口，5400转，适合存储备份",
    sales: 1900,
    ratings: 4.6,
  },
];
