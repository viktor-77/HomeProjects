import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, item) {
      let isElementInCart = state.cart.findIndex(elem=>elem.id===item.id)
      if (isElementInCart != -1) {
        state.cart.push({
          ...item,
          count: state.cart[isElementInCart].count++
          })
      }
      else {
        state.cart.push({
        ...item,
        count:1
        })
      }
      //state.cart.sort((a,b) => a.id - b.id)
    },

    clearCart(state) {
      state.cart.splice(0, state.cart.length)
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addToCart', item)
    },

    clearCart({commit}) {
      commit('clearCart')
    }
  },
  getters: {
    getCart: (state) => state.cart
  }
})

export default store