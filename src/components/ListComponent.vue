<template>
  <div class="wrapper-list">
    <ToDoItemComponent v-for="(item, index) in items" :item="item" :index="index" :key="index" />
  </div>
</template>

<script lang="ts">
import type { ToDoItem } from '@/domain/ToDoItem'
import ToDoItemComponent from './ToDoItemComponent.vue'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  components: { ToDoItemComponent },
  props: {
    items: {
      required: true,
      type: Array as PropType<ToDoItem[]>
    }
  }
})
</script>

<style lang="scss" scoped></style>
