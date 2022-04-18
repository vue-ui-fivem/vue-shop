<template>
    <div class="card">
        <img src="../../../assets/logo.png" alt="Picutres">
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
    name: 'AdminOptionsCard',
    props: {
        img: String,
        title: String
    }
}
</script>

<style scoped>
.card {
    width: 15vmin;
    height: 15vmin;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(185, 185, 185);
    box-shadow: -1px 4px 15px -3px #000000;
    margin: 2vmin;
}
.card img {
    width: 50%;
    height: 50%;
}
.card p {
    font-size: 1.8vmin;
    margin: 0;
    font-weight: 700;
    margin-top: 1vmin
}
.card:hover {
    cursor: pointer;
    background-color: rgb(143, 143, 143);
}
</style>