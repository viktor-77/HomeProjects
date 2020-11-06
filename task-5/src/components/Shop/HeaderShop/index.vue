<template>
    <div class="HeaderShop">
        <div class="title">{{title}}</div>
        <input type="text" v-model="filter" placeholder="Input title">
        <div class="cart">
            <div class="cart-amount">Кількість елементів у корзині: {{getCart.length}}</div>
            <button @click="clearCart">Очистити корзину</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "HeaderShop",

        props: {
            title: {
                type: String,
                default: "title"
            },
        },

        data() {
            return {
                filter: null,
            }
        },

        watch: {
            filter(val) {
                this.$emit("filter-title",val)
            }
        },

        computed: {
            ...mapGetters(['getCart'])
        },

        methods: {
            ...mapActions(['clearCart'])
        },

    }
</script>

<style lang="css" scoped>
    .HeaderShop {
        width: 80%;
        padding: 30px 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        font-size: 36px;
    }

</style>