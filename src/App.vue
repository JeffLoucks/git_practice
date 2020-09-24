<template>
	<!-- <div id="app">
			<div id="nav">
							<router-link to="/">
											Dashboard
							</router-link> |
							<router-link to="/auth" >
											Sign In
							</router-link> |
							<-- <router-link to="/dashboard">
											Dashboard
							</router-link> -->
			<!-- </div>
			<router-view />
	</div> --> 
	
	<v-app>
		<!-- <div id="app"> -->
			<v-app-bar
        color="#FF9800"
        dark
				dense
					prominent
				
      >
				<!-- <v-img src="./assets/degreesee-name-logo.png" max-height="60%" contain left></v-img> -->
        <v-toolbar-title>DegreeSee</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn img to="/">
          <!-- <v-img src="./assets/degreesee-name-logo.png"></v-img> -->
        </v-btn>
  
        <v-btn to="/auth">
          Account
        </v-btn>
  


      </v-app-bar>
    <!-- </div> -->
		<v-content>hello there</v-content>
  </v-app>
		<!-- <v-app-bar
			app
			color=#E4660A
			dark
		>
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
					transition="scale-transition"
					width="40"
				/>

				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
					width="100"
				/>
			</div>

			<v-spacer></v-spacer>

			<v-btn
				href="https://github.com/vuetifyjs/vuetify/releases/latest"
				target="_blank"
				text
			>
				<span class="mr-2">Latest Release</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn> -->
		<!-- </v-app-bar> -->

</template>

<style scoped>
	.nav {
		color: red
	}
</style>

