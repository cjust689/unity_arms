<template>
    <div class="rifle">
        <div class="white section">
            <div class="row container">
                <div class="col s12 l6">
                    <transition name="fade" mode="out-in">
                        <div :key="foo" class="card">
                            <transition name="fade" mode="out-in">
                                <div class="card-image" :key="foo" style="height: 100%" v-html="randomImage('rifle')">
                                </div>
                            </transition>
                        </div>
                    </transition>
                </div>
                <div class="col s12 l6">
                    <transition name="fade" mode="out-in">
                        <p :key="foo">{{ foo }}</p>
                    </transition>
                </div>
            </div>
            <div class="row container valign-wrapper">
                <div class="col s10 ">
                    <a class=" right btn yellow darken-2 black-text" v-on:click="foo = previousTutorial()">Back</a>
                </div>
                <div class="col s1 right center-align" v-html="updatePageNumber()"></div>
                <div class="col s1 right">
                    <a class="right btn yellow darken-2 black-text" v-on:click="foo = nextTutorial() ">Next</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
let i = 0;
let obj = {
    foo: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
}
const tutorial = {
    0: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    1: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    2: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    3: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
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
    return ('Page' + pageNo);
}



import { getRandom, randomImage, randomQuote } from '../js/functions';
export default {
    name: 'rifle',
    components: {
        //HelloWorld
    },
    data() {
        return obj

    },
    methods: {
        getRandom,
        randomImage,
        nextTutorial,
        previousTutorial,
        randomQuote,
        updatePageNumber

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