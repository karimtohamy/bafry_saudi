import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue';
import About from '@/views/about.vue';
import Products from '@/views/products.vue';
import Studies from '@/views/study.vue';
import Faq from '@/views/faq.vue';
import ContactUs from '@/views/contact.vue';
import Tools from '@/views/tools.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about-us',
      name: 'about',
      component: About,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/studies',
      name: 'studies',
      component: Studies,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: ContactUs,
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools,
    },
  ],
});

export default router;
