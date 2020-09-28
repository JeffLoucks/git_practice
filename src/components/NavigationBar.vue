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
			/>
			<v-img
				alt="Vuetify Logo"
				class="shrink mr-2"
				contain
				src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
				transition="scale-transition"
				width="40"
			/>			

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
				<v-img src="/assets/degreesee-logo-icon.png" contain></v-img>
			</v-btn>
		<v-spacer></v-spacer>
				<v-btn text to="/auth">
					Sign Up
				</v-btn>
			<v-btn text to="/auth">
				Login
			</v-btn>

		</v-toolbar-items>
	</v-app-bar>
	
</template>

<script>
export default {
	name: "NavBar",
	data: () => ({
		logoIcon: '/assets/degreesee-logo-icon.png'
	})
};
</script>