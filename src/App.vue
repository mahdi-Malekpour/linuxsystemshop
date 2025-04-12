<template>
  <div id="app">
    
    <router-view>
      
    </router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
    
  }
}
</script>

<style>
@font-face {
  font-family: vazir;
  src: url(./fonts/Vazir-Light.ttf);
}
body{
  color: aliceblue;
  direction: rtl;
  font-family: vazir;
  background-color:#1a2637;
}html, body {
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  position: relative;
}
</style>
