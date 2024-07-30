import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './views/LandingPage.vue'
import SkillsPage from './views/SkillsPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import ContactPage from './views/ContactPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: LandingPage,
        props: true
    },
    {
        path: '/skills',
        name: 'skills',
        component: SkillsPage,
        props: true
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsPage,
        props: true
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactPage,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
