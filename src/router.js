import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Calendars from './views/Calendars.vue';
import Friends from './views/Buddies.vue';

import Register from './views/Authentication/Register.vue';
import Login from './views/Authentication/Login.vue';
import ForgottenPassword from './views/Authentication/ForgottenPassword.vue';
import ForgottenPasswordReset from './views/Authentication/ForgottenPasswordReset.vue';
import ForgottenPasswordDone from './views/Authentication/ForgottenPasswordDone.vue';

import UserPanel from './views/User/UserPanel.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/calendars',
      name: 'calendars',
      component: Calendars,
    },
    {
      path: '/calendars/day',
      name: 'calendarDay',
      component: Calendars,
    },
    {
      path: '/calendars/week',
      name: 'calendarWeek',
      component: Calendars,
    },
    {
      path: '/calendars/month',
      name: 'calendarMonth',
      component: Calendars,
    },
    {
      path: '/profile',
      name: 'user',
      component: UserPanel,
    },
    {
      path: '/register/month',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/forgotten-password',
      name: 'forgottenPassword',
      component: ForgottenPassword,
    },
    {
      path: '/forgotten-password/reset',
      name: 'forgottenPasswordReset',
      component: ForgottenPasswordReset,
    },
    {
      path: '/forgotten-password/finish',
      name: 'forgottenPasswordDone',
      component: ForgottenPasswordDone,
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends,
    },
  ],
});
