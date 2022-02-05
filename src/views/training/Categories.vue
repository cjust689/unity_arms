<template>
    <div class="Categories">
        <div class="section">
            <div class="row">
                <!-- This gets all the realted training categories to show on the page -->
                <div class="col s6 l4" v-for="t in categoriesToDisplay" :key="t">
                    <router-link class="" :to="{ path: `/training/${type}/${ t.url }` }">
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

    let trainingCategories = null;
    let categoriesToDisplay = null 
    let trainingType = null;


// go get the categories to go list
    function get_Categories(trainingType) {
        console.log(trainingType);
        categoriesToDisplay = categories[trainingType];
        return categoriesToDisplay;
    }
/* eslint-disable */
import { getRandom, randomImage } from '../../js/functions';
import { categories } from './content.js';

export default {
    name: 'Categories',
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
                this.trainingType = t;
                this.categoriesToDisplay = get_Categories(this.trainingType);
            },
            immediate: true,
        },
    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
}

</script>
