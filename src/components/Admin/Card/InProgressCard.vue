<template>
    <div class="card">
        <p style="">Rendelést leadta: <br><br><span style="font-weight: 700;"> Luis Kean</span></p>
        <div style="width: 30%; height: 100%;">
            <p>Termékek:</p>
            <div class="itemList">
                <p style="font-weight: 700;">Almafa 20/db</p>
            </div>
        </div>
        <div class="orderInfo">
            <p>Rendelés értéke: <span style="font-weight: 700;">1000$</span></p>
            <p>Fuvar fizetése: <span style="font-weight: 700;">2000$</span></p>
        </div>
        <p>Állapot: <br><br><span style="font-weight: 700;">Szállítás alatt</span></p>
        <i class="fas fa-times"></i>
    </div>
</template>

<script>
export default {
    name: 'InProgressCard'
}
</script>

<style scoped>
.card {
    margin: 2vmin;
    width: 90%;
    height: 15vmin;
    background-color: rgb(185, 185, 185);
    border-radius: 0.5vmin;
    box-shadow: -1px 4px 15px -8px #000000;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
p {
    text-align: center;
    font-size: 1.7vmin;
}
.itemList {
    margin: 0 auto;
    width: 70%;
    height: 67%;
    overflow: auto;
}
i {
    color: red;
}
i:hover {
    cursor: pointer;
    color: rgb(196, 1, 1);
}
</style>