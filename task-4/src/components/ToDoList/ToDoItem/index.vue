<template>
    <div class="component">
        <div class="title">{{title}}</div>
        <hr>
        <div class="list " v-if="taskList.length>0">
            <div class="list-item" v-for="(item,index) in taskList" :key="index">
                <span>{{item}}</span>
                <button v-if="!isHistorySection" @click="$emit('on-task',item)">
                    {{buttonText}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskList",

        props: {
            title: {
                type: String,
                default: "title"
            },

            buttonText: {
                type: String,
                default: "ok"
            },

            taskList: {
                type: Array,
                default: ()=>[]
            },

            isHistorySection:{
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style lang="scss" scoped>

    .list-item {
        margin: 8px 0;
        padding-left: 4%;
        text-align: left;

        span {
            margin-right:8px
        }
    }
</style>