
// Vuetify
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.scss';
import Vuetify from 'vuetify';
import 'babel-polyfill';
import colors from 'vuetify/es5/util/colors';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    secondary: colors.indigo.darken2,
    accent: colors.pink.accent2,
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
