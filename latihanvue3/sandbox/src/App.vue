<script>
export default {
  data() {
    return {
      count: 10,
      CounterTittle: 'Counter standard',
      incrementAmount: 5,
      message: 'Hello it works',
      listofitems: ['item1', 'item2', 'item3']
    }
  },
  computed: {
    displayTittle() {
      if (this.count > 20) {
        return 'counter - greater than 20'
      } else {
        return 'counter - less than 20'
      }
    }
  },
  methods: {
    incrementCount(newAmount, event) {
      console.log(event)
      console.log(newAmount)
      this.count += this.incrementAmount
    }
  },
  watch: {
    count(newValue) {
      if (newValue > 20) {
        this.CounterTittle += 'greater than 20'
      }
    }
  }
}
</script>

<template>
  <h1>{{ displayTittle }}</h1>
  <p :data-increment-by="incrementAmount">{{ count }}</p>
  <button @click="incrementCount">Increment</button>
  <h1>{{ incrementAmount }}</h1>
  <div>
    <label for="incrementAmount">increment by:</label>
    <input type="number" v-model.number="incrementAmount" />
  </div>

  <hr />

  <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
  <p v-else>odd: {{ message.toLowerCase() }}</p>
  <ul v-for="item in listofitems" :key="item">
    <li>{{ item }}</li>
  </ul>
</template>
