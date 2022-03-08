import Vue from 'vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/es'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import {DatePicker, TimeSelect, TimePicker} from 'element-ui';

Vue.use(ElementUI, { locale })
Vue.use(ElementUI);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
