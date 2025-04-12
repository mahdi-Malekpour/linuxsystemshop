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
name: 'casePage',
components:{
    ProductCard,
    navTop
},


data() {
  return {
    products: [
      {
        id: 1,
        name: 'ماوس گیمینگ',
        description: 'دارای چراغ rgb',
        price: 159000,
        oldPrice: 179000,
        image: 'https://example.com/laptop1.jpg'
      },
      {
        id: 2,
        name: 'پایه نگه دارنده لپ تاپ',
        description: 'دارای فن زیری ',
        price: 470000,
        oldPrice:510000,
        image: 'https://example.com/laptop1.jpg'
      },

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