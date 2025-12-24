import { products, categories } from "@/data/index"; // 新增：导入 categories

export function getProducts() {
  return new Promise((resolve) => setTimeout(() => resolve(products), 500)); // 模拟延迟
}

export function getProductById(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(products.find((p) => p.id === id)), 500)
  );
}

// 按关键词搜索（优化：添加 specs 匹配，如果需要）
export function getProductsByQuery(query, page = 1, limit = 10) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query || !query.trim()) {
        resolve([]); // 空查询返回空
        return;
      }

      const lowerQuery = query.toLowerCase().trim();
      // 分词：简单拆分空格或连续中文（电商常用 jieba，但 JS 简单实现）
      const queryTokens = lowerQuery
        .split(/\s+/)
        .filter((token) => token.length > 0);

      // 步骤1: 匹配分类（优先，如果全匹配分类名，返回该类所有商品）
      let matchedCategoryId = null;
      categories.forEach((cat) => {
        const lowerCatName = cat.name.toLowerCase();
        if (queryTokens.some((token) => lowerCatName.includes(token))) {
          matchedCategoryId = cat.id;
        }
        cat.children.forEach((sub) => {
          const lowerSubName = sub.name.toLowerCase();
          if (queryTokens.some((token) => lowerSubName.includes(token))) {
            matchedCategoryId = sub.id; // 优先子类
          }
        });
      });

      let filtered = [];
      if (matchedCategoryId) {
        // 如果匹配分类，返回该类商品（无相关度排序，直接 filter）
        filtered = products.filter((p) => p.categoryId === matchedCategoryId);
      } else {
        // 步骤2: 商品级模糊匹配（name, description, specs）
        filtered = products
          .map((p) => {
            let score = 0;
            // 匹配 name
            if (
              p.name &&
              queryTokens.some((token) => p.name.toLowerCase().includes(token))
            ) {
              score += 3; // name 权重高
            }
            // 匹配 description
            if (
              p.description &&
              queryTokens.some((token) =>
                p.description.toLowerCase().includes(token)
              )
            ) {
              score += 2;
            }
            // 匹配 specs（数组逐项）
            if (
              p.specs &&
              p.specs.some((spec) =>
                queryTokens.some((token) => spec.toLowerCase().includes(token))
              )
            ) {
              score += 1;
            }
            return { product: p, score };
          })
          .filter((item) => item.score > 0) // 只保留有匹配的
          .sort((a, b) => b.score - a.score) // 按相关度降序
          .map((item) => item.product); // 提取商品
      }

      // 步骤3: 分页
      const start = (page - 1) * limit;
      const end = start + limit;
      if (filtered.length === 0)
        console.warn(`No products found for query: ${query}`);
      resolve(filtered.slice(start, end));
    }, 500);
  });
}
// 按分类过滤（改接收 categoryId）
export function getProductsByCategory(categoryId, page = 1, limit = 10) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = parseInt(categoryId); // 确保数字
      const filtered = products.filter((p) => p.categoryId === id);
      const start = (page - 1) * limit;
      const end = start + limit;
      if (filtered.length === 0)
        console.warn(`No products found for categoryId: ${id}`); // 日志调试
      resolve(filtered.slice(start, end));
    }, 500);
  });
}

// 类似其他函数
