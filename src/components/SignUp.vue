<template>
	<main>
		<div id="auth">
			<amplify-authenticator username-alias="email" v-if="authState !== 'signedin'">
				<amplify-sign-up
				slot="sign-up"
				username-alias="email"
				:form-fields.prop="formFields"
			></amplify-sign-up>
			</amplify-authenticator>
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
		// Dashboard
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
	// dashLink() {
	// 	// onAuthUIStateChange((authData) => {
	// 	// 	this.user = authData;
	// 	// 	this.id = '123';
			
	// 	// });
	// 		// let user = this.user;
	// 		let user = onAuthUIStateChange.authData.user;
	// 		return user;
		
	// 	// dashLink () {
	// 	// onAuthUIStateChange((authState, authData) => {
	// 	// 	this.authState = authState;
	// 	// 	this.user = authData;
	// 	// 	this.dashLinkId = 
	// 	// 	let id = this.authData.user.attributes.email;
	// 	// 	return id;
	// 	// });
	// 	// } 
	// },
	beforeDestroy() {
		return onAuthUIStateChange;
	},
};
</script>

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
	padding: 12px 0 0 0;
	margin: 0;
	perspective: 1000;
	flex: 1 1 auto;
	overflow: auto;
	width: 100%;
	height: 100%
}
</style>