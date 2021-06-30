/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { randomImage, getRandom, randomQuote } from '../js/functions'

import { training } from '../views/training/content.js';



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
        
        component: () => import( /* webpackChunkName: "about" */ '../views/Safety.vue')
    }, 
    {

        path: '/:type',
        name: 'pistol',
        props: true,
        
        component: () => import( /* webpackChunkName: "about" */ '../views/training/TrainingModule.vue')
    },
    {

        path: '/:type',
        name: 'rifle',
        props: true,

        component: () => import( /* webpackChunkName: "about" */ '../views/training/TrainingModule.vue')
    },
    {

        path: '/excercises/:type',
        name: 'excercises',
        component: () => import('../views/training/Excercises.vue'),

        props: true,
        
    },
    {

        path: '/:type/module/:drill',
        name: 'excercise',
        component: () => import('../views/training/module.vue'),

        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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


function getThing(trainingType) {
    return training[trainingType];
}

export default router