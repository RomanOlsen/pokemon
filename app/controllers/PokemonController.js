import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonController {
  constructor() {
    this.getPokes()
  }

  async getPokes() {
    try {
      pokemonService.getPokemons()
    } catch (error) {
      console.log('oh boy, theres an error!', error);
      Pop.error(error)
    }
  }

}