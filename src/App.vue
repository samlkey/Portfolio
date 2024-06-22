<template>
  <div id="content" class="main">
    <Header></Header>
    <div class="content">
      <div class="contentwrap">
        <Home></Home>
      </div>
      <div id="aboutScroll">
          <AboutMe></AboutMe>
      </div>
      <div id="qualScroll">
        <div class="contentwrap">
          <Qualifications></Qualifications>
        </div>
      </div>
      <div id="contactScroll">
        <div class="contentwrap">
          <Contact></Contact>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
  <ScrollBar></ScrollBar>
</template>

<script> 
  // || COMPONENT IMPORT ||
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import Home from './components/Home.vue'
  import Contact from './components/Contact.vue';
  import AboutMe from './components/AboutMe.vue';
  import ScrollBar from './components/ScrollBar.vue';

  //CONSTANTS
  import { BANNER_CONTENT } from './static/constants'

  document.title = "Sam Key's Resume"

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Home,
      Contact,
      AboutMe,
      ScrollBar
    },
    methods: {
      showConsoleBanner : async function(){
        let ascii = await import('raw-loader!./static/cat.txt').then(
          m => m.default
        )


        console.log(ascii + BANNER_CONTENT);
      }
    },
    mounted(){
      this.showConsoleBanner(); 
    }
  }
</script>

<style src="./css/App.css" />
