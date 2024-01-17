<script>
export default {
  props: {
    left: Boolean,
    default: true
  }
}
</script>

<template>
  <button><slot v-if="left">Submit</slot> <slot v-else>cancel</slot></button>
</template>
