<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.content.slice(0, 200);
            return abstract + '...';
        }
    }
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
            <a :href="project.link">Link al progetto</a>
        </div>
    </div>
</template>