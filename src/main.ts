import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueYandexMetrika from 'vue-yandex-metrika'
import * as filters from './util/filters'
import { EventPayloadBuilder } from './services/EventPayloadBuilder'

Vue.config.productionTip = false

Vue.use(VueYandexMetrika, {
  id: 61906957,
  router: router,
  env: process.env.NODE_ENV
})

Object.keys(filters).forEach(key => {
  const func = filters[key];
  Vue.filter(key, func);
});

const Provider = () => {
  var provide = new Object();
  provide[EventPayloadBuilder.Name] = new EventPayloadBuilder();
  return provide;
};

new Vue({
  router,
  store,
  render: h => h(App),
  i18n,
  provide: Provider
}).$mount('#app')
