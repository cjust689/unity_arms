
<template>
    <div class="excercises">
        <div class="white section">
            <div class="row">
                <div class="container">
                    <div class="col s12">
                        <div class="card-content">
                            <h1>{{ excercise.title }}</h1>
                            <h4>{{ excercise.excercise }}</h4>
                            <p :key="excercise.requirements" v-html="excercise.requirements">{{ excercise.requirements }}</p>
                            <p :key="excercise.content" v-html="excercise.content">{{ excercise.content }}</p>
                            <p :key="excercise.details" v-html="excercise.details">{{ excercise.details }}</p>
                        </div>
                        <div class="card-action white">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
let trainingModules = null;
let excercise = null;

import { excerciseModules } from '../excercises/excercises_content.js'; //placeholder for JSON
export default {
    name: 'module',
    components: {
    },
    props: ["type","drill"],
  data() {
    return {
      trainingModule: [],
      excercise
    };
  },
  watch: {
    type: {
      handler(t) {
        this.trainingModule = excerciseModules[t];
      },
      immediate: true,
    },
    drill: {
      handler(d) {
        console.log(d);
        this.excercise = this.trainingModule.find(x => x.title === d);
        console.log(this.trainingModule.find(x => x.title === d));
        console.log(excercise);
      },
      immediate: true,
    },
  },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
        console.log('mounted');
    }
}
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue' //add the helloworld component to this vue
</script>