<template>
<div class="smallheader">
  <h1>Sam Key</h1>
</div>


<div class="header">
    <div class="menu">
        <a v-on:click="Home()">Home</a>
        <a v-on:click="Home()">Projects</a>
        <a v-on:click="Home()">Qualifications</a>
        <a v-on:click="Home()">Experience</a>
        <a v-on:click="Home()">Contact</a>
    </div>
</div>
</template>

<script>
export default{
    name: 'Header',
    methods : {
        Home: function(){
            alert("Home!")
        }
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
  background: #222;
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