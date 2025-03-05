import { AppState } from "../AppState.js";
import { pokeApi } from "../utils/Axios.js"

class PokemonService {


  async getPokemons() {
    const response = await pokeApi.get('pokemon')
    console.log('heres the list from pokeAPI', response.data);
    const list = AppState.pokemons
    response.data = list
  }
}

export const pokemonService = new PokemonService()