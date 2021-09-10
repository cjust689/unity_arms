<template>
    <div class="about white">
        <div class="parallax-container valign-wrapper">
            <div class="row">
                 <div class="col s12 container">
                  <h4>We</h4><p><span class="yellow-text"> Communinty Arms (Unity Arms)<span>, are just some leftist folks with a passion for firearms with a desire to share and learn more in this space. As a way for us to provide mutual aid to our <span class="yellow-text">Community</span> through fire<span class="yellow-text">Arms</span> we decided to use our background and skills to create this platform.</p>
                  <p>We pride ourselves in being an inclusive <span class="yellow-text">Community</span> to those that may not feel comfortable in what can often be an uninviting environment for us. We are based in Atlanta but also operate in Central Illinois.</p>
                  <p> We are not an authority on the subjects we teach. Our aim is to provide a platform to share knowledge that has been taught to us, speficially knowledge we feel to be valuable and at no cost to you.
                  <br>
                  <h6>"Under no pretext should arms and ammunition be surrendered; any attempt to disarm the workers must be frustrated, by force if necessary.”<h5>-Marx</h5></h6>
                </div>
            </div>
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