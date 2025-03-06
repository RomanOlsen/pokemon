import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonController {
  constructor() {
    AppState.on('pokemons', this.drawPokeList)
    AppState.on('activePokemon', this.drawActivePokemon)
    // OBSERVERS ^
    this.getPokes()
  }

  drawActivePokemon() {
    document.getElementById('activePoke').innerHTML = AppState.activePokemon.HTML
  }

  async getPokes() {
    try {
      await pokemonService.getPokemons()
    } catch (error) {
      console.log('oh boy, theres an error!', error);
      Pop.error(error)
    }
  }

  drawPokeList() {
    let content = ''
    const pokeList = AppState.pokemons.forEach(pokemon => content += pokemon.HTML)
    document.getElementById('pokeList').innerHTML = content

  }

  setActivePokemon(pokeName) {
    console.log('setting', pokeName);
    pokemonService.setActivePokemon(pokeName)

  }

  addMyPoke() {
    console.log('adding!');
    Pop.toast('Adding', AppState.activePokemon.name)

  }


}