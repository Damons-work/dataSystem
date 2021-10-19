import Vue from "vue";
import VueRouter from "vue-router";
import logIn from "../view/logIn/index";
import homePage from "../view/homePage/index";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/logIn"
  },
  {
    path: "/logIn",
    component: logIn
  },
  {
    path:"/homePage",
    component:homePage
  }
  
];
const router = new VueRouter({
  routes
});
export default router;
