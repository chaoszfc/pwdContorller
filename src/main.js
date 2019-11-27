// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//非对称加密
import  JSEncrypt  from 'jsencrypt'
Vue.config.productionTip = false
import http from './assets/api/api';
Vue.prototype.$http = http; // 将api挂载到vue的原型上
// Vue.use(JSEncrypt);
/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
