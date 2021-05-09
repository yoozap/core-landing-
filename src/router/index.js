import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tokenomics from '../views/Tokenomics.vue'
import Terms from '../views/Terms.vue'
import Technology from '../views/Technology.vue'
import Guideline from '../views/Guideline.vue'
import Roadmap from '../views/Roadmap.vue'
import Privacy from '../views/Privacy.vue'
import Proposals from '../views/Proposals.vue'
import Community from '../views/Community.vue'
import Wiki from '../views/Wiki.vue'
import ResearchAreas from '../views/ResearchAreas.vue'
import Blog from '../views/Blog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { scrollToTop: true }
  },
  {
    path: '/research-areas',
    name: 'Researchareas',
    component: ResearchAreas,
    meta: { scrollToTop: true }
  },
  {
    path: '/tokenomics',
    name: 'Tokenomics',
    component: Tokenomics,
    meta: { scrollToTop: true }
  },
  {
    path: '/termsofuse',
    name: 'Termsofuse',
    component: Terms,
    meta: { scrollToTop: true }
  },
  {
    path: '/technology',
    name: 'Technology',
    component: Technology,
    meta: { scrollToTop: true }
  },
  {
    path: '/guidelines',
    name: 'Guidelines',
    component: Guideline,
    meta: { scrollToTop: true }
  },
  {
    path: '/roadmap',
    name: 'Roadmap',
    component: Roadmap,
    meta: { scrollToTop: true }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: { scrollToTop: true }
  },
  {
    path: '/proposals',
    name: 'Proposals',
    component: Proposals,
    meta: { scrollToTop: true }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: { scrollToTop: true }
  },
  {
    path: '/wiki',
    component: Wiki,
    name: 'wikiOut',
    children: [
        {
            path: ':sectionName',
            name: 'wiki',
            component: Wiki
        }
    ],
    meta: { scrollToTop: true }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: { scrollToTop: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 0 }
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
