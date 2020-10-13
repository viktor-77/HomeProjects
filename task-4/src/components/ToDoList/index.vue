<template>
    <div>
        <div class="title">{{title}}</div>
        <input type="text" placeholder="Введіть свій заказ" v-model="ordering">
        <button @click="order" :disabled="!isValid">
            Замовити
        </button>
        <div class="task-bar">
            <to-do-item
                title="Замовлення для приготування"
                buttonText="Приготовано"
                :taskList="orders"
                @on-task="toReadyOrders"
            />
            <to-do-item
                title="Готові замовлення"
                buttonText="Віднесено"
                :taskList="readyOrders"
                @on-task="removeOrder"
            />
            <to-do-item
                title="Історія замовлень"
                :taskList="history"
                :isHistorySection="true"
            />            
        </div>
    </div>
</template>

<script>
import ToDoItem from "./ToDoItem";

    export default {
        name: "ToDoList",

        components: {
            ToDoItem,
        },

        props: {
            title: {
                type: String,
                default: "title"
            },
        },

        data() {
            return {
                ordering: null,
                orders: [],
                readyOrders: [],
                history: [],
            }
        },

        computed: {
            isValid() {
                return this.ordering
            }
        },

        methods: {
            order() {
                this.orders.push(this.ordering)
                this.history.push(this.ordering)
                this.ordering=null
            },

            toReadyOrders(item) {
                let index = this.orders.indexOf(item)
                this.orders.splice(index,1)
                this.readyOrders.push(item)
            },

            removeOrder(item){
                let index = this.readyOrders.indexOf(item)
                this.readyOrders.splice(index,1)
            }
        },
    }
</script>

<style lang="scss" scoped>
    div {
        margin: 10px;
    }

    input {
        margin-right: 10px;
    }

    .task-bar {
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        max-width: 60%;
    }
</style>