import Vue from 'vue';
import Vuex from 'vuex';

import data from './assets/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    banner: data.banner,
    services: data.services,
    about: data.about,
    work: data.work,
    contact: data.contact,
  },
  mutations: {},
  actions: {},
});
