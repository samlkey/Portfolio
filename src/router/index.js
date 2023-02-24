import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import Experience from '../components/Experience.vue'
import Qualifications from '../components/Qualifications.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { transition: 'slide-left' }
  },
  {
    path: "/contact",
    name: 'contact',
    component: Contact
  },
  {
    path: "/experience",
    name: 'experience',
    component: Experience
  },
  {
    path: "/qualifications",
    name: 'qualifications',
    component: Qualifications
  },

  //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
