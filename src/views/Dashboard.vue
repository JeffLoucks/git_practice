<template>
	<div class="iframe">
		<DegreeSee msg="Welcome to DegreeSee" />
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
	}
};
</script>
