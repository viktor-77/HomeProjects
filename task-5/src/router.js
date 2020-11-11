import Vue from 'vue'
import VueRouter from 'vue-router'

import Cart from "./components/Shop/Cart";

Vue.use(VueRouter)

const routes = [
    {
        path: "/Cart",
        component: Cart
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router