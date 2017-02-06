import {platno, podloga} from '../io/platno'

export default class Slika {

  constructor(src, sirina, visina) {
    this.x = platno.width / 2
    this.y = platno.height / 2
    this.ucitano = false
    const slika = this.slika = new Image()
    slika.addEventListener('load', () => {  // radi za zaseban element, nece za atribut
      this.sirina = sirina || this.slika.naturalWidth
      this.visina = visina || this.slika.naturalHeight
      this.ucitano = true
    })
    slika.src = src
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

  prevelicaj(procenat) {
    this.sirina *= procenat
    this.visina *= procenat
  }

  /* RENDER */

  render() {
    podloga.drawImage(this.slika, this.x -this.sirina / 2, this.y -this.visina / 2, this.sirina, this.visina)
  }

  renderAsync() {
    if (this.ucitano) this.render()
    else this.slika.onload = () => this.render()
  }

}
