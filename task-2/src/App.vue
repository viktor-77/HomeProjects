<template>
  <div id="app">
    <bankAccount
      Usd
      Eur
      commissionPercent
    />
    <hr><hr><hr>
    <login-password
      
    />
  </div>
</template>

<script>
import bankAccount from "./components/bankAccount";
import loginPassword from "./components/loginPassword";

export default {
  name: 'App',

  components: {
    bankAccount,
    loginPassword
  },

  data() {
    return {
      array:[]
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
