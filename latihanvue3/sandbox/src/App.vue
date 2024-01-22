<script setup>
import useCard from './components/use-card.vue'
import baseCounter from './components/baseCounter.vue'
</script>

<template>
  <baseCounter />
  <useCard :user="{ name: 'fahri', gender: 'men' }" />
</template>
