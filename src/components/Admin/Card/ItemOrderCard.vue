<template>
    <div class="card">
        <img src="https://www.closetag.com/images/photo4.jpg" alt="basketPicture">
        <p class="title">Bread</p>
        <p v-if="type != ''">{{type}}</p>
        <i :class="type == '' ? 'fas fa-sign-out-alt' : 'fas fa-sign-out-alt scaled'" :style="type == '' ? 'color: green;' : 'color: red;'"></i>
    </div>
</template>

<script>
export default {
    name: 'StorageCard',
    props: {
        type: String,
    }
}
</script>

<style scoped>
.card {
    margin: 2vmin;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 7vmin;
    background-color: rgb(185, 185, 185);
    border-radius: 0.5vmin;
    box-shadow: -1px 4px 15px -8px #000000;
}
.card .title {
    font-size: 2vmin;
    font-weight: 700;
}
.card img {
    width: 10%;
    height: 70%;
    margin-left: 3vmin;
    border-radius: 0.5vmin;
}
.amountSection {
    display: flex;
    align-items: center;
    position: relative;
    left: -5vmin;
}
.amountSection input {
    width: 4vmin;
    outline: none;
    border: none;
    text-align: center;
    background-color: grey;
}
.card i {
    margin-right: 5vmin;
}
.card i:hover {
    cursor: pointer;
}
.scaled {
    transform: scaleX(-1);
}
</style>