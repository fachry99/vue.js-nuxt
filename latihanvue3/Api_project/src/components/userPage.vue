<script setup>
import { reactive } from 'vue'
import userCard from './userCard.vue'

defineProps({
  title: {
    type: String,
    default: 'Users'
  }
})

const state = reactive({
  userList: []
})

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  )
  return response
}

state.userList = await getUser()
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <user-card v-for="user in state.userList" :user="user" :key="`user-${user.id}`" />
    </ul>
  </main>
</template>
