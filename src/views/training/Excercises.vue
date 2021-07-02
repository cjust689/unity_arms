
<template>
    <div class="relatedTraining">
        <div class="white section">
            <div class="row container">
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

</script>