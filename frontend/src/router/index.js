import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TakeQuiz from '../views/TakeQuiz.vue'
import CreateQuiz from '../views/CreateQuiz.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/takequiz",
    name: "TakeQuiz.vue",
    component: TakeQuiz,
  },
  {
    path: "/createquiz",
    name: "CreateQuiz.vue",
    component: CreateQuiz,
  },
  {
    path: "/login",
    name: "Login.vue",
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
