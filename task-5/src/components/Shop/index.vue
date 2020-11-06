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
            :colorArray="colorArray"
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
    import products from "@/products";
    

    export default {
        name: "Shop",

        components: {
            ProductList,
            HeaderShop,
            FilterTab,
        },

        data() {
            return {
                products,
                filter:{
                    title: null,
                    minPrice: null,
                    maxPrice: null,
                    category: null,
                    year: null,
                    color: null,
                },
            }
        },

        computed: {  
            categoryArray() {
                let categories = []
                this.products.forEach(item =>{
                    if(!categories.includes(item.category)) categories.push(item.category)
                })
                categories.sort()
                categories.unshift("Усі категорії")
                return categories
            },

            yearArray(){
                let years = []
                let processedYears = [{year:"Усі роки",isDisabled:false}]
 
                this.products.forEach(item => {
                    if(!years.includes(+item.year)) years.push(+item.year) 
                })
                years.sort((a,b)=> b-a)
                
                years.forEach(item=>{
                    let find = this.filteredYears.find(filteredItem => filteredItem.year == item)
                    if(find) processedYears.push({year:item,isDisabled:false})
                    else processedYears.push({year:item,isDisabled:true})
                })
                return processedYears
            },

            colorArray(){
                let allColor = []
                let processedColor = [{color:"Усі кольори",isDisabled:false}]
 
                this.products.forEach(item => {
                    if(!allColor.includes(item.color)) allColor.push(item.color) 
                })
                allColor.sort()
                
                allColor.forEach(item=>{
                    let find = this.filteredColors.find(filteredItem => filteredItem.color == item)
                    if(find) processedColor.push({color:item,isDisabled:false})
                    else processedColor.push({color:item,isDisabled:true})
                })
                return processedColor
            },

            isFilterEmpty() {
                return this.filter.title === null    &&
                       this.filter.minPrice === null &&
                       this.filter.maxPrice === null &&
                       this.filter.year === null     &&
                       this.filter.category === null &&
                       this.filter.color === null 
            },

            filteredProducts() {
                if(this.isFilterEmpty) return this.products

                return this.products.filter(item => 
                    (!this.filter.title || item.title.toLowerCase().includes(this.filter.title)) &&
                    (this.filter.minPrice === null || +item.price >= this.filter.minPrice) &&
                    (this.filter.maxPrice === null || +item.price <= this.filter.maxPrice) &&
                    (this.filter.category === null || item.category === this.filter.category) &&
                    (this.filter.year === null || item.year == this.filter.year) &&
                    (this.filter.color === null || item.color == this.filter.color) 
                )          
            },

            filteredYears() {
                if(this.isFilterEmpty) return this.products

                return this.products.filter(item => 
                    (!this.filter.title || item.title.toLowerCase().includes(this.filter.title)) &&
                    (this.filter.minPrice === null || +item.price >= this.filter.minPrice) &&
                    (this.filter.maxPrice === null || +item.price <= this.filter.maxPrice) &&
                    (this.filter.category === null || item.category === this.filter.category) &&
                    (this.filter.color === null || item.color == this.filter.color) 
                )          
            },

            filteredColors() {
                if(this.isFilterEmpty) return this.products

                return this.products.filter(item => 
                    (!this.filter.title || item.title.toLowerCase().includes(this.filter.title)) &&
                    (this.filter.minPrice === null || +item.price >= this.filter.minPrice) &&
                    (this.filter.maxPrice === null || +item.price <= this.filter.maxPrice) &&
                    (this.filter.category === null || item.category === this.filter.category)  &&
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