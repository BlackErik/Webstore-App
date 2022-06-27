const API_URL = "https://fakestoreapi.com";

Vue.component("product", {
  template: `
        <div>
            <span class="title-tag">{{item.title}}</span>
            <img class="item-image" v-bind:src="item.image">
            <span class="price-tag">$ {{item.price }}</span>
            <button> Add To Cart </button>
            <span class="description-tag"> {{item.description}} </span>
        </div>
    `,
  props: ["item"],
});

var app = new Vue({
  el: "#app",
  data: {
    page: "welcome",
    products: [],
    cart: [],
  },

  methods: {},
  created: async function () {
    let response = await fetch(API_URL + "/products");
    let data = await response.json();
    this.products = data;
  },
});
