<script>
import { newCount } from '../composables/countStore.js'
export default {
  setup() {
    return {
      newCount
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  emits: ['change-name']
}
</script>
<template>
  <p>User: {{ user.name }}</p>
  <p>newCount: {{ newCount }}</p>
  <p>gender: {{ user.gender }}</p>
  <button @click="$emit('change-name')">Change Name</button>
</template>
