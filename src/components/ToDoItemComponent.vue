<template>
  <div class="wrapper-item">
    <div class="delete-item">Delete</div>
    <div class="move-item">Move</div>
    <label class="text-item" :for="item.id">{{ item.text }}</label>
    <input class="checkbox-item" type="checkbox" :id="item.id" />
  </div>
</template>

<script lang="ts">
import type { ToDoItem } from '@/domain/ToDoItem'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object as PropType<ToDoItem>
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper-item {
  background-color: white;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0px 0.3px 0.9px var(--vt-black), 0px 1.6px 3.6px var(--vt-black);
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  .delete-item {
    margin-right: 1rem;
  }

  .move-item {
    margin-right: 1rem;
  }

  .checkbox-item {
    margin-left: auto;
  }

  .text-item {
    font-size: 1.1rem;
  }

  input[type='checkbox'] {
    transform: scale(1.5);
  }

  .checkbox {
    margin-right: 1rem;
  }
}
</style>
