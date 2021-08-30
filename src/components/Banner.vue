<template>
    <div>
       <div class="col s12 yellow darken-2 banner center-align">
            <router-link class="bannerText center-align black-text pulsate" to="/events">UPCOMING EVENTS</router-link>
        </div>
    </div>
</template>

<script>
import M from '../js/materialize';
export default {
    name: 'Banner',
    mounted() {
        M.AutoInit();
    }
}
</script>