import Vue from 'vue';
import App from './App.vue';
import { i18n } from './plugins/i18n.js';
import { Element } from './plugins/element.js';
import store from './plugins/store';
import './plugins/request.js';
import './plugins/flag.js';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value),
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
