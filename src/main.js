import Vue from 'vue'
import App from './App.vue'
import {
  APIService
} from './services/apiService'

const api = new APIService
Vue.config.productionTip = false

Vue.prototype.$http = api

new Vue({
  render: h => h(App),
}).$mount('#app')