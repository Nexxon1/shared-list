<script setup lang="ts">
import ListComponent from './components/ListComponent.vue'
</script>

<template>
  <header>
      <h1 class="green">Shared List</h1>
  </header>

  <main>
    <ListComponent msg="Todos" />
  </main>
</template>

<style scoped>

@media (min-width: 1024px) {
  h1 {
    font-size: 2rem;
    margin-top: 2rem;
  }

  header {
    display: flex;
    place-items: center;
  }
}
</style>
