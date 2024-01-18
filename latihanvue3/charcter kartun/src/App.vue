<script>
import baseLayout from './components/baseLayout.vue'
import favoriteCharacter from './components/favoriteCharacter.vue'
import characterCard from './components/characterCard.vue'
import BenderStatistics from './components/BenderStatistics.vue'
export default {
  components: {
    baseLayout,
    favoriteCharacter,
    characterCard,
    BenderStatistics
  },
  data: () => ({
    newCharacter: {
      name: '',
      element: []
    },
    characterList: [
      { name: 'naruto', element: ['earth'] },
      { name: 'sasuke', element: ['fire'] },
      { name: 'sakura', element: ['water'] },
      { name: 'kakashi', element: ['lightning'] },
      { name: 'gaara', element: ['earth'] }
    ]
  }),
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter)
      this.newCharacter = {
        name: '',
        element: []
      }
    },
    addFavoriteCharacter(payload) {
      this.favoriteList.push(payload)
    }
  }
}
</script>

<template>
  <h1>exercise 3</h1>

  <baseLayout>
    <template #one>
      <h3>New Character</h3>
      <p>{{ newCharacter }}</p>
      <label for="characterName">name: </label>
      <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter" />
      <br />
      <label for="characterElement">element: </label>
      <select v-model="newCharacter.element" @keyup.enter="addNewCharacter">
        <option value="earth">earth</option>
        <option value="fire">fire</option>
        <option value="water">water</option>
        <option value="lightning">lightning</option>
      </select>
      <br />
      <button @click="addNewCharacter">Submit</button>

      <p>
        <span v-for="(character, index) in characterList" :key="`comma-list-character-${index}`"
          >{{ character.name }}{{ index === characterList.length - 1 ? '' : ', ' }}
        </span>
      </p>
      <p v-if="characterList.length % 2 !== 0">there are odd character</p>
      <p v-else>there are even character</p></template
    >
  </baseLayout>
  <BenderStatistics :characterList="characterList" />

  <!-- character list -->
  <h3>character list</h3>
  <ul>
    <li v-for="(character, index) in characterList" :key="`character-${index}`">
      <character-card :character="character" @favorite-character="addFavoriteCharacter" />
    </li>
  </ul>

  <!-- favorite character -->
  <favorite-character />
  <!-- new character -->
</template>
