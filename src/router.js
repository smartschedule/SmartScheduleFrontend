import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Calendars from './views/Calendars.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Friends from './views/Buddies.vue';

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
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends,
    },
  ],
});
