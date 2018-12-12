import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Welcome',
        component: resolve => require(['@/pages/welcome'],resolve),
    },
    {
    	path: '/Login',
    	name: 'Login',
    	component: resolve => require(['@/pages/login'],resolve),
    },
    {
        path: '/Regist',
        name: 'Regist',
        component: resolve => require(['@/pages/regist'],resolve),
    },
    {
        path: '/Home/:user',
        name: 'Home',
        component: resolve => require(['@/pages/home'],resolve),
    },
    {
        path: '/List/:type/:user',
        name: 'List',
        component: resolve => require(['@/pages/list'],resolve),
    },
    {
        path: '/goodList/:type/:name/:user',
        name: 'goodList',
        component: resolve => require(['@/pages/glists'],resolve),
    },
    {
        path: '/goodsDetail/:title/:name',
        name: 'goodsDetail',
        component: resolve => require(['@/pages/goodsDetails'],resolve),
    },
    {
        path: '/Collect/:user',
        name: 'Collect',
        component: resolve => require(['@/pages/collect'],resolve),
    },
    {
        path: '/Order/:status/:user',
        name: 'Order',
        component: resolve => require(['@/pages/order'],resolve),
    },
    {
        path: '/Cart/:user',
        name: 'Cart',
        component: resolve => require(['@/pages/cart'],resolve),
    },
    {
        path: '/Account/:user',
        name: 'Account',
        component: resolve => require(['@/pages/account'],resolve),
    },
    {
        path: '/Setting/:user',
        name: 'Setting',
        component: resolve => require(['@/pages/setting'],resolve),
    },

  ]
})
