<script>
export default {
    name: 'ProjectCard',
    props: { project: Object }
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
            <p>{{ project.content }}</p>
        </div>
        <!-- footer -->
        <div class="card-footer">
            <a :href="project.link">Link al progetto</a>
        </div>
    </div>
</template>