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
      <RouterView />
    </div>
  </main>
</template>

<style></style>