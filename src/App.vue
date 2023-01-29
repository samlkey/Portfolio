<template>
  <div class="main">
    <h1>SAM KEY</h1>
    <Header></Header>
    <div class="content">
      <h1>Hi</h1>
    </div>
  </div>
</template>

<script> 
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
.content {
  box-sizing: border-box;
  border-style: solid;
  border-width: 0 1px 1px;
  position: relative;
  border-color: #e5e5e5; /* USE #e5e5e5; */
  display: flex;
}

#app {
  font-family: Verdana,Arial;
  font-size: 11px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: left;
  width: 1060px;
}

html, body {
  margin: 0;
  padding: 0;
}
</style>
