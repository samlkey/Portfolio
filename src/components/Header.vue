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
  color: white;
  width: 150px; 
  padding-right: 80%;
  font-size: 22px;

}


.header {   
  font-weight: bold;
  overflow: hidden;  
  background: #222;
  display: flex;
}

.header a {
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 15px;
  line-height: 25px;
  border-radius: 10px;

  size: 25%;
}

.header a:hover {
  color: black;  
  background-color: #ddd;
  cursor: pointer;
}

/* Float the link section to the right */
.header-right {
  float: right;
  padding-right: 40px;
  display: flex;
  gap: 20px;
}
</style>