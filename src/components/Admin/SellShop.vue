<template>
    <Arrow />
    <div id="sellSection">
        <p>Biztosan el szeretnéd adni az üzeletet?</p>
        <p style="margin: 5vmin;">A mezőbe írd be a játékosnak a nevét, ha nem játékosnak adod el az üzletet akkor a boltért cserébe nem fogsz semmi juttatást kapni!</p>
        <div id="dataSection">
            <div id="signatureSection" @click="signature('Luis Keane')" >
                <p id="signature"></p>
                <hr>
                <p id="signatureText">Aláírás(Tulajdonos)</p>
            </div>
            <input id="customer" type="number" placeholder="ID">
            <input style="width: 8vmin;" id="amount" type="number" placeholder="Összeg">
        </div>
        <button type="button" @click="sell">Sell now</button>
    </div>
</template>

<script>
import Arrow from '../../BackArrow.vue'

export default {
    name: 'SellShop',
    components: {
        Arrow
    },
    methods: {
        signature(name) {
            if (document.getElementById("signature").textContent == '') {
                let i = 0;
                let txt = name;
                let speed = 150;
                typeWriter()
                function typeWriter() {
                    if (i < txt.length) {
                        document.getElementById("signature").innerHTML += txt.charAt(i);
                        i++;
                        setTimeout(typeWriter, speed);
                    }
                }
            }
        },
        sell() {
            if (document.getElementById('signature').textContent != '') {
                if (document.getElementById('customer').value != '' && document.getElementById('amount').value != '') {

                } else {
                    console.log('biztos, hogy ingyen szeretnéd eladni a boltot?')
                }
            } else {
                console.log('írd alá köcsög')
            }
        }
    }
}
</script>

<style scoped>
#backContainer {
    width: 5vmin;
    height: 5vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3vmin;
    font-size: 3vmin;
    border-radius: 50%;
    border: 0.1vmin solid black
}
#backContainer:hover {
    cursor: pointer;
}
#sellSection {
    margin: 0 auto;
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(185, 185, 185);
    box-shadow: -1px 4px 15px -3px #000000;
}
#sellSection button {
    outline: none;
    border: none;
    width: 20vmin;
    height: 5vmin;
    color: white;
    font-size: 2vmin;
    background-color: rgb(71, 71, 71);
    border-radius: 1vmin;
}
#sellSection button:hover {
    cursor: pointer;
    background-color: rgb(37, 37, 37);
}
#dataSection {
    width: 100%;
    height: 10vmin;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
#signatureSection:hover {
    cursor: pointer;
}
#signatureText {
    text-align: center;
    font-weight: 700;
    margin-top: 0.5vmin;
}
#signature {
    margin-bottom: 0.5vmin;
    text-align: center;
}
hr {
    margin: 0;
    width: 20vmin;
}
#dataSection input {
    outline: none;
    border: none;
    width: 5vmin;
    height: 3vmin;
    border-radius: 0.5vmin;
    text-align: center;
}

</style>