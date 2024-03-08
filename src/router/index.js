import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ProjectsPage from '../pages/ProjectPage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage,
  },
  {
    path: '/:catchAll(.*)',
    redirect:  { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;