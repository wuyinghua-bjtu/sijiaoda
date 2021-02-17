import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/coachAppointment',
    component: () => import('../views/coachPre')
  },
  {
    path: '/coachTest',
    component: () => import('../views/coachTest')
  },
  {
    path: '/gymAbout',
    component: () => import('../views/gymAbout')
  },
  {
    path: '/gymTest',
    component: () => import('../views/gymTest')
  },
  {
    path: '/training',
    component: () => import('../views/training')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
