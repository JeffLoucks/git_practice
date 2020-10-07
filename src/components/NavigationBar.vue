<template>
	<div id="navbar">
		<v-app-bar
			app
			color="#FF9800"
			dark
		>
			<div class="d-flex align-center">
				<!-- <a :href="mktLink"> -->
				<router-link to="/">
					<v-img
						alt="DegreeSee Icon"
						class="shrink mr-2"
						contain
						:src="logoIcon"
						transition="scale-transition"
						width="40"
					/>		
				</router-link>
				<!-- </a> -->
			</div>
			<a :href="mktLink" class="title">
				<!-- <router-link to="/"> -->
					<v-toolbar-title>DegreeSee</v-toolbar-title>
				<!-- </router-link> -->
			</a>
			<!-- <v-img src="/assets/degreesee-logo-name.png" contain></v-img> -->
			<v-spacer></v-spacer>

			<v-toolbar-items>
				<v-btn text to="/">
					Home
					<!-- <v-img :src="logoIcon" contain></v-img> -->
				</v-btn>
			<v-spacer></v-spacer>
				<v-btn v-if="authState === 'signedin' && user" text to="/Dashboard">
					View My Data
				</v-btn>
				<v-btn v-if="authState !== 'signedin'" text to="/auth">
					Sign In
				</v-btn>
				<!-- <v-btn v-if="authState !== 'signedin'" text to="/auth">
					Login
				</v-btn> -->
				<v-btn v-if="authState === 'signedin' && user" text>
					<amplify-sign-out></amplify-sign-out>
					<!-- <p>Hello, {{user.email}}</p> -->
				</v-btn>
			</v-toolbar-items>
		</v-app-bar>

	</div>
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
		mktLink: 'https://www.degreesee.com',
		user: undefined,
		authState: undefined
	}),
	// computed: {
	// 	userDash: (authData) => {
	// 		authData.user.email;
	// 	}
	// },
	beforeDestroy() {
		return onAuthUIStateChange;
	}
};
</script>

<style scoped>
	.title {
		color: white;
		text-decoration: none;
	}

	a:hover, a:visited, a:link, a:active {
		text-decoration: none;
	}


</style>
