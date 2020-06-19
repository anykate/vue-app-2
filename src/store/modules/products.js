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
};

const mutations = {
  setAPIProducts: (state, products) => (state.products = products),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
