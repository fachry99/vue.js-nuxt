<script setup>
import useCard from './components/use-card.vue'
import baseCounter from './components/baseCounter.vue'
</script>

<template>
  <nav><router-link to="/">Home</router-link> <router-link to="/pokodex">pokodex</router-link></nav>
  <router-view />
  <baseCounter />
  <useCard :user="{ name: 'fahri', gender: 'men' }" />
</template>
