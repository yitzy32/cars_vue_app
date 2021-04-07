<template>
  <div class="create">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="createCar()">
      Color: <input type="text" v-model="carColor">
      Year: <input type="text" v-model="carYear">
      <input type="submit" value="Create" />
    </form>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Create",
      carColor: "",
      carYear: "",
    };
  },
  created: function () {},
  methods: {
    createCar: function () {
      console.log("creating vehicle....");

      var params = {
        color: this.carColor,
        year: this.carYear,
      };
      axios.post("api/cars", params).then((response) => {
        console.log(response.data);
        this.$router.push("/cars");
      });
    },
  },
};
</script>