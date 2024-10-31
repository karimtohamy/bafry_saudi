import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue';
import About from '@/views/about.vue';
import Products from '@/views/products/products.vue';
import Studies from '@/views/study.vue';
import Faq from '@/views/faq.vue';
import ContactUs from '@/views/contact.vue';
import Tools from '@/views/tools.vue';
import Index from '@/views/products/index.vue';
import product from '@/views/products/product.vue';
import Product from '@/views/products/product.vue';

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
      component: Index,
        redirect: { name: 'products.all' }, // Redirect to the 'products.all' route
      children: [
      {
        path: '',
        name: 'products.all',
        component: Products
      },
      {
        path: ':slug',
        name: 'Product',
        component: Product
      }
      ]
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
