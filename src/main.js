// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import VueResource from 'vue-resource';
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import Routers from './router'
import Util from './libs/util'
//import { AjaxPlugin } from 'vux'
import Services from './services/services'
import  { ToastPlugin, ConfirmPlugin } from 'vux'
import VueScroller from 'vue-scroller'

//https://github.com/wangdahoo/vue-scroller
Vue.use(VueScroller)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(VueRouter)
//Vue.use(AjaxPlugin)
//Vue.use(VueResource)
Vue.use(Services)


//require('es6-promise').polyfill();

//https://router.vuejs.org/zh-cn/essentials/history-mode.html
//vue-router 文档
// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    //debugger;
    if(to.path !== '/orderlist'){
        Util.title(to.meta.title);
    }
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
