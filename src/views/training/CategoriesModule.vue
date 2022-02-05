<template>
<div class="trainingModule">
    <div class="">
        <div class="row container">
            <div class="col s12">
                <div class="col s12">
                    <h5>
                        <router-link class="white-text" style="text-transform: uppercase;" :to="{ name: 'Training'}">Training</router-link> 
                        &nbsp; <span class="white-text"> > </span> &nbsp;
                        <router-link class="white-text" style="text-transform: uppercase;"  :to="{ name: trainingType}" exact>{{ trainingType }} </router-link> 
                        &nbsp; <span class="white-text"> > </span> &nbsp;
                        <router-link class="white-text" style="text-transform: uppercase;  text-decoration: underline; text-decoration-thickness: 0.2em; text-decoration-color:#fbc02d" :to="{ path: trainingType/trainingCategory}" exact>{{ trainingMaterial.title }} </router-link>          
                    </h5>
                </div>
            </div>
            <div class="col s12">
                <transition name="fade" mode="out-in">
                    <div :key="obj.foo" class="card">
                        <transition name="fade" mode="out-in">
                            <div class="card-image" :key="trainingMaterial.text" style="" >
                                <!-- <img :src="trainingMaterial.img"> -->
                            </div>
                        </transition>
                    </div>
                </transition>
            </div>
            <div class="row">
                <div class="col s12 m9 l10">
                    <transition-group name="fade" mode="out-in">
                        <div class="col s12" v-for="t in trainingMaterial.text" :key="t">
                            <div v-bind:id="t.title" class="section scrollspy">
                                <h3 class="yellow-text"> {{ t.title }}</h3>
                                <p class=""> {{ t.text }}</p>
                            </div>
                            <div class="divider"></div>
                        </div>
                    </transition-group>
                </div>
                <div class="col hide-on-small-only m3 l2">
                    <ul class="section table-of-contents pinned">
                        <div class="col s12" v-for="t in trainingMaterial.text" :key="t">
                            <li><a v-bind:href="`#${t.title}`" class="scrollspy">{{ t.title }}</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <div class="divider yellow darken-2">
        </div>
    </div>
</div>
</template>
<script>
/* eslint-disable */
let i = 0;
let obj = {
    foo: '',
    count: 0,
    maxCount: 0,
    page: ''
}
let trainingType = null;
let trainingCategory;
let material = null;
let updatePage = (i, text) => {
    obj.page = text[0];
    obj.maxCount = Object.keys(text).length;
}

function getTrainingMaterial(category,type) {
    console.log(category,type);
    let material = categories[type][category];
    console.log(material);
    return material;
}



import { getRandom, randomImage, randomQuote, updatePageNumber, nextTutorial, previousTutorial,getLocalStream } from '../../js/functions';
import RelatedTraining from '../training/RelatedTraining';
import { training } from './content.js';
import { categories } from './content.js';



export default {
    name: 'relatedTraining',
    components: {
        RelatedTraining
    },
    props: ['type','category'],
    data() {
        return {
            obj,
            i,
        }
    },
    methods: {
        getRandom,
        randomImage,
        nextTutorial,
        previousTutorial,
        randomQuote,
        updatePageNumber,
        updatePage,
        
    },
    watch: {
        type: {
            handler(t) {
                this.trainingType = t;
            },
            immediate: true,
        },
        category: {
            handler(c) {
                this.trainingCategory = c;
                this.trainingMaterial = getTrainingMaterial(this.trainingCategory,this.trainingType);
                console.log(this.trainingMaterial)

            },
            immediate: true,
        },
    },
    mounted() {
        M.AutoInit();
        let elems = document.querySelectorAll('.scrollspy');
        let instances = M.ScrollSpy.init(elems);
        randomQuote();
    }
}
</script>
<style>
@import "../../styles/materialize.min.css";
@import "../../styles/style.css";
</style>