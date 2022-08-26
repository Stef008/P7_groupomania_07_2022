// Imports suivant la doc bootstrap-vue-3
import { createApp } from "vue";
import bootstrapVue3 from "bootstrap-vue-3";


import { router} from "./router/routes";
import App from "./App.vue";


// Import des regles de style css de bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);

// Injection de Bootstrap et, du router dans l'app vue
app.use(bootstrapVue3);
app.use(router);

app.mount("#app");

