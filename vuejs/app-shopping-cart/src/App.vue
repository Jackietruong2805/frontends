<template>
  <header>
    <the-header :cartList="cartList" @handle-delete-cart="handleDelete" />
  </header>
  <main class="container">
    <product-list @handle-buy="handleBuy" />
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ProductList from "./components/ProductList.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    ProductList,
  },
  data() {
    return {
      cartList: [],
    };
  },
  methods: {
    handleBuy(productItem) {
      const index = this.cartList.findIndex(
        (cart) => cart.id === productItem.id
      );
      if (index !== -1) {
        //tìm thấy productItem trong cartList
        this.cartList[index].amount += 1;
      } else {
        //ko tìm thấy productItem trong cartList
        const newProductItem = { ...productItem, amount: 1 };
        this.cartList = [...this.cartList, newProductItem];
      }
    },
    handleDelete(cart) {
      this.cartList = this.cartList.filter(
        (cartItem) => cartItem.id !== cart.id
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
