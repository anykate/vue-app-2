<template>
  <ul class="products-listing">
    <li v-for="product in allProducts" :key="product.id">
      <div>{{ product.id }}</div>
      <div>{{ product.title }}</div>
      <div>{{ product.price | currency }}</div>
      <button @click="deleteThisProduct(product.id)">❌</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  filters: {
    currency(value) {
      return "₹ " + parseFloat(value).toFixed(2);
    },
  },
  computed: {
    ...mapGetters({ allProducts: "allStoreProducts" }),
  },
  methods: {
    ...mapActions({
      getProducts: "getAPIProducts",
      deleteProduct: "deleteAPIProduct",
    }),
    deleteThisProduct(id) {
      this.deleteProduct(id);
    },
  },
  created() {
    this.getProducts();
  },
  updated() {
    this.getProducts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products-listing li {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.products-listing li button {
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  cursor: pointer;
}
</style>
