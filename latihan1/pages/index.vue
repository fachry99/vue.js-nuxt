<script setup>
const respone = await $fetch("/api/hello");

console.log(respone);
</script>

<template>
  <div><ContentDoc /></div>
</template>
