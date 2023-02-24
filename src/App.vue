<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <router-view />
    </div>
  </div>
  <Footer></Footer>
</template>

<script> 
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'
document.title = "Sam Key's Resume"
export default {
  name: 'App',
  components: {
    Header,
    Footer
}
}
</script>

<style>
.content {
  box-sizing: border-box;
  border-style: solid;
  border-width: 0 1px 1px;
  position: relative;
  border-color: #e5e5e5; /* USE #e5e5e5; */
  min-height: 100vh;
  font-family: century;

}
#app {
  font-family: Verdana,Arial;
  font-size: 11px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.main {
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: left;
  width: 1060px;
  

}
html, body {
  margin: 0;
  padding: 0;

}

</style>
