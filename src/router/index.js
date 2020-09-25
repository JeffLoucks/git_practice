import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
// import Auth from "../components/Auth.vue";
import NotFound from "../views/NotFound.vue";
// import Auth from "../views/Auth.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/auth",
		name: "Auth",
		component: () => import("../components/Auth.vue")
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard
	},
	{
		path: "*",
		name: "NotFound",
		component: NotFound 
	}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

// https://medium.com/js-dojo/user-management-in-vue-js-with-aws-cognito-1905511b93b
// const router = new Router({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: "/",
//       name: "frontDoor",
//       component: FrontDoor,
//       meta: { requiresAuth: false }
//     },
//     {
//       path: "/home",
//       name: "home",
//       component: Home,
//       meta: { requiresAuth: true }
//     }
//   ]
// });

// router.beforeResolve(async (to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     try {
//       await Vue.prototype.$Amplify.Auth.currentAuthenticatedUser();
//       next();
//     } catch (e) {
//       next({
//         path: "/",
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     }
//   }
//   next();
// });
