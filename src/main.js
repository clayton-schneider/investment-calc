import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import firebase from 'firebase';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

let app = null;

// wait for firebase
firebase.auth().onAuthStateChanged(() => {
  // Init if not created
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount('#app');
  }
});
