<template>
    <div id="container">
        <header>
            <div id="titleSection">
                <div></div>
                <h1>Shop system</h1>
                <i class="fas fa-times"></i>
            </div>
            <div id="navSection">
                <NavBar v-for="(value, index) in navbar" :title="value.title" :url="value.url" @click="setPage(value.url)" :key="index" />
            </div>
        </header>
        <router-view/>
    </div>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'Shop',
    components: {
        NavBar
    },
    computed: {
        ...mapGetters(['navbar'])
    },
    methods: {
        setPage(url) {
            this.$router.push(url);
        }
    }
}
</script>

<style>
::-webkit-scrollbar {
    width: 1vmin;
}
::-webkit-scrollbar-thumb {
    background: #999999; 
    border-radius: 0.5vmin;
}
::-webkit-scrollbar-thumb:hover {
    background: #6d6d6d; 
}
</style>

<style scoped>
#container {
    width: 130vmin;
    height: 70vmin;
    border: 1px solid black;
    background-color: rgb(224, 224, 224);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-box-shadow: 0.71vmin 0.91vmin 2.2vmin -0.4vmin #000000; 
    box-shadow: 0.71vmin 0.91vmin 2.2vmin -0.4vmin #000000;
}
header {
    background-color: rgb(59, 59, 59);
    width: 100%;
    height: 18%;
}
#titleSection {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#titleSection h1 {
    margin: 0;
    color: white;
}
#titleSection i {
    margin-right: 1vmin;
    color: red;
}
#titleSection i:hover {
    cursor: pointer;
    color: rgb(180, 6, 6)
}
#navSection {
    width: 90%;
    height: 61%;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}
</style>
