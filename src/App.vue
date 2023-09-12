<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader },
};
</script>

<template>
  <!-- header -->
  <AppHeader />

  <main>
    <div class="container mt-4">
      <RouteView />
    </div>
  </main>
</template>

<style></style>