<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
import AppPagination from '../components/AppPagination.vue';

export default {
    name: 'HomePage',
    components: { ProjectsList, AppPagination },

    data: () => ({
        projects: {
            data: [],
            links: [],
        }
    }),
    methods: {
        fetchProjects(endpoint = 'http://127.0.0.1:8000/api/projects/') {
            axios.get(endpoint)
                .then(res => {
                    const { data, links } = res.data;
                    this.projects = { data, links };
                })
        },
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <!-- main -->
    <ProjectsList :projects="projects.data" />

    <!-- pagination -->
    <AppPagination :links="projects.links" />
</template>