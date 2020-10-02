<template>
	<v-main class="main">
		<!-- <div class="iframe"> -->
			<iframe :src="dashLink"></iframe>
			<p>{{ dashLink }} </p>
		<!-- </div> -->
	</v-main>
</template>

<script>
// @ is an alias to /src
// import { onAuthUIStateChange } from '@aws-amplify/ui-components';

export default {
	name: "Dashboard",
	data: () => ({
		bkt: 'bkt_1g4458k8tkfd1i',
		embedLink: 'https://iot.app.initialstate.com/embed/#/tiles/'
	}),
	// created() {
	// 	onAuthUIStateChange((authState, authData) => {
	// 		this.authState = authState;
	// 		this.user = authData;
	// 	});
	// },
	computed: {
		// userDash: (authData) => {
		// 	authData.user.email;
		// },
		dashLink: (embedLink, bkt) => {
			return embedLink + bkt;
		}
	}
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
