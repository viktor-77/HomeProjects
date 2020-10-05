<template>
  <div>
    <div class="count">
        Сума на рахунку 
        <span :style="{color:countStyle}">{{count}}</span>
    </div>
    <div class="add">
        Зарахувати на рахунок
        <input type="number" v-model="add" >
        <button @click="getMoney(add)">Зарахувати</button>
    </div>
    <div class="withdraw">
        Зняти з рахунку
        <input type="number" v-model="withdraw" >
        <button @click="withdrawMoney(withdraw)">Зарахувати</button>
    </div>
    <div class="commission">Відсотки за комісію: {{commission}}</div>
    <hr>
    <div class="USD">Сума у доларах: 
        <span :style="{color:UsdStyle}">{{getUSD()}}</span>
    </div>
    <div class="EUR">
        Сума у Євро: 
        <span :style="{color:EurStyle}">{{getEUR()}}</span>
    </div>
  </div>
</template>

<script>

export default {
    name: "bankAccount",

    props: {
        USD: {
            type: Number,
            default: 28
        },

        EUR: {
            type: Number,
            default: 32
        },

        commissionPercent: {
            type: Number,
            default: 3
        },

    },

    data() {    
        return {
            Usd: 0,
            Eur: 0,
            count: 0 ,
            add: 0 ,
            withdraw: 0 ,
            commission: 0,
            countStyle: null,
            UsdStyle: null,
            EurStyle: null,
        }
    },
    
    methods: {
        getMoney(value) {
            if (value < 0) value = 0
            this.commission = Math.floor(+value * this.commissionPercent / 100)
            this.count = Math.floor(this.count + +value - this.commission)
            this.countStyle = "green"
        },

        withdrawMoney(value) {
            if (value < 0) value = 0
            if ( value > this.count ) value = this.count
            this.commission = Math.floor(+value * this.commissionPercent / 100)
            this.count = Math.floor(this.count - +value)
            this.countStyle = "red"
        },
        
        getUSD() {
            this.Usd = (this.count / this.USD).toFixed(2)
            if(this.Usd < 100) this.UsdStyle="red"
            else this.UsdStyle="green"
            return this.Usd
        },

        getEUR() {
            this.Eur =  (this.count / this.EUR).toFixed(2)
            if(this.Eur < 100) this.EurStyle="red"
            else this.EurStyle="green"
            return this.Eur
        },
    },
}
</script>

<style lang="scss" scoped>
    *{
        text-align: left;
    }
</style>