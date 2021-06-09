<template>
    <div class="white section store">
        <div class="row container">
            <div class="col s3">
                <ul id="slide-out" class="black-text">
                    <li><a class="black-text" href="#!">Product Filter</a></li>
                    <li><a class="black-text" href="#!">Shirts</a></li>
                    <li>
                        <div class="divider yellow darken-2"></div>
                    </li>
                    <li><a class="subheader black-text">Subheader</a></li>
                    <li><a class="waves-effect black-text" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>
            <div class="col s9">
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="img/shop/T-Shirt MockUp_Black.png">
                            <span class="card-title"></span>
                        </div>
                        <div class="card-content">
                            <p>Unity Arms Tee <br> (Black)</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Buy</a>
                            <span class="right">$35</span>
                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="img/shop/T-Shirt MockUp_Blue.png">
                            <span class="card-title"></span>
                        </div>
                        <div class="card-content">
                            <p>Unity Arms Tee <br> (Blue)</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Buy</a>
                            <span class="right">$35</span>
                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="img/shop/T-Shirt MockUp_Green.png">
                            <span class="card-title"></span>
                        </div>
                        <div class="card-content">
                            <p>Unity Arms Tee <br> (Green).</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Buy</a>
                            <span class="right">$35</span>
                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="img/shop/UNITY_PHOTO_BOOK4.jpg">
                            <span class="card-title"></span>
                        </div>
                        <div class="card-content">
                            <p>Coffee Table Book</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Buy</a>
                            <span class="right">$25</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import { getRandom, randomImage } from '../js/functions';
export default {
    name: 'Store',
    components: {
        //HelloWorld
    },
    methods: {
        getRandom,
        randomImage,
    },
    mounted() {
        M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
}
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue' //add the helloworld component to this vue
</script>
<style>
@import "../styles/materialize.min.css";
@import "../styles/style.css";
</style>