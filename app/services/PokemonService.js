import { AppState } from "../AppState.js";
import { ActivePokemon, Pokemon } from "../models/Pokemon.js";
import { api, pokeApi } from "../utils/Axios.js"

class PokemonService {


  async getPokemons() {
    const response = await pokeApi.get('pokemon')
    console.log('heres the list from pokeAPI', response.data);
    // let list = AppState.pokemons  // this does not work
    let pokemonList = response.data.results.map(pojo => new Pokemon(pojo))
    AppState.pokemons = pokemonList
  }
  async setActivePokemon(pokeName) {
    const response = await pokeApi.get(`pokemon/${pokeName}`)
    // AppState.pokemons.find()
    AppState.activePokemon = new ActivePokemon(response.data) // remember .data !!!
    console.log(response);

  }

  async postPokemon() {
    const response = await api.post('')
  }

}

export const pokemonService = new PokemonService()