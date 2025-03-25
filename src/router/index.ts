import HomePage from '@/screens/HomePage.vue'
import LoginPage from '@/screens/LoginPage.vue'
import SignupPage from '@/screens/SignupPage.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/home', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
