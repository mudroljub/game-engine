import {platno, podloga} from '../io/platno'
import {pitagora} from 'utils'

export default class Slika {

  constructor(src, sirina, visina) {
    this.x = Math.round(platno.width / 2)
    this.y = Math.round(platno.height / 2)
    this.ucitano = false
    const slika = this.slika = new Image()
    slika.addEventListener('load', () => {  // radi slika, nece this.slika
      this.sirina = sirina || this.slika.naturalWidth
      this.visina = visina || this.slika.naturalHeight
      this.ucitano = true
    })
    slika.src = src
  }

  get dijagonala() {
    return pitagora(0, this.sirina, 0, this.visina)
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

  skaliranjeObecaj(procenat) {
    if (this.ucitano) this.skaliraj(procenat)
    else this.slika.onload = () => this.skaliraj(procenat)
  }

  // @param atribut string: 'sirina' ili 'visina'
  prevelicaj(atribut, novaVelicina) {
    const razmera = novaVelicina / this[atribut]
    this.skaliraj(razmera)
  }

  prevelicanjeObecaj(atribut, novaVelicina) {
    if (this.ucitano) this.prevelicaj(atribut, novaVelicina)
    else this.slika.onload = () => this.prevelicaj(atribut, novaVelicina)
  }

  /* RENDER */

  render() {
    const x = Math.round(this.x -this.sirina / 2)
    const y = Math.round(this.y -this.visina / 2)
    podloga.drawImage(this.slika, x, y, this.sirina, this.visina)
  }

  renderObecaj() {
    if (this.ucitano) this.render()
    else this.slika.onload = () => this.render()
  }

}
