<template>
	<v-app-bar
		app
		color="#FF9800"
		dark
	>
		<div class="d-flex align-center">
			<v-img
				alt="Degreesee Logo"
				class="shrink mr-2"
				contain
				:src="logoIcon"
				transition="scale-transition"
				width="40"
				light
				to="/"
			/>
			<v-btn :href="href">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
					transition="scale-transition"
					width="40"
				/>			
			</v-btn>

			<!-- <v-img
				alt="Degreesee Name"
				class="shrink mt-1 hidden-sm-and-down"
				contain
				min-width="100"
				src="/assets/degreesee-logo-name.png"
				width="100"
			/> -->
		</div>
		<v-toolbar-title>DegreeSee</v-toolbar-title>
		<!-- <v-img src="/assets/degreesee-logo-name.png" contain></v-img> -->
		<!-- <v-app-bar-nav-icon ></v-app-bar-nav-icon> -->
		<v-spacer></v-spacer>

		<v-toolbar-items>
			<v-btn to="/">
				<v-img :src="logoIcon" contain></v-img>
			</v-btn>
		<v-spacer></v-spacer>
			<v-btn v-if="authState !== 'signedin'" text to="/auth">
				Sign In
			</v-btn>
			<!-- <v-btn v-if="authState !== 'signedin'" text to="/auth">
				Login
			</v-btn> -->
			<v-btn v-if="authState === 'signedin' && user">
				<amplify-sign-out></amplify-sign-out>
				<!-- <p>Hello, {{user.email}}</p> -->
			</v-btn>

		</v-toolbar-items>
	</v-app-bar>
	
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
		href: 'https://www.degreesee.com',
		user: undefined,
		authState: undefined
	}),
	
	beforeDestroy() {
		return onAuthUIStateChange;
	}
};
</script>