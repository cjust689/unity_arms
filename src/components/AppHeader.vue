<template>
    <div>
        <nav style="position: relative;">
                <div class="container">
                    <div class="nav-wrapper">
                        <router-link class="logo black-text" to="/">UNITY ARMS
                            <img src="/img/home/Asset 119.png">
                        </router-link>
                        <a href="#" data-target="mobile-demo" data-activates="mobile-demo" class="sidenav-trigger button-collapse button right"><i class="black-text material-icons">menu</i><span class="btn-open"></span></a>
                        <ul class="right hide-on-med-and-down">
                            <li>
                                <router-link class="black-text" to="/store"><span>Store</span></router-link>
                            </li>
                            <li>
                                <router-link class="black-text" to="/training"><span>Training</span></router-link>
                            </li>
                            <li>
                                <router-link class="black-text" to="/about"><span>About</span></router-link>
                            </li>
                            <li>
                                <router-link class="black-text" to="/members"><span>Members</span></router-link>
                            </li>
                        </ul>
                        <ul class="sidenav" id="mobile-demo">
                            <li>
                                <router-link class="black-text" to="/store"><span>Store</span></router-link>
                            </li>
                            <li>
                                <router-link class="black-text" to="/training"><span>Training</span></router-link>
                            </li>
                            <li>
                                <router-link class="black-text" to="/about"><span>About</span></router-link>
                            </li>
                            <li>
                                <router-link class="black-text" to="/members"><span>Members</span></router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  
    </div>
    
    
</template>
<script>
/* eslint-disable */

export default {
    name: 'Header',
    components: {
       
    },
    methods: {
       
    },
    mounted() {
       
    }
}
</script>
<style>
@import "../styles/materialize.min.css";
@import "../styles/style.css";
</style>   