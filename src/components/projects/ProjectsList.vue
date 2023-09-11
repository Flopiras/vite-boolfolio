<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array }
};
</script>

<template>
    <main>
        <div class="container">
            <!-- cards -->
            <div v-if="projects.length">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </div>
            <h2 v-else class="text-center mt-4">Non ci sono progetti da vedere</h2>
        </div>
    </main>
</template>