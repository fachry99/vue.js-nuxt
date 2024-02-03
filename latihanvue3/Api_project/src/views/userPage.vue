<script setup>
import { defineProps } from 'vue'
import userCard from '../components/userCard.vue'
import { useUserStore } from '@/stores/userStore'

defineProps({
  title: {
    type: String,
    default: 'Users'
  }
})

defineEmits(['update-user-List'])

const userStore = useUserStore()

userStore.getUser()
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <user-card v-for="user in userStore.userList" :user="user" :key="`user-${user.id}`" />
    </ul>
  </main>
</template>
