import { createApp } from "vue";
import bootstrapVue3 from "bootstrap-vue-3";
import App from "./App.vue";
import LoginVue from "./pages/login.vue"
import { createRouter, createWebHistory } from "vue-router";


// Import des regles de style css de bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
const routes = [
    { path: "/login", component: LoginVue }
]
const router = createRouter({ history: createWebHistory(), routes });
const app = createApp(App);

app.use(bootstrapVue3);
app.use(router);
app.mount("#app");

module.exports = { router };