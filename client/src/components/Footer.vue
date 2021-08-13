<template>
    <div>
        <div class="grey darken-4 center-align valign-wrapper footerBanner">
            <div class="row">
                <div class="col s12">
                    <h5 class="grey-text darken-4">{{ randomQuote() }}</h5>
                </div>
            </div>
        </div>
        <div class="">
            <h6 class="black-text center-align yellow darken-2">Copyright 2021</h6>
        </div>
    </div>
</template>
<script>
import { randomQuote } from '../js/functions';
import M from '../js/materialize';
export default {
    name: 'Footer',
    mounted() {
        M.AutoInit();
    },
    methods: {
        randomQuote,
    },
}
</script>