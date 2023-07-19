import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "@/Views/HomePage.vue";
import UsersViewVue from "@/Views/UsersView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePageVue
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersViewVue
    },
]

const router = createRouter({
    history: createWebHistory(),
    mode: history,
    routes: routes,
});

export default router;