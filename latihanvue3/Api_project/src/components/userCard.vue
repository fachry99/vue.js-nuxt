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
  <li class="user-card">
    <router-link :to="`/user/${user.name}`">{{ user.name }}: {{ user.website }}</router-link>
  </li>
</template>

<style module>
.user-card {
  border: 2px solid #222;
  padding: 10px;
}
</style>
// Compare this snippet from Api_project/src/components/userCard.vue:
