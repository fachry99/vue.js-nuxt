<script>
import { computed, ref, reactive } from 'vue'
export default {
  async setup() {
    const regionName = ref('Kanto')
    const state = reactive({
      elementType: 'siapa, ya?'
    })

    console.log(state.elementType)

    const regionNameAllCaps = computed(() => regionName.value.toUpperCase())

    const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) =>
      response.json()
    )
    const changeRegionName = () => {
      regionName.value = 'Samsul'
    }

    return {
      pokedex,
      regionName,
      regionNameAllCaps,
      changeRegionName
    }
  }
}
</script>

<template>
  <h2>{{ regionName }}</h2>
  <h2>{{ regionNameAllCaps }}</h2>
  <h2>{{ regionNameLowerCase }}</h2>
  <button @click="changeRegionName">Change region name</button>
  <pre>{{ pokedex }}</pre>
</template>
