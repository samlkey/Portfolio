<template>
  <div id="content" class="main">
    <Header></Header>
    <div class="content">
      <Home></Home>
      <div id="aboutScroll">
      <AboutMe></AboutMe>
      </div>
      <div id="qualScroll">
      <Qualifications></Qualifications>
      </div>
      <div id="expScroll">
      <Experience></Experience>
      </div>
      <div id="contactScroll">
        <Contact></Contact>
      </div>
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
import AboutMe from './components/AboutMe.vue';





document.title = "Sam Key's Resume"
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home,
    Qualifications,
    Experience,
    Contact,
    AboutMe
}
}
</script>

<style>
#qualScroll{
  padding-top: 120px;
}

#expScroll{
  padding-top: 120px;
}

#aboutScroll {
  padding-top: 120px;
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
