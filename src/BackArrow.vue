<template>
    <div id="backContainer" @click="$router.push('/admin')">
        <i class="fas fa-arrow-left"></i>
    </div>
</template>

<script>
export default {
    name: 'BackArrow',
    methods: {
        
    }
}
</script>

<style scoped>
#backContainer {
    width: 5vmin;
    height: 5vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3vmin;
    font-size: 3vmin;
    border-radius: 50%;
    border: 0.1vmin solid black
}
#backContainer:hover {
    cursor: pointer;
}
</style>