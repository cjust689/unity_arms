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
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        
        component: () => import('../views/About.vue')
    },
    {
        path: '/store',
        name: 'Store',
        component: () => import('../views/Store.vue')
    },
    {
        path: '/training/safety',
        name: 'safety',
        props: true,
        
        component: () => import('../views/training/TrainingModule.vue')
    }, 
    {
        path: '/members',
        name: 'Members',
        component: () => import('../views/Members.vue')
    },
    {

        path: '/training/pistol',
        name: 'pistol',
        props: true,
        
        component: () => import('../views/training/TrainingModule.vue')
    },
    {

        path: '/training/rifle',
        name: 'rifle',
        props: true,

        component: () => import('../views/training/TrainingModule.vue')
    },
    {
        path: '/training',
        name: 'Training',
        
        component: () => import('../views/Training.vue')
    },
    {

        path: '/excercises/:type',
        name: 'excercises',
        component: () => import('../views/training/Excercises.vue'),

        props: true,
        
    },
    {

        path: '/:type/:category',
        name: 'TrainingModuleRelated',
        component: () => import('../views/training/TrainingModuleRelated.vue'),

        props: true,
        
    },
    {

        path: '/:type/module/:drill',
        name: 'excercise',
        component: () => import('../views/training/module.vue'),

        props: true,
    },
    {
        path: "*",
        name: 'PageNotFound',
        component: () => import('../views/PageNotFound.vue')
    },
    {
        path: "/training/*",
        name: 'PageNotFound',
        component: () => import('../views/PageNotFound.vue')
    },
]

const router = new VueRouter({
    routes
})


function getThing(trainingType) {
    return training[trainingType];
}

export default router