<template>
	<v-app>
		<NavBar/>
		<v-main>
			<div id="app">
				<router-view/>
				<!-- <DegreeSee/> -->
			</div>
		</v-main>
	</v-app>


</template>

<script>
// import DegreeSee from './components/DegreeSee';
import NavBar from './components/NavigationBar';

export default {
	name: 'App',
	components: {
		NavBar
		// DegreeSee
	}
};
</script>

