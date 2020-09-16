import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import i18n, { loadLocaleMessagesAsync } from "@/i18n"
import {
    setDocumentLang,
    setDocumentTitle
} from "@/util/i18n/document"

Vue.use(VueRouter)

const { locale } = i18n

const routes = [
  {
      path: '/',
      redirect: locale
  },
  {
    path: '/:locale',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/pages/Main.vue')
      },
      {
        path: 'main',
        component: () => import('@/pages/Main.vue')
      },
      {
        path: 'partners',
        component: () => import('@/pages/Partners.vue')
      },
      {
        path: 'participants',
        component: () => import('@/pages/Participants.vue')
      },
      {
        path: 'facts',
        component: () => import('@/pages/Facts.vue'),
      },
      {
        path: 'facts/:id',
        component: () => import('@/pages/FullArticle.vue')
      },
      {
        path: 'review',
        component: () => import('@/pages/Review.vue')
      },
      {
        path: 'our-history',
        component: () => import('@/pages/OurHistory.vue')
      },
      {
        path: 'contacts',
        component: () => import('@/pages/Contacts.vue')
      },
      {
        path: 'promoters',
        component: () => import('@/pages/Promoters.vue')
      },
      {
        path: 'events',
        component: () => import('@/pages/Events.vue')
      },
      {
        path: 'photos',
        component: () => import('@/pages/Photos.vue')
      },
      {
        path: 'audio',
        component: () => import('@/pages/Audio.vue')
      },
      {
        path: 'video',
        component: () => import('@/pages/Video.vue')
      },
      {
        path: 'mass-media',
        component: () => import('@/pages/MassMedia.vue')
      },
      {
        path: 'payment',
        component: () => import('@/pages/Payment.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (to.params.locale === from.params.locale) {
        next()
        return
    }

    const { locale } = to.params

    // @ts-ignore
    loadLocaleMessagesAsync(locale).then(() => {
        setDocumentLang(locale)
        setDocumentTitle(i18n.t("app.title"))
    })

    next()
})

export default router
