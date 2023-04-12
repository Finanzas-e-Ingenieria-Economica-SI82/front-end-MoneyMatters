import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import {createRouter, createWebHistory} from "vue-router";
const routes=[
    {
        name: "HomeS",
        component: Home,
        path: '/'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: "LogiN",
        component: Login,
        path: '/login'
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;