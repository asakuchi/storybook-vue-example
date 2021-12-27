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

  $my-color: aquamarine;

  .color {
    color: blue;
    background-color: $my-color;
  }
</style>
