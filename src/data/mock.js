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
  // 11 外套
  {
    id: 1101,
    categoryId: 11,
    name: "轻量连帽防风外套",
    price: 259,
    img: "",
    description: "春秋通勤防风外套，轻薄不闷热。",
    specs: [
      "面料: 聚酯纤维",
      "版型: 常规",
      "适用季节: 春秋",
      "特点: 防风/可收纳",
    ],
  },
  {
    id: 1102,
    categoryId: 11,
    name: "羊羔绒加厚夹克",
    price: 399,
    img: "",
    description: "保暖羊羔绒内里，冬季出行更舒适。",
    specs: ["面料: 棉混纺", "内里: 羊羔绒", "版型: 宽松", "特点: 保暖/耐磨"],
  },

  // 12 T恤
  {
    id: 1201,
    categoryId: 12,
    name: "纯棉圆领基础T恤",
    price: 79,
    img: "",
    description: "高支纯棉，日常百搭不挑人。",
    specs: ["材质: 100%棉", "领型: 圆领", "厚度: 常规", "特点: 亲肤/不易变形"],
  },
  {
    id: 1202,
    categoryId: 12,
    name: "宽松落肩印花T恤",
    price: 109,
    img: "",
    description: "潮流印花设计，落肩更显随性。",
    specs: ["材质: 棉+氨纶", "版型: 宽松", "工艺: 印花", "特点: 透气/易打理"],
  },

  // 13 休闲裤
  {
    id: 1301,
    categoryId: 13,
    name: "直筒休闲长裤",
    price: 169,
    img: "",
    description: "直筒版型修饰腿型，通勤休闲两用。",
    specs: ["面料: 棉混纺", "版型: 直筒", "腰型: 松紧+抽绳", "特点: 易搭配"],
  },
  {
    id: 1302,
    categoryId: 13,
    name: "弹力束脚运动休闲裤",
    price: 149,
    img: "",
    description: "弹力面料活动自如，束脚更利落。",
    specs: [
      "面料: 涤纶+氨纶",
      "版型: 束脚",
      "适用: 运动/通勤",
      "特点: 弹力/快干",
    ],
  },

  // 14 牛仔裤
  {
    id: 1401,
    categoryId: 14,
    name: "经典直筒牛仔裤",
    price: 199,
    img: "",
    description: "经典水洗色，直筒不挑鞋。",
    specs: ["面料: 牛仔棉", "版型: 直筒", "工艺: 水洗", "特点: 耐穿/百搭"],
  },
  {
    id: 1402,
    categoryId: 14,
    name: "高腰微喇牛仔裤",
    price: 229,
    img: "",
    description: "高腰显腿长，微喇更复古。",
    specs: ["面料: 弹力牛仔", "版型: 微喇", "腰型: 高腰", "特点: 显瘦/复古"],
  },

  // 15 衬衫
  {
    id: 1501,
    categoryId: 15,
    name: "免烫商务衬衫",
    price: 159,
    img: "",
    description: "免烫易打理，商务通勤更省心。",
    specs: ["材质: 棉混纺", "版型: 修身", "工艺: 免烫", "特点: 抗皱/透气"],
  },
  {
    id: 1502,
    categoryId: 15,
    name: "条纹宽松衬衫",
    price: 139,
    img: "",
    description: "条纹元素清爽耐看，单穿叠穿都好看。",
    specs: ["材质: 棉", "版型: 宽松", "风格: 休闲", "特点: 百搭/舒适"],
  },

  // 21 手机通讯
  {
    id: 2101,
    categoryId: 21,
    name: "旗舰5G智能手机 256GB",
    price: 2999,
    img: "",
    description: "性能均衡的5G机型，日常拍照与续航兼顾。",
    specs: ["屏幕: 6.7英寸", "存储: 256GB", "电池: 5000mAh", "网络: 5G双卡"],
  },
  {
    id: 2102,
    categoryId: 21,
    name: "长续航5G手机 128GB",
    price: 1699,
    img: "",
    description: "大电池+轻度游戏优化，适合学生党。",
    specs: ["屏幕: 6.6英寸", "存储: 128GB", "电池: 6000mAh", "特点: 快充"],
  },

  // 22 手机配件
  {
    id: 2201,
    categoryId: 22,
    name: "20W快充充电套装",
    price: 69,
    img: "",
    description: "适配多设备快充，含充电头+数据线。",
    specs: ["功率: 20W", "接口: USB-C", "线长: 1m", "支持: PD/QC"],
  },
  {
    id: 2202,
    categoryId: 22,
    name: "磁吸无线充电器",
    price: 129,
    img: "",
    description: "磁吸对位更稳定，桌面充电更方便。",
    specs: ["功率: 15W", "类型: 无线充", "特点: 磁吸对位", "兼容: Qi设备"],
  },

  // 23 摄影摄像
  {
    id: 2301,
    categoryId: 23,
    name: "入门微单相机套机",
    price: 3699,
    img: "",
    description: "轻便易用，适合旅行与日常记录。",
    specs: ["传感器: APS-C", "视频: 4K", "对焦: 人眼追焦", "镜头: 15-45mm"],
  },
  {
    id: 2302,
    categoryId: 23,
    name: "运动相机防抖版",
    price: 1899,
    img: "",
    description: "强防抖+防水机身，户外拍摄更稳。",
    specs: ["视频: 4K60", "防抖: 电子防抖", "防水: 10m", "续航: 90分钟"],
  },

  // 24 影音娱乐
  {
    id: 2401,
    categoryId: 24,
    name: "主动降噪蓝牙耳机",
    price: 299,
    img: "",
    description: "通勤降噪更安静，支持多设备切换。",
    specs: ["降噪: ANC", "续航: 30h(含盒)", "连接: 蓝牙5.3", "特点: 低延迟"],
  },
  {
    id: 2402,
    categoryId: 24,
    name: "便携蓝牙音箱",
    price: 199,
    img: "",
    description: "户外便携，低音增强，支持防水。",
    specs: ["功率: 20W", "防水: IPX7", "续航: 12h", "连接: 蓝牙"],
  },

  // 25 数码配件
  {
    id: 2501,
    categoryId: 25,
    name: "高速U盘 128GB",
    price: 79,
    img: "",
    description: "USB3.2高速传输，学习办公够用。",
    specs: ["容量: 128GB", "接口: USB-A", "标准: USB3.2", "特点: 即插即用"],
  },
  {
    id: 2502,
    categoryId: 25,
    name: "Type-C多功能扩展坞",
    price: 149,
    img: "",
    description: "一拖多扩展接口，笔记本办公更方便。",
    specs: [
      "接口: HDMI/USB/PD",
      "支持: 4K输出",
      "供电: PD快充",
      "适配: Type-C设备",
    ],
  },

  // 31 电视
  {
    id: 3101,
    categoryId: 31,
    name: "55英寸4K智能电视",
    price: 2199,
    img: "",
    description: "4K超清+语音遥控，客厅观影更沉浸。",
    specs: ["尺寸: 55英寸", "分辨率: 4K", "系统: 智能系统", "接口: HDMI/USB"],
  },
  {
    id: 3102,
    categoryId: 31,
    name: "65英寸高刷电视",
    price: 3299,
    img: "",
    description: "120Hz高刷新率，游戏观影都顺滑。",
    specs: ["尺寸: 65英寸", "刷新率: 120Hz", "分辨率: 4K", "特色: MEMC"],
  },

  // 32 空调
  {
    id: 3201,
    categoryId: 32,
    name: "1.5匹变频冷暖空调",
    price: 2799,
    img: "",
    description: "变频省电，夏季制冷冬季制热。",
    specs: ["匹数: 1.5P", "类型: 变频", "功能: 冷暖", "能效: 一级"],
  },
  {
    id: 3202,
    categoryId: 32,
    name: "新风空调挂机",
    price: 3499,
    img: "",
    description: "带新风换气，室内空气更清新。",
    specs: ["匹数: 1.5P", "功能: 新风", "类型: 变频", "特色: 自清洁"],
  },

  // 33 洗衣机
  {
    id: 3301,
    categoryId: 33,
    name: "10KG变频滚筒洗衣机",
    price: 1999,
    img: "",
    description: "大容量滚筒，支持多种洗涤程序。",
    specs: ["容量: 10KG", "类型: 滚筒", "电机: 变频", "功能: 蒸汽除菌"],
  },
  {
    id: 3302,
    categoryId: 33,
    name: "波轮洗衣机 8KG",
    price: 999,
    img: "",
    description: "操作简单，适合租房与小家庭。",
    specs: ["容量: 8KG", "类型: 波轮", "特色: 免清洗", "功能: 预约"],
  },

  // 34 冰箱
  {
    id: 3401,
    categoryId: 34,
    name: "双开门风冷冰箱 450L",
    price: 2499,
    img: "",
    description: "风冷无霜，大容量囤货更轻松。",
    specs: ["容量: 450L", "制冷: 风冷", "门型: 对开门", "特点: 无霜"],
  },
  {
    id: 3402,
    categoryId: 34,
    name: "三门节能冰箱 220L",
    price: 1299,
    img: "",
    description: "小户型友好，冷藏冷冻分区清晰。",
    specs: ["容量: 220L", "门型: 三门", "能效: 二级", "特点: 静音"],
  },

  // 35 厨卫大电
  {
    id: 3501,
    categoryId: 35,
    name: "蒸烤一体机 32L",
    price: 899,
    img: "",
    description: "蒸烤一体更省空间，适合家庭烹饪。",
    specs: ["容量: 32L", "功能: 蒸/烤", "控温: 100-230℃", "特点: 预约"],
  },
  {
    id: 3502,
    categoryId: 35,
    name: "侧吸式抽油烟机",
    price: 1099,
    img: "",
    description: "大吸力更贴近油烟源，厨房更清爽。",
    specs: ["风量: 20m³/min", "类型: 侧吸", "噪音: 低噪", "清洗: 易拆洗"],
  },

  // 41 厨房卫浴
  {
    id: 4101,
    categoryId: 41,
    name: "恒温花洒套装",
    price: 299,
    img: "",
    description: "恒温防烫更安全，淋浴体验升级。",
    specs: ["材质: 铜主体", "功能: 恒温", "出水: 顶喷+手持", "安装: 标准接口"],
  },
  {
    id: 4102,
    categoryId: 41,
    name: "304不锈钢水槽套餐",
    price: 399,
    img: "",
    description: "加厚水槽耐用耐磨，含龙头下水。",
    specs: ["材质: 304不锈钢", "工艺: 拉丝", "配件: 龙头/下水", "特点: 易清洁"],
  },

  // 42 灯饰照明
  {
    id: 4201,
    categoryId: 42,
    name: "客厅吸顶灯 三色变光",
    price: 159,
    img: "",
    description: "三色调光，客厅卧室都适用。",
    specs: ["功率: 48W", "色温: 三色", "控制: 遥控/墙控", "寿命: 长寿命LED"],
  },
  {
    id: 4202,
    categoryId: 42,
    name: "台灯 护眼无频闪",
    price: 99,
    img: "",
    description: "护眼照明，学习办公更舒适。",
    specs: ["光源: LED", "特点: 无频闪", "亮度: 多档调节", "供电: USB/插电"],
  },

  // 43 五金工具
  {
    id: 4301,
    categoryId: 43,
    name: "家用电钻套装",
    price: 219,
    img: "",
    description: "一机多用，安装打孔更轻松。",
    specs: ["电压: 12V", "档位: 双速", "配件: 批头/钻头", "特点: 正反转"],
  },
  {
    id: 4302,
    categoryId: 43,
    name: "多功能工具箱 32件套",
    price: 129,
    img: "",
    description: "常用工具齐全，日常维修够用。",
    specs: ["套数: 32件", "材质: 合金钢", "收纳: 便携箱", "用途: 家用维修"],
  },

  // 44 卧室家电
  {
    id: 4401,
    categoryId: 44,
    name: "智能加湿器 4L",
    price: 149,
    img: "",
    description: "静音加湿，卧室更舒适。",
    specs: ["容量: 4L", "噪音: 低噪", "功能: 定时", "适用: 20-30㎡"],
  },
  {
    id: 4402,
    categoryId: 44,
    name: "除螨仪 家用床铺",
    price: 199,
    img: "",
    description: "拍打吸尘+UV，床铺清洁更省心。",
    specs: [
      "功能: UV/拍打/吸尘",
      "过滤: HEPA",
      "适用: 床垫/沙发",
      "功率: 400W",
    ],
  },

  // 45 客厅家具
  {
    id: 4501,
    categoryId: 45,
    name: "北欧布艺三人沙发",
    price: 1599,
    img: "",
    description: "舒适坐感，耐磨布艺易打理。",
    specs: ["材质: 布艺", "结构: 实木框架", "座位: 三人位", "风格: 北欧"],
  },
  {
    id: 4502,
    categoryId: 45,
    name: "茶几 伸缩储物款",
    price: 699,
    img: "",
    description: "伸缩台面+储物空间，客厅更整洁。",
    specs: ["材质: 板材", "功能: 伸缩/储物", "风格: 现代", "特点: 易清洁"],
  },

  // 51 全新整车
  {
    id: 5101,
    categoryId: 51,
    name: "新能源家用轿车（示例）",
    price: 129800,
    img: "",
    description: "通勤家用取向，空间与续航兼顾（mock数据）。",
    specs: ["类型: 纯电", "续航: 500km(标称)", "座位: 5座", "特点: 快充"],
  },
  {
    id: 5102,
    categoryId: 51,
    name: "燃油SUV（示例）",
    price: 159800,
    img: "",
    description: "城市SUV，适合周末出行（mock数据）。",
    specs: ["排量: 1.5T", "驱动: 前驱", "座位: 5座", "特点: 车联网"],
  },

  // 52 车载汽车
  {
    id: 5201,
    categoryId: 52,
    name: "车载吸尘器 无线",
    price: 129,
    img: "",
    description: "车内清洁好帮手，小巧便携。",
    specs: ["供电: 无线", "吸力: 强劲", "续航: 20min", "配件: 多吸嘴"],
  },
  {
    id: 5202,
    categoryId: 52,
    name: "行车记录仪 2K",
    price: 219,
    img: "",
    description: "2K清晰录制，夜视增强。",
    specs: ["分辨率: 2K", "功能: 夜视", "存储: 支持TF卡", "特色: 停车监控"],
  },

  // 53 维修保养
  {
    id: 5301,
    categoryId: 53,
    name: "全合成机油 4L",
    price: 219,
    img: "",
    description: "全合成配方，提升发动机保护。",
    specs: ["规格: 4L", "类型: 全合成", "黏度: 5W-30", "适配: 多车型"],
  },
  {
    id: 5302,
    categoryId: 53,
    name: "汽车应急电源",
    price: 299,
    img: "",
    description: "亏电救援更安心，支持多种输出。",
    specs: [
      "容量: 12000mAh",
      "输出: USB/点烟器",
      "功能: 启动电源",
      "安全: 多重保护",
    ],
  },

  // 54 汽车装饰
  {
    id: 5401,
    categoryId: 54,
    name: "全包围脚垫",
    price: 199,
    img: "",
    description: "贴合车型，耐磨易清洁。",
    specs: ["材质: TPE/皮革", "覆盖: 全包围", "特点: 防滑", "清洁: 可水洗"],
  },
  {
    id: 5402,
    categoryId: 54,
    name: "车载香薰摆件",
    price: 79,
    img: "",
    description: "清新香氛，提升车内氛围。",
    specs: ["类型: 香薰", "香型: 多选", "摆放: 中控台", "特点: 持久留香"],
  },

  // 61 平板电脑
  {
    id: 6101,
    categoryId: 61,
    name: "11英寸平板 128GB",
    price: 1499,
    img: "",
    description: "追剧学习两用，轻薄便携。",
    specs: ["屏幕: 11英寸", "存储: 128GB", "网络: WiFi", "续航: 长续航"],
  },
  {
    id: 6102,
    categoryId: 61,
    name: "学习平板（含手写笔）",
    price: 1899,
    img: "",
    description: "记笔记更顺手，适合上课学习。",
    specs: ["配件: 手写笔", "屏幕: 护眼", "功能: 分屏", "适用: 学习/办公"],
  },

  // 62 笔记本
  {
    id: 6201,
    categoryId: 62,
    name: "轻薄本 14英寸",
    price: 3999,
    img: "",
    description: "轻薄便携，适合日常办公与学习。",
    specs: ["屏幕: 14英寸", "内存: 16GB", "硬盘: 512GB SSD", "重量: 轻薄"],
  },
  {
    id: 6202,
    categoryId: 62,
    name: "性能本 15.6英寸",
    price: 5599,
    img: "",
    description: "高性能配置，剪辑游戏更顺畅。",
    specs: [
      "屏幕: 15.6英寸",
      "内存: 16GB",
      "硬盘: 1TB SSD",
      "显卡: 独显(示例)",
    ],
  },

  // 63 硬盘
  {
    id: 6301,
    categoryId: 63,
    name: "移动固态硬盘 1TB",
    price: 459,
    img: "",
    description: "高速读写，小巧便携，适合备份。",
    specs: ["容量: 1TB", "类型: SSD", "接口: Type-C", "特点: 高速"],
  },
  {
    id: 6302,
    categoryId: 63,
    name: "机械硬盘 4TB",
    price: 499,
    img: "",
    description: "大容量存储，适合家庭/监控备份。",
    specs: ["容量: 4TB", "类型: HDD", "接口: SATA", "转速: 5400rpm"],
  },
];

export const categories = [
  {
    id: 1,
    name: "服装",
    children: [
      { id: 11, name: "外套", img: require("@/assets/c11.jpg") },
      { id: 12, name: "T恤", img: require("@/assets/c12.jpg") },
      { id: 13, name: "休闲裤", img: require("@/assets/c13.jpg") },
      { id: 14, name: "牛仔裤", img: require("@/assets/c14.jpg") },
      { id: 15, name: "衬衫", img: require("@/assets/c15.jpg") },
    ],
  },
  {
    id: 2,
    name: "手机数码",
    children: [
      { id: 21, name: "手机通讯", img: require("@/assets/c21.jpg") },
      { id: 22, name: "手机配件", img: require("@/assets/c22.jpg") },
      { id: 23, name: "摄影摄像", img: require("@/assets/c23.jpg") },
      { id: 24, name: "影音娱乐", img: require("@/assets/c24.jpg") },
      { id: 25, name: "数码配件", img: require("@/assets/c25.jpg") },
    ],
  },
  {
    id: 3,
    name: "家用电器",
    children: [
      { id: 31, name: "电视", img: require("@/assets/c31.jpg") },
      { id: 32, name: "空调", img: require("@/assets/c32.jpg") },
      { id: 33, name: "洗衣机", img: require("@/assets/c33.jpg") },
      { id: 34, name: "冰箱", img: require("@/assets/c34.jpg") },
      { id: 35, name: "厨卫大电", img: require("@/assets/c35.jpg") },
    ],
  },
  {
    id: 4,
    name: "家具家装",
    children: [
      { id: 41, name: "厨房卫浴", img: require("@/assets/c41.jpg") },
      { id: 42, name: "灯饰照明", img: require("@/assets/c42.jpg") },
      { id: 43, name: "五金工具", img: require("@/assets/c43.jpg") },
      { id: 44, name: "卧室家电", img: require("@/assets/c44.jpg") },
      { id: 45, name: "客厅家具", img: require("@/assets/c45.jpg") },
    ],
  },
  {
    id: 5,
    name: "汽车用品",
    children: [
      { id: 51, name: "全新整车", img: require("@/assets/c51.jpg") },
      { id: 52, name: "车载汽车", img: require("@/assets/c52.jpg") },
      { id: 53, name: "维修保养", img: require("@/assets/c53.jpg") },
      { id: 54, name: "汽车装饰", img: require("@/assets/c54.jpg") },
    ],
  },
  {
    id: 6,
    name: "电脑办公",
    children: [
      { id: 61, name: "平板电脑", img: require("@/assets/c61.jpg") },
      { id: 62, name: "笔记本", img: require("@/assets/c62.jpg") },
      { id: 63, name: "硬盘", img: require("@/assets/c63.jpg") },
    ],
  },
];

// 其他如 brands, orders 等
