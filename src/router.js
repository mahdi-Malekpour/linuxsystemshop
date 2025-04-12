import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signin from "./views/Signin.vue";
import About from "./views/About.vue";
import Phones from "./views/Phones.vue";
import Laptops from "./views/Laptops.vue";
import CardBuy from "./views/Card.vue";
import Error from './views/404.vue';
import cases from "./views/cases.vue";
import others from "./views/others.vue";
Vue.use(VueRouter)

const routes = [
    {path:'/', component:Home},
    {path:'*', component:Error},
    {path:'/login', component:Login},
    {path:'/signin', component:Signin},
    {path:'/about', component:About},
    {path:'/phones', component:Phones},
    {path:'/laptops', component:Laptops},
    {path:'/Card', component:CardBuy},
    {path:'/case', component:cases},
    {path:'/other', component:others},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router