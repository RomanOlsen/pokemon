import { PokemonController } from "./controllers/PokemonController.js"

class App {

  pokemonController = new PokemonController()
}

window['app'] = new App()


