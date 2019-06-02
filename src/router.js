import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home/Home.vue';
import About from './components/about/About.vue';
import Services from './components/services/Services.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Blog from './components/blog/Blog.vue';
import Contact from './components/contact/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/about/About.vue'),
    },
    {
      path: '/services',
      name: 'Services',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "services" */ './components/services/Services.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "portfolio" */ './components/portfolio/Portfolio.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "blog" */ './components/blog/Blog.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ './components/contact/Contact.vue'),
    },
  ],
});
