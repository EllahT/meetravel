import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './filters';
import  './scss/main.scss';
import './registerServiceWorker';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueNoty from 'vuejs-noty';
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAQz_Zc9Ys9pFeNAYxOhagonVUGOyg_zlg',
    libraries: 'places', 
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'bottomRight',
  theme: 'relax'
})