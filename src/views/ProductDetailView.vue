<template>
  <div class="product-detail">
    <!-- 顶部导航栏 -->
    <van-nav-bar
      :title="product.name || '商品详情'"
      left-text="返回"
      left-arrow
      @click-left="router.back()"
    />

    <!-- 商品图片（假设单图，可扩展为van-swipe多图轮播） -->
    <van-image
      :src="
        currentSku.img ||
        product.mainImg ||
        'https://via.placeholder.com/750x750'
      "
      fit="cover"
      width="100%"
      height="auto"
      show-loading
      lazy-load
    />

    <!-- 价格与基本信息 -->
    <van-cell-group inset>
      <van-cell>
        <template #title>
          <div class="price-box">
            <span class="price">¥{{ currentSku.price || product.price }}</span>
            <span class="original-price"
              >¥{{ currentSku.originalPrice || product.originalPrice }}</span
            >
          </div>
        </template>
      </van-cell>
      <van-cell title="好评率" :value="`${product.goodRate || 95}%`" />
      <van-cell
        title="评分/销量"
        :value="`${product.ratings || 4.9} (${product.sales || 0}件)`"
      />
      <van-cell
        title="品牌/分类"
        :value="`${product.brandName} / ${product.categoryName}`"
      />
      <van-cell title="库存" :value="currentSku.stock || product.stock" />
    </van-cell-group>

    <!-- 规格选择（如果有属性） -->
    <van-cell-group inset v-if="attributes.length">
      <van-cell
        v-for="attr in attributes"
        :key="attr.attrId"
        :title="attr.attrName"
      >
        <template #default>
          <van-radio-group
            v-model="selectedAttrs[attr.attrId]"
            direction="horizontal"
          >
            <van-radio
              v-for="val in attr.values"
              :key="val.valueId"
              :name="val.valueId"
              shape="square"
              checked-color="#ee0a24"
            >
              {{ val.valueName }}
            </van-radio>
          </van-radio-group>
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 商品描述 -->
    <van-cell-group inset>
      <van-cell title="商品描述">
        <template #default>
          <p>{{ product.description || "暂无描述" }}</p>
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 服务保障 -->
    <van-cell-group inset>
      <van-cell title="服务">
        <template #default>
          <van-tag type="primary" plain>无忧退货</van-tag>
          <van-tag type="primary" plain>快速退款</van-tag>
          <van-tag type="primary" plain>免费包邮</van-tag>
          <!-- 根据实际数据调整 -->
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 底部操作栏 -->
    <van-submit-bar
      :price="currentSku.price * 100 || product.price * 100"
      button-text="立即购买"
      @submit="buyNow"
    >
      <van-button type="warning" @click="addToCart">加入购物车</van-button>
    </van-submit-bar>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getProductDetail,
  getProductSkus,
  getProductAttributes,
} from "@/api/product.js";
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user";
import { showToast, showConfirmDialog } from "vant";

const route = useRoute();
const router = useRouter();
const product = ref({});
const skus = ref([]);
const attributes = ref([]);
const selectedAttrs = ref({});
const currentSku = ref({});
const cartStore = useCartStore();
const userStore = useUserStore();

onMounted(async () => {
  const id = route.params.id;
  if (!id) return;

  product.value = await getProductDetail(id);
  skus.value = await getProductSkus(id);
  attributes.value = await getProductAttributes(id);

  // 初始化选中默认SKU
  if (product.value.skuId) {
    const defaultSku = skus.value.find((s) => s.skuId === product.value.skuId);
    if (defaultSku) {
      defaultSku.attributes.forEach((a) => {
        selectedAttrs.value[a.attrId] = a.valueId;
      });
      currentSku.value = defaultSku;
    }
  }
});

// 监听规格变化匹配SKU
watch(
  selectedAttrs,
  (newAttrs) => {
    const matchedSku = skus.value.find((sku) =>
      sku.attributes.every((a) => newAttrs[a.attrId] === a.valueId)
    );
    currentSku.value = matchedSku || {
      price: 0,
      originalPrice: 0,
      stock: 0,
      img: "",
    };
  },
  { deep: true }
);

const addToCart = () => {
  if (currentSku.value.stock <= 0) {
    showToast("库存不足");
    return;
  }
  if (!userStore.currentUserId) {
    showToast("请先登录");
    return;
  }
  cartStore.addItem(
    product.value,
    currentSku.value,
    1,
    userStore.currentUserId
  );
  showToast("已加入购物车");
};

const buyNow = () => {
  if (currentSku.value.stock <= 0) {
    showToast("库存不足");
    return;
  }
  if (!userStore.isLoggedIn) {
    showConfirmDialog({
      title: "未登录",
      message: "请先登录以继续购买",
    }).then(() => {
      router.push("/login");
    });
    return;
  }
  // 不加车，直接跳结算，传临时订单项
  router.push({
    path: "/checkout",
    query: {
      items: JSON.stringify([
        { product: product.value, sku: currentSku.value, quantity: 1 },
      ]),
    },
  });
};
</script>

<style scoped>
.product-detail {
  background: #f7f8fa;
  min-height: 100vh;
  padding-bottom: 50px; /* 为底部栏留空间 */
}

.price-box {
  display: flex;
  align-items: center;
}

.price {
  color: #ee0a24;
  font-size: 24px;
  font-weight: bold;
  margin-right: 8px;
}

.original-price {
  color: #999;
  text-decoration: line-through;
  font-size: 16px;
}

.van-cell-group {
  margin: 10px 0;
}

.van-radio {
  margin-right: 8px;
}

.van-tag {
  margin-right: 6px;
}
</style>
