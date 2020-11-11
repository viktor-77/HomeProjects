<template>
    <div class="HeaderShop">
        <div class="title">{{title}}</div>
        <input type="text" v-model="filter" placeholder="Input title">
        <div class="cart">
            <button><router-link to="/Cart">Cart</router-link></button>
            <button><router-link to="/">Close Cart</router-link></button>
        </div>
        <router-view></router-view>
        
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