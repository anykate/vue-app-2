<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <AddProduct />
    <Products />
  </div>
</template>

<script>
import AddProduct from "@/components/AddProduct.vue";
import Products from "@/components/Products.vue";

export default {
  name: "App",
  components: {
    AddProduct,
    Products,
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
  margin-top: 60px;
}
</style>
