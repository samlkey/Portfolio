<template>
<div class="header">
  <div class="title">
    <a target="_blank" href="https://www.samkey.site">
        SK
    </a>
  </div>
  <div class="burger">
      <img class="moon" src="../assets/moon.svg">
      <img src="../assets/burger.svg">
  </div>
</div>
</template>
<script>
export default{
    name: 'Header',
    methods : {
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