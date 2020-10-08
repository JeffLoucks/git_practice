<template>
	<nav class="nav">
		<div>
				<!-- <router-link to="/" class="navbar-brand">DegreeSee</router-link> -->
			<div>
				<a :href="link">
					<img class="logo-icon"
						:src="logoIcon"
						alt="DegreeSee Logo Icon"
					>
				</a>
			</div>
			<router-link to="/">
				<div v-if="authState !== 'signedin'" text to="/">
					Sign In
				</div>
			</router-link>
			<div v-if="authState === 'signedin' && user" text class="signout">
				<amplify-sign-out></amplify-sign-out>
			</div>
		</div>
	</nav>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

export default {
	name: "NavBar",
	created() {
		onAuthUIStateChange((authState, authData) => {
			this.authState = authState;
			this.user = authData;
		});
	},
	data: () => ({
		logoIcon: '@/assets/degreesee-logo-icon.png',
		logoName: '@/assets/degreesee-logo-name.png',
		link: 'https://www.degreesee.com',
		user: undefined,
		authState: undefined
	}),
	
	beforeDestroy() {
		return onAuthUIStateChange;
	}
};
</script>

<style scoped>
.nav {
	/* background-color: #E05800; */
	background-color: #EB7020;
	height: 60px;
	padding: 10px;
}

.signout {
	float: right;
}


</style>