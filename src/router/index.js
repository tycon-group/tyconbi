import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import none from '../views/404.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/404',
    component: none,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
