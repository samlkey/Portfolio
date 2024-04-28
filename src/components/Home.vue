<template>
    <div class="wrapper">
        <div class="cont">
          <h1 class="intro">Hello, my name is</h1>
            <div class="name">
               <h1>Sam Key.</h1>
                <h2>Software Developer.</h2>
            </div>
             <p class="tag">Adventurous and determined individual with an expanding eagerness and willingness to make a substantial contribution within
                          the workplace.</p>

           <button v-on:click="openCV()" download>View my Resume!</button>
        </div>
        <div class="cube">
            <Cube></Cube> 
        </div>
    </div>
    
    <div class="arrow">
              <a v-on:click="AboutMe()">
                    <img class="arrow" src="../assets/arrow.png">
                </a>
    </div>



</template>
<script>
import Cube from './Cube.vue';

export default {
    name: "Home",
    components: {
        Cube
    },
    methods : {
        AboutMe : function(){
            document.getElementById('aboutScroll').scrollIntoView()
        },
        openCV : function(){
            window.open('/files/CV.pdf')
        }
    }
}
</script>
<style src="../css/Home.css" />
