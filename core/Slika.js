import {platno, podloga} from '../io/platno'

export default class Slika {

  constructor(src, sirina, visina) {
    this.slika = new Image()
    this.slika.src = src
    this.sirina = sirina || this.slika.naturalWidth
    this.visina = visina || this.slika.naturalHeight
    this.x = Math.round(platno.width / 2)
    this.y = Math.round(platno.height / 2)
  }

  zameniSliku(src) {
    this.slika.src = src
  }

  set slikaMrtav(src) {
    this._slikaMrtav = src
  }

  get slikaMrtav() {
    return this._slikaMrtav
  }

  /* VELICINA */

  velicina(sirina, visina) {
    this.sirina = sirina
    this.visina = visina
  }

  skaliraj(procenat) {
    this.sirina = Math.round(this.sirina * procenat)
    this.visina = Math.round(this.visina * procenat)
  }

  prevelicaj(atribut, novaVelicina) {
    const razmera = novaVelicina / this[atribut]
    this.skaliraj(razmera)
  }

  /* RENDER */

  render() {
    const x = Math.round(this.x -this.sirina / 2)
    const y = Math.round(this.y -this.visina / 2)
    podloga.drawImage(this.slika, x, y, this.sirina, this.visina)
  }
}
