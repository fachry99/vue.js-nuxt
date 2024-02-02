import pokedexPageVue from './views/pokedexPage.vue'
import homePage from './views/homePage.vue'
import pokemonPage from './views/pokemonPage.vue'
export const routes = [
  { path: '/', component: homePage },
  { path: '/pokedex', component: pokedexPageVue },
  { path: '/pokedex/:id', component: pokemonPage }
]
