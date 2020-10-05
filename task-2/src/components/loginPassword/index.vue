<template>
    <div>
        <div class="login">
            Login:
            <input type="text" v-model="login">
        </div>
        <div class="password">
            password:
            <input type="password" v-model="password">
        </div>
        <button @click="isСoincidence(login,password)">Go</button>
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "loginPassword",

        props: {
            logins: {
                type: Array,
                default: ()=>[]
            },

            passwords: {
                type: Array,
                default: ()=>[]
            },
        },

        data() {
            return {
                message: null
            }
        },

        methods: {
            isСoincidence(login,password) {
                let i = this.logins.indexOf(login);
                let j = this.passwords.indexOf(password);
                if(i>=0 && j>=0) this.message = "ok"
                else this.message = "error"
            }
        }
    }
</script>

<style lang="scss" scoped>
    *{
        text-align: left;
    }
</style>