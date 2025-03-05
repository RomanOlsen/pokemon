export class Pokemon {
  constructor(d) { //d(ata)
    this.name = d.name
    // this.id = d.
  }
  get HTML() {
    return `
                <li><button onclick="app.pokemonController.setActivePokemon('${this.name}')" class="btn btn-danger text-capitalize mb-1">${this.name}</button></li>

    `
  }
}