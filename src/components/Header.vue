<template>
<div class="header">
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
.header {   
  font-weight: bold;
  overflow: hidden;  
  background: #222;
}

.header a {
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 15px;
  line-height: 25px;
  border-radius: 10px;
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
  gap: 30px;
}
</style>