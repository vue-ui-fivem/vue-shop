<template>
    <div class="card">
        <img :src="img" alt="basketPicture">
        <p class="title">{{name}}</p>
        <div class="amountSection">
            <input type="number" min="1" :max="storage" onkeypress="return false;" v-model="basketItemValue">
            <p>/{{storage}}</p>
        </div>
        <p>{{amount}}$/db</p>
        <i @click="deleteValueFromBasket" class="fas fa-times"></i>
    </div>
</template>

<script>
export default {
    name: 'CartCard',
    props: {
        img: String, 
        name: String, 
        value: String, 
        storage: Number,
        amount: Number,
        id: Number
    },
    data() {
        return {
            basketItemValue: 1
        }
    },
    methods: {
        deleteValueFromBasket() {
            this.$store.state.basket.splice(this.id, 1)
            if (this.$store.state.basket.length == 0) {
                this.$router.push('/shop')
            }
        }
    },
    watch: {
        'basketItemValue': function() {
            if (this.basketItemValue <= 0 || this.basketItemValue > this.storage || this.basketItemValue == '') {
                this.$store.state.basket[this.id].value = 1
            } else {
                console.log('asd')
                this.$store.state.basket[this.id].value = this.basketItemValue
            }
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
    position: relative;
    left: -8vmin;
}
.card img {
    width: 8%;
    height: 70%;
    margin-left: 5vmin;
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
    color: red;
    margin-right: 5vmin;
}
</style>