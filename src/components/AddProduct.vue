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
export default {
  name: "AddProduct",
  data() {
    return {
      newTitle: "",
      newPrice: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.newTitle + " " + this.newPrice);
    },
  },
};
</script>

<style></style>
