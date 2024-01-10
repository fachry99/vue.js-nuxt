<script>
export default {
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
  <p>gender: {{ user.gender }}</p>
  <button @click="$emit('change-name')">Change Name</button>
</template>
