<template>
    <div class="training">
        <div class="white section">
            <div class="row container">
                <div class="col s12 l4">
                    <router-link class="" to="/Safety">
                        <div class="card">
                            <div class="card-image card-link">
                                <img src="/img/evan/DSC00936.jpg">
                                <span class="card-title">Safety</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col s12 l4">
                    <router-link class="" :to="{ name: 'rifle', params: {type: 'rifle'}}">
                    <div class="card">
                        <div class="card-image card-link">
                            <img src="/img/home/12.jpg">
                            <span class="card-title">Rifle</span>
                        </div>
                        
                    </div>
                    </router-link>
                </div>
                <div class="col s12 l4">
                    <router-link class="" :to="{ name: 'pistol', params: {type: 'pistol'}}">
                        <div class="card">
                            <div class="card-image card-link">
                                <img src="/img/home/20.jpg">
                                <span class="card-title">Pistol</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col s12 l4">
                    <router-link class="" to="/Medical">
                        <div class="card">
                            <div class="card-image card-link">
                                <img src="/img/evan/10.jpg">
                                <span class="card-title">First Aid</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

/* eslint-disable */
import { getRandom, randomImage } from '../js/functions';
export default {
    name: 'Training',
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