<template>
    <div class="card">
        <img :src="img" alt="basketPicture">
        <p class="title">{{name}}</p>
        <p @click="setValue" class="itemValue">{{amount}}$/db</p>
        <p>Forsell: {{storage}} db</p>
        <i class="fas fa-sign-out-alt scaled" style="color: red;" @click="pushToStorageBasket"></i>
    </div>
</template>

<script>
export default {
    name: 'StorageCardOut',
    props: {
        img: String,
        name: String,
        sql_name: String,
        amount: Number,
        storage: Number,
        id: Number
    },
    methods: {
        pushToStorageBasket() {
            this.$store.state.storageOut.splice(this.id, 1)
            this.$store.state.storageIn.push({img: this.img, name: this.name, sql_name: this.sql_name, amount: this.amount, storage: this.storage})
        }
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
.itemValue {
    cursor: pointer;
}
</style>