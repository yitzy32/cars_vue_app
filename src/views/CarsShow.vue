<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Color: {{ car.color }}</p>
    <p>Year: {{ car.year }}</p>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      car: {},
    };
  },
  created: function () {
    this.showCar();
  },
  methods: {
    showCar: function () {
      console.log("showing car....");
      axios.get("/api/cars/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.car = response.data;
      });
    },
  },
};
</script>