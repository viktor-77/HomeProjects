<template>
    <div class="container">
        <div class="addToCart" @click="toCart">
            <img src="https://img.icons8.com/material-outlined/64/000000/shopping-cart.png" class="cartIcon"/>
        </div>
        <img :src="imgSrc" alt="" class="productImage">
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

        methods: {
            toCart() {
                this.$emit('to-cart')
            }
        },

    }
</script>

<style lang="css" scoped> 
    .container {
        line-height: 1.4;
    }

    .productImage {
        width: 250px;
    }

    .addToCart {
        width: 60%;
        margin: 0 auto;
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 8px;
    }

    .cartIcon {
        height: 25px;
        width: 25px;
        cursor: pointer;
    }

</style>