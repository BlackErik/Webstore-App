const API_URL = "https://fakestoreapi.com";

Vue.component("product", {
  template: `
        <div>
            <span class="title-tag">{{item.title}}</span>
            <img class="item-image" v-bind:src="item.image">
            <span class="price-tag">$ {{item.price }}</span>
            <button @click="addToCart()"> Add To Cart </button>
            <span class="description-tag"> {{item.description}} </span>
        </div>
    `,
  data: function () {
    return {};
  },
  methods: {
    addToCart: function () {
      if (this.cart.includes(this.item) == false) {
        this.cart.push(this.item);
      }
    },
  },
  props: ["item", "cart"],
});

Vue.component("productincart", {
  template: `
        <div>
            <span class="title-tag">{{item.title}}</span>
            <img class="item-image" v-bind:src="item.image">
            <span class ="price-tag">$ {{item.price}}</span>
            <button @click="removeFromCart(), updateCartTotal()"> Remove From Cart </button>
        </div>
    `,
  data: function () {
    return {
      cartTotal: 0,
    };
  },
  methods: {
    removeFromCart: function () {
      let index = this.cart.indexOf(this.item);
      this.cart.splice(index, 1);
    },
  },
  props: ["item", "cart", "updateCartTotal"],
});

var app = new Vue({
  el: "#app",
  data: {
    page: "welcome",
    products: [],
    cart: [],
    cartTotal: 0,
  },

  methods: {
    updateCartTotal: function () {
      this.cartTotal = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cartTotal += this.cart[i].price;
      }
    },
  },
  created: async function () {
    let response = await fetch(API_URL + "/products");
    let data = await response.json();
    this.products = data;
  },
});
