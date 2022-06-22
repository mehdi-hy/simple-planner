import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'projects',
    component: () => import('@/views/Projects.vue'),
  },
  {
    path: '/about',
    name: 'add-project',

    component: () => import('@/views/AddProject.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
