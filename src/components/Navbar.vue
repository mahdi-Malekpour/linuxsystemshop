<template >
    
    <div class="cont"  >
<div class="bgimage"></div><router-view/>

<navTop />
<div class="h1"><h1>فروشگاه لپ تاپ لینوکس سیستم</h1></div>
     <h3>انواع لپ تاپ های نو و کارکرده</h3>
     <div class="media-icon-box">
      <a href="#"><img class="icon" src="https://img.icons8.com/material/96/FFFFFF/instagram-new--v1.png" alt=""></a>
      <a href="#"><img class="icon" src="https://img.icons8.com/material/96/FFFFFF/telegram-app.png" alt=""></a>
      
     </div>
<img src="./../assets/pngwing.com.png" class="navimg" alt="">
    

    </div>
        
      

  </template>
  
  <script>
  import navTop from './nav.vue';
  export default {
    name: 'navBar',
    components:{
      navTop
    },
    data: () => ({
      
  

    }),
    
  }
 
  </script>
  <style scoped>
  
  .cont{
   /* padding-top: 30px; */
   
    width: 100%;
    height: 400px;
    /* position: absolute; */
    background-size: cover;
  }
  .navimg{
    direction: ltr;
    position: relative;
    right:56%;
    bottom: 150px;
    width: 380px;
  }
  h1,h3{
    display: inline;
    padding-inline: 10px;
    position: relative;
    z-index: -1;
    right: 120px;
    top: 60px;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    font-weight: 200;
    
  }
  .h1{
    margin-bottom: 20px;
  }
  .header{
    flex-direction: row;
    width: 80%;
    height: 60px;
    background-color: rgba(199, 199, 184, 0);
    /* box-shadow: 0px 0px 4px 0px #8a8a8a88; */
    margin-inline: auto;
    /* margin-top:22px; */
    border-radius: 30px;
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 16px;
  }
  
  

  

  .media-icon-box{
    position: relative;
    right: 120px;
    top: 80px;
  }
  .icon{
    height: 24px;
    width: 24px;
    margin: 10px;
  }
  @media(max-width:600px){
  
  .header{
    width: 100%;
  }
  .cont{
   /* padding-top: 30px; */
   
    width: 100%;
    height: 400px;
    /* position: absolute; */
    background-size: cover;
  }
  .navimg{
    display: none;
  }
  h1,h3{
    display: inline;
    padding-inline: 0px;
    position: relative;
    right: 12px;
    top: 60px;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    font-weight: 200;
    
  }
  h1{
    font-size: 22px;
  }
  
 
  


  .icon{
    display: none;
    /* height: 24px;
    width: 24px;
    margin: 10px; */
  }
    }
</style>