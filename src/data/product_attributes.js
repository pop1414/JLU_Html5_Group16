// 商品公共属性字典：覆盖服装/数码/家电/家具/汽车等全品类，属性ID唯一且递进
export default [
  /************************** 基础通用属性 **************************/
  {
    id: 1,
    name: "颜色",
    values: [
      { id: 101, label: "黑色" },
      { id: 102, label: "白色" },
      { id: 103, label: "银色" },
      { id: 104, label: "蓝色" },
      { id: 105, label: "红色" },
      { id: 106, label: "灰色" },
      { id: 107, label: "粉色" },
      { id: 108, label: "绿色" },
      { id: 109, label: "黄色" },
      { id: 110, label: "紫色" },
    ],
  },

  /************************** 服装类专属属性 **************************/
  {
    id: 2,
    name: "尺码",
    values: [
      { id: 201, label: "XS" },
      { id: 202, label: "S" },
      { id: 203, label: "M" },
      { id: 204, label: "L" },
      { id: 205, label: "XL" },
      { id: 206, label: "XXL" },
      { id: 207, label: "XXXL" },
    ],
  },
  {
    id: 3,
    name: "版型",
    values: [
      { id: 301, label: "修身" },
      { id: 302, label: "宽松" },
      { id: 303, label: "直筒" },
      { id: 304, label: "微喇" },
      { id: 305, label: "束脚" },
      { id: 306, label: "常规" },
    ],
  },
  {
    id: 4,
    name: "面料",
    values: [
      { id: 401, label: "纯棉" },
      { id: 402, label: "聚酯纤维" },
      { id: 403, label: "棉混纺" },
      { id: 404, label: "牛仔棉" },
      { id: 405, label: "羊羔绒" },
      { id: 406, label: "摇粒绒" },
      { id: 407, label: "氨纶" },
    ],
  },
  {
    id: 5,
    name: "适用季节",
    values: [
      { id: 501, label: "春季" },
      { id: 502, label: "夏季" },
      { id: 503, label: "秋季" },
      { id: 504, label: "冬季" },
      { id: 505, label: "四季通用" },
    ],
  },

  /************************** 数码类专属属性 **************************/
  {
    id: 6,
    name: "存储容量",
    values: [
      { id: 601, label: "64GB" },
      { id: 602, label: "128GB" },
      { id: 603, label: "256GB" },
      { id: 604, label: "512GB" },
      { id: 605, label: "1TB" },
      { id: 606, label: "2TB" },
    ],
  },
  {
    id: 7,
    name: "运行内存",
    values: [
      { id: 701, label: "4GB" },
      { id: 702, label: "8GB" },
      { id: 703, label: "16GB" },
      { id: 704, label: "32GB" },
      { id: 705, label: "64GB" },
    ],
  },
  {
    id: 8,
    name: "屏幕尺寸",
    values: [
      { id: 801, label: "5.5英寸" },
      { id: 802, label: "6.1英寸" },
      { id: 803, label: "6.7英寸" },
      { id: 804, label: "11英寸" },
      { id: 805, label: "14英寸" },
      { id: 806, label: "16英寸" },
      { id: 807, label: "55英寸" },
      { id: 808, label: "65英寸" },
    ],
  },
  {
    id: 9,
    name: "功率",
    values: [
      { id: 901, label: "20W" },
      { id: 902, label: "48W" },
      { id: 903, label: "120W" },
      { id: 904, label: "1500W" },
      { id: 905, label: "3000W" },
    ],
  },
  {
    id: 10,
    name: "显卡型号",
    values: [
      { id: 1001, label: "RTX 3060" },
      { id: 1002, label: "RTX 3080" },
      { id: 1003, label: "RTX 4060" },
      { id: 1004, label: "RTX 4090" },
      { id: 1005, label: "集成显卡" },
    ],
  },

  /************************** 家电类专属属性 **************************/
  {
    id: 11,
    name: "空调匹数",
    values: [
      { id: 1101, label: "1匹" },
      { id: 1102, label: "1.5匹" },
      { id: 1103, label: "2匹" },
      { id: 1104, label: "3匹" },
    ],
  },
  {
    id: 12,
    name: "能效等级",
    values: [
      { id: 1201, label: "一级能效" },
      { id: 1202, label: "二级能效" },
      { id: 1203, label: "三级能效" },
    ],
  },
  {
    id: 13,
    name: "容量（L/公斤）",
    values: [
      { id: 1301, label: "4L" },
      { id: 1302, label: "8KG" },
      { id: 1303, label: "10KG" },
      { id: 1304, label: "16L" },
      { id: 1305, label: "220L" },
      { id: 1306, label: "450L" },
      { id: 1307, label: "32L" },
    ],
  },
  {
    id: 14,
    name: "洗衣机类型",
    values: [
      { id: 1401, label: "滚筒" },
      { id: 1402, label: "波轮" },
    ],
  },
  {
    id: 15,
    name: "冰箱门型",
    values: [
      { id: 1501, label: "双开门" },
      { id: 1502, label: "三门" },
      { id: 1503, label: "单门" },
    ],
  },

  /************************** 家具家装类专属属性 **************************/
  {
    id: 16,
    name: "家具材质",
    values: [
      { id: 1601, label: "实木" },
      { id: 1602, label: "板材" },
      { id: 1603, label: "布艺" },
      { id: 1604, label: "金属" },
      { id: 1605, label: "304不锈钢" },
      { id: 1606, label: "铜" },
    ],
  },
  {
    id: 17,
    name: "风格",
    values: [
      { id: 1701, label: "北欧" },
      { id: 1702, label: "现代简约" },
      { id: 1703, label: "复古" },
      { id: 1704, label: "商务" },
      { id: 1705, label: "休闲" },
    ],
  },

  /************************** 汽车用品类专属属性 **************************/
  {
    id: 18,
    name: "汽车类型",
    values: [
      { id: 1801, label: "纯电轿车" },
      { id: 1802, label: "燃油SUV" },
      { id: 1803, label: "混动车型" },
    ],
  },
  {
    id: 19,
    name: "排量",
    values: [
      { id: 1901, label: "1.5T" },
      { id: 1902, label: "2.0T" },
      { id: 1903, label: "3.0L" },
    ],
  },
  {
    id: 20,
    name: "续航里程",
    values: [
      { id: 2001, label: "300km" },
      { id: 2002, label: "500km" },
      { id: 2003, label: "600km" },
    ],
  },
];
