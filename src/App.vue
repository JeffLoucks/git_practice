<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">
				Dashboard
			</router-link> |
			<router-link to="/auth" >
				Sign In
			</router-link> |
			<!-- <router-link to="/dashboard">
				Dashboard
			</router-link> -->
		</div>
		<router-view />
	</div>
</template>

// global styling
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #f7bc4d;
}

:root {
  --amplify-primary-color: #E4660A;
  --amplify-primary-tint: #ff7359;
  --amplify-primary-shade: #e0573e;
}
</style>
