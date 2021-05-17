import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },

  {
    path: '/measurement',
    name: 'Measurement',
    component: () => import('@/views/Measurement.vue'),
    children: [
      {
        path: 'bloodpressure',
        name: 'Bloodpressure',
        component: () => import('@/components/BloodPressure.vue'),
      },
    
      {
        path: 'glycaemia',
        name: 'Glycaemia',
        component: () => import('@/components/Glycaemia.vue'),
      },
    
      {
        path: 'heartrate',
        name: 'HeartRate',
        component: () => import('@/components/HeartRate.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
