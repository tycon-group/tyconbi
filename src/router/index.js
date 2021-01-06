import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import none from '../views/404.vue';
import Worklogs from '../views/Worklogs.vue';
import Analysis from '../views/Analysis.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/worklogs',
    children: [
      {
        path: 'worklogs',
        name: 'Worklogs',
        component: Worklogs,
      },
      {
        path: 'analysis',
        name: 'Analysis',
        component: Analysis,
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: none,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
