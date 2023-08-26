import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import LandingPage from '../pages/LandingPage.vue';
import DetailsPage from '../pages/DetailsPage.vue';

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