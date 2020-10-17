<template>
    <div class="Shop">
        <header-shop class="HeaderShop"
            title="My Shop"
            @filter-title="setFilterTitle"
        />
        <filter-tab class="FilterTab"
            @filter-change="setFilterData"
            :categoryArray="categoryArray"
            :yearArray="yearArray"
        />
        <product-list class="ProductList"
            :products="filteredProducts"
        />
    </div>
</template>

<script>
    import HeaderShop from "./HeaderShop";
    import FilterTab from "./FilterTab";
    import ProductList from "./ProductList";

    export default {
        name: "Shop",

        components: {
            ProductList,
            HeaderShop,
            FilterTab,
        },

        props: {
            products: {
                type: Array,
                default: null
            },
        },

        data() {
            return {
                filter:{
                    title: null,
                    minPrice: null,
                    maxPrice: null,
                    category: null,
                    year: null
                }
            }
        },

        computed: {  
            categoryArray() {
                let arr = []
                this.products.forEach(item =>{
                    if(!arr.includes(item.category)) arr.push(item.category)
                })
                arr.sort()
                arr.unshift("Усі категорії")
                return arr
            },

            yearArray(){
                let allYears = []
                let processedYears = [{year:"Усі роки",isDisabled:false}]
 
                this.filteredProducts.forEach(item => {
                    if(!allYears.includes(+item.year)) allYears.push(+item.year) 
                })
                allYears.sort((a,b)=> b-a)
                
                allYears.forEach(item=>{
                    let find = this.filteredProducts.find(filteredItem => filteredItem.year == item)
                    if(find) processedYears.push({year:item,isDisabled:false})
                    else processedYears.push({year:item,isDisabled:true})
                })
                return processedYears
            },

            isFilterEmpty() {
                return this.filter.title === null    &&
                       this.filter.minPrice === null &&
                       this.filter.maxPrice === null &&
                       this.filter.year === null     &&
                       this.filter.category === null 
            },

            filteredProducts() {
                if(this.isFilterEmpty) return this.products

                return this.products.filter(item => 
                    (!this.filter.title || item.title.toLowerCase().includes(this.filter.title)) &&
                    (this.filter.minPrice === null || +item.price >= this.filter.minPrice) &&
                    (this.filter.maxPrice === null || +item.price <= this.filter.maxPrice) &&
                    (this.filter.category === null || item.category === this.filter.category) &&
                    (this.filter.year === null || item.year == this.filter.year) 
                )          
            },
        }, 

        methods: {
            setFilterTitle(val) {
                this.filter = {
                    ...this.filter,
                    title: val.toLowerCase().split(' ').join('') //для того щоб пошук не враховував пробіли
                }  
            },

            setFilterData(val) {
                this.filter = {
                    ...this.filter,         
                    ...val
                }
            },
        },

    }
</script>

<style lang="css" scoped> 
    .Shop {
        display: grid;
        grid-template-areas: "HeaderShop HeaderShop"
                             "FilterTab ProductList";
    }

    .HeaderShop {
        grid-area: HeaderShop;
    }

    .FilterTab {
        width: 200px;
        grid-area: FilterTab;
    }

    .ProductList {
        grid-area: ProductList;
    }

</style>