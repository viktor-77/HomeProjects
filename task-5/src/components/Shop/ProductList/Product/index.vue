<template>
    <div>
        <div class="cart-button" @click="$emit('to-cart')"></div>
        <img :src="imgSrc" alt="">
        <div class="price">
            {{processedPrice}} грн
        </div>
        <div class="title">
            {{title}}
        </div>
        <div class="dolPrice">
            {{dolPrice}} $
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product",

        props: {
            imgSrc: {
                type: String,
                default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoznatelno.ru%2Fno-image-icon-23485%2F&psig=AOvVaw0OSAagaQT69u8kq7UtUQkd&ust=1602751759949000&source=images&cd=vfe&ved=2ahUKEwjXh-Xb2bPsAhWMzyoKHaXwB1EQr4kDegUIARCqAQ"
            },
            
            price: {
                type: [String, Number],
                default: null
            },

            title: {
                type: String,
                default: "Product Name"
            },
        },

        computed: {
            dolPrice() {
                    return  Math.round(this.price/28)

            },

            processedPrice() {
                let residues = this.price % 1000
                let integerThousand = Math.floor(this.price / 1000) || ''
                let integerMilion = Math.floor(this.price / 1000000) || ''
                return integerMilion + ' ' + integerThousand + ' ' + residues                
            }
        },

    }
</script>

<style lang="css" scoped>
    .cart-button {
        width: 12px;
        height: 12px;
        background-color: red;
        margin-left: auto;
    }
    
    img {
        width: 250px;
    }
</style>