<template>
  <div class="add-product">
    <h1>Add Product</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Add Product..." v-model="newTitle" />
      <input type="text" placeholder="Add Price..." v-model="newPrice" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddProduct",
  data() {
    return {
      newTitle: "",
      newPrice: "",
    };
  },
  methods: {
    ...mapActions(["addAPIProduct"]),
    onSubmit() {
      //console.log(this.newTitle + " " + this.newPrice);
      this.addAPIProduct({
        title: this.newTitle,
        price: this.newPrice,
      });
    },
  },
};
</script>

<style></style>
