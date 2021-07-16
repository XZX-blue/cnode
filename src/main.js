import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http=Axios;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})