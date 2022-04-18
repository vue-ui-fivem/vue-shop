<template>
    <h1>Employee list</h1>
    <Arrow />
    <div id="employeeContainer">
        <Card />
    </div>
</template>

<script>
import Arrow from '../../BackArrow.vue'
import Card from './Card/EmployeeCard.vue'

export default {
    name: 'Employee',
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
#employeeContainer {
    width: 100%;
    height: 66%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: overlay;
}
</style>