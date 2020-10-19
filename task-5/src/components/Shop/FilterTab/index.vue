<template>
    <div class="FilterTab">
        <div class="price">
            <div class="title">Price</div>
            <div class="input-price">
                <input type="number" v-model="minPrice" placeholder="min">
                -
                <input type="number" v-model="maxPrice" placeholder="max">
            </div>
        </div>
        <div class="category">
            <div class="title">Category</div>
            <select v-model="category">
                <option v-for="item in categoryArray" :key="item">
                    {{item}}
                </option>
            </select>
        </div>
        <div class="year">
            <div class="title">Year</div>
            <select v-model="year">
                <option v-for="item in yearArray" :key="item.year" :disabled="item.isDisabled">
                    {{item.year}}
                </option>
            </select>
        </div>
        <div class="color">
            <div class="title">Color</div>
            <select v-model="color">
                <option v-for="item in colorArray" :key="item.color" :disabled="item.isDisabled">
                    {{item.color}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilterTab",

        props: {
            categoryArray: {
                type: Array,
                default: null
            },

            yearArray: {
                type: Array,
                default: null
            },

            colorArray: {
                type: Array,
                default: null
            },

               
        },

        data() {
            return {
                minPrice: null,
                maxPrice: null,
                category: this.categoryArray[0],
                year: this.yearArray[0].year,
                color: this.colorArray[0].color,
            }
        },

        watch: {
            minPrice(val) {
                this.$emit('filter-change',{
                    minPrice: val || null
                })
            },

            maxPrice(val) {
                this.$emit('filter-change',{
                    maxPrice: val || null
                })
            },

            category(val) {
                if(val=="Усі категорії") val = null
                this.color = "Усі кольори",
                this.year = "Усі роки"
                this.minPrice = null
                this.maxPrice = null
                
                this.$emit('filter-change',{
                    category: val 
                }) 
            },

            year(val) {
                if (val == "Усі роки") val = null

                this.$emit('filter-change',{
                    year : val 
                })
            },

            color(val){
                if (val == "Усі кольори") val = null

                this.$emit('filter-change',{
                    color : val 
                })
            }
        },

    }
</script>

<style lang="scss" scoped>
    .FilterTab {
        padding: 15px;

        & > div{
            margin: 30px 0;

            & > .title {
                font-size: 20px;
                margin-bottom: 6px;
            }
        }
    }

    .price {
        input {
            width: 80px;
            padding: 4px;
        }
    }

    .category,.year,.color {
        display: flex;
        flex-direction: column;

        select {
            width: 100px;
        }
    }

</style>