import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

require('./assets/main.css')

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
