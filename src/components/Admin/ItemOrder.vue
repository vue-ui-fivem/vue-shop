<template>
    <h1>Take Order</h1>
    <Arrow />
    <div id="defaultItems">
        <div class="items">
            <Card :type="''" />
        </div>
        <button class="buttonDes" type="button" @click="$router.push('/admin/progress')">In Progress</button>
    </div>
    <div id="takeOrder">
        <div class="items">
            <Card :type="'/db'" />
        </div>
        <button style="background-color: green;" @click="takeOrder" class="buttonDes" type="button">Take Order</button>
    </div>
</template>

<script>
import Arrow from '../../BackArrow.vue'
import Card from './Card/ItemOrderCard.vue'

export default {
    name: 'ItemOrder',
    components: {
        Arrow,
        Card
    },
    methods: {
        takeOrder() {
            this.$router.push('/admin/progress')
        }
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
.items {
    height: 85%;
    width: 100%;
    overflow: overlay;
}
#defaultItems {
    width: 45%;
    height: 60%;
    position: fixed;
    top: 32%;
    left: 3%;
    border-radius: 0.5vmin;
    background-color: rgb(233, 233, 233);
    box-shadow: -1px 4px 15px -5px #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
#takeOrder {
    width: 45%;
    height: 60%;
    position: fixed;
    top: 32%;
    right: 3%;
    background-color: rgb(233, 233, 233);
    box-shadow: -1px 4px 15px -5px #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.buttonDes {
    outline: none;
    border: none;
    width: 15vmin;
    height: 4vmin;
    font-size: 2vmin;
    font-weight: 700;
    color: white;
    background-color: rgb(71, 71, 71);
    border-radius: 1vmin;
    margin: 0.5vmin;
}

.buttonDes:hover {
    cursor: pointer;
    background-color: rgb(37, 37, 37);
}
</style>