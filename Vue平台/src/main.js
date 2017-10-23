// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
// import router from './router'
import VueRouter from 'Vue-router'
import IndexPage from './pages/index.vue'
import VueResouce from 'vue-resource'
import DetailPage from './pages/detail.vue'
import DetailAna from './pages/details/analysis.vue'
import DetailCount from './pages/details/count.vue'
import DetailPub from './pages/details/publish.vue'
import DetailFore from './pages/details/forecast.vue'
import orderListPage from './pages/orderlist.vue'


Vue.use(VueRouter);
Vue.use(VueResouce);//可以全局调用this.$http()
let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage,
		},
		{
			path:'/orderlist',
			component:orderListPage,
		},
		{
			path:'/detail', //  加/符号，会跳转回根目录，即在跟目录下搜索文件
			component:DetailPage,
			redirect:'/detail/analysis',
			children:[
			{
				path:'analysis',
				component:DetailAna,
			},
			{
				path:'count',
				component:DetailCount,
			},
			{
				path:'publish',
				component:DetailPub,
			},
			{
				path:'forecast',
				component:DetailFore,
			},
			]
		}                          
	]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
