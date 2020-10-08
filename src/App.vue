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

:root {
	/* --amplify-primary-color: #ff6347; */
	--amplify-primary-color: #F27E31;
	--amplify-primary-tint: #E05800;
	--amplify-primary-shade: #FD9653;
}
</style>