<template>
  <div id="content" class="main">
    <Header></Header>
    <div class="content">
      <Home></Home>
      <div id="qualScroll">
      <Qualifications></Qualifications>
      </div>
      <div id="expScroll">
      <Experience></Experience>
      </div>
      <Contact></Contact>
    </div>
  </div>
  <Footer></Footer>
</template>

<script> 
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Home from './components/Home.vue'
import Qualifications from './components/Qualifications.vue';
import Experience from './components/Experience.vue';
import Contact from './components/Contact.vue';





document.title = "Sam Key's Resume"
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home,
    Qualifications,
    Experience,
    Contact
}
}
</script>

<style>
#qualScroll{
  padding-top: 130px;
}

#expScroll{
  padding-top: 130px;
}


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
  scroll-behavior: smooth;
}

</style>
