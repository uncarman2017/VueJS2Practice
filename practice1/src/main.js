import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

// 创建Vue路由器
Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

//Vuex 通过 store 选项,提供了一种机制将状态从根组件“注入”到每一个子组件中
//需调用 Vue.use(Vuex)
new Vue({
	router,
	store, //全应用唯一状态存储对象
}).$mount('#app')