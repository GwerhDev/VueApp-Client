import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import HomePage from '../pages/HomePage.vue'
import DetailsPage from '../pages/DetailsPage.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;