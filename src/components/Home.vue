<template>
    <div class="cont">
        <h1>Hello, my name is</h1>
        <div class="name">
            <h1>Sam Key.</h1>
            <h2>Graduate Software Developer.</h2>
        </div>
        <!-- add something from CV here -->
        <p class="tag">Adventurous and determined student with an expanding eagerness and willingness to make a substantial contribution within
                          the workplace.</p>

    </div>

    <div class="arrow">
        <a v-on:click="AboutMe()">
            <img class="arrow" src="../images/arrow.png">
        </a>
    </div>
      


   

</template>
<script>
export default {
    name: "Home",
    methods : {
        //could import from different component
        AboutMe : function(){
            document.getElementById('aboutScroll').scrollIntoView()
        }
    }
}

</script>

<style>
.cont {
    font-size: 10px;
    padding-top: 16%; 

    margin-left: 300px;

    margin-bottom: 20%;



}

.tag{
    width: 90%;
}

.arrow {
    margin-top: -50px;
    width: 60px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
}

.arrow :hover{
    cursor: pointer; 
    transform: translateY(3px);
}


.name h2 {
    font-size: 60px;
    margin-top: -90px;
    color: #808080;
}

.cont p {
    font-size: 20px;
    margin-top: -30px;
}

.name {
    font-size: 60px;
    font-weight: bold;
    margin-top: -70px;
    font-family: century;

}



</style>