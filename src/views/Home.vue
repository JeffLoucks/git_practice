<template>
	<div class="home">
		<DegreeSee msg="Welcome to DegreeSee" />
		<!-- <img alt="Initial State Dashboard" src="../assets/dashboard.png" /> -->
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
