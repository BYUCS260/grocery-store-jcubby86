<template>
<div class="wrapper">
  <div v-if="cart.length > 0" class="products">
    <div class="product" v-for="product in cart" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button @click.prevent="removeFromCart(product)" class="auto">Remove</button>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Cart is empty</h2>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartView',
  props: {
    cart: Array
  },
  methods: {
    removeFromCart(item){
      let cart = this.$root.$data.cart;
      cart.splice(cart.indexOf(item), 1);
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
}

.product {
  margin: 10px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 125px;
  width: 1 00px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>