import axios from "axios";

const state = {
  /* From root: json-server --watch db.json */
  products: [],
};

const getters = {
  allStoreProducts: (state) => state.products,
};

const actions = {
  async getAPIProducts({ commit }) {
    const response = await axios.get("http://localhost:3000/products/");
    commit("setAPIProducts", response.data);
  },
  async addAPIProduct({ commit }, product) {
    const response = await axios.post(
      "http://localhost:3000/products/",
      product
    );
    commit("setAPIProduct", response.data);
  },
  async deleteAPIProduct({ commit }, id) {
    await axios.delete(`http://localhost:3000/products/${id}/`);
    commit("removeAPIProduct", id);
  },
};

const mutations = {
  setAPIProducts: (state, products) => (state.products = products),
  setAPIProduct: (state, product) => state.products.unshift(product),
  removeAPIProduct: (state, id) =>
    state.products.filter((product) => product.id !== id),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
