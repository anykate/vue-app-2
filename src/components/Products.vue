<template>
  <div class="hello">
    <ul>
      <li v-for="product in allProducts" :key="product.id">
        <div>{{ product.id }}</div>
        <div>{{ product.title }}</div>
        <div>{{ product.price | currency }}</div>
      </li>
    </ul>
  </div>
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
    ...mapActions({ getProducts: "getAPIProducts" }),
  },
  created() {
    this.getProducts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
