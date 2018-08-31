import Vue from 'vue';
import * as Request from 'vue-resource';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Element);
Vue.use(Request.default);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
