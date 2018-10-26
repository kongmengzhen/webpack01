//需要导入vue模块
import Vue from 'vue'
//需要导入vueouter模块
import VueRouter from 'vue-router'
//导入页面组件
import  Index from '@/pages/Index'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import News from '@/pages/News'
import reg from '@/pages/reg'
import goods from '@/pages/goods'
import Detail from "@/pages/Detail"
import NewsList from '@/pages/NewsList'
import GoodsList from '@/pages/GoodsList'
import GoodsDetail from "@/pages/GoodsDetail"
import GoodsDetailId from "@/pages/GoodsDetailId"

//我们需要去注册vueRouter插件  即vueRouter是vue的一个插件
//注册插件
Vue.use(VueRouter)
/* 
export const a= new VueRouter({
  这种写法和用一下export default 的写法是一样的

})
*/
export default new VueRouter({
    //第一个选项 是路由的处理模式 除了hash 之外（hash模式下 在APP.vue中利用route-view替代的 在F12中生成的是一段数字） 在根目录下 还需要加#/
    //  还有history，history 通过浏览器的历史记录来切换路由 这种模式下 根路径就不用加#/了
    //但是history 是要重新发生请求的  但是因为浏览器的缓存机制 他不会重新展现新的html+js 服务器只是处理了一遍 具体还是前端在处理
    //F12下有history 有很多内容子在里面  但是history模式只能支持现在的浏览器 ，因为Vue辉仔顶降低处理 假如浏览器不处理history，会自动降到hash
    //history 有一个特点就是 不管你发生什么样的请求 浏览器都返回一个页面， 
    mode:'history',//这就是hash模式 hash模式就是在路径后面加上#/  这样浏览器会认为#后面 是锚点 不是重新请求新的页面。  在调试界面的window.location可以看到hash
    //单页面请求  就是一个页面切换不同div
    //路由的匹配规则
    routes:[
      { 
           path:'/',//这里的'/' 指的是一个根路径 《==》 比如服务器的路径http://localhost/ ，  我们切换页面会在这个路径下面加一些路径
        //在vue里面所有的东西都是由Vue构成的 所以 路由也不例外 也是由组建构成的
        component:Index//给匹配的路径提供一个
        },
        {
            path:'/login',
            component:Login
        },
        
        {
            path:'/reg',
            component:reg
        },
        {
            path:'/goods',
            component:goods,
            children:[
                {
                    path:'/',
                    component:GoodsList
                },
                {
                    path: ':goodsid',//这里的id  detail组件的$route中可以通过params得到你点击的id号
                    component: GoodsDetail,
                    children:[
                        {
                            path:'/',
                            component:GoodsDetailId
                        },
                        {
                            path: ':sid',//这里的id  detail组件的$route中可以通过params得到你点击的id号
                            component: GoodsDetailId
                        }
                    ]
                  
                }
            ]
        },
        {
            path:'/News',
            component:News,
            children:[//子路由
                {
                    path:'/',
                    component:NewsList
                },
                {
                    path: ':newsid',//这里的id  detail组件的$route中可以通过params得到你点击的id号
                    component: Detail
                }
            ]
        },
        {
            path:'*',//或者使用重定向 path:'/404 然后在这个规则下面再写一个规则（不是嵌套）{path：'*',redirect:'/404'}'
            component:NotFound

        }
    ]

})
//要想实现动态切换  小tips 谁的子路由 就在谁的组件里切换