<script>
export default {
  data: () => ({
    favoriteList: []
  })
}
</script>

<template>
  <h3>favorite Character</h3>
  <p v-if="favoriteList.length === 0">there no favorite character</p>
  <ul v-if="favoriteList.length > 0">
    <li v-for="(character, index) in favoriteList" :key="`odd-character-${index}`">
      {{ character }}
    </li>
  </ul>
  <p v-else>no favorite character</p>
</template>
