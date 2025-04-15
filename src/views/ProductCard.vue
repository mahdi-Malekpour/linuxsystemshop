<template>
    <div class="product-card">
      <div class="product-image">
        <img src="./../assets/menu/phone.png" :alt="product.name" />
      </div>
      <div class="product-details">
        <h3 class="product-title">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-price">
          {{ formatPrice(product.price) }}
          <span v-if="product.oldPrice" class="old-price">{{ formatPrice(product.oldPrice) }}</span>
        </div>
        <router-link to="/card"><button class="add-to-cart" @click="addToCart,addToCartFunc">افزودن به سبد خرید</button></router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'prodactCard',
    props: {
      product: {
        type: Object,
        required: true,
        // default: () => ({
        //   id: 1,
        //   name: 'نام محصول',
        //   description: 'توضیحات کوتاه محصول',
        //   price: 999000,
        //   oldPrice: 1299000,
        //   image: 'https://via.placeholder.com/300'
        // })
      }
    },
    methods: {
      formatPrice(price) {
        return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
      },
      addToCart() {
        this.$emit('add-to-cart', this.product);
      },
      addToCartFunc(){
        console.log(this.product)
      }
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    margin: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    background: rgba(65, 52, 52, 0.475);
    display: flex;
    flex-direction: column;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .product-image {
    width: 100%;
    height: 180px;
    overflow: hidden;
  }
  
  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .product-image:hover img {
    transform: scale(1.05);
  }
  
  .product-details {
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .product-title {
    margin: 0 0 8px 0;
    font-size: 1.1rem;
    color: #d0d0d0;
  }
  
  .product-description {
    margin: 0 0 12px 0;
    color: #9a9a9a;
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .product-price {
    font-weight: bold;
    font-size: 1.2rem;
    color: #2e7d32;
    margin-bottom: 15px;
  }
  
  .old-price {
    text-decoration: line-through;
    color: #999;
    font-size: 0.9rem;
    margin-right: 8px;
  }
  
  .add-to-cart {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
    margin-top: auto;
    width: 100%;
  }
  
  .add-to-cart:hover {
    background-color: #388E3C;
  }
  
  /* استایل‌های ریسپانسیو */
  @media (min-width: 768px) {
    .product-card {
      flex-direction: row;
      max-width: 600px;
    }
  
    .product-image {
      width: 200px;
      height: auto;
      flex-shrink: 0;
    }
  }
  
  @media (max-width: 480px) {
    .product-image {
      height: 150px;
    }
  }
  </style>