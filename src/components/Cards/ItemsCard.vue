<template>
    <div class="card">
        <img :src="img" alt="">
        <h1>{{name}}</h1>
        <p>{{amount}} $/db</p>
        <p>Storage: {{storage}}</p>
        <button @click="pushIntoBasket(sql_name, amount)" type="button"><i class="fas fa-shopping-cart"></i> Add To Cart</button>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'ItemsCard',
    props: {
        img: String,
        name: String, 
        sql_name: String,
        amount: Number,
        storage: Number
    },
    methods: {
        pushIntoBasket() {
            Swal.fire({
                title: 'Kosárba szeretné helyezni a következő terméket: ' + this.name,
                input: 'text',
                html: 'Jelenleg ' + this.storage + 'db van raktáron ebből a termékből, hányat szeretnél a kosárba rakni?',
                inputValue: '',
                showCancelButton: true,
                inputValidator: (inputValue) => {
                    if (inputValue) {
                        if (this.storage >= inputValue) {
                            for (let i = 0; i < this.$store.state.basket.length; i++) {
                                if (this.$store.state.basket[i].sql_name == this.sql_name) {
                                    if ((this.storage - inputValue) >= 0 && (parseInt(this.$store.state.basket[i].value) + parseInt(inputValue)) <= this.storage) {
                                        this.$store.state.basket[i].value = parseInt(this.$store.state.basket[i].value) + parseInt(inputValue)
                                        return
                                    } else {
                                        if (this.$store.state.basket[i].value == this.storage) {
                                            return 'Többet nem tudsz vásárolni.'
                                        }
                                        return 'Enynit nem tudsz ebből a termékből megvenni, csak ' + this.storage + 'dbot. A kosaradban ' + this.$store.state.basket[i].value + 'db van.'
                                    }
                                }
                            }
                            this.$store.state.basket.push({ img: this.img, name: this.name, sql_name: this.sql_name, amount: this.amount, storage: this.storage, value: inputValue})
                        } else {
                            return 'Nem tudsz többet megvenni, mint amennyi a raktáron van!'
                        }
                    } else {
                        return 'Egy számot adj meg a mezőbe!'
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
.card {
    width: 20vmin;
    height: 25vmin;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 0.5vmin;
    background-color: rgb(173, 173, 173);
    margin: 1.5vmin;
    color: white;
}
.card img {
    width: 90%;
    height: 50%;
    border-radius: 0.5vmin;
}
.card h1 {
    font-size: 2vmin;
    font-weight: 0;
    margin: 0;
}
.card p {
    font-size: 2.5vmin;
    font-weight: 700;
    margin: 0;
}
.card button {
    border: none;
    outline: 0;
    margin: 0;
    font-size: 1.5vmin;
    width: 80%;
    height: 3vmin;
    border-radius: 0.5vmin;
    color: black;
    background-color: white;
}
.card i {
    color: green;
}
.card button:hover {
    cursor: pointer;
    background-color: rgb(212, 212, 212);
}
</style>