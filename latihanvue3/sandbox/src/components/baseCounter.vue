<script>
export default {
  data: () => ({
      count: 10,
      CounterTittle: 'Counter standard',
      incrementAmount: 5,
    }),
    computed: {
        displayTittle() {
        if (this.count > 20) {
            return 'counter - greater than 20'
        } else {
            return 'counter - less than 20'
        }
    },
    optimizedIncrement() {
        return this.displayTittle.length * this.incrementAmount;
    },
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

</template>