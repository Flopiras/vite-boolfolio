<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.content.slice(0, 200);
            return abstract + '...';
        }
    },
};
</script>

<template>
    <div class="card my-3">
        <!-- header -->
        <div class="card-header">
            <h2>{{ project.title }}</h2>
        </div>
        <!-- body -->
        <div class="card-body">
            <p>{{ abstract }}</p>
        </div>
        <!-- footer -->
        <div class="card-footer">
            <router-link :to="{ name: 'project-detail', params: { id: project.id } }" class="btn btn-primary">Vedi
            </router-link>
        </div>
    </div>
</template>