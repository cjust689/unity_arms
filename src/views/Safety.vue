<template>
    <div class="safety ">
        <div class="white section ">
            <div class="row container">
                <div class="col s12 l6">
                    <transition name="fade" mode="out-in">
                        <div :key="obj.foo" class="card">
                            <transition name="fade" mode="out-in">
                                <div class="card-image" :key="obj.foo" style="height: 100%" v-html="updateCardTitle()">
                                </div>
                            </transition>
                        </div>
                    </transition>
                </div>
                <div class="col s12 l6">
                    <transition name="fade" mode="out-in">
                        <p :key="obj.foo">{{ obj.foo }}</p>
                    </transition>
                </div>
            </div>
            <div class="row container valign-wrapper">
                <div class="col s10 ">
                    <a class=" right btn yellow darken-2 black-text" v-on:click="obj.foo = previousTutorial()">Back</a>
                </div>
                <div class="col s1 right center" v-html="updatePageNumber()"></div>
                <div class="col s1 right">
                    <a class="right btn yellow darken-2 black-text" v-on:click="obj.foo = nextTutorial()">Next</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
let i = 0;
let cardTitle = {
    foo: `1234 test`
}
let obj = {
    foo: `Accept the mindset to always keep your gun pointed in a direction that would safely stop the bullet should it discharge.  At an event, if you're not on the firing line, your gun should stay holstered muzzle-down, cased, or locked open and pointing down and away from people.

        If you're on the firing line, your gun should stay pointed downrange, at the bullet trap backstop at the end of the range.  If you will be cleaning or handling your unloaded gun at home, find a safe direction ahead of time -- bullets penetrate floors, ceiling, windows, and walls.  Masonry, a full bookcase, a full freezer, downward (if you're on the ground floor), or even a five gallon bucket of sand may be good options`
}
const fourRules = {
    0: `1) Watch that muzzle! Keep it pointed in a safe direction at all times.`,
    1: `2) Be sure of the target and what is in front of it and beyond it. Know the identifying features of the game you hunt. Make sure you have an adequate backstop—don’t shoot at a flat, hard surface or water.`,
    2: `3) Treat every firearm with the respect due a loaded gun. It might be, even if you think it isn't.`,
    3: `4) Keep your finger outside the trigger guard until ready to shoot. This is the best way to prevent an accidental discharge.`
}
const tutorial = {
    0: `Accept the mindset to always keep your gun pointed in a direction that would safely stop the bullet should it discharge.  At an event, if you're not on the firing line, your gun should stay holstered muzzle-down, cased, or locked open and pointing down and away from people. <br>

        If you're on the firing line, your gun should stay pointed downrange, at the bullet trap backstop at the end of the range.  If you will be cleaning or handling your unloaded gun at home, find a safe direction ahead of time -- bullets penetrate floors, ceiling, windows, and walls.  Masonry, a full bookcase, a full freezer, downward (if you're on the ground floor), or even a five gallon bucket of sand may be good options.`,
    1: `At events, when you're holding a gun but not shooting, you'll hear us ask you to "index" your trigger finger.  This means to keep your trigger finger straight, and to raise it up to rest flat alongside the body of your gun.  Whenever you are not on target and ready to fire, your trigger finger should always be outside the trigger guard and resting straight and flat alongside the body of your gun.`,
    2: `Even if you're absolutely certain a gun is unloaded, still follow these rules for safe gun handling.  You want these rules to be natural habits; holding yourself to them each and every time helps make them so.`,
    3: `You are responsible for the entire path of every bullet you fire from your gun.  If you hit your intended target, the bullet may still continue through.  ADTA live-fire events are conducted at locations with designated bullet trap backstops or berms to help contain rounds to the intended range area; you are responsible for only aiming in directions where you can be assured the bullet will be safely stopped.`
}

function nextTutorial() {
    if (i < Object.keys(tutorial).length - 1) {
        i++;
        console.log(i)
        console.log(Object.keys(tutorial).length);
        return tutorial[i];
    }
    console.log(i)
    console.log(Object.keys(tutorial).length);

    return tutorial[i]
}

function previousTutorial() {
    if (i > 0) {
        i--;
        console.log(`I did not move`);
        console.log(i)
        console.log(Object.keys(tutorial).length);
        return tutorial[i];
    }
    console.log(i)
    console.log(Object.keys(tutorial).length);
    return tutorial[i];
}

function updatePageNumber() {
    let pageNo = i + 1;
    console.log('Update')
    updateCardTitle(i);
    return ('Page' + pageNo);


}



function updateCardTitle() {

    let thing = randomImage('safety');
    let newDiv = `<span class="card-title">` + fourRules[i] + `</span>`;

    thing = thing + newDiv;
    return thing




}



import { getRandom, randomImage, randomQuote } from '../js/functions';
export default {
    name: 'safety',
    components: {
        //HelloWorld
    },
    data() {
        return {
            obj,
            cardTitle
        }

    },
    methods: {
        getRandom,
        randomImage,
        nextTutorial,
        previousTutorial,
        randomQuote,
        updatePageNumber,
        updateCardTitle
    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
        randomQuote();
        console.log(randomQuote());
        updatePageNumber();
    }
}
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue' //add the helloworld component to this vue
</script>
<style>
@import "../styles/materialize.min.css";
@import "../styles/style.css";
</style>