<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';

export default {

  components: { AppHeader, ProjectsList },

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
  <!-- header -->
  <AppHeader />

  <!-- main -->
  <ProjectsList :projects="projects.data" />

  <!-- pagination -->
  <div class="d-flex justify-content-center mb-4">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="[{ active: link.active }, { disabled: !link.url }]" v-for="link in projects.links"
          :key="link.label">
          <button @click="fetchProjects(link.url)" class="page-link" v-html="link.label"></button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style></style>