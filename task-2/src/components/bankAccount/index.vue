<template>
  <div>
    <div class="count" :class="countStyle">Сума на рахунку <span>{{count}}</span></div>
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
    <div class="USD">Сума у доларах: {{getUSD}}</div>
    <div class="EUR">Сума у Євро: {{getEUR}}</div>
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

        countStyle: {
            type: String,
            default: null
        },

    },

    data() {    
        return {
            count: 0 ,
            add: 0 ,
            withdraw: 0 ,
            commission: 0,
        }
    },

    computed: {
        getUSD() {
            return Math.floor( +(this.count / this.USD).toFixed(2) )
        },

        getEUR() {
            return Math.floor( +(this.count / this.EUR).toFixed(2) )
        },

    },
    
    methods: {
        

        getMoney(value) {
            if (value < 0) value = 0; 
            this.commission = Math.floor(+value * this.commissionPercent / 100);
            this.count = Math.floor(this.count + +value - this.commission);
        },

        withdrawMoney(value) {
            if (value < 0) value = 0;
            if ( value > this.count ) value = this.count;
            this.commission = Math.floor(+value * this.commissionPercent / 100);
            this.count = Math.floor(this.count - +value);
        }        
    },
}
</script>

<style lang="scss" scoped>
    *{
        text-align: left;
    }
</style>