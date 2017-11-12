import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/HomePage';
import EventsPage from '@/components/pages/EventsPage';
import AboutPage from '@/components/pages/AboutPage';
import ReportsPage from '@/components/pages/ReportsPage';
import PartnershipPage from '@/components/pages/PartnershipPage';
import SingupPage from '@/components/pages/SingupPage';
import SinginPage from '@/components/pages/SinginPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/events',
      name: 'EventsPage',
      component: EventsPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/reports',
      name: 'ReportsPage',
      component: ReportsPage
    },
    {
      path: '/partnership',
      name: 'PartnershipPage',
      component: PartnershipPage
    },
    {
      path: '/singup',
      name: 'SingupPage',
      component: SingupPage
    },
    {
      path: '/singin',
      name: 'SinginPage',
      component: SinginPage
    }
  ],
  mode: 'history'
});
