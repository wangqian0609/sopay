// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

import VueResource from 'vue-resource'
Vue.use(VueResource)

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/icon.css';
Vue.use(ElementUi)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	data(){
		return{
			transitionName:'slide'
		}
	},
	router,
	watch:{
		'$route' (to,from){
			const toDepth = to.path.split('/').length
			const fromDepth = from.path.split('/').length
			this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		}
	}
})
