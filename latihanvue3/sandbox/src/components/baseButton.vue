<script>
export default {
  props: {
    left: Boolean,
    default: false
  }
}
</script>

<template>
  <button><slot v-if="left">Submit</slot> <slot v-else>cancel</slot></button>
</template>
