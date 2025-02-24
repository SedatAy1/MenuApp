import { createRouter, createWebHistory } from 'vue-router';
import MenuList from '../components/MenuList.vue';
import MealDetail from '../views/MealDetail.vue';
import FavoritesView from '../views/FavoritesView.vue'; // Yeni import

const routes = [
  {
    path: '/',
    name: 'home',
    component: MenuList,
  },
  {
    path: '/meal/:id',
    name: 'meal-detail',
    component: MealDetail,
    props: true,
  },
  {
    path: '/favorites', // Yeni rota
    name: 'favorites',
    component: FavoritesView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;