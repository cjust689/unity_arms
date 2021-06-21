
<template>
    <div class="relatedTraining">
        <div class="white section">
            <div class="row">
                <div class="col s12 l3 v-repeat="trainingModules">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">{{ item.title }}</span>
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
/* eslint-disable */
function init(params) {
    let trainingModules = excerciseModules[params.type];
    console.log(trainingModules);

}

/* eslint-disable */
import { getRandom, randomImage } from '../../js/functions';
import { excerciseModules } from '../excercises/excercises_content.js';
export default {
    name: 'excercises',
    components: {
        //HelloWorld
    },
    props: {

    },
    methods: {
        getRandom,
        randomImage,

    },
    data() {
        return {
           trainingModules 
        }

    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
        console.log(this.$route.params);
        init(this.$route.params);
    }
}
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue' //add the helloworld component to this vue
</script>