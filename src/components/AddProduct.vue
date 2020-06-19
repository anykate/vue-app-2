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

<style scoped>
.add-product {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}
form {
  display: flex;
  justify-content: space-around;
}
input[type="text"] {
  width: 270px;
  padding: 10px;
  border: 1px solid #2c3e50;
  outline: 0;
}
input[type="submit"] {
  width: 120px;
  background: #2c3e50;
  color: #fff;
  border: 1px #2c3e50 solid;
  cursor: pointer;
}
</style>
