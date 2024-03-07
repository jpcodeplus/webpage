import { createRouter, createWebHistory } from 'vue-router'
import StartSeite from '../views/StartSeite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { 
        breadcrumb: 'Home',
        title: 'Professionelle Webseite erstellen lassen' 
      },
      component: StartSeite
    },
    {
      path: '/ueber-mich',
      name: 'ueber-mich',
      meta: { 
        breadcrumb: 'Dein Webentwickler',
        title: 'Webentwickler aus Karlsruhe' 
      },
      component: () => import('../views/UeberMich.vue')
    }
    ,
    {
      path: '/angebot',
      name: 'angebot',
      meta: { breadcrumb: 'Das Angebot' },
      component: () => import('../views/DasAngebot.vue')
    }
    ,
    {
      path: '/vorteile',
      name: 'Deine Vorteile',
      meta: { breadcrumb: 'Deine Vorteile' },
      component: () => import('../views/DieVorteile.vue')
    }
    ,
    {
      path: '/ablauf',
      name: 'ablauf',
      meta: { breadcrumb: 'Der Ablauf' },
      component: () => import('../views/DerAblauf.vue')
    },
    {
      path: '/projekt-starten',
      name: 'projekt-starten',
      meta: { breadcrumb: 'Projekt starten' },
      component: () => import('../views/DerAblauf.vue')
    }
  ]
})


router.afterEach((to, from) => {
  // Setze den Titel der Seite
  document.title = to.meta.title || 'Standardtitel, falls keiner definiert ist';

  // Entferne alle vorherigen Meta-Tags
  document.querySelectorAll('head [data-vue-meta="true"]').forEach(el => el.remove());

  // Setze die Meta-Tags für die aktuelle Seite
  if (to.meta.metaTags) {
    to.meta.metaTags.forEach(tag => {
      const tagElement = document.createElement('meta');
      Object.keys(tag).forEach(key => {
        tagElement.setAttribute(key, tag[key]);
      });
      tagElement.setAttribute('data-vue-meta', 'true');
      document.head.appendChild(tagElement);
    });
  }
});

export default router
