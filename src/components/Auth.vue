<template>
	<div>
		<amplify-authenticator username-alias="email" v-if="authState !== 'signedin'">
			<amplify-sign-up
			slot="sign-up"
			username-alias="email"
			:form-fields.prop="formFields"
		></amplify-sign-up>
		</amplify-authenticator>

		<!-- <amplify-sign-in slot="sign-in" username-alias="email"></amplify-sign-in> -->
		<div v-if="authState === 'signedin' && user">
			<amplify-sign-out></amplify-sign-out>
			<div>Hello, {{ user.attributes.email }}</div>
			<iframe src="https://iot.app.initialstate.com/embed/#/tiles/bkt_1g4458k8tkfd1i"></iframe>
		</div>
	</div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

export default {
	name: 'AuthStateApp', // or AuthWithSlots
	created() {
		onAuthUIStateChange((authState, authData) => {
			this.authState = authState;
			this.user = authData;
		});
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
		};
	},
	beforeDestroy() {
		return onAuthUIStateChange;
	}
};
</script>

<style scoped>
amplify-authenticator {
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	
	/* height: 100vh; */
}

amplify-button.button {
	background-color: #3fc5ea;
	color: #3fc5ea;
}

iframe {
	position: relative;
	list-style:none;
	padding: 12px 0 0 0;
	margin: 0;
	perspective: 1000;
	flex: 1 1 auto;
	overflow: auto;
}
</style>