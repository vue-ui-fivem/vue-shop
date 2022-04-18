<template>
    <Arrow />
    <h1>In progress</h1>
    <div id="inProgressCont">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
</template>

<script>
import Arrow from '../../BackArrow.vue'
import Card from './Card/InProgressCard.vue'

export default {
    name: 'InProgress',
    components: {
        Arrow,
        Card
    }
}
</script>

<style scoped>
h1 {
    position: absolute;
    top: 20%;
    left: 44%;
    font-size: 3vmin;
    font-weight: 700;
}
#inProgressCont {
    width: 100%;
    height: 66%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    overflow: overlay;
}
</style>