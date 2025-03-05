export class Pokemon {
  constructor(d) { //d(ata)
    this.name = d.name
    // this.img = d.img
    // this.id = d.
  }
  get HTML() {
    return `
                <li><button onclick="app.pokemonController.setActivePokemon('${this.name}')" class="btn btn-danger text-capitalize mb-1">${this.name}</button></li>

    `
  }
}
// ANCHOR active pokemon
export class ActivePokemon extends Pokemon {
  constructor(d) {
    super(d)
    this.health = d.stats[0].base_stat
    this.healthLabel = this.health.name

    this.attack = d.stats[1]
    this.defense = d.stats[2]
    this.speed = d.stats[5]
    this.weight = d.weight
    this.height = d.height
    this.image = d.sprites.front_default
  }

  get HTML() { //Overwrites past getter
    return `
          <div class="card">
            <div class="card-header">${this.name}</div>
            <img class="img-fluid" src="${this.image}" alt="picture">
            <div class="my-1 ms-2 fs-2">${this.health} ${this.healthLabel}hp</div>
            <div class="my-1 ms-2 fs-2">${this.attack}</div>
            <div class="my-1 ms-2 fs-2">${this.defense}</div>
            <div class="my-1 ms-2 fs-2">${this.speed}</div>
            <div class="my-1 ms-2 fs-2">${this.weight}</div>
            <div class="my-1 ms-2 fs-2">${this.height}</div>

          </div>
        </div>
      </div>
   
`
  }

}

