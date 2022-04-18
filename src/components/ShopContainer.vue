<template>
    <div id="basketSection">
        <div @click="showCart()" id="frameDesign">
            <p>My Cart</p>
        </div>
    </div>
    <div id="searchContainer">
        <i class="fas fa-search"></i>
        <input placeholder="Search . . ." type="text" v-model="searchQuery">
    </div>
    <div id="infoContainer">
        <Card v-for="(value, index) in filteredItems" :img="value.img" :name="value.name" :sql_name="value.sql_name" :amount="value.amount" :storage="value.storage" :key="index" />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Card from './Cards/ItemsCard.vue'
import Swal from 'sweetalert2'

export default {
    name: 'ShopContainer',
    components: {
        Card
    },
    data() {
        return {
            searchQuery: ''
        }
    },
    computed: {
        ...mapGetters(['items']),
        filteredItems() {
            return this.$store.state.items.filter(i => {
                if (this.searchQuery.match(/\d+/g) != null) {
                    return String(i.amount).toLowerCase().includes(this.searchQuery.toLowerCase())
                } else {
                    return i.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                }
            })
        },
    },
    methods: {
        showCart() {
            if (this.$store.state.basket.length != 0) {
                this.$router.push('/mycart');
            } else {
                Swal.fire({
                    title: 'Üres a kosarad, rakj bele valamit!',
                    html: 'Rakj bele valamit',
                    icon: 'error'
                })
            }
        }
    }
}
</script>

<style scoped>
#searchContainer {
    width: 97%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#searchContainer input {
    width: 80%;
    height: 4vmin;
    border-radius: 0.5vmin;
    outline: none;
    border: none;
    margin: 3vmin;
    padding-left: 5vmin
}
#searchContainer input::placeholder {
    letter-spacing: 0.2vmin;
}
#searchContainer i {
    position: relative;
    top: -0.1vmin;
    left: 6.5vmin;
}
#infoContainer {
    width: 97%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    overflow: overlay;
}
::-webkit-scrollbar {
    width: 1vmin;
}
::-webkit-scrollbar-thumb {
    background: none; 
    border-radius: 10px;
}
#basketSection {
    width: 3%;
    height: 82%;
    float: right;
    display: flex;
    align-items: center;
}
#frameDesign {
    width: 100%;
    height: 15vmin;
    background-color: rgb(59, 59, 59);
    display: flex;
    align-items: center;
    color: white;
    border-radius: 3vmin 0 0 3vmin;
}
#basketSection div p {
    writing-mode: vertical-rl;
    transform: scale(-1);
    font-weight: 700;
}
#basketSection div:hover {
    cursor: pointer;
}
</style>