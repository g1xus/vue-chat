import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/Messenger.vue')
        },
        {
            path: '/chat/:id',
            name: 'chat',
            props: true,
            component: () => import('../pages/Messenger.vue')
        }
    ]
})