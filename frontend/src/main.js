import { createApp } from 'vue'
import bootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'

// Import des regles de style css de bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.use(bootstrapVue3)
app.mount('#app')
