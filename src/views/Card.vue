<template>
   <div>

      <navTop /><h2>
   توجه کنید هنوز این بخش کامل نشده است 

</h2>
<h3>
   برای خرید کالای مورد نظر  در شبکه های اجتماعی پیام دهید
</h3>
<div class="media-icon-box">
      <a href="#"><img class="icon" src="https://img.icons8.com/material/96/FFFFFF/instagram-new--v1.png" alt="">اینستاگرام</a>
      <a href="#"><img class="icon" src="https://img.icons8.com/material/96/FFFFFF/telegram-app.png" alt="">تلگرام</a>
      
</div>
   <div
   @addToCartFunc="addToCartHandler"
   @addToCart="addToCartHandler"
   >
<Phones />
   </div>
   </div>
      
</template>
<script>
import navTop from '@/components/nav.vue';
// import ProductCard from './ProductCard.vue';
// import Phones from './Phones.vue';
export default {
    name: 'cardBuy',
    components:{
      navTop
    },
    methods:{
        
      addToCartHandler(){
console.log('افزودن به سبد خرید:', );
      }
    },
    
}
</script>
<style scoped>
h2,h3{
   text-align: center;
}h2{
   margin-top: 50px;
   font-size: 30px;
}h3{
   margin-top: 18px;
   font-size: 20px;
}
.media-icon-box{
   margin-top: 28px;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 120px;
    width: 100%;
  }a{
  width: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: aliceblue;
  }
  .icon{
    height: 36px;
    width: 36px;
    margin: 10px;
  }
  
</style>