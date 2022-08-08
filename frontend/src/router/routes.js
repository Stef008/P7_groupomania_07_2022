import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "../pages/login.vue";
import HomeVue from "../pages/home.vue";

const routes = [
    { path: "/login", component: LoginVue },
    { path: "/signup", component: LoginVue },
    { path: "/home", component: HomeVue }
]


const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from) => {
    
    if (needConnect(to)) {
        return router.push("/login")
    }
})
function needConnect(to) {
    if (privatePage(to) && !tokenInStorage(to)) return true
    if (privatePage(to) && !validToken()) return true
    return false
    
}

function privatePage(to) {
    const publicPage = ["/login","/signup"]
    return !publicPage.includes(to.path)
}

function tokenInStorage() {
    return localStorage.getItem("token") != null
}
function validToken() {
    const token = localStorage.getItem("token")
    return token === "chut"
}
export { router }