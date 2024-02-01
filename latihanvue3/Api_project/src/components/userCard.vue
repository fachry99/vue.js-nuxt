<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <li class="user-card">{{ user.name }}: {{ user.website }}</li>
</template>

<style module>
.user-card {
  border: 2px solid #222;
  padding: 10px;
}
</style>
// Compare this snippet from Api_project/src/components/userCard.vue:
