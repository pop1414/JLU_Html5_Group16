<template>
  <van-nav-bar :title="title" />
  <!-- 动态 title -->
</template>

<script setup>
import { computed } from "vue";
import { useMainStore } from "@/stores/index"; // 假设用 Pinia

const store = useMainStore();
const title = computed(() => store.pageTitle || "电商平台"); // 默认 '电商平台'
</script>
