<template>
  <div class="page">
    <van-nav-bar
      title="搜索"
      left-text="返回"
      left-arrow
      @click-left="router.back()"
    />

    <!-- 输入区 -->
    <div class="search-wrap">
      <van-search
        v-model="keyword"
        placeholder="搜索商品/品牌/分类"
        autofocus
        clearable
        @search="doSearch"
        @update:model-value="onInput"
      />
    </div>

    <!-- 建议列表：输入时显示 -->
    <div v-if="keyword.trim() && suggestions.length" class="section">
      <div class="section-title">搜索建议</div>
      <van-cell
        v-for="(item, idx) in suggestions"
        :key="idx"
        :title="item"
        icon="search"
        is-link
        @click="choose(item)"
      />
    </div>

    <!-- 空输入时：热门搜索 + 历史记录 -->
    <div v-else class="section">
      <div class="section-title">热门搜索</div>
      <div class="chips">
        <van-tag
          v-for="(h, idx) in hotSearches"
          :key="idx"
          plain
          type="primary"
          @click="choose(h)"
          class="chip"
        >
          {{ h }}
        </van-tag>
      </div>

      <div class="section-title history">
        <span>搜索历史</span>
        <van-button
          size="mini"
          type="danger"
          plain
          @click="clearHistory"
          v-if="history.length"
        >
          清空
        </van-button>
      </div>

      <div v-if="history.length" class="chips">
        <van-tag
          v-for="(h, idx) in history"
          :key="idx"
          plain
          type="success"
          @click="choose(h)"
          class="chip"
        >
          {{ h }}
        </van-tag>
      </div>

      <van-empty v-else description="暂无搜索历史" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  products,
  brands,
  categories,
  hotSearches as hotSearchesData,
} from "@/data";

const router = useRouter();

const keyword = ref("");
const suggestions = ref([]);

const hotSearches = ref(hotSearchesData || []);
const history = ref([]);

const HISTORY_KEY = "search_history";

// const hotList = ref([
//   { title: "你想要的这里都有", heat: "738.3万" },
//   { title: "国家补贴至高补贴20%", heat: "630.9万" },
//   { title: "电器空调 温暖上新", heat: "624.2万" },
//   { title: "来助力领取明星红包", heat: "613.1万" },
//   { title: "取暖不干燥 温度不忽...", heat: "602.0万" },
//   { title: "圣诞美妆助力分会小...", heat: "594.2万" },
//   { title: "温暖过冬 不再冻手", heat: "579.5万" },
//   { title: "杜鹃圣诞，女包相伴", heat: "57万" }, // 基于你的截图添加更多模拟数据
//   // 其他热搜...
// ]); // 模拟热门，从API获取

function loadHistory() {
  try {
    history.value = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    history.value = [];
  }
}

function saveHistory(word) {
  const w = word.trim();
  if (!w) return;

  const list = history.value.filter((x) => x !== w);
  list.unshift(w);

  history.value = list.slice(0, 12);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.value));
}

function clearHistory() {
  history.value = [];
  localStorage.removeItem(HISTORY_KEY);
}

// 输入联想：匹配商品名 / 品牌名 / 分类名（最多 8 条）
function onInput(val) {
  const q = (val || "").trim().toLowerCase();
  if (!q) {
    suggestions.value = [];
    return;
  }

  const set = new Set();

  // 分类名（父类/子类）
  for (const c of categories) {
    if (c.name.toLowerCase().includes(q)) set.add(c.name);
    for (const sub of c.children || []) {
      if (sub.name.toLowerCase().includes(q)) set.add(sub.name);
    }
    if (set.size >= 8) break;

    // 商品名
    for (const p of products) {
      if (p.name.toLowerCase().includes(q)) set.add(p.name);
      if (set.size >= 8) break;
    }

    // 品牌名
    for (const b of brands) {
      if (b.name.toLowerCase().includes(q)) set.add(b.name);
      if (set.size >= 8) break;
    }
  }

  suggestions.value = Array.from(set).slice(0, 8);
}

// 确认搜索（按回车/搜索按钮）
function doSearch(val) {
  const q = (val || keyword.value).trim();
  if (!q) return;
  choose(q);
}

// 选择某个关键词（热门/历史/建议）
function choose(word) {
  saveHistory(word);
  router.replace({ path: "/products", query: { query: word } });
}

onMounted(() => {
  loadHistory();
});
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f7f8fa;
}
.search-wrap {
  background: #fff;
  padding: 8px 12px;
}
.section {
  padding: 12px;
}
.section-title {
  font-size: 14px;
  font-weight: 600;
  margin: 8px 0 10px;
  color: #333;
}
.section-title.history {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  padding: 6px 10px;
  border-radius: 999px;
}
</style>
