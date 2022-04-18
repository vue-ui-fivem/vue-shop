<template>
    <h1>Jelentkezés a boltba, futárosnak</h1>
    <form action="">
        <div id="leftSection">
            <p >IC</p>
            <label for="">Name:</label>
            <input class="inputDes" type="text">
            <label for="">Date of birth:</label>
            <input class="inputDes" type="text">
            <label for="">Telefonszám:</label>
            <input class="inputDes" type="text">
            <label for="">Rövid bemutatkozás: IC!</label>
            <textarea cols="30" rows="10"></textarea>
        </div>
        <div id="rightSection">
            <p>OOC!</p>
            <label for="">Discord név:</label>
            <input class="inputDes" type="text">
            <label for="">Életkor:</label>
            <input class="inputDes" type="text">
            <label for="">Rövid bemutatkozás: OOC!</label>
            <textarea cols="30" rows="10"></textarea>
        </div>
    </form>
    <button type="button">Jelentkezés leadása</button>
</template>

<script>

export default {
    name: 'Apply'
}
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 3vmin;
}
form {
    margin: 0 auto;
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: overlay;
}
p {
    font-size: 1.8vmin;
    font-weight: 700;
}
label {
    font-size: 1.6vmin;
}
#leftSection {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
#rightSection {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.inputDes {
    outline: none;
    border: none;
    border-radius: 0.5vmin;
    height: 3vmin;
}
textarea {
    outline: none;
    border: none;
    resize: none;
    width: 30vmin;
    height: 15vmin;
}
button {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    outline: none;
    border: none;
    width: 25vmin;
    height: 5vmin;
    font-size: 2vmin;
    font-weight: 700;
    color: white;
    background-color: rgb(71, 71, 71);
    border-radius: 1vmin;
    margin: 0.5vmin;
}
button:hover {
    cursor: pointer;
    background-color: rgb(37, 37, 37);
}
</style>