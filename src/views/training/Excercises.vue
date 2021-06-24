
<template>
    <div class="relatedTraining">
        <div class="white section">
            <div class="row">
                <div class="col s12 l3" v-for="(item, index) in trainingModules"  :key="index">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title"> {{ item.title }}</span>
                            <p>{{ item.excercise }}</p>
                        </div>
                        <div class="card-action">
                            <router-link class="" to="/Grip">Enter</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    let trainingModules ='';
/* eslint-disable */
let init = (params) => {
    trainingModules = excerciseModules[params.type];
    return trainingModules
    //in theory this should define the traininmodules to be loaded dynamically, it works as of now but it's a little hacky. If you reload the page it doesnt work, not sure why. If you navigate via nav it works as desired. Surely a better way without creating another level of components/vues
}


import { getRandom, randomImage } from '../../js/functions';
import { excerciseModules } from '../excercises/excercises_content.js';
export default {
    name: 'excercises',
    components: {
    },
    props: {
        excerciseModules
    },
    methods: {
        getRandom,
        randomImage,
        init,

    },
    data() {
        return {
            trainingModules,
        }

    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
        init(this.$route.params);
    }
}
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue' //add the helloworld component to this vue
</script>