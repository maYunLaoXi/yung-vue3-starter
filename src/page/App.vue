<template>
  <div class="yung">
    <h1>yung {{ name }} example</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const name = ref('page')
    return {
      name
    }
  },
})
</script>
<style scoped>
h1{
  text-align: center;
}
</style>
