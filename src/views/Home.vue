<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/dashboard.png" />
    <DegreeSee msg="Welcome to DegreeSee" />
  </div>
</template>

<script>
// @ is an alias to /src
import DegreeSee from "@/components/DegreeSee.vue";

export default {
  name: "Home",
  components: {
    DegreeSee
  }
};
</script>
