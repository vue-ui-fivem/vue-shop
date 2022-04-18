<template>
    <h1>My Cart</h1>
    <div id="itemList">
        <div id="basketContainer">
            <Card v-for="(value, index) in basket" :img="value.img" :name="value.name" :value="String(value.value)" :storage="value.storage" :amount="value.amount" :id="index" :key="index" />
        </div>
        <div id="underContainer">
            <button @click="$router.push('/shop')" type="button"><i class="fas fa-arrow-left"></i> Continue shopping</button>
            <p>Total: {{fullAmountComp}}$</p>
        </div>
    </div>
    <div id="payment">
        <p>Payment method</p>
        <div id="paymentOption">
            <div class="optionDes" @click="selectPaymentOption('bank')">
                <img src="../assets/bank.png" alt="PayMentOption">
                <p>Bank account</p>
                <input type="radio" id="bank" checked>
            </div>
            <div class="optionDes" @click="selectPaymentOption('wallet')">
                <img src="../assets/wallet.png" alt="PayMentOption">
                <p>Wallet money</p>
                <input type="radio" id="wallet">
            </div>
        </div>
        <button type="button">Buy Now</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Card from './Cards/CartCard.vue'

export default {
    name: 'MyCart',
    components: {
        Card
    },
    data() {
        return {
            fullAmount: 0,
        }
    },
    computed: {
        ...mapGetters(['basket']),
        fullAmountComp() {
            this.fullAmount = 0
            for (let i = 0; i < this.$store.state.basket.length; i++) {
                this.fullAmount += parseInt(this.$store.state.basket[i].value) * parseInt(this.$store.state.basket[i].amount)
            }
            return this.fullAmount
        }
    },
    methods: {
        selectPaymentOption(option) {
            option == 'wallet' ? (document.getElementById('wallet').checked = true)+(document.getElementById('bank').checked = false) : (document.getElementById('bank').checked = true)+(document.getElementById('wallet').checked = false)
        }
    },
    created() {
        if (this.$store.state.basket.length == 0) {
            this.$router.push('/shop')
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    color: black;
    font-size: 3vmin;
}
#itemList {
    width: 60%;
    height: 70%;
    position: fixed;
    top: 28%;
    left: 5%;
    border-radius: 0.5vmin;
    background-color: rgb(233, 233, 233);
    box-shadow: -1px 4px 15px -5px #000000;
}
#basketContainer {
    width: 100%;
    height: 85%;
    overflow: overlay;
}
#underContainer {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#underContainer button {
    border: 0.1vmin solid black;
    outline: none;
    margin-left: 3vmin;
    width: 20vmin;
    height: 4vmin;
    background-color: rgb(201, 201, 201);
    font-size: 1.5vmin;
    font-weight: 700;
    border-radius: 0.5vmin;
}
#underContainer p {
    font-size: 2vmin;
    font-weight: 700;
    margin-right: 5vmin;
}
#underContainer button:hover {
    cursor: pointer;
    background-color: grey;
}
#payment {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 70%;
    position: fixed;
    top: 28%;
    left: 68%;
    background-color: rgb(233, 233, 233);
    box-shadow: -1px 4px 15px -5px #000000;
}
#paymentOption {
    width: 90%;
}
#payment p {
    font-size: 2vmin;
    font-weight: 700;
    margin: 3vmin;
    text-align: center;
}
.optionDes {
    width: 90%;
    height: 7vmin;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgb(185, 185, 185);
    border-radius: 0.5vmin;
    margin: 2vmin;
    box-shadow: -1px 4px 15px -3px #000000;
}
.optionDes:hover {
    cursor: pointer;
    background-color: rgb(143, 143, 143);
}
.optionDes input {
    outline: none !important;
}
.optionDes input:hover {
    cursor: pointer;
    background: none !important;
    outline: none !important;
}
.optionDes img {
    width: 20%;
    height: 100%;
}
#payment button {
    margin-top: 10vmin;
    border: none;
    outline: none;
    width: 80%;
    height: 5vmin;
    font-size: 2.5vmin;
    font-weight: 700;
    background-color: black;
    color: white;
    border-radius: 0.5vmin;
}
#payment button:hover {
    cursor: pointer;
    background-color: rgb(49, 49, 49);
}
</style>