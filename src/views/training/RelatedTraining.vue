<template>
    <div class="relatedTraining">
        <div class="white section">
            <div class="row">
                <div class="col s6 l3">
                    <router-link class="" to="/Grip">
                    <div class="card">
                        <div class="card-image card-link">
                            <img src="/img/home/6.jpg">
                            <span class="card-title">Grip</span>
                        </div>
                    </div>
                    </router-link>
                </div>
                <div class="col s6 l3">
                    <router-link class="" to="/Stance">
                    <div class="card">
                        <div class="card-image card-link">
                            <img src="/img/pistol/15.jpg">
                            <span class="card-title">Stance</span>
                        </div>
                    </div>
                    </router-link>
                </div>
                <div class="col s6 l3">
                    <router-link class="" to="/Recoil">
                    <div class="card">
                        <div class="card-image card-link">
                            <img src="/img/pistol/1.jpg">
                            <span class="card-title">Recoil</span>
                        </div>
                    </div>
                    </router-link>
                </div>
                <div class="col s6 l3">
                    <router-link class="" to="/Reloads">
                    <div class="card">
                        <div class="card-image card-link">
                            <img src="/img/pistol/8.jpg">
                            <span class="card-title">Reloads</span>
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
import { getRandom, randomImage } from '../../js/functions';
export default {
    name: 'relatedTraining',
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
