import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/LogIn.vue';
import Activities from '@/views/MainActivities.vue';
import CreateActivity from '@/views/CreateActivity.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
    meta: { requiresAuth: true },
  },
  {
    path: '/create-activity',
    name: 'CreateActivity',
    component: CreateActivity,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const accessToken = store.state.auth.accessToken;
    if (!accessToken) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
