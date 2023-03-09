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
        <a href="#">Home</a>
        <a v-on:click="Qualifications()">Qualifications</a>
        <a v-on:click="Experience()">Experience</a>
        <!-- <a v-on:click="Projects()">Projects</a> -->
        <a v-on:click="Contact()">Contact</a>
        <a v-on:click="openCV()">Resume</a>
    </div>
</div>
</template>

<script>

export default{
    name: 'Header',
    data(){
      return {
        headerArr: null
      }
    },
    //sort this out
    methods : {
        Qualifications: function(){
          this.flushSel();
          document.getElementById('quals').scrollIntoView();
          this.$router.push('/qualifications')
          // this.headerArr[1].style.backgroundColor = '#ddd'
          // this.headerArr[1].style.color = 'black'
        },
        Experience: function(){
          document.getElementById('exp').scrollIntoView();
          this.flushSel();
          this.$router.push('/experience')
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
          document.getElementById('deets').scrollIntoView();
          this.flushSel();
          this.$router.push('/contact')
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