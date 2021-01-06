import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import none from '../views/404.vue';
import AllWorklogs from '../views/AllWorklogs.vue';
import Analysis from '../views/Analysis.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'Analysis',
        name: 'analysis',
        component: Analysis,
      },
      {
        path: 'AllWorklogs',
        name: 'allworklogs',
        component: AllWorklogs,
      },
    ],
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
