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
// || COMPONENT IMPORT ||
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

<style src="./css/App.css" />
