<template>
<div class="smallheader">
  <h1>Sam Key</h1>
</div>


<div class="header">
    <div id="m" class="menu">
        <a v-on:click="Home()">Home</a>
        <!-- <a v-on:click="Projects()">Projects</a> -->
        <a v-on:click="Qualifications()">Qualifications</a>
        <a v-on:click="Experience()">Experience</a>
        <a v-on:click="Projects()">Projects</a>
        <a v-on:click="Contact()">Contact</a>
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
    methods : {
        Home: function(){
          this.flushSel(); 
          this.$router.push('/')
          this.headerArr[0].style.backgroundColor = '#ddd'
          this.headerArr[0].style.color = 'black'
          
        },
        Qualifications: function(){
          this.flushSel();
          this.$router.push('/qualifications')
          this.headerArr[1].style.backgroundColor = '#ddd'
          this.headerArr[1].style.color = 'black'
        },
        Experience: function(){
          this.flushSel();
          this.$router.push('/experience')
          this.headerArr[2].style.backgroundColor = '#ddd'
          this.headerArr[2].style.color = 'black'
        },
        Projects : function(){
          this.flushSel();
          this.$router.push('/projects')
          this.headerArr[3].style.backgroundColor = '#ddd'
          this.headerArr[3].style.color = 'black'
        },
        Contact : function(){
          this.flushSel();
          this.$router.push('/contact')
          this.headerArr[4].style.backgroundColor = '#ddd'
          this.headerArr[4].style.color = 'black'
        },
        flushSel : function(){
          for(var i = 0; i < this.headerArr.length; i++){
              this.headerArr[i].style.backgroundColor = '#181818';
              this.headerArr[i].style.color = 'white';
          }
        }
    },
    mounted(){
      var xx = document.getElementById('m')
      var x = xx.getElementsByTagName('a');
      this.headerArr = x;
      
      //sel home first, bug if user visits another route first or refereshes NEEDS FIX 
      //or uses the contact me link at bottom
      this.headerArr[0].style.backgroundColor = '#ddd'
      this.headerArr[0].style.color = 'black'

      //needs refining
      //maybe a method which selects the ele depending on the current route
      //or a public method to set the active ele (accessing comp methods)
      
    }
}
</script>

<style>
.smallheader h1 {
  font-size: 40px;
}

.smallheader {
  height: 50px;
}

.header {   
  color: white; 
  font-weight: bold;
  overflow: hidden;  
  background: #181818;
  display: flex;
  height: 35px;
}

.header a {
  padding: 8px;
  font-size: 15px;
}

.header a:hover {
  cursor: pointer;
}

.menu {
  float: right;
  display: flex;
  gap: 3%;
}
</style>