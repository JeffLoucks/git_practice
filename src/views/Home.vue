<template>
  <div class="home">
    <DegreeSee msg="Welcome to DegreeSee" />
    <img alt="Vue logo" src="../assets/dashboard.png" />
    <!-- <Register /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import DegreeSee from "@/components/DegreeSee.vue";
// import Register from "@/components/Register.vue";

export default {
  name: "Home",
  components: {
    DegreeSee
    // Register
  }
};
</script>
