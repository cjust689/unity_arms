<template>
<div class="trainingModule">
    <div class="white section">
        <div class="row container">
            <div class="col s12">
                <!-- <h5 style="text-transform: uppercase;">{{ trainingType }} </h5> -->
                <h5>
                    <router-link class="black-text" style="text-transform: uppercase;" :to="{ name: 'Training'}">Training</router-link> 
                    &nbsp; > &nbsp;
                    <router-link class="black-text" style="text-transform: uppercase;  text-decoration: underline; text-decoration-thickness: 0.2em; text-decoration-color:#fbc02d" :to="{ name: 'Training', params: { type: trainingType }}">{{ trainingType }} </router-link>          
                </h5>
            </div>
            <div class="col s12">
                <transition name="fade" mode="out-in">
                    <div :key="obj.foo" class="card">
                        <transition name="fade" mode="out-in">
                            <div class="card-image" :key="obj.foo" style="height: 100%" v-html="randomImage(trainingType)">
                            </div>
                        </transition>
                    </div>
                </transition>
            </div>
            <transition name="fade" mode="out-in">
                <div class="col s12">
                    <p :key="obj.foo" v-html="obj.page"></p>
                </div>
            </transition>
        </div>
        <div class="row container valign-wrapper">
            <div class="col s1 ">
                <router-link class="eft btn yellow darken-2 black-text" :to="{ name: 'excercises', params: { type: trainingType }}">Excercises</router-link>
            </div>
            <!-- <div class="col s9 right ">
                <a class="right btn yellow darken-2 black-text" v-on:click="
                    obj.foo = loadNext(obj.count,obj.foo,trainingMaterial)
                ">Next</a>
                
                <div class="col s2 center right">{{ obj.count + 1 }} / {{ obj.maxCount }}</div>
                <a class=" right btn yellow darken-2 black-text" v-on:click="obj.foo = loadPrev(obj.count,obj.foo,trainingMaterial)">Back</a>
            </div> -->
        </div>
        <div class="divider yellow darken-2">
        </div>
        <div class="container">
            <h5>Related Material</h5>
            <RelatedTraining v-bind:type="type"/>
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
let trainingMaterial = null;
let loadNext = (count, totalCount, text) => {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
    let pageText = nextTutorial(count, text); //returns the page text & count
    let pageNumber = updatePageNumber(obj.count, text) //returns the total page Numbers/**/
    obj.count = pageText.i;
    obj.page = pageText.text;
}
let loadPrev = (count, totalCount, text) => {
    let pageText = previousTutorial(count, text); //returns the page text & count
    let pageNumber = updatePageNumber(obj.count, text) //returns the total page Numbers/**/
    obj.count = pageText.i;
    obj.page = pageText.text;
}
let updatePage = (i, text) => {
    obj.page = text[0];
    obj.maxCount = Object.keys(text).length;
}
function getThing(trainingType) {
    return training[trainingType].trainingSections;
}
import { getRandom, randomImage, randomQuote, updatePageNumber, nextTutorial, previousTutorial,getLocalStream } from '../../js/functions';
import RelatedTraining from '../training/RelatedTraining';
import { training } from './content.js';


export default {
    name: 'trainingModule',
    components: {
        RelatedTraining
    },
    // props: {
    //     trainingType: String,
    //     trainingMaterial: Object,
    //     type: String
    // },
    props: ['type'],
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
        loadNext,
        loadPrev,
        getLocalStream,
        getThing
    },
    watch: {
        type: {
            handler(t) {
                console.log(t);
                this.trainingType = t;
                console.log(this.trainingType);
                this.trainingMaterial = getThing(this.trainingType);
                console.log(this.trainingMaterial);
                updatePage(this.i, this.trainingMaterial);
            },
            immediate: true,
        },
    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
        randomQuote();
        //updatePage(i, this.$options.propsData.trainingMaterial);
        //getLocalStream();
        //updatePageNumber(i, this.$options.propsData.trainingMaterial);
    }
}
</script>
<style>
@import "../../styles/materialize.min.css";
@import "../../styles/style.css";
</style>