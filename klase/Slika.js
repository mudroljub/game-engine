import {platno, podloga} from '../io/platno'
import {pitagora} from 'utils'

export default class Slika {

  constructor(src, sirina, visina) {
    this.x = Math.round(platno.width / 2)
    this.y = Math.round(platno.height / 2)
    this.z = 1
    this.ucitano = false
    this.slika = new Image()
    this.slikaMrtav = new Image()
    this.slika.addEventListener('load', () => {
      this.sirina = sirina || this.slika.naturalWidth
      this.visina = visina || this.slika.naturalHeight
      this.ucitano = true
    })
    this.slika.src = this.slikaMrtav.src = src
  }

  get dijagonala() {
    return pitagora(0, this.sirina, 0, this.visina)
  }

  postaviSliku(src) {
    this.slika.src = src
  }

  /* VELICINA */

  velicina(sirina, visina) {
    this.sirina = sirina
    this.visina = visina
  }

  skaliraj(procenat) {
    this.sirina = Math.round(this.slika.naturalWidth * procenat)
    this.visina = Math.round(this.slika.naturalHeight * procenat)
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
    const x = Math.round(this.x - this.sirina / 2)
    const y = Math.round(this.y - this.visina / 2)
    podloga.drawImage(this.slika, x, y, this.sirina, this.visina)
  }

  renderObecaj() {
    if (this.ucitano) this.render()
    else this.slika.onload = () => this.render()
  }

}
