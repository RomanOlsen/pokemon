export class Pokemon {
  constructor(d) { //d(ata)
    this.name = d.name
  }
  get HTML() {
    return `
                <li><button class="btn btn-danger">${this.name}</button></li>

    `
  }
}