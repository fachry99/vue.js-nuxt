<script>
import baseCounter from './components/baseCounter.vue';
export default {
  components: {
    baseCounter,
  },
  data() {
    return {
      message: 'Hello it works',
      listofitems: ['item1', 'item2', 'item3']
    }
  },
};
</script>

<template>
  <baseCounter/>
  <hr />
  <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
  <p v-else>odd: {{ message.toLowerCase() }}</p>
  <ul v-for="item in listofitems" :key="item">
    <li>{{ item }}</li>
  </ul>
</template>
