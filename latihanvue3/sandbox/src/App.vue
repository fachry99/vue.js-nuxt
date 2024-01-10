<script>
import baseCounter from './components/baseCounter.vue'
import useCard from './components/use-card.vue'
export default {
  components: {
    baseCounter,
    useCard
  },
  data() {
    return {
      message: 'Hello it works',
      listofitems: ['item1', 'item2', 'item3'],
      userData: {
        name: 'John Doe',
        gender: 'male',
        favoriteColor: 'blue',
        favotiteNumber: [10, 9]
      }
    }
  },
  computed: {
    refineUserData() {
      return {
        name: this.userData.name,
        gender: this.userData.gender
      }
    }
  },
  methods: {
    changeName() {
      this.userData.name = 'fachry'
    }
  }
}
</script>

<template>
  <useCard :user="refineUserData" @change-name="changeName" />
  <baseCounter />
  <hr />
  <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
  <p v-else>odd: {{ message.toLowerCase() }}</p>
  <ul v-for="item in listofitems" :key="item">
    <li>{{ item }}</li>
  </ul>
</template>
