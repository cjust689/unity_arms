<template>
    <div class="members">
        <div class="parallax-container valign-wrapper">
            <div class="parallax" v-html="randomImage('home')"></div>
            <div class="row">
                <div class="col s12">
                                <h2 class="white-text center">Coming Soon</h2>

                </div>
            </div>
        </div>
    </div>
</template>
<script>



/* eslint-disable */
import { getRandom, randomImage} from '../js/functions';
export default {
    name: 'Members',
    components: {
        //HelloWorld
    }, methods: {
      getRandom,
      randomImage,
    },mounted() {
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