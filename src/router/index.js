import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/HomePage.vue';
import ContactsPage from '../pages/ContactsPage.vue'
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

const router = createRouter({
    history : createWebHistory(),
    linkExactActiveClass : 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contacts', name: 'contacts', component: ContactsPage },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetailPage },
    ]
})

export { router }