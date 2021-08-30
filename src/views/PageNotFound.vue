<template>
    <div class="PageNotFound">
        <div class="parallax-container valign-wrapper">
            <div class="row">
                <transition name="fade" mode="out-in">
                    <div class="col s12">
                        <h4 class="center white-text hover-motto"><span>
                                <h5>Page Not Found 404</h5>
                            </span></h4>
                    </div>
                </transition>
            </div>
            <!-- <div class="parallax" v-html="randomImage('home')"></div> -->
            <div class="card">
                <transition name="fade" mode="out-in">
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import { getRandom, randomImage } from '../js/functions';
export default {
    name: 'PageNotFound',
    components: {
        //HelloWorld
    },
    methods: {
        getRandom,
        randomImage,
    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
}
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue' //add the helloworld component to this vue
</script>
<style>
@import "../styles/materialize.min.css";
@import "../styles/style.css";
</style>