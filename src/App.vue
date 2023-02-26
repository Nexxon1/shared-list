<template>
  <header>
    <h1 class="green">Shared List</h1>
  </header>

  <main>
    <ListComponent :items="sortedItems" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListComponent from './components/ListComponent.vue'
import type { ToDoItem } from './domain/ToDoItem'

export default defineComponent({
  components: { ListComponent },
  data() {
    return {
      items: [
        { id: 'first', text: 'My first Item', isDone: false, position: 1 },
        { id: 'second', text: 'My third item', isDone: false, position: 3 },
        { id: 'third', text: 'My second item', isDone: true, position: 2 }
      ] as ToDoItem[]
    }
  },
  computed: {
    sortedItems(): ToDoItem[] {
      const copiedItems = [...this.items]
      return copiedItems.sort((itemA, itemB) => itemA.position - itemB.position)
    }
  }
})
</script>

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
