import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import  Home from './pages/Home.vue';
import  About from './pages/About.vue';
import  Repositories from './pages/Repositories.vue';
import  NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        }, {
            path: '/about',
            name: 'About',
            component: About,
        }, {
            path: '/repositories',
            name: 'Repositories',
            component: Repositories,
        }, {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound,
        }
    ]
});
createApp(App).use(router).mount('#app');
