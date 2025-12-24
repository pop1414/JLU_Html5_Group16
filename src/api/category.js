import { categories } from "@/data/index.js";

export function getCategories() {
  return new Promise((resolve) => setTimeout(() => resolve(categories), 500));
}
