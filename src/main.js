import Vue from 'vue'
import App from './App.vue'
import './css/remove-default.css'
import './css/box.css'
import './css/table.css'
import './css/flex.css'
import './css/box.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
