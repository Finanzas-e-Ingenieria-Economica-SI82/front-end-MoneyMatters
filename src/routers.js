import Home from './views/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Convert_rate from './views/Convert_rate.vue'

import {createRouter, createWebHistory} from "vue-router";
const routes=[
    {
        path: "/",
        redirect: "/sign-up"
    },
    {
        name: "HomeS",
        component: Home,
        path: '/home'
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
    },
    {
        name: "Convert_rate",
        component: Convert_rate,
        path: '/convert_rate'
    }
    
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;