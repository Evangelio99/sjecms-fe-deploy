import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Store from './Store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  Store,
  render: h => h(App),
  created() {
  }
}).$mount('#app')
