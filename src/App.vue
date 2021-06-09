<style>
@import "./styles/materialize.min.css";
@import "./styles/style.css";
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>



<template>
    <div id="app">
        <div class="col s12 yellow darken-2 banner">
            <h5 class="bannerText center-align">UPCOMING EVENTS</h5>
        </div>
        <nav>
            <div class="container">
                <div class="nav-wrapper">
                    <router-link class="logo black-text" to="/">UNITY ARMS
                        <img src="/img/home/Asset 119.png">
                    </router-link>
                    <a href="#" data-target="mobile-demo" data-activates="mobile-demo" class="sidenav-trigger button-collapse button right"><i class="black-text material-icons">menu</i><span class="btn-open"></span></a>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <router-link class="black-text" to="/store"><span>Store</span></router-link>
                        </li>
                        <li>
                            <router-link class="black-text" to="/training"><span>Training</span></router-link>
                        </li>
                        <li>
                            <router-link class="black-text" to="/about"><span>About</span></router-link>
                        </li>
                        <li>
                            <router-link class="black-text" to="/members"><span>Members</span></router-link>
                        </li>
                    </ul>
                    <ul class="sidenav" id="mobile-demo">
                         <li>
                            <router-link class="black-text" to="/store"><span>Store</span></router-link>
                        </li>
                        <li>
                            <router-link class="black-text" to="/training"><span>Training</span></router-link>
                        </li>
                        <li>
                            <router-link class="black-text" to="/about"><span>About</span></router-link>
                        </li>
                        <li>
                            <router-link class="black-text" to="/members"><span>Members</span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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
        <div class="parallax-container">
        <div class="parallax">
            <iframe class="embed-responsive-item" id="ytplayer" type="text/html"  width="1920" height="1080" src="https://www.youtube.com/embed/EQBWmtXlKcM?playlist=EQBWmtXlKcM&loop=1&autoplay=1&controls=1&showinfo=0&mute=1" frameborder="0"></iframe>
        </div>
    </div>
        <div class="grey darken-4 center-align valign-wrapper footerBanner">
            <div class="row">
                <div class="col s12">
                    <h5 class="grey-text darken-4">{{ randomQuote() }}</h5>
                </div>
            </div>
        </div>
        <div class="">
            <h6 class="black-text center-align yellow darken-2">Copyright 2021</h6>
        </div>
    </div>
</template>
<script>
import { getRandom, randomQuote, randomImage } from './js/functions';
import M from './js/materialize';
export default {
    data() {
        return {

        }
    },
    name: 'App',
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