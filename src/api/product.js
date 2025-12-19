import { products } from "@/data/mock";

export function getProducts() {
  return new Promise((resolve) => setTimeout(() => resolve(products), 500)); // 模拟延迟
}

export function getProductById(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(products.find((p) => p.id === id)), 500)
  );
}
// 类似其他函数
