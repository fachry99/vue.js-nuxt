<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <h1>pokemon page #{{ route.params.id }}</h1>
</template>
