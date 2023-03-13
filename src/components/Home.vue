<template>
    <div class="cont">
        <h1>Hello, my name is</h1>
        <div class="name">
            <h1>Sam Key.</h1>
            <h2>Graduate Software Developer.</h2>
        </div>
        <p class="tag">Adventurous and determined student with an expanding eagerness and willingness to make a substantial contribution within
                          the workplace.</p>
    </div>
    <div class="arrow">
        <a v-on:click="AboutMe()">
            <img class="arrow" src="../assets/arrow.png">
        </a>
    </div>
</template>
<script>
export default {
    name: "Home",
    methods : {
        AboutMe : function(){
            document.getElementById('aboutScroll').scrollIntoView()
        }
    }
}
</script>
<style src="../css/Home.css" />
