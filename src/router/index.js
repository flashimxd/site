import Vue from 'vue';
import Router from 'vue-router';
import IndexComponent from '@/components/IndexComponent';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexComponenet',
      component: IndexComponent,
    },
  ],
});
