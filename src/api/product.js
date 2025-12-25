import {
  products,
  brands,
  categories,
  productSkus,
  productAttributes,
} from "@/data";

/** 扁平化分类：{ id -> name } */
function buildCategoryMap() {
  const map = new Map();
  categories.forEach((p) => {
    map.set(p.id, p.name);
    (p.children || []).forEach((c) => map.set(c.id, c.name));
  });
  return map;
}

const categoryMap = buildCategoryMap();
const brandMap = new Map(brands.map((b) => [b.id, b.name]));

/** 取商品最低价（从SKU里计算） */
function getMinPrice(productId) {
  const skus = productSkus.filter((s) => s.productId === productId);
  if (!skus.length) return 0;
  return Math.min(...skus.map((s) => s.price));
}

/** 取商品默认展示SKU（最低价SKU） */
function getDefaultSku(productId) {
  const skus = productSkus.filter((s) => s.productId === productId);
  if (!skus.length) return null;
  return skus.reduce(
    (min, cur) => (cur.price < min.price ? cur : min),
    skus[0]
  );
}

/** 补全商品展示字段 */
function enrichProduct(p) {
  const defaultSku = getDefaultSku(p.id);
  return {
    ...p,
    brandName: brandMap.get(p.brandId) || "未知品牌",
    categoryName: categoryMap.get(p.categoryId) || "未知分类",
    price: getMinPrice(p.id),
    originalPrice: defaultSku?.originalPrice ?? 0,
    stock: defaultSku?.stock ?? 0,
    skuId: defaultSku?.skuId ?? "",
    skuImg: defaultSku?.img ?? "",
  };
}

/** 排序 */
function sortProducts(list, sort = "default") {
  const arr = [...list];
  switch (sort) {
    case "sales_desc":
      return arr.sort((a, b) => (b.sales || 0) - (a.sales || 0));
    case "price_asc":
      return arr.sort((a, b) => (a.price || 0) - (b.price || 0));
    case "price_desc":
      return arr.sort((a, b) => (b.price || 0) - (a.price || 0));
    case "rating_desc":
      return arr.sort((a, b) => (b.ratings || 0) - (a.ratings || 0));
    default:
      // 默认：销量 + 评分微权重
      return arr.sort(
        (a, b) =>
          (b.sales || 0) +
          (b.ratings || 0) * 100 -
          ((a.sales || 0) + (a.ratings || 0) * 100)
      );
  }
}

/** 分页 */
function paginate(list, page = 1, limit = 10) {
  const p = Math.max(1, Number(page) || 1);
  const l = Math.max(1, Number(limit) || 10);
  const start = (p - 1) * l;
  const end = start + l;
  return {
    list: list.slice(start, end),
    total: list.length,
    page: p,
    limit: l,
    hasMore: end < list.length,
  };
}

// ✅ 根据搜索词，生成“分类优先级”列表（按 categories 中出现顺序）
// 例如搜索“手机” => [21(手机通讯), 22(手机配件), 23(...)]
function getCategoryPriorityIds(qLower, tokens) {
  const ids = [];
  const push = (id) => {
    if (!ids.includes(id)) ids.push(id);
  };

  // 1) 精确匹配子类名（优先级最高）
  for (const p of categories) {
    for (const c of p.children || []) {
      if ((c.name || "").toLowerCase() === qLower) push(c.id);
    }
  }

  // 2) 精确匹配父类名：把该父类下子类按顺序加入
  for (const p of categories) {
    if ((p.name || "").toLowerCase() === qLower) {
      (p.children || []).forEach((c) => push(c.id));
    }
  }

  // 3) 模糊匹配：父类命中 -> 全部子类；子类命中 -> 该子类
  for (const p of categories) {
    const parentName = (p.name || "").toLowerCase();
    if (tokens.some((t) => parentName.includes(t))) {
      (p.children || []).forEach((c) => push(c.id));
    }
    for (const c of p.children || []) {
      const childName = (c.name || "").toLowerCase();
      if (tokens.some((t) => childName.includes(t))) push(c.id);
    }
  }

  return ids;
}

/** ✅ 分类查询（支持父类id和子类id） */
export function getProductsByCategory(
  categoryId,
  page = 1,
  limit = 10,
  sort = "default"
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cid = Number(categoryId);

      // 如果传的是父类id（1~6），展开children
      const parent = categories.find((c) => c.id === cid);
      const ids = parent?.children?.length
        ? parent.children.map((c) => c.id)
        : [cid];

      const filtered = products
        .filter((p) => ids.includes(p.categoryId))
        .map(enrichProduct);

      const sorted = sortProducts(filtered, sort);
      resolve(paginate(sorted, page, limit));
    }, 120);
  });
}

/** ✅ 关键词搜索（匹配商品名/描述/品牌名/分类名） */
export function getProductsByQuery(
  query,
  page = 1,
  limit = 10,
  sort = "default"
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const q = (query ?? "").toString().trim().toLowerCase();

      if (!q) {
        // 空关键词：默认返回全量热门（按销量+评分排序）
        const enriched = products.map(enrichProduct);
        const sorted = sortProducts(enriched, "default");
        resolve(paginate(sorted, page, limit));
        return;
      }

      const tokens = q.split(/\s+/).filter(Boolean);

      const filtered = products
        .filter((p) => {
          const name = (p.name || "").toLowerCase();
          const desc = (p.description || "").toLowerCase();
          const brandName = (brandMap.get(p.brandId) || "").toLowerCase();
          const cateName = (categoryMap.get(p.categoryId) || "").toLowerCase();
          return tokens.some(
            (t) =>
              name.includes(t) ||
              desc.includes(t) ||
              brandName.includes(t) ||
              cateName.includes(t)
          );
        })
        .map(enrichProduct);

      // ✅ 关键改动：只在“默认排序”时启用“分类优先级”
      if (sort === "default") {
        const priorityIds = getCategoryPriorityIds(q, tokens);
        if (priorityIds.length) {
          const rankMap = new Map(priorityIds.map((id, idx) => [id, idx]));

          filtered.sort((a, b) => {
            const ra = rankMap.has(a.categoryId)
              ? rankMap.get(a.categoryId)
              : 999;
            const rb = rankMap.has(b.categoryId)
              ? rankMap.get(b.categoryId)
              : 999;

            // 先按分类优先级
            if (ra !== rb) return ra - rb;

            // 同分类里再按“默认热度”（销量 + 评分权重）
            const hotA = (a.sales || 0) + (a.ratings || 0) * 100;
            const hotB = (b.sales || 0) + (b.ratings || 0) * 100;
            return hotB - hotA;
          });

          resolve(paginate(filtered, page, limit));
          return;
        }
      }

      // 其它排序（销量/价格/评分）保持你原来的全局排序逻辑
      const sorted = sortProducts(filtered, sort);
      resolve(paginate(sorted, page, limit));
    }, 120);
  });
}

/** ✅ 获取某个商品详情（带品牌/分类/默认SKU信息） */
export function getProductDetail(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pid = Number(productId);
      const p = products.find((x) => x.id === pid);
      resolve(p ? enrichProduct(p) : null);
    }, 120);
  });
}
/** ✅ 获取某个商品的所有SKU */
export function getProductSkus(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pid = Number(productId);
      const skus = productSkus.filter((s) => s.productId === pid);
      resolve(skus);
    }, 120);
  });
}

/** ✅ 获取某个商品的属性选项（分组） */
export function getProductAttributes(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pid = Number(productId);
      const attrs = productAttributes.filter((a) => a.productId === pid);
      resolve(attrs);
    }, 120);
  });
}
