import Vue from 'vue';
import Router from 'vue-router';

// Pages
import Home from '@/pages/home/Index';
import About from '@/pages/about_us/Index';
import Contact from '@/pages/contact/Index';
import PackagesOffered from '@/pages/packages_offered/Index';
import ServicesOffered from '@/pages/services_offered/Index';
import Terms from '@/pages/terms/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/packages',
      name: 'Packages',
      component: PackagesOffered,
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesOffered,
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
