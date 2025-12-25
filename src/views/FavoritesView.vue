<template>
  <div class="favorites">
    <van-nav-bar title="收藏" left-arrow @click-left="router.back()" />
    <van-list v-if="favorites.length">
      <van-cell
        v-for="item in favorites"
        :key="item.id"
        :title="item.name"
        :thumb="item.img"
        @click="goDetail(item.id)"
      >
        <template #right-icon>
          <van-icon name="delete-o" @click.stop="removeFavorite(item.id)" />
        </template>
      </van-cell>
    </van-list>
    <van-empty v-else description="暂无收藏" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { showConfirmDialog, showToast } from "vant";

const router = useRouter();
const userStore = useUserStore();
const favorites = ref(userStore.currentUserInfo?.favorites || []); // mock: [{id:1, name:'商品', img:'url'}]

const removeFavorite = (id) => {
  showConfirmDialog({ title: "确认移除？" }).then(() => {
    favorites.value = favorites.value.filter((f) => f.id !== id);
    userStore.updateInfo({ favorites: favorites.value });
    showToast("移除成功");
  });
};

const goDetail = (id) => {
  router.push(`/product/${id}`);
};
</script>

<style scoped>
.favorites {
  background: #f7f8fa;
  min-height: 100vh;
  padding: 10px;
}
</style>
