<template>
    <div class="relatedTraining">
        <div class="section">
            <div class="row">
                <div class="col s6 l4" v-for="t in relatedCategories" :key="t">
                    <router-link class="" :to="{ path: `/${type}/${ t.title }` }">
                        <div class="card">
                            <div class="card-image card-link">
                                <img :src="t.img">
                                <span class="card-title"> {{ t.title }}</span>
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
    /* eslint-disable */

    let trainingCategories = null;
    let relatedCategories = null 
    let trainingType = null;
    function getThing(trainingType) {
        console.log(trainingType);
        console.log(relatedMaterial[trainingType]);
        relatedCategories = relatedMaterial[trainingType];
    return training[trainingType].relatedTrainingModules;
}

    function getRelatedCategories(trainingType) {
        console.log(trainingType);
        relatedCategories = relatedMaterial[trainingType];
    return relatedCategories;
}
/* eslint-disable */
import { getRandom, randomImage } from '../../js/functions';
import { training } from './content.js';
import { relatedMaterial } from './content.js';

export default {
    name: 'relatedTraining',
    components: {
    },
    props: ['type'],
    methods: {
        getRandom,
        randomImage,
    },
    watch: {
        type: {
            handler(t) {
                console.log('related training')
                this.trainingType = t;
                this.trainingCategories = getThing(this.trainingType);
                this.relatedCategories = getRelatedCategories(this.trainingType);
                //console.log(this.trainingCategories);
                //need to img urls added to load in
            },
            immediate: true,
        },
    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
}
</script>
