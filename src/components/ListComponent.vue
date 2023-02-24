<template>
  <div class="wrapper">
    <h3 class="green">{{ msg }}</h3>
    <div>
      <input class="checkbox" type="checkbox" id="c1"> 
      <label for="c1">Some ToDo</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    msg: String
  },
})
</script>


<style lang="scss" scoped>
.checkbox {
  margin-right: 1rem;
}

h3 {
  font-size: 1.2rem;
}
</style>
