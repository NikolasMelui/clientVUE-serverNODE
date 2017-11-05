import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/pages/MainPage';
import RegisterPage from '@/components/pages/RegisterPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]
});
