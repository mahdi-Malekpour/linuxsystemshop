<template>
    <div>
      <navTop />
      <div class="products-container">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  import navTop from '@/components/nav.vue';
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
            name: 'لپتاپ ایسوس مدل X543',
            description: 'لپتاپ 15 اینچی با پردازنده Core i5 و 8GB RAM',
            price: 15990000,
            oldPrice: 17990000,
            image: 'https://example.com/laptop1.jpg'
          },
          {
            id: 2,
            name: 'لپتاپ لنوو مدل IdeaPad 3',
            description: 'لپتاپ 14 اینچی با پردازنده Ryzen 5 و 16GB RAM',
            price: 18990000,
            image: 'https://example.com/laptop2.jpg'
          }
        ]
      };
    },
    methods: {
      handleAddToCart(product) {
        console.log('افزودن به سبد خرید:', product);
        // اینجا می‌توانید محصول را به سبد خرید اضافه کنید
      }
    }
  };
  </script>
  
  <style>
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    gap: 20px;
  }
  
  @media (max-width: 767px) {
    .products-container {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>