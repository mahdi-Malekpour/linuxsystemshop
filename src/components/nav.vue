<template>
  <div class="header">
    <!-- منوی همبرگر -->
    <div 
      class="menu-list" 
      :class="{'active': isMenuOpen}" 
      @click="toggleMenu"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- منوی موبایل -->
    <div class="mobile-menu" :class="{'active': isMenuOpen}">
      <router-link to="/" @click.native="closeMenu">صفحه اصلی</router-link>
      <router-link to="/about" @click.native="closeMenu">درباره ما</router-link>
      <router-link to="/card" @click.native="closeMenu">سبد خرید</router-link>
      <router-link to="/call" @click.native="closeMenu">تماس با ما</router-link>
 </div>
      <!-- بعد از منوی موبایل -->
<div 
  class="menu-overlay" 
  :class="{'active': isMenuOpen}" 
  @click="closeMenu"
></div>
    <!-- منوی دسکتاپ -->
    <div class="right-box">
      <router-link to="/" class="links-title">صفحه اصلی</router-link>
      <router-link to="/about" class="links-title">درباره ما</router-link>
      <router-link to="/card" class="links-title">سبد خرید</router-link>
      <router-link to="/call" class="links-title">تماس با ما</router-link>
    </div>
    
    <div class="left-box">
      <router-link to="/login" class="links-title login">ورود</router-link>
      <router-link to="/signin" class="links-title signin">ثبت نام</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navTop',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  // حذف margin-left از body
},
    closeMenu() {
      this.isMenuOpen = false;
      // document.body.style.overflow = 'auto';
    }
  }
}
</script>

<style scoped>
/* استایل پایه */
/* جلوگیری از اسکرول اولیه */


/* ریست موقعیت منو */
.menu {
  transform: translateX(-100%);
}
.header {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-inline: auto;
  padding-inline: 16px;
  background-color: rgba(199, 199, 184, 0);
  backdrop-filter: blur(6px);
  border-radius: 30px;
}

/* منوی همبرگر (حالت اولیه) */
.menu-list {
  display: none;
  height: 30px;
  width: 30px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.menu-list div {
  width: 100%;
  height: 4px;
  background-color: #ffffff;
  border-radius: 4px;
  transition: all 0.3s ease;
}

/* حالت فعال همبرگر (تبدیل به ✕) */
.menu-list.active div:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.menu-list.active div:nth-child(2) {
  opacity: 0;
}

.menu-list.active div:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

/* منوی موبایل */
/* اصلاح بخش منوی موبایل */
.mobile-menu {
  margin-top: -8px;
  position: fixed;
  display: none;
  left: -400px; /* تغییر از translateX به left */
  top: 0;
  width: 300px;
  height: 100vh;
   background-color:#28313cd4;
flex-wrap: wrap;
  backdrop-filter: blur(8px);
  transition: left 0.3s ease; /* فقط left انیمیت شود */
  z-index: 1000;
  flex-direction: column;
}

.mobile-menu.active {  

  left: 0;
}

/* حذف transform و body.menu-open */
      
.mobile-menu a {
  text-align: center;
  color: #ffffff;
  padding: 12px 0;
  text-decoration: none;
  border-bottom: 1px solid #eee;
}
/* استایل overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 999;
}

.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}
/* منوی دسکتاپ */
.right-box, .left-box {
  display: flex;
  gap: 24px;
}

.links-title {
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  transition: all 0.1s ease-in;
}

.links-title:hover {
  color: rgb(194, 206, 216);
}

.signin {
  color: #1a2637;
  padding-inline: 8px;
  border-radius: 6px;
  background-color: rgb(0, 255, 72);
}

/* نسخه موبایل */
@media (max-width: 600px) {
  .header {
    width: 100%;
    padding-inline: 18px;
  }
  
  .menu-list {
    display: flex;
  }
  
  .right-box {
    display: none;
  }
  
  .mobile-menu {
    display: flex;
  }
}
</style>