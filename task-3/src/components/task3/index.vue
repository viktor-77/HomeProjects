<template>
    <div>
        <div class="login">
            Login:
            <input type="text" v-model="login">
        </div>
        <div class="password">
            Password:
            <input type="text" v-model="password">
        </div>
        <button
            @click="onLogin"
            :disabled="!isValid"
        >Go</button>
        <div class="message" :class="{
            'redColor': !authResult,
            'greenColor': isVasil
        }">
            {{message}}
        </div>
        <div v-if="authResult">
            <img src="data:image/png;base64,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" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "task3",

    props: {
        ArrayList: {
            type: Array,
            default: ()=>[]
        },
    },

    data() {
        return {
            login: null,
            password: null,
            message: null,
            authResult: null,
            isVasil: null,
        }
    },

    computed: {
        isValid() {
            return this.login && this.password
        }
    },

    methods: {
        onLogin() {
            this.isVasil = null
            this.authResult = this.ArrayList.find(item => this.login == item.login && this.password == item.password)
            if(this.authResult){
                this.message = "Welcome"
            }
            else {
                this.message = "Incorect data"
                if(this.login == "Ivan")this.isVasil = true;
            }
        }
    },


}
</script>

<style lang="css" scoped>
    .redColor {
        color: red;
    }

    .greenColor{
        color: green;
    }

</style>