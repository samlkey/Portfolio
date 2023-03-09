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
  position: relative;
  min-height: 100vh;
  font-family: century;
  margin-top: 100px;
  color: white; 
  width: 1300px;
  margin-left: auto;
  margin-right: auto;
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

  

}
html, body {
  margin: 0;
  padding: 0;
  background: #181818;

}

</style>
