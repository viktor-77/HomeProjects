<template>
  <div class="table">
    <div class="td td-1">
      <div class="tr">Назва продукту</div>
      <div class="tr">Назва продукту</div>
      <div class="tr">Пдв</div>
      <div class="tr">До оплати</div>
    </div>
    <div class="td td-2">
      <div class="tr">{{ product }}</div>
      <div class="tr">{{ price }} грн</div>
      <div class="tr">{{ pdv }} %</div>
      <div class="tr">{{ total }} грн</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdComponent",

  props: {
    product: {
      type: String,
      required: true,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    pdv: {
      type: Number,
      default: null,
    },
  },

  computed: {
    total() {
      return this.price + (this.price * this.pdv) / 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  margin: 0 auto;
  width: 300px;
  display: flex;
}

.td-1 {
  width: 150px;
  border-top: 0.5px solid black;
  border-left: 0.5px solid black;
  border-bottom: 0.5px solid black;
}

.td-2 {
  width: 150px;
  border-top: 0.5px solid black;
  border-right: 0.5px solid black;
  border-bottom: 0.5px solid black;
}

.tr {
  border: 0.5px solid black;
}
</style>