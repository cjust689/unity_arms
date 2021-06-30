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
    /* eslint-disable */

    let trainingCategories = null;
    let trainingType = null;
    function getThing(trainingType) {
        console.log(trainingType);
    return training[trainingType].relatedTrainingModules;
}
/* eslint-disable */
import { getRandom, randomImage } from '../../js/functions';
import { training } from './content.js';

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
                console.log(this.trainingCategories);
            },
            immediate: true,
        },
    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
}
</script>
