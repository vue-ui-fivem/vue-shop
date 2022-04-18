<template>
    <div class="card">
        <p>Alkalmazott neve: <br><br><span style="font-weight: 700;">Luis Keane</span></p>
        <div class="perm"> 
            <p>Alkalmazottak engedélyei:</p>
            <div class="permCont">
                <div class="perms">
                    <div class="title">Termékeke modosítása</div>
                    <i class="permIcons fas fa-times" @click="setValue($event)"></i>
                </div>
                <div class="perms">
                    <div class="title">Termékeke Rendelése</div>
                    <i class="permIcons fas fa-times" @click="setValue($event)"></i>
                </div>
                <div class="perms">
                    <div class="title">Alkalmazottak kezelése</div>
                    <i class="permIcons fas fa-times" @click="setValue($event)"></i>
                </div>
                <div class="perms">
                    <div class="title">Berékezett jelentkezésel</div>
                    <i class="permIcons fas fa-times" @click="setValue($event)"></i>
                </div>
            </div>
        </div>
        <p>Alkalamazott kirúgása: <br><br><span style="font-weight: 700;"><i class="kick fas fa-times"></i></span></p>
    </div>
</template>

<script>
export default {
    name: 'EmployeeCard',
    methods: {
        setValue(data) {
            data.target.classList.value.includes('fa-times') ? data.target.classList.remove('fa-times')+(data.target.classList.add('fa-check')) : data.target.classList.add('fa-times')+(data.target.classList.remove('fa-check')) 
        }
    }
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
.perm {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cont {
    display: flex;
    align-items: center;
}
.perm p {
    margin: 1vmin;
}
.permCont {
    display: flex;
    align-items: center;
    justify-content: center;
}
.perms {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.permIcons {
    margin-top: 1vmin;
}
.title {
    background-color: rgb(70, 61, 61);
    color: white;
    padding: 0.3vmin;
    padding-top: 1.5vmin;
    border-radius: 1vmin;
    text-align: center;
    visibility: hidden;
    font-size: 1.3vmin;
    margin: 0;
    width: 15vmin;
}
.title::after {
    display: block;
    content: '';
    height: 1vmin;
    width: 1vmin;
    background-color: rgb(70, 61, 61);
    position: relative;
    top: 0.5vmin;
    left: 47%;
    transform: rotate(45deg);
}
.perms:hover .title {
    visibility: visible;
}
.kick {
    color: red;
}
.kick:hover {
    cursor: pointer;
    color: rgb(196, 1, 1);
}
</style>