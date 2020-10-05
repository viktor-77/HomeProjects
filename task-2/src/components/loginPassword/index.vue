<template>
    <div>
        <div class="login">
            Login:
            <input type="text">
        </div>
        <div class="password">
            password:
            <input type="password">
        </div>
        <button>Go</button>
    </div>
</template>

<script>
    export default {
        name: "loginPassword"

    }
</script>

<style lang="scss" scoped>
    *{
        text-align: left;
    }
</style>