<template>
  <div id="app">
    <task-3
      :array-list="ArrayList"
    />
  </div>
</template>

<script>
import task3 from "./components/task3";
import ArrayList from "./ArrayList";

export default {
  name: 'App',

  components: {
    task3,
  },

  data() {
    return {
      ArrayList,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
