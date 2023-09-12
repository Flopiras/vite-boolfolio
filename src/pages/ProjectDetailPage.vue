<script>
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
const baseUri = 'http://127.0.0.1:8000/api/projects/';

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null
    }),
    methods: {
        getProject() {
            const endpoint = baseUri + this.$route.params.id;
            axios.get(endpoint)
                .then(res => { this.project = res.data })
        },
    },
    created() {
        this.getProject();
    }
};
</script>

<template>
    <main>
        <div class="container">
            <!-- Project -->
            <div v-if="project">
                <ProjectCard :project="project" />
            </div>
            <h2 v-else class="text-center mt-4">Non ci sono progetti da vedere</h2>
        </div>
    </main>
</template>