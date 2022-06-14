
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/our', component: () => import('pages/Businesses.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/farms', component: () => import('pages/OurFarms.vue') },
      { path: '/rima', component: () => import('pages/Rima.vue') },
      { path: '/projects', component: () => import('pages/Projects.vue') },
      { path: '/contactUs', component: () => import('pages/Contact.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
