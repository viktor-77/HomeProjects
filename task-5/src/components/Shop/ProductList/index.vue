<template>
    <div class="ProductList">
        <product v-for="(item,index) in products" :key="index"
            :imgSrc = "item.imgSrc"
            :price = "item.price"
            :title = "item.title"
        />
    </div>
</template>

<script>
    import Product from "./Product";

    export default {
        name: "ProductList",

        components: {
            Product,
        },

        props: {
            products: {
                type: Array,
                default: null
            },
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