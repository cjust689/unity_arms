/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { randomImage, getRandom, randomQuote } from './js/functions'
import M from './js/materialize.js';
if (typeof M == "undefined") { M = {}}
let x= 0;
Vue.config.productionTip = false


new Vue({
    //vue options
    router,
    render: h => h(App),
    data: {
        nav: '',
        sideNav: '',
        homeImage: '<img src="img/background.png">',
    },
    methods: {
      randomImage,
      getRandom,
      randomQuote
    },
    mounted: function() {
      randomQuote(this);
      M.AutoInit();
    }
}).$mount('#app');



