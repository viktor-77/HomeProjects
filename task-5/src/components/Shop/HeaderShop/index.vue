<template>
    <div class="HeaderShop">
        <div class="title">{{title}}</div>
        <input type="text" v-model="filter" placeholder="Input title">
        <div class="cart">
            <div class="cart-amount">Кількість елементів у корзині: {{amountCart}}</div>
            <button @click="$emit('clear-cart')">Очистити корзину</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderShop",

        props: {
            title: {
                type: String,
                default: "title"
            },

            amountCart: {
                type: [String, Number],
                default: 0
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