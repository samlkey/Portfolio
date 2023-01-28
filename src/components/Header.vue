<template>
<div class="header">
    <h1>SAM KEY</h1>
    <div class="header-right">
        <a v-on:click="Home()">Home</a>
        <a v-on:click="Home()">ETC</a>


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
.header h1 {
  width: 200px; 
  padding-right: 80%;
  font-size: 27px;
}

.header {   
  color: white; 
  font-weight: bold;
  overflow: hidden;  
  background: #222;
  display: flex;
}

.header a {
  padding: 15px;
  font-size: 15px;
  line-height: 25px;
  border-radius: 25px;
}

.header a:hover {
  color: black;  
  background-color: #ddd;
  cursor: pointer;
}

/* Float the link section to the right */
.header-right {
  float: right;
  display: flex;
  gap: 20px;
  padding: 5px 40px 5px 0px 
}
</style>