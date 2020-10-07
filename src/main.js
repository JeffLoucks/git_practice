import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Amplify from "aws-amplify";
import "@aws-amplify/ui-vue";

// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from "./aws-exports";
import awsmobile from "./aws-exports";

Amplify.configure(awsmobile);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");

// TODO don't forget to remove this
window.amplify = Amplify;