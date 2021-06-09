<template>
    <div class="home">
        <div class="parallax-container valign-wrapper">
            <div class="row">
                   <div class="col s12">
                    <h4 class="center white-text hover-motto"><span>UBI CONCORDIA IBI VICTORIA</span></h4>
                </div>
            </div>
            <div class="parallax" v-html="randomImage('home')"></div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import { getRandom, randomImage } from '../js/functions';
export default {
    name: 'Home',
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