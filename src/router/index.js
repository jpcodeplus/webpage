import { createRouter, createWebHistory } from 'vue-router'

// Lazy loading für Komponenten, um die initiale Ladezeit zu verbessern
const StartSeite = () => import('../views/StartSeite.vue')
const UeberMich = () => import('../views/UeberMich.vue')
const DasAngebot = () => import('../views/DasAngebot.vue')
const DieVorteile = () => import('../views/DieVorteile.vue')
const DerAblauf = () => import('../views/DerAblauf.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: StartSeite,
      meta: { breadcrumb: 'Home' },
      children: [
        {
          path: 'ueber-mich', // Pfad relativ zum Elternelement angepasst
          name: 'Über mich',
          component: UeberMich,
          meta: { breadcrumb: 'Der Webentwickler' },
          children: [{
            path: 'demo', // Pfad relativ zum Elternelement angepasst
            name: 'Eine Demo',
            component: UeberMich,
            meta: { breadcrumb: 'Der Webentwickler' }
          }
          ]
        },
        {
          path: 'angebot', // Pfad relativ zum Elternelement angepasst
          name: 'Angebot',
          component: DasAngebot,
          meta: { breadcrumb: 'Das Angebot' }
        },
        {
          path: 'vorteile', // Pfad relativ zum Elternelement angepasst
          name: 'Vorteile',
          component: DieVorteile,
          meta: { breadcrumb: 'Deine Vorteile' }
        },
        {
          path: 'ablauf', // Pfad relativ zum Elternelement angepasst
          name: 'Ablauf',
          component: DerAblauf,
          meta: { breadcrumb: 'Der Ablauf' }
        },
        {
          path: 'projekt-starten', // Pfad relativ zum Elternelement angepasst
          name: 'Starten',
          component: DerAblauf, // Hier eventuell ein Fehler? Gleiche Komponente wie 'ablauf'?
          meta: { breadcrumb: 'Projekt starten' }
        }
      ]
    }
  ]
})

router.afterEach((to) => {
  // Setze den Titel der Seite
  document.title = to.meta.title || 'Standardtitel, falls keiner definiert ist'

  // Besser wäre es, Meta-Tags über ein Vue-Plugin oder ähnliches zu verwalten,
  // um die Separation of Concerns (Trennung der Zuständigkeiten) zu gewährleisten.
})

export default router
