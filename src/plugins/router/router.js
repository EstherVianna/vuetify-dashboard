import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "@/Views/HomePage.vue";
import UsersViewVue from "@/Views/UsersView.vue";
import SettingsVue from "@/Views/Settings.vue";
import ReportsVue from "@/Views/Reports.vue";
import ReportsToSendVue from "@/Views/ReportsToSend.vue";
import AllReportsVue from "@/Views/AllReports.vue";


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
    {
        path: '/settings',
        name: 'Settings',
        component: SettingsVue
    },
    {
        path: '/writereport',
        name: 'Reports',
        component: ReportsVue
    },
    {
        path: '/sendreports',
        name: 'SendReports',
        component: ReportsToSendVue
    },
    {
        path: '/allreports',
        name: 'AllReports',
        component: AllReportsVue
    },
]

const router = createRouter({
    history: createWebHistory(),
    mode: history,
    routes: routes,
});

export default router;