import Vue from 'vue'
import App from './App.vue'

// import handwork 
// comment 2 line behind
import Ninjas from './Ninjas.vue'
Vue.component("ninjas", Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})
