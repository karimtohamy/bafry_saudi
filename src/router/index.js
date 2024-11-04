import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/home.vue';
const Products = () => import('@/views/products/products.vue');
const Faq = () => import('@/views/faq.vue');
const ContactUs = () => import('@/views/contact.vue');
const Tools = () => import('@/views/tools.vue');
const ProductIndex = () => import('@/views/products/index.vue');
const Product = () => import('@/views/products/product.vue');
const StudyIndex = () => import('@/views/study/index.vue');
const Studies = () => import('@/views/study/studies.vue');
const FishStudy = () => import('@/views/study/fishStudy.vue');
const AcidStudy = () => import('@/views/study/acidStudy.vue');
const ChStudy = () => import('@/views/study/ChStudy.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductIndex,
      redirect: { name: 'products.all' },
      children: [
        {
          path: '',
          name: 'products.all',
          component: Products,
        },
        {
          path: ':slug',
          name: 'product',
          component: Product,
        },
      ],
    },
    {
      path: '/studies',
      name: 'studies.index',
      component: StudyIndex,
      redirect: { name: 'studies' },
      children: [
        {
          path: '',
          name: 'studies',
          component: Studies,
        },
        {
          path: 'chlorine-study',
          name: 'chlorine-study',
          component: ChStudy,
        },
        {
          path: 'peracetic-acid-study',
          name: 'peracetic-acid-study',
          component: AcidStudy,
        },
        {
          path: 'study-in-fish',
          name: 'study-in-fish',
          component: FishStudy,
        },
      ],
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
