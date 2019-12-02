import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import zhuye from '@/components/zhuye'
Vue.use(Router)
export default new Router({
    mode:"history",
    routes: [
        {
            path: "/",
            name: "homePage",
            component: homePage
        },{
            path:"/index",
            name:"zhuye",
            component:zhuye
        }
    ]
})
