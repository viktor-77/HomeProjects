<template>
  <div id="app">
    <bankAccount
      :Usd="28"
      :Eur="32"
      :commissionPercent="3"
    />
    <hr><hr><hr>
    <login-password
      :logins="logins"
      :passwords="passwords"
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
      logins:['Viktor','Sasha','Oleg','Dima','Slavik'],
      passwords:['123456789','987654321','5874628','2515218','528252515151']
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
