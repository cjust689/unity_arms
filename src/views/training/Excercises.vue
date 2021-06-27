
<template>
    <div class="relatedTraining">
        <div class="white section">
            <div class="row container">
                <div class="col s12 l4" v-for="t in trainingModule" :key="t">
                    <div class="card white lighten-2">
                        <div class="card-content">
                            <h3 class=" black-text"> {{ t.title }}</h3>
                            <h5 class=""> {{ t.excercise }}</h5>
                        </div>
                        <div class="card-action white black-text">
                            <router-link class="btn yellow darken-2 black-text" :to="{ path: `/${type}/module/${ t.title }` }">Start</router-link>
                            <!-- When Clicked vue should load a new Drill Vue: 
                            -This vue contains col s12 wiith the description of the drill
                            -Another col s12 with either a video or illustration of the drill
                            -Form to enter the users performance of the drill
                            -If necessary shot timer etc is present with a start top and so on.
                             -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//     const collectionOfThings = {
//   a: ["a1", "a2", "a3"],
//   b: ["b1", "b2"],
//   c: [],
// };
    //when initialized this is empty, but I would expect it to not be when the vue is rendered due to the beforeMount() in the component options. What gives?
/* eslint-disable */
let trainingModules = null;
let init = (params) => {
    console.log('init');
    console.log(trainingModules);
    trainingModules = excerciseModules[params.type];
    //return trainingModules
    //in theory this should define the traininmodules to be loaded dynamically, it works as of now but it's a little hacky. If you reload the page it doesnt work, not sure why. If you navigate via nav it works as desired, but it loads the previous instance. Surely a better way without creating another level of components/vues
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