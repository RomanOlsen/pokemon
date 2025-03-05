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

    this.stat1 = d.stats[0].base_stat
    this.label1 = d.stats[0].stat.name
    this.stats1 = this.stat1 + ' ' + this.label1

    this.stat2 = d.stats[1].base_stat
    this.label2 = d.stats[1].stat.name
    this.stats2 = this.stat2 + ' ' + this.label2

    this.stat3 = d.stats[2].base_stat
    this.label3 = d.stats[2].stat.name
    this.stats3 = this.stat3 + ' ' + this.label3

    this.stat4 = d.stats[5].base_stat
    this.label4 = d.stats[5].stat.name
    this.stats4 = this.stat4 + ' ' + this.label4

    // this.attack = d.stats[1]
    // this.defense = d.stats[2]
    // this.speed = d.stats[5]
    this.weight = d.weight
    this.height = d.height
    this.image = d.sprites.front_default
  }

  get HTML() { //Overwrites past getter
    return `
          <div class="card">
            <div class="card-header">${this.name}</div>
            <img class="img-fluid" src="${this.image}" alt="picture">
            <div class="my-1 ms-2 fs-2">${this.stats1}</div>
            <div class="my-1 ms-2 fs-2">${this.stats2}</div>
            <div class="my-1 ms-2 fs-2">${this.stats3}</div>
            <div class="my-1 ms-2 fs-2">${this.stats4}</div>
            <div class="my-1 ms-2 fs-2">Weight: ${this.weight}</div>
            <div class="my-1 ms-2 fs-2">Height: ${this.height}</div>

          </div>
        </div>
      </div>
   
`
  }

}

