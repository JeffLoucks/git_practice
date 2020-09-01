<template>
	<div>
		<amplify-authenticator v-if="authState !== 'signedin'"/>
		<div v-if="authState === 'signedin' && user">
			<amplify-sign-out />
			<div >Hello, {{ user.attributes.email }}</div>
		</div>
	</div>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
	name: "AuthStateApp",
	created() {
		onAuthUIStateChange((authState, authData) => {
			this.authState = authState;
			this.user = authData;
		});
	},
	data() {
		return {
			user: undefined,
			authState: undefined
		};
	},
	beforeDestroy() {
		return onAuthUIStateChange;
	}
};
</script>
