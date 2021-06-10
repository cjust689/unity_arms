/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { randomImage, getRandom, randomQuote } from '../js/functions'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        //component: Home,
        component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/store',
        name: 'Store',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Store.vue')
    },
    {
        path: '/training',
        name: 'Training',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Training.vue')
    },
    {
        path: '/safety',
        name: 'Safety',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Safety.vue')
    },
    {
        path: '/rifle',
        name: 'rifle',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Rifle.vue')
    },
    {
        path: '/pistol',
        name: 'pistol',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Pistol.vue')
    },
    {
        path: '/pistol/pistolGrip',
        name: 'pistolGrip',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/pistol/PistolGrip.vue')
    },
    {
        path: '/pistol/pistolTraining',
        name: 'pistolTraining',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/pistol/PistolTraining.vue')
    },
    {
        path: "*",
        name: 'PageNotFound',
        component: () => import( /* webpackChunkName: "about" */ '../views/PageNotFound.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router