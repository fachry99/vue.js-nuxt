<script setup>
import baseButton from './baseButton.vue'
import { computed, ref, reactive, defineProps, defineEmits } from 'vue'

const emits = defineEmits(['changeRegion'])

const props = defineProps({
  region: {
    type: String
  }
})
const regionName = ref('Kanto')

const state = reactive({
  elementType: 'Lightning'
})

const regionNameAllCaps = computed(() => {
  return state.elementType.toUpperCase() + ' ' + props.region
})

const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) =>
  response.json()
)
const changeRegionName = () => {
  regionName.value = 'Samsul'
  emits.changeRegion(regionName.value)
}
</script>

<template>
  <h2>{{ regionName }}</h2>
  <base-button>Click me</base-button>
  <h2>{{ regionNameAllCaps }}</h2>
  <button @click="changeRegionName">Change region name</button>
  <pre>{{ pokedex }}</pre>
</template>
