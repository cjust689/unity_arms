<template>
<div class="trainingModule">
    <div class="">
        <div class="row container">
            <div class="col s12">
                <!-- <h5 style="text-transform: uppercase;">{{ trainingType }}: {{ trainingCategory }}</h5> -->
                <div class="col s12">
                <!-- <h5 style="text-transform: uppercase;">{{ trainingType }} </h5> -->
                <h5>
                    <router-link class="white-text" style="text-transform: uppercase;" :to="{ name: 'Training'}">Training</router-link> 
                    &nbsp; <span class="white-text"> > </span> &nbsp;
                    <router-link class="white-text" style="text-transform: uppercase;"  :to="{ name: trainingType}" exact>{{ trainingType }} </router-link> 
                    &nbsp; <span class="white-text"> > </span> &nbsp;
                    <router-link class="white-text" style="text-transform: uppercase;  text-decoration: underline; text-decoration-thickness: 0.2em; text-decoration-color:#fbc02d" :to="{ name: 'Training', params: { type: trainingType }}">{{ trainingCategory }} </router-link>          
                </h5>
            </div>
            </div>
            <div class="col s12">
                <transition name="fade" mode="out-in">
                    <div :key="obj.foo" class="card">
                        <transition name="fade" mode="out-in">
                            <div class="card-image" :key="trainingMaterial.training" style="" ><img :src="trainingMaterial.img">
                            </div>
                        </transition>
                    </div>
                </transition>
            </div>
            <transition name="fade" mode="out-in">
                <div class="col s12">
                    <p :key="trainingMaterial.training" v-html="trainingMaterial.training"></p>
                </div>
            </transition>
        </div>
        <!-- <div class="row container">
            <div class="col s1 left">
                <router-link class="left btn yellow darken-2 black-text" :to="{ path: `/${type}/module/${category}` }">Excercises</router-link>
            </div>
        </div> -->
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
let trainingMaterial = null;
let updatePage = (i, text) => {
    obj.page = text[0];
    obj.maxCount = Object.keys(text).length;
}

function getTrainingMaterial(category,type) {
        let material = relatedMaterial[type][category];
    return material;
}



import { getRandom, randomImage, randomQuote, updatePageNumber, nextTutorial, previousTutorial,getLocalStream } from '../../js/functions';
import RelatedTraining from '../training/RelatedTraining';
import { training } from './content.js';
import { relatedMaterial } from './content.js';



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
        randomQuote();
    }
}
</script>
<style>
@import "../../styles/materialize.min.css";
@import "../../styles/style.css";
</style>