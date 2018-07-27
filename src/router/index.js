
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Detail from '@/pages/Details'
import Register from '@/pages/Register'
import registerInfo from '@/pages/RegisterInfo'
import login from '@/pages/login'
import regist from '@/pages/regist'
import person from '@/pages/person'
import personData from '@/pages/personData'
import comment from '@/pages/comment'


Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		name:'Home',
  		component:Home
  	},
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/detail/:num',
    	name:'detail',
    	component:Detail
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/registerInfo',
      name:'registerInfo',
      component:registerInfo
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/regist',
      name:'regist',
      component:regist
    },
    {
      path:'/person',
      name:'person',
      component:person
    },
    {
      path:'/personData/:user',
      name:'personData',
      component:personData
    },
    {
      path:'/comment/:user',
      name:'comment',
      component:comment
    }
  ]
})
