<template>
    <h1>Storage</h1>
    <Arrow />
    <div id="stock">
        <CardIn v-for="(value, index) in storageIn" :img="value.img" :name="value.name" :sql_name="value.name" :amount="value.amount" :storage="value.storage" :id="index" :key="index" />
    </div>
    <div id="forsell">
        <CardOut v-for="(value, index) in storageOut" :img="value.img" :name="value.name" :sql_name="value.name" :amount="value.amount" :storage="value.storage" :id="index" :key="index" />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CardIn from './Card/StorageInCard.vue'
import CardOut from './Card/StorageOutCard.vue'
import Arrow from '../../BackArrow.vue'

export default {
    name: 'Storage',
    components: {
        CardIn,
        CardOut,
        Arrow
    },
    computed: {
        ...mapGetters(['storageIn', 'storageOut'])
    }
}
</script>

<style scoped>
h1 {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 3vmin;
    font-weight: 700;
}
#stock {
    display: inline-block;
    width: 45%;
    height: 63%;
    position: fixed;
    top: 32%;
    left: 3%;
    border-radius: 0.5vmin;
    background-color: rgb(233, 233, 233);
    box-shadow: -1px 4px 15px -5px #000000;
    overflow: overlay;
}
#forsell {
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 63%;
    position: fixed;
    top: 32%;
    right: 3%;
    background-color: rgb(233, 233, 233);
    box-shadow: -1px 4px 15px -5px #000000;
    overflow: overlay;
}
</style>