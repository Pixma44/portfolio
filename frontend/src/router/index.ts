import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import CV from '@/pages/CV.vue'
import Projects from '@/pages/Projects.vue'
import Contact from '@/pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV
    },
    {
      path: '/projets',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router