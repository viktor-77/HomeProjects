<template>
    <div>
        <div class="cart">
            <div class="cart-amount">Кількість елементів у корзині: {{getCart.length}}</div>
            <button @click="clearCart">Очистити корзину</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "Cart", 
        
        computed: {
            ...mapGetters(['getCart'])
        },

        methods: {
            ...mapActions(['clearCart'])
        },

    }
</script>

<style lang="scss" scoped>

</style>