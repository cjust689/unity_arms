<template>
    <div class="events">
        <div class="row container">
            <div class="col l3 s6 white-text">
                    <h4>August</h4>
                    <ul>
                        <li>test 27th - Peoria IL 
                            <br> 
                            Tactical Pistol & Rifle
                            <br>
                            100 Rounds Each
                            <br>
                            Sling
                            <br>
                            Holster
                            <br>
                            2x Magazines Each
                            <br>
                        </li>
                    </ul>
            </div>
            <div class="col l3 s6 white-text">
                    <h4>September</h4>
                    <ul>
                        <li>15th - Atlanta GA</li>
                    </ul>
            </div>
            <div class="col l3 s6 white-text">
                    <h4>October</h4>
                    <ul>
                        <li>TBD</li>
                    </ul>
            </div>
            <div class="col l3 s6 white-text">
                    <h4>November</h4>
                    <ul>
                        <li>TBD</li>
                    </ul>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import { getRandom, randomImage } from '../js/functions';
export default {
    name: 'Events',
    components: {
    },
    methods: {
        getRandom,
        randomImage,
    },
    mounted() {
        M.AutoInit();
    }
}
</script>
<style>
@import "../styles/materialize.min.css";
@import "../styles/style.css";
</style>