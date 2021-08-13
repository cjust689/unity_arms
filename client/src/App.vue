<style>
@import "./styles/materialize.min.css";
@import "./styles/style.css";
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
</style>



<template>
    <div id="app container">
        <div class="col s12 yellow darken-2 banner center-align">
            <!-- <h5 class="bannerText center-align">UPCOMING  EVENTS</h5> -->
            <router-link class="bannerText center-align black-text pulsate" to="/events">UPCOMING EVENTS</router-link>
        </div>

        <UnityHeader />
        
        <transition name="fade" mode="out-in">
            <router-view>
                <div class="home">
                    <div class="parallax-container">
                        <h5> testing 123</h5>
                        <div class="parallax" v-html="randomImage()"></div>
                    </div>
                </div>
            </router-view>
        </transition>

        <div class="divider yellow darken-2"></div>
        <PP />
        <!-- <div class="parallax-container">
            <div class="parallax">
                <iframe class="embed-responsive-item" id="ytplayer" type="text/html"  width="1920" height="1080" src="https://www.youtube.com/embed/EQBWmtXlKcM?playlist=EQBWmtXlKcM&loop=1&autoplay=1&controls=1&showinfo=0&mute=1" frameborder="0"></iframe>
            </div>
        </div> -->

        <UnityFooter />

        <!-- <div class="grey darken-4 center-align valign-wrapper footerBanner">
            <div class="row">
                <div class="col s12">
                    <h5 class="grey-text darken-4">{{ randomQuote() }}</h5>
                </div>
            </div>
        </div>
        <div class="">
            <h6 class="black-text center-align yellow darken-2">Copyright 2021</h6>
        </div> -->
    </div>
</template>
<script>
import { getRandom, randomQuote, randomImage } from './js/functions';
import M from './js/materialize';
const UnityHeader = () => import("./components/AppHeader");
const UnityFooter = () => import("./components/Footer")
const PP = () => import("./components/ParallaxProjector")
export default {

    name: 'App',
    components:{
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