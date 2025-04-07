<template>
    <div class="card">
        <div class="leftSection">
            <i class="fas fa-times"></i>
            <p>IC:</p>
            <p style="">Név: <br><span style="font-weight: 700;"> Luis Kean</span></p>
            <p style="">Születés dátum: <br><span style="font-weight: 700;"> 2005.06.07</span></p>
            <p style="">Phone Number: <br><span style="font-weight: 700;"> 2005.06.07</span></p>
            <p>Short bemutatkozás:</p>
            <div class="shortInt">asdasd</div>
        </div>
        <div class="rightSection">
            <p>OOC:</p>
            <p style="">Discrod name: <br><span style="font-weight: 700;"> proba#3021</span></p>
            <p style="">Életkor: <br><span style="font-weight: 700;"> 14</span></p>
            <p style="margin-top: 8vmin;">Short bemutatkozás:</p>
            <div class="shortInt"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExitsApplyCard'
}
</script>

<style scoped>
.card {
    margin: 3vmin auto;
    width: 90%;
    height: 45vmin;
    background-color: rgb(185, 185, 185);
    border-radius: 0.5vmin;
    box-shadow: -1px 4px 15px -8px #000000;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.leftSection {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.rightSection {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.shortInt {
    width: 40vmin;
    height: 12vmin;
    overflow: auto;
    background-color: grey;
    font-size: 1.8vmin;
    padding: 1vmin;
}
p {
    text-align: center;
    font-size: 1.7vmin;
    margin-bottom: 0.5vmin;
}
.itemList {
    margin: 0 auto;
    width: 70%;
    height: 67%;
    overflow: auto;
}
i {
    position: relative;
    top: 1vmin;
    left: 85vmin;
    color: red;
}
i:hover {
    cursor: pointer;
    color: rgb(196, 1, 1);
}
</style>