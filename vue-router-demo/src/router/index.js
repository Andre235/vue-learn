// 1.导入路由相关依赖
import VueRouter from "vue-router"
import Vue from "vue"

//2.通过Vue.use(插件)来安装使用插件
Vue.use(VueRouter)

//3.创建Vue.router对象
const router = new VueRouter({
  //3.1配置路由和组件的映射关系
  routes:[
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("../components/Home")
    },
    {
      path: "/about",
      component: () => import("../components/About")
    },
    {
      path: "/user/:userName",
      component: () => import("../components/User")
    }
  ],
  mode: "history"  //将URL模式从hash模式改为history模式
})

//4.将创建的router实例导入到vue实例中
export default router
