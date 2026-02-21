import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import LoginView from '../views/LoginView.vue'
import RegistView from '../views/RegistView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/form',
            name: 'form',
            component: FormView,
        }, 
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/regist',
            name: 'regist',
            component: RegistView,
        },
    ],
})

export default router
