// eslint-disable-next-line no-unused-vars
/*eslint no-unused-vars: "warn"*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { randomImage, getRandom, randomQuote } from './js/functions'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import M from './js/materialize.js';
// eslint-disable-next-line no-unused-vars
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


