import { createRouter, createWebHashHistory } from 'vue-router';
import i18n  from '@/i18n';  // Import the i18n instance directly
import Home from '@/views/home.vue';
import Applayout from '@/layouts/applayout.vue';
import Products from '@/views/products.vue';
import Faq from '@/views/faq.vue';
import ContactUs from '@/views/contact.vue';
import Tools from '@/views/tools.vue';
import StudyIndex from '@/views/study/index.vue';
import Studies from '@/views/study/studies.vue';
import FishStudy from '@/views/study/fishStudy.vue';
import AcidStudy from '@/views/study/acidStudy.vue';
import ChStudy from '@/views/study/ChStudy.vue';

// Create router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:lang(ar|en)', // Dynamic language in path
      component: Applayout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'products',
          name: 'products',
          component: Products,
        },
        {
          path: 'studies',
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
          path: 'faq',
          name: 'faq',
          component: Faq,
        },
        {
          path: 'contact-us',
          name: 'contact',
          component: ContactUs,
        },
        {
          path: 'tools',
          name: 'tools',
          component: Tools,
        },
      ],
    },
    {
      path: '/',
      redirect: (to) => {
        const lang = i18n.global.locale || 'en';  // Access i18n directly here
        return { name: 'home', params: { lang } }; // Redirect with the correct language
      },
    },
  ],
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  const lang = to.params.lang || 'en';  // Use the lang from the URL
  i18n.global.locale = lang;  // Update i18n locale here
  next();
});

export default router;
