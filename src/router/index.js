import BasketPage from "@/pages/BasketPage.vue";
import CatalogPage from "@/pages/CatalogPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: CatalogPage
  },
  {
    path: '/basket',
    component: BasketPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;