<template>
<div class="header">
  <div class="title">
    <a target="_blank" href="https://www.samkey.site">
        SAM KEY
    </a>
  </div>
  <div id="m" class="menu">
    <div>
      <ul class="context">
        <li>
          <a v-on:click="AboutMe()">About Me</a>
        </li>
        <li>
          <a v-on:click="Qualifications()">Portfolio</a>
        </li>
        <li>
          <a v-on:click="Experience()">Experience</a>
        </li>
        <li>
          <a v-on:click="Contact()">Contact</a>
        </li>
        <li>
          <a v-on:click="openCV()" download>Resume</a>
        </li>
      </ul>
    </div>
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