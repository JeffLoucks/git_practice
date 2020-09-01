import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Auth from "../components/Auth.vue";
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Auth
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  }
  //   {
  //     path: "/register",
  //     name: "Sign Me Up!",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/Register.vue")
  //   }
];

const router = new VueRouter({
  routes
});

export default router;
