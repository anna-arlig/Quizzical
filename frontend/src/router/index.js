import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import TakeQuiz from "../views/TakeQuiz.vue"

Vue.use(VueRouter)

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
 
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router