<template>
<div class="header">
  <div>
    <a target="_blank" href="https://www.samkey.site">
        <img class="big" src="../images/sk.png">
    </a>
  </div>
    <div id="m" class="menu">
        <a v-on:click="AboutMe()">About Me</a>
        <a v-on:click="Qualifications()">Qualifications</a>
        <a v-on:click="Experience()">Experience</a>
        <a v-on:click="Contact()">Contact</a>
        <button v-on:click="openCV()" download>CV</button>
    </div>
</div>
</template>
<script>
export default{
    name: 'Header',
    methods : {
        Qualifications: function(){
          document.getElementById('qualScroll').scrollIntoView();
        },
        Experience: function(){
          document.getElementById('expScroll').scrollIntoView();
        },
        Contact : function(){
          document.getElementById('contactScroll').scrollIntoView();
        },
        AboutMe : function(){
            document.getElementById('aboutScroll').scrollIntoView();
        },
        openCV : function(){
            window.open('/files/CV.pdf')
        }
    }
}
</script>
<style src="../css/Header.css" />