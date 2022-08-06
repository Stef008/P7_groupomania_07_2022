import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "../pages/login.vue";


const routes = [
    { path: "/login", component: LoginVue }
]


const router = createRouter({ history: createWebHistory(), routes });


export { router };