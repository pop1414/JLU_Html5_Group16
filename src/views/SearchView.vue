<template>
  <!-- 使用 van-nav-bar 作为顶部导航，包含返回箭头和搜索框 -->
  <van-nav-bar fixed>
    <template #left>
      <van-icon name="arrow-left" size="20" @click="handleBack" />
    </template>
    <template #title>
      <!-- 将 van-search 放在 title 槽位，作为搜索框 -->
      <van-search
        v-model="query"
        placeholder="搜索商品"
        shape="round"
        :show-action="false"
        @search="handleSearch"
        @input="handleInput"
      />
    </template>
  </van-nav-bar>

  <!-- 其余内容：建议、历史、热门 -->
  <div class="search-content">
    <!-- 建议、历史、热门：点击跳转到商品列表 -->
    <van-cell-group v-if="suggestions.length > 0" title="建议">
      <van-cell
        v-for="item in suggestions"
        :key="item"
        :title="item"
        @click="searchItem(item)"
      />
    </van-cell-group>
    <van-cell-group title="搜索历史">
      <van-cell
        v-for="item in history"
        :key="item"
        :title="item"
        @click="searchItem(item)"
      />
    </van-cell-group>
    <van-cell-group title="热门推荐">
      <van-cell
        v-for="(item, index) in hotList"
        :key="index"
        @click="searchItem(item.title)"
      >
        <template #title>
          <span class="hot-rank">{{ index + 1 }}</span> {{ item.title }}
        </template>
        <template #label> 热度 {{ item.heat }} </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const query = ref("");

const history = ref([
  "iPhone17",
  "罗技G304",
  "5080",
  "眼镜以旧换新",
  "联想",
  "cpu",
]); // 模拟历史，从localStorage获取
const hotList = ref([
  { title: "你想要的这里都有", heat: "738.3万" },
  { title: "国家补贴至高补贴20%", heat: "630.9万" },
  { title: "电器空调 温暖上新", heat: "624.2万" },
  { title: "来助力领取明星红包", heat: "613.1万" },
  { title: "取暖不干燥 温度不忽...", heat: "602.0万" },
  { title: "圣诞美妆助力分会小...", heat: "594.2万" },
  { title: "温暖过冬 不再冻手", heat: "579.5万" },
  { title: "杜鹃圣诞，女包相伴", heat: "57万" }, // 基于你的截图添加更多模拟数据
  // 其他热搜...
]); // 模拟热门，从API获取

// 实时建议数据
const suggestions = ref([]);

const searchItem = (item) => {
  query.value = item;
  handleSearch(item); // 调用搜索，跳转到商品列表
};

const handleSearch = (value) => {
  if (value) {
    // 执行搜索：跳转结果页或过滤
    router.push(`/search-results?q=${encodeURIComponent(value)}`);
    // 可选：保存到历史
    if (!history.value.includes(value)) {
      history.value.unshift(value);
    }
  }
};

const handleInput = (value) => {
  // 修复：添加空值检查和防御性代码
  suggestions.value = []; // 先清空
  if (value && typeof value === "string" && value.trim()) {
    const lowerValue = value.toLowerCase();
    suggestions.value = hotList.value
      .filter(
        (item) =>
          item?.title &&
          typeof item.title === "string" &&
          item.title.toLowerCase().includes(lowerValue)
      )
      .map((item) => item.title)
      .slice(0, 5); // 限制显示5个建议
  }
};

// 返回按钮处理（兼顾取消功能）
const handleBack = () => {
  router.back(); // 返回上一页（主页）
};
</script>

<style scoped>
/* 原样式 */
.hot-rank {
  color: red;
  margin-right: 10px;
}

/* 修复2：调整内容区域间隙，移除多余 margin-top */
.search-content {
  padding: 10px;
  margin-top: 10px; /* 减小顶部间隙，根据实际屏幕调整为0-10px */
}

/* 调整搜索框在 nav-bar 中的样式（可选） */
:deep(.van-search) {
  background: transparent; /* 使搜索框背景透明，融入 nav-bar */
  padding: 0;
}

/* 移除 van-cell-group 的默认 margin（如果有） */
:deep(.van-cell-group) {
  margin-top: 0; /* 确保组与上方无额外间隙 */
}
</style>
