import Vue from 'vue';

import VueHead from 'vue-head';
import VueParticles from 'vue-particles'
import VueMouseParallax from 'vue-mouse-parallax';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueHead);
Vue.use(VueParticles);
Vue.use(VueMouseParallax);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
