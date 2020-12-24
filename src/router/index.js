import Vue from 'vue'
import VueRouter from 'vue-router'
import frist from "./routes/frist"
import cart from "./routes/cart"
import list from "./routes/list"
Vue.use(VueRouter)

const routes = [
  ...frist,
  cart,
  list
]

const router = new VueRouter({
  routes
})

export default router
