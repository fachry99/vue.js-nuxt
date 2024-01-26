import pokedexPageVue from './views/pokedexPage.vue'
import homePage from './views/homePage.vue'

export const routes = [
  { path: '/', component: homePage },
  { path: '/pokodex', component: pokedexPageVue }
]
