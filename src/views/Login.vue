<template>
    <div>
        <navTop />
        <div class="cont">
        
        <div class="cont1">
            <div class="oneradio"></div>
    <div class="tworadio"></div>
        <form>
            
        <h2>ورود به لینوکس سیستم</h2>

        <div>
            <label >نام کاربری</label>
            <input type="text">
            <label>رمز عبور</label>
            <input type="password">
        </div>
        <button>ورود</button>
        
        <span>حساب ندارید؟<router-link to="/signin">ثبت نام کنید</router-link></span>
        
    </form>
        </div>
    </div>
    </div>
</template> 

<script>
import navTop from '@/components/nav.vue';
export default {
    name: 'loginPage',
    components:{
        navTop
    }
}
</script>
<style scoped>
.gohome{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 140px;
}
.home{
    all: unset;
font-size: 12px;
}
.cont{
    width: 100%;
    height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
    
}
.cont1{
    z-index: -1;
    position: relative;
    margin-top: 50px;
    width: 320px;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.oneradio{
    
    position: absolute;
    bottom:-110px;
    right: -60px;
    height: 160px;
    width: 160px;
    border-radius: 100%;
    background-image: linear-gradient(45deg,#002affce,#00bfffd4);
}
.tworadio{
    
    background-image: linear-gradient(45deg,#00ff00cf,#00ffeacc);
    position: absolute;
    top: -30px;
    left: -60px;
    height: 150px;
    width: 150px;
    border-radius: 100%;
}
form{
    
    margin-top: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    box-shadow: 0px 0px 6px -1px #3a3a3ab9;
    border: 1px solid #939393;
    background-color: rgba(58, 58, 58, 0.263);
    backdrop-filter: blur(7px);
    padding:18px;
     border-radius: 12px;
}
label{
    margin-right: 8px;
}
input{
    
    all: unset;
    padding: 4px;
    width: 280px;
    height: 34px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.07);
   
}
button{
    
    all: unset;text-align: center;
    width: 200px;
    height: 40px;
    border-radius: 6px;
    background-color: rgba(0, 255, 72, 0.491);
}
span{
    font-size: 12px;
}
a{
    color: aqua;
}
@media (max-width:600px) {
   
.cont{
    width: 100%;
    height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
    
}
.cont1{
    position: relative;
    margin-top: 50px;
    width: 220px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.oneradio{
    
    position: absolute;
    bottom:-90px;
    right: -40px;
    height: 120px;
    width: 120px;
    border-radius: 100%;
    background-image: linear-gradient(45deg,#002affce,#00bfffd4);
}
.tworadio{
    
    background-image: linear-gradient(45deg,#00ff00cf,#00ffeacc);
    position: absolute;
    top: -20px;
    left: -40px;
    height: 120px;
    width: 120px;
    border-radius: 100%;
}

label{
    margin-right: 8px;
}
input{
    
    all: unset;
    padding: 4px;
    width: 100%;
    height: 24px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.07);
   
}
button{
    
   
    width: 100%;
    
  
}
span{
    font-size: 12px;
}
a{
    color: aqua;
}
    h2{
        font-size: 18px;
    }
}
</style>