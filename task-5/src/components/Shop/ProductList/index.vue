<template>
    <div class="ProductList">
        <product v-for="(item,index) in products" :key="index"
            :imgSrc = "item.imgSrc"
            :price = "item.price"
            :title = "item.title"
            @to-cart="toCart(item)"
        />
    </div>
</template>

<script>
    import product from "./Product";
    import { mapActions } from 'vuex'

    export default {
        name: "ProductList",

        components: {
            product,
        },

        props: {
            products: {
                type: Array,
                default: null
            },
        },

        methods: {
            ...mapActions(['addToCart']),

            toCart(item) {
                this.addToCart(item)
            }
        },

    }
</script>

<style lang="css" scoped>
    .ProductList {
        display: grid;
        grid-template-columns: repeat(3, 30%);
        grid-gap: 30px;
        text-align: center;
        padding: 15px;
    }

</style>