<template>
	<div id="app">
		<app-header></app-header>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Header from './components/Header';
export default {
	name: 'App',
	components: {
		appHeader: Header
	}
};
</script>

<style>
	body {
		margin: 0px;
	}
</style>