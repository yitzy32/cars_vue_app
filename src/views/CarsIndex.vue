<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p v-for="car in cars">
      Color: {{ car.color }} <br>
      Year: {{ car.year }} <br>
      <router-link v-bind:to="`/cars/${car.id}`">More details</router-link>

      </p>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      cars: [],
    };
  },
  created: function () {
    console.log(this.carsIndex());
  },
  methods: {
    carsIndex: function () {
      console.log("in cars index");
      axios.get("api/cars").then((response) => {
        console.log(response.data);
        this.cars = response.data;
      });
    },
  },
};
</script>