<template>
<div class="smallheader">
  <h1>Sam Key</h1>
</div>


<div class="header">
    <div class="menu">
        <a v-on:click="Home()">Home</a>
        <a v-on:click="Projects()">Projects</a>
        <a v-on:click="Qualifications()">Qualifications</a>
        <a v-on:click="Experience()">Experience</a>
        <a v-on:click="Contact()">Contact</a>
    </div>
</div>
</template>

<script>

export default{
    name: 'Header',
    methods : {
        Home: function(){
          this.$router.push('/')
        },
        Projects: function(){
          alert("not yet implemented")
        },
        Qualifications: function(){
          alert("not yet implemented")
        },
        Experience: function(){
          this.$router.push('/experience')
        },
        Contact : function(){
          this.$router.push('/contact')
        },
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
  color: black;  
  background-color: #ddd;
  cursor: pointer;
}

.menu {
  float: right;
  display: flex;
  gap: 3%;
}
</style>