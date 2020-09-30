<template>
	<div class="iframe">
		<iframe :src="dashLink"></iframe>
	</div>
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
