<template>
<!-- <div class="smallheader">
  <h1>Sam Key</h1>
</div> -->

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
        <!-- <a v-on:click="Projects()">Projects</a> -->
        <a v-on:click="Contact()">Contact</a>
        <!-- <a class="resum" v-on:click="openCV()">Resume</a> -->

        <button v-on:click="openCV()" download>CV</button>
    </div>
</div>
</template>

<script>
// import pdf from 'vue-pdf'

export default{
    name: 'Header',
    data(){
      return { 
        headerArr: null
      }
    },
    components: {
      // pdf
    },
    //sort this out
    methods : {
        Qualifications: function(){
          this.flushSel();
          document.getElementById('qualScroll').scrollIntoView();
    
          // this.headerArr[1].style.backgroundColor = '#ddd'
          // this.headerArr[1].style.color = 'black'
        },
        Experience: function(){
          document.getElementById('expScroll').scrollIntoView();

          // this.headerArr[2].style.backgroundColor = '#ddd'
          // this.headerArr[2].style.color = 'black'
        },
        Projects : function(){
          this.flushSel();
          this.$router.push('/projects')
          // this.headerArr[3].style.backgroundColor = '#ddd'
          // this.headerArr[3].style.color = 'black'
        },
        Contact : function(){
          document.getElementById('contactScroll').scrollIntoView();
          this.flushSel();

          // this.headerArr[4].style.backgroundColor = '#ddd'
          // this.headerArr[4].style.color = 'black'
        },
        flushSel : function(){
          // for(var i = 0; i < this.headerArr.length; i++){
          //     this.headerArr[i].style.backgroundColor = '#181818';
          //     this.headerArr[i].style.color = 'white';
          // }
        },
        openCV : function(){
            window.open('/files/CV.pdf')
        },
        AboutMe : function(){
            document.getElementById('aboutScroll').scrollIntoView();
        }
    },
    mounted(){
      var xx = document.getElementById('m')
      var x = xx.getElementsByTagName('a');
      this.headerArr = x;
      
      //sel home first, bug if user visits another route first or refereshes NEEDS FIX 
      //or uses the contact me link at bottom
      // this.headerArr[0].style.backgroundColor = '#ddd'
      // this.headerArr[0].style.color = 'black'

      //needs refining
      //maybe a method which selects the ele depending on the current route
      //or a public method to set the active ele (accessing comp methods)
      
    }
}
</script>

<style>
.big {
  height: 60px;
  width: 60px;
  margin-left: 40px;
  margin-top: -20px;

 
}

.menu button {
  text-decoration: none;
  margin-top: -10px;
  margin-bottom: 15px;
  width: 200px;
  font-weight: bold;
  background: #181818;
  color: white;
  border-radius: 10px;
  margin-left: 10px;

}

.menu button :hover {
  cursor: pointer;
}

/* .smallheader h1 {
  font-size: 70px;
}

.smallheader {
  height: 50px;
} */

.header {   
  color: white; 
  font-weight: bold;
  overflow: hidden;  

  display: flex;
  padding-top: 35px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: #181818;
  width: 100%;
  height: 80px;
  

  box-shadow: 0 10px 20px -10px black;


}

.resum {
  border-radius: 5px;
  border: 2px solid white;
  margin-bottom: 15px;
  margin-top: -10px;
}

.header a {
  padding: 15px;
  font-size: 15px;
  padding-top: 0px;
  text-decoration: none;
  color: white;
  

}

.header a:hover {
  cursor: pointer;
  text-shadow: 2px 2px #8f8b8b;
}

.menu {
  float: right;
  display: flex;
  gap: 3%;
  margin-left: 1100px;
}
</style>