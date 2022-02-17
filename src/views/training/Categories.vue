<template>
    <div class="Categories">
        <div class="section">
            <div class="row">    
                <!-- This gets all the realted training categories to show on the page -->
                    <ul class="collapsible white" v-for="t in categoriesToDisplay" :key="t">
                        <li>
                            <div class="collapsible-header yellow darken-2">
                                <h3>{{ t.title }}</h3>
                            </div>
                            <div class="collapsible-body">
                                <template class="black-text" v-if="t.text">
                                    <div class="module" v-html="t.text"></div>
                                </template>
                                <template v-if="t.child != null">
                                    <ul class="collapsible" v-for="i in t.child" :key="i">
                                        <li>
                                            <div class="collapsible-header black white-text">{{ i.title }}</div>
                                            <template v-if="i.text != null">
                                                <div class="module collapsible-body white"><p class="" v-html="i.text"></p></div>
                                            </template>
                                            <template v-else>
                                            </template>
                                        </li>
                                    </ul>
                                </template>
                            </div>
                        </li>
                    </ul>
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
        console.log(categoriesToDisplay)
        return categoriesToDisplay;
    }
/* eslint-disable */
import { getRandom, randomImage } from '../../js/functions';
import { categories } from './content.js';
import AccordionSecond from '../../components/AccordionSecond'

export default {
    name: 'Categories',
    components: {
        AccordionSecond
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
        let elems = document.querySelectorAll('.collapsible');
        let instances = M.Collapsible.init(elems);
        M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
}

</script>
