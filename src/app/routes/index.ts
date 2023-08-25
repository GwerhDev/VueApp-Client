import { RouteRecordRaw, createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import LandingPage from '../pages/LandingPage.vue';
import DetailsPage from '../pages/DetailsPage.vue';
import DocumentationPage from '../pages/DocumentationPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/details/:id',
    name: 'DetailsPage',
    component: DetailsPage
  },
  {
    path: '/documentation',
    name: 'DocumentationPage',
    component: DocumentationPage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;