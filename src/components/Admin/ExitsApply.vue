<template>
    <h1>Exits Apply (20db)</h1>
    <Arrow />
    <div id="applies">
        <Card />
        <Card />
        <Card />
    </div>
</template>

<script>
import Arrow from '../../BackArrow.vue'
import Card from './Card/ExitsApplyCard.vue'

export default {
    name: 'ExitsApply',
    components: {
        Arrow,
        Card
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
#applies {
    width: 100%;
    height: 66%;
    overflow: overlay;
}
</style>