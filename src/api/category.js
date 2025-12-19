import { categories } from "@/data/mock.js";

export function getCategories() {
  return new Promise((resolve) => setTimeout(() => resolve(categories), 500));
}
