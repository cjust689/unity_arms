
<template>
    <div class="relatedTraining">
        <div class="white section">
            <div class="row container">
                <div class="col s12">
                <h5>
                    <router-link class="black-text" style="text-transform: uppercase;" :to="{ name: 'Training'}">Training</router-link> 
                    &nbsp; > &nbsp;
                    <router-link class="black-text" style="text-transform: uppercase;" :to="{ path: `/training/${type}` }">{{ trainingType }}</router-link>
                    &nbsp; > &nbsp;
                    <router-link class="black-text" style="text-transform: uppercase;  text-decoration: underline; text-decoration-thickness: 0.2em; text-decoration-color:#fbc02d" :to="{ name: 'excercises', params: { type: trainingType }}"> Excercises </router-link>             
                </h5>
            </div>
                <div class="col s12" v-for="t in trainingModule" :key="t">
                    <router-link class="black-text" :to="{ path: `/${type}/module/${ t.title }` }">
                        <div class="card white lighten-2 card-link">
                            <div class="card-content">
                                <h3 class=" black-text"> {{ t.title }}</h3>
                                <h5 class=""> {{ t.excercise }}</h5>
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
let trainingModules = null;
let trainingType = null;

let init = (params) => {
    console.log('init');
    console.log(trainingModules);
    trainingModules = excerciseModules[params.type];
}
import { excerciseModules } from '../excercises/excercises_content.js'; //placeholder for JSON
export default {
    name: 'excercises',
    components: {
    },
    props: ["type"],
  data() {
    return {
      trainingModule: [],
    };
  },
  watch: {
    type: {
      handler(t) {
        this.trainingModule = excerciseModules[t];
        this.trainingType = t;
        console.log(t);
      },
      immediate: true,
    },
  },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
        console.log('mounted');
    }
}

</script>