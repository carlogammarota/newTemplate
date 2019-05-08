// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/tailwind.css'
import VModal from 'vue-js-modal'

import store from "@/store"

import firebase from "firebase"
import "firebase/firestore"
import firebaseConfig from "./config/firebase"

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
//db.settings({timestampsInSnapshots:true});


export default db;

//import fontawesome 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.use(VModal)
library.add(faCoffee)
Vue.use(store);

Vue.use(router);

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

//Vue.component('apexchart', VueApexCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
