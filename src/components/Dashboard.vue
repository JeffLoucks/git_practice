<template>
	<v-main class="main">
		<div class="iframe">
			<iframe :src="dashLink"></iframe>
		</div>

	</v-main>
</template>

<script>
// @ is an alias to /src
// import DegreeSee from "@/components/DegreeSee.vue";

export default {
	name: "Dashboard",
	data: () => ({
		bkt: 'bkt_1g4458k8tkfd1i',
		dashLink: 'https://iot.app.initialstate.com/embed/#/tiles/bkt_1g4458k8tkfd1i'
	})
};
</script>

<style scoped>
	iframe {
		width: 100%;
		/* height: 1000px; */
		flex: 1 1 auto;
		padding: 0px;
		/* position: absolute;  */
		height: 100%; 
		/* border: none */
	}

	v-main {
		padding: 0px;
	}

	.main {
		padding: 0px;
		height: 100%;
	}
</style>
