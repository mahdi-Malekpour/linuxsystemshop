import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'  // برای آیکون‌ها

Vue.use(Vuetify)
const vuetify = new Vuetify({
  rtl: true,  // فعال کردن راست‌چین (RTL)
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',  // رنگ اصلی
        secondary: '#607d8b',
      }
    }
  }
})

Vue.config.productionTip = false



 


new Vue({
 
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
