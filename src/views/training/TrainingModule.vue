<template>
    <div class="trainingModule">
        <div class="white section">
            <div class="row container">
                <div class="col s12">
                    <h5 style="text-transform: uppercase;">{{ this.$options.propsData.trainingType }}</h5>
                </div>
                <div class="col s12 l6">
                    <transition name="fade" mode="out-in">
                        <div :key="obj.foo" class="card">
                            <transition name="fade" mode="out-in">
                                <div class="card-image" :key="obj.foo" style="height: 100%" v-html="randomImage(this.$options.propsData.trainingType)">
                                </div>
                            </transition>
                        </div>
                    </transition>
                </div>
                <div class="col s12 l6">
                    <transition name="fade" mode="out-in">
                        <!-- make a component here that just handles the text portion of this component -->
                        <p :key="obj.foo" v-html="obj.page"></p>
                    </transition>
                </div>
            </div>
            <div class="row container valign-wrapper">
                <div class="col s10 ">
                    <a class=" right btn yellow darken-2 black-text" v-on:click="obj.foo = loadPrev(obj.count,obj.foo,$options.propsData.trainingMaterial)">Back</a>
                </div>
                 <div class="col s1 right">
                    {{ obj.count + 1 }} / {{ obj.maxCount }}
                </div>
                <div class="col s1 right">
                    <a class="right btn yellow darken-2 black-text" v-on:click="
                    obj.foo = loadNext(obj.count,obj.foo,$options.propsData.trainingMaterial)
                    ">Next</a>
                </div>
            </div>
            <div class="divider yellow darken-2">
            </div>
            <div class="container">
                <h5>Related Material</h5>
                <RelatedTraining />
            </div>
            <!-- </transition> -->
        </div>
    </div>
</template>
<script>
/* eslint-disable */
//create these variables to update template/component
//page counter
let i = 0;
let obj = {
    foo: '',
    count: 0,
    maxCount: 0,
    page: ''
}

//call this function first
//then call nextTutorial in funcitons js
//sort out return statement and then return

let loadNext = (count, totalCount, text) => {
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


//On Load
let updatePage = (i, text) => {
    obj.page = text[0];
    obj.maxCount = Object.keys(text).length;
}


import pistol from './content.js';
import { getRandom, randomImage, randomQuote, updatePageNumber, nextTutorial, previousTutorial,getLocalStream } from '../../js/functions';
import RelatedTraining from '../training/RelatedTraining' //conver this to fetch related material training modules

export default {
    name: 'trainingModule',
    components: {
        RelatedTraining
    },
    props: {
        trainingType: String,
        trainingMaterial: Object,
    },
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
        getLocalStream





    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
        randomQuote();
        //init page load
        updatePage(i, this.$options.propsData.trainingMaterial);
        getLocalStream();
        //updatePageNumber(i, this.$options.propsData.trainingMaterial);



    }
}



























// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue' //add the helloworld component to this vue
</script>
<style>
@import "../../styles/materialize.min.css";
@import "../../styles/style.css";
</style>