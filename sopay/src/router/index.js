import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Home/:user',
    	component: resolve => require(['@/pages/home'],resolve),
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
    }
  ]
})
