<script>
export default {
  props: {
    characterList: {
      type: Array,
      required: true
    }
  },
  computed: {
    benderStatistic() {
      const statistic = {}
      this.characterList.forEach((character) => {
        character.element.forEach((element) => {
          if (statistic[element]) {
            statistic[element]++
          } else {
            statistic[element] = 1
          }
        })
      })
      return statistic
    }
  }
}
</script>

<template>
  <h2>statistic</h2>
  <ul>
    <li>{{ benderStatistic }}</li>
    <li v-for="(stat, type) in benderStatistic" :key="`bender-${stat}-${type}`">
      {{ type }}: {{ stat }}
    </li>
  </ul>
</template>
