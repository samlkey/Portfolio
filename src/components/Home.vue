<template>
    <div class="home-main">
        <div class="wrap-home">
            <div class="cont">
                <h1 class="intro">Hello, my name is</h1>
                <div class="name">
                    <h1>Sam Key</h1>
                    <h2>Software Developer.</h2>
                </div>
                <p class="tag">Adventurous and determined individual with an expanding eagerness and determination to make a substantial contribution within the workplace.</p>
                <button v-on:click="openCV()" download>View my Resume!</button>
            </div>
            <div>
                <img class="emoji" src="../assets/emoji.png" />
            </div>

        </div> 
        <!-- <svg height="210" width="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M 1 1 C 1.3333 1.6667 1.6667 2.3333 2 3 Z L 3 1 L 4 2"
  style="fill:none;stroke:green;stroke-width:10vw;" />
        </svg>  -->
    </div>

    <div class="arrow-wrap">
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
            },
            openCV : function(){
                window.open('/files/CV.pdf')
            },
            scrollHandler : function(target){
                document.getElementById(target).scrollIntoView()
            }
        }
    }
</script>
<style src="../css/Home.css" />
