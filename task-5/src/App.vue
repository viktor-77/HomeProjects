<template>
  <div id="app">
    <shop
      :products="products"
    />
  </div>
</template>

<script>
import Shop from "./components/Shop";
import products from "./products";

export default {
  name: 'App',

  components: {
    Shop,
  },

  data() {
    return {
      products,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
