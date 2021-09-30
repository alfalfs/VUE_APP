import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router





// import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// // import Users from '../views/Users.vue'
// import Edit from '@/views/Edit.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   // {
//   //   path: '/about',
//   //   name: 'About',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   // },
//   // {
//   //   path: '/',
//   //   name: 'Users',
//   //   // component: Users
//   //   component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
//   // },
//   {
//     path: '/edit/:id',
//     name: 'Edit',
//     component: Edit
//   }
  
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

// export default router
