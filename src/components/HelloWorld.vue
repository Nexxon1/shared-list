<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="wrapper">
    <h3 class="green">{{ msg }}</h3>
    <div>
      <input class="checkbox" type="checkbox" id="c1"> 
      <label for="c1">Some ToDo</label>
    </div>
  </div>
</template>

<style scoped>
.checkbox {
  margin-right: 1rem;
}
h3 {
  font-size: 1.2rem;
}
</style>
