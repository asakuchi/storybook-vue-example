<template>
  <div>
    <button class="color">My Button</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">

  @use "../assets/variables.scss" as *;

  .color {
    color: blue;
    background-color: $my-color;
  }
</style>
