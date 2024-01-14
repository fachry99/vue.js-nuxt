<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  emits: ['favorite-character'],
  methods: {
    favoriteCharacter() {
      this.$emit('favorite-character', this.character)
    }
  }
}
</script>

<template>
  <div>
    <p>{{ character.name }}</p>
    <button @click="favoriteCharacter">favorite ✨</button>
  </div>
</template>
