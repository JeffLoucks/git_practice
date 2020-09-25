<template>
	<v-container>
		<div class="degreesee">
			<h1>{{ msg }}</h1>
			<iframe width="100%" height="100%" src='https://iot.app.initialstate.com/embed/#/tiles/bkt_1g4458k8tkfd1i'></iframe>
		</div>
	</v-container>
</template>

<script>
export default {
	name: "DegreeSee",
	data: () => ({
		msg: 'Welcome to DegreeSee'
	})
	// props: {
	// 	msg: String
	// }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

