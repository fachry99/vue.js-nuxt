<script>
export default {
  data: () => ({
    pokedex: [1, 2, 3]
  }),
  methods: {
    async fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json()
      this.pokedex = data.results
    }
  },
  mounted() {
    this.fetchPokemon()
  }
}
</script>

<template>
  <h1>New App</h1>
  <pre>{{ pokedex }}</pre>
  <button @click="fetchPokemon">fetchPokemon</button>
</template>
