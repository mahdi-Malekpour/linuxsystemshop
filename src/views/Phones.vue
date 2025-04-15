<template>
  
    <div class="products-container">
      <navTop />

      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </template>
  
  <script>
  import navTop from './../components/nav.vue';
  // import Navbar from '@/components/Navbar.vue';
import ProductCard from './ProductCard.vue';
  export default {
    name:'phonesC',
    components: {
      ProductCard,
      navTop
    },
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'iphone 12 pro',
            description: '256gb رنگ بنفش',
            price: 15990000,
            oldPrice: 17990000,
            image: './../assets/menu/phone.png'
          },
          
          {
            id: 2,
            name: 'iphone 11',
            description: '256gb رنگ سفید',
            price: 15990000,
            oldPrice: 17990000,
            image: './../assets/menu/phone.png'
          },
          
          {
            id: 3,
            name: 'iphone 12 ',
            description: '256gb رنگ ابی',
            price: 15990000,
            oldPrice: 17990000,
            image: './../assets/menu/phone.png'
          },
          
          {
            id: 4,
            name: 'iphone 14 pro',
            description: '512gb رنگ بنفش',
            price: 15990000,
            oldPrice: 17990000,
            image: 'https://example.com/laptop1.jpg'
          },
          
        ]
      };
    },
    methods: {
      handleAddToCart(product) {
       this.$emit('addToCart',product)
      },
      
    }
  };
  </script>
  
  <style>
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  @media (max-width: 767px) {
    .products-container {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>