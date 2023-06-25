import Home from './views/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import FrenchMethod from './views/FrenchMethod.vue'
import Convert_rate from './views/Convert_rate.vue'
import CardProperty from './views/CardProperty.vue'
import UserProfile from './views/UserProfile.vue'
import { createRouter, createWebHistory } from "vue-router";
const routes = [
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
    },
    {
        name: "CardProperty",
        component: CardProperty,
        path: '/card_property'
    },
    {
        name: "FrenchMethod",
        component: FrenchMethod,
        path: '/french_method',
        props: (route) => ({
            propertyId: route.query.propertyId
        })
    },

    {
        name: 'UserProfile',
        component: UserProfile,
        path: '/UserProfile'
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;