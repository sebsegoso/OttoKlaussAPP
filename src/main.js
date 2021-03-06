import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import titleMixin from './mixins/titleMixin'
Vue.use(VueSweetalert2);
 
var firebaseConfig = {
  apiKey: "AIzaSyBP6K4jEdfcGN6pIVnBX47taCqpxYN35iI",
  authDomain: "demosso-1a57c.firebaseapp.com",
  databaseURL: "https://demosso-1a57c.firebaseio.com",
  projectId: "demosso-1a57c",
  storageBucket: "demosso-1a57c.appspot.com",
  messagingSenderId: "1006511121632",
  appId: "1:1006511121632:web:e7220119c1490393dd9c85",
  measurementId: "G-EP2VFBGM7Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.mixin(titleMixin)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
