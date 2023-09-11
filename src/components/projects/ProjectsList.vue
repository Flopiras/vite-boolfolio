<script>
import ProjectCard from './ProjectCard.vue';

export default {
    components: { ProjectCard },
    data: () => ({ projects: [] })
};
</script>

<template>
    <main>
        <div class="container">
            <!-- cards -->
            <ProjectCard v-for="project in projects" :key="project.id" />
        </div>
    </main>
</template>