<style>
@import "./styles/materialize.min.css";
@import "./styles/style.css";
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
</style>



<template>
    <div id="app container">

        <!-- <UnityBanner/> -->
        
        <UnityHeader />
        
        <transition name="fade" mode="out-in">
            <router-view>
                <div class="home">
                    <div class="parallax-container">
                        <h5> H5 Title</h5>
                        <div class="parallax" v-html="randomImage()"></div>
                    </div>
                </div>
            </router-view>
        </transition>

        <div class="divider yellow darken-2"></div>

        <PP />
        
        <UnityFooter />
    </div>
</template>
<script>
import { getRandom, randomQuote, randomImage } from './js/functions';
import M from './js/materialize';
const UnityHeader = () => import("./components/AppHeader");
const UnityFooter = () => import("./components/Footer");
const PP = () => import("./components/ParallaxProjector");
//const UnityBanner = () => import("./components/Banner");

export default {

    name: 'App',
    components:{
        //UnityBanner,
        UnityHeader,
        UnityFooter,
        PP
    },
    mounted() {
        M.AutoInit();
    },
    methods: {
        getRandom,
        randomQuote,
        randomImage
    },
}
</script>