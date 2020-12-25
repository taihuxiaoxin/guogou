import Vue from 'vue'
import VueRouter from 'vue-router'
import frist from "./routes/frist"
import cart from "./routes/cart"
import list from "./routes/list"
import Threelist from "@/views/list/threelist"
import Notfound from "@/views/notfound"
import Detail from "./routes/detail"
Vue.use(VueRouter)

const routes = [
  {path:"/" ,redirect: "/frist"},
  {path:"/list" ,redirect: "/list/twolist"},
  {path:"/threelist" ,component:Threelist },
  {path:"*" ,component:Notfound },
  ...frist,
  cart,
  list,
  Detail
]

const router = new VueRouter({
  routes
})

export default router
