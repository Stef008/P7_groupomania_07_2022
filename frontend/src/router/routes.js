import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "../pages/login.vue";
import HomeVue from "../pages/home.vue";

const routes = [
    { path: "/login", component: LoginVue },
    { path: "/home", component: HomeVue }
]


const router = createRouter({ history: createWebHistory(), routes });


export { router };