<template>
	<main>
		<div id="auth">
			<amplify-authenticator username-alias="email" v-if="authState !== 'signedin'">
				<amplify-sign-up
				slot="sign-up"
				username-alias="email"
				:form-fields.prop="formFields"
				header-text="Sign Up With DegreeSee"
				submit-button-text="Sign Up"
			></amplify-sign-up>
			</amplify-authenticator>
		</div>
		<div v-if="authState === 'signedin' && user" class="dashboard">
			<!-- <p>Welcome to your data, {{ user.attributes.email }}</p> -->
			<!-- <dashboard></dashboard> -->
			<div class="desktop-iframe"><iframe :src="userData"></iframe></div>
		</div>
	</main>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
// import Dashboard from '@/components/Dashboard.vue';

export default {
	name: 'AuthStateApp',
	created() {
		onAuthUIStateChange((authState, authData) => {
			this.authState = authState;
			this.user = authData;
		});
	},
	components: {
		// dashboard: Dashboard
	},
	data() {
		return {
			user: undefined,
			authState: undefined,
			formFields: [
				{
					type: 'email',
					label: 'Email Address',
					placeholder: 'Enter your email address',
					required: true,
				},
				{
					type: 'password',
					label: 'Password',
					placeholder: 'Enter your password',
					required: true,
				},
				{
					type: 'custom:desktop',
					label: 'Invitation Code',
					placeholder: 'Enter your invitation code',
					required: true,
				},

			]
			// dash: "https://iot.app.initialstate.com/embed/#/tiles/" + this.dashLink
		};
	},
	computed: {
		userData() { 
			let embedLink = "https://iot.app.initialstate.com/embed/#/tiles/";
			let desktop = this.user.attributes['custom:desktop'];
			return embedLink + desktop;
		}
	},
	beforeDestroy() {
		return onAuthUIStateChange;
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
amplify-authenticator {
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	/* height: 100vh; */
	padding: 20px;
}

iframe {
	position: relative;
	list-style:none;
	padding: 0;
	margin: 0;
	perspective: 1000;
	flex: 1 1 auto;
	overflow: auto;
	width: 100%;
	height: 100%;
	display: block;
	border: none;
}

.desktop-iframe {
	height: 100%;
	width: 100%;
	position: absolute;
}

</style>


