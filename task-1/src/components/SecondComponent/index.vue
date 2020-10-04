<template>
  <div>
    <div class="first">
      <div>{{ town }}</div>
      <div>{{ time }}</div>
    </div>
    <div class="second">
      <div>{{ degree }} ℃</div>
      <div class="text">
        <span>Вологість:</span>{{ wetness }} % <br />
        <span>Тиск:</span>{{ pressure }} mm <br />
        <span>Вітер:</span>{{ wind }} m/c <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondComponent",

  props: {
    town: {
      type: String,
      default: "town",
    },
    time: {
      type: String,
      default: null,
    },
    degree: {
      type: String,
      default: null,
    },
    wetness: {
      type: Number,
      default: null,
    },
    pressure: {
      type: Number,
      default: null,
    },
    wind: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.first {
  margin: 0 auto;
  max-width: 200px;
  display: flex;
  align-items: auto;
  justify-content: space-between;
}

.second {
  padding-top: 20px;
  margin: 0 auto;
  max-width: 200px;
  display: flex;
  align-items: auto;
  justify-content: space-between;
}

.text {
  text-align: left;

  span {
    opacity: 0.7;
  }
}
</style>