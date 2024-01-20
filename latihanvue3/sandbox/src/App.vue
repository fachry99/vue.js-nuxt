<script>
import pokedex from './components/pokedex.vue'

export default {
  components: {
    pokedex
  }
}
</script>

<template>
  <h1>New App</h1>
  <Suspense>
    <pokedex />

    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>
