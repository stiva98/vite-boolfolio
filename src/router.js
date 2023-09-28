import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import PostsPage from './pages/PostsPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFoundPage,
        },
        {
            path: '/blog',
            name: 'posts',
            component: PostsPage,
        }
    ]
});

export { router };