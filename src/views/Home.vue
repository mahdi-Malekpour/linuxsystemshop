<template>
    <div> 
    <navBar />
    <menoNav />
    
    </div>

</template>
<script>

import navBar from './../components/Navbar.vue';
import menoNav from './../components/Meno.vue'
export default {
    name: 'homePage',
    components:{
        navBar,
        menoNav,
        
    }
}
</script>