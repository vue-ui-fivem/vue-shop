<template>
    <div class="navStyle" :style="$route.path == url ? 'background-color: rgb(156, 156, 156)' : ''">
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        title: String,
        url: String
    }
}
</script>

<style scoped>
.navStyle {
    width: 20%;
    height: 60%;
    background-color: rgb(224, 224, 224);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5vmin 0.5vmin 0 0;
    text-align: center;
    margin: 0 auto;
}
.navStyle p {
    margin: 0;
    font-weight: 700;
    font-size: 1.5vmin
}
.navStyle:hover {
    cursor: pointer;
}
</style>