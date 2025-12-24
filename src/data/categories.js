// 多级分类结构（保持原有分类逻辑）
export default [
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
