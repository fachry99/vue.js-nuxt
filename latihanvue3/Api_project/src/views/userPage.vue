<script setup>
import { defineProps } from 'vue'
import userCard from '../components/userCard.vue'
import { userList } from '../composables/useUserStore'

defineProps({
  title: {
    type: String,
    default: 'Users'
  }
})

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  )
  return response
}

userList.value = await getUser()
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <user-card v-for="user in userList" :user="user" :key="`user-${user.id}`" />
    </ul>
  </main>
</template>
