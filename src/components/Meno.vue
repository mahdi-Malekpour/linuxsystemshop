<template>
<div class="cont">
<div class="item"><div class="left-box"><h4> موبایل ها</h4><router-link to="/phones">مشاهده...</router-link></div><img src="./../assets/menu/phone.png" alt="" class="ducsimg"></div>
<div class="item"><div class="left-box"><h4> لپ تاپ ها</h4><router-link to="/laptops">مشاهده...</router-link></div><img src="./../assets/menu/Macbook-laptop.png" alt="" class="ducsimg"></div>
<div class="item"><div class="left-box"><h4> کیس</h4><router-link to="/case">مشاهده...</router-link></div><img src="./../assets/menu/cace.png" alt="" class="ducsimg"></div>
<div class="item"><div class="left-box"><h4> سایر لوازم کامپیوتری</h4><router-link to="/other">مشاهده...</router-link></div><img src="./../assets/menu/manitorpng.png" alt="" class="ducsimg"></div>



</div>
</template>
<script>
export default {
name : 'menoNav'
}
</script>
<style scoped>
.cont{
    margin-top: 100px;
     margin-bottom: 100px;
    display: flex;
    width: 80%;
    gap: 28px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-inline: auto;
}
a{
   all: unset;  
}
.left-box{

    width: 100px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
}
.item{
    width: 380px;
    height: 160px;
    border-radius: 12px;
    background-color: #2938576a;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

h4{
    font-size: 24px;
    color: #fff;
    font-weight: 200;
}
a{
    color: #0099f8;
}
a:hover{
    color: #437595;
}
.item img{
    width: 120px;
}
@media (max-width:600px) {
    .cont{
        margin-top: 20px;
    }
}
</style>