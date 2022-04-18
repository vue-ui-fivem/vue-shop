<template>
    <h1>Store managment</h1>
    <div id="adminContainer">
        <Card v-for="(value, index) in adminOptions" :img="value.img" :title="value.title" @click="setUrl(value.url)" :key="index" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from './Card/AdminOptionsCard.vue'

export default {
    name: 'AdminOptions',
    components: {
        Card
    },
    computed: {
        ...mapGetters(['adminOptions'])
    },
    methods: {
        setUrl(url) {
            this.$router.push('/admin' + url)
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 3vmin;
    font-weight: 700;
    text-align: center;
}
#adminContainer {
    width: 100%;
    height: 71%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}
</style>