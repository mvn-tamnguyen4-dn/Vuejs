import Vue from 'vue'
import App from './App.vue'
import Directive from './helper/directive'

Vue.config.productionTip = false

new Vue({
  Directive,
  render: h => h(App),
}).$mount('#app')