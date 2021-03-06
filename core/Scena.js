import {platno, podloga} from '../io/platno'

export default class Scena {

  constructor() {
    this.predmeti = []
    this.platno = platno
    this.podloga = podloga
    this.nivoTla = this.visina
    this.loopID = null
  }

  dodaj(...premeti) {
    this.predmeti.push(...premeti)
  }

  /* VELIČINA */

  set sirina(sirina) {
    this.platno.width = sirina
  }

  get sirina() {
    return this.platno.width
  }

  set visina(visina) {
    this.platno.height = visina
  }

  get visina() {
    return this.platno.height
  }

  velicina(sirina, visina) {
    this.sirina = sirina
    this.visina = visina
  }

  /* PETLJA */

  update() {
    this.predmeti.map(predmet => 'update' in predmet && predmet.update())
  }

  render() {
    this.predmeti.map(predmet => 'render' in predmet && predmet.render())
  }

  loop() {
    this.loopID = window.requestAnimationFrame(this.loop.bind(this))
    this.cisti()
    this.update()
    this.render()
  }

  start() {
    if (this.loopID) return
    this.loop()
  }

  stop() {
    if (!this.loopID) return
    window.cancelAnimationFrame(this.loopID)
    this.loopID = null
  }

  end() {
    this.stop()
    this.cisti()
    this.predmeti = []
  }

  /* POZADINA */

  set bojaPozadine(boja) {
    // this.platno.style.backgroundColor = boja
    this.podloga.fillStyle = boja
  }

  get bojaPozadine() {
    return this.podloga.fillStyle
  }

  cisti() {
    this.podloga.clearRect(0, 0, this.sirina, this.visina)
  }

  /* CRTANJE (prebaciti na pozadinu) */

  crtaNebo(nivoTla, bojaNeba = 'blue', bojaNebaPreliv = 'lightblue', pocetakPreliva = 0) {
    this.podloga.fillStyle = bojaNeba
    if (bojaNebaPreliv) {
      const preliv = this.podloga.createLinearGradient(0, pocetakPreliva, 0, nivoTla)
      preliv.addColorStop(0, bojaNeba)
      preliv.addColorStop(1, bojaNebaPreliv)
      this.podloga.fillStyle = preliv
    }
    this.podloga.fillRect(0, 0, this.platno.width, nivoTla)
  }

  crtaZemlju(nivoTla, bojaZemlje = '#00b011') {
    this.podloga.fillStyle = bojaZemlje
    this.podloga.fillRect(0, nivoTla, this.platno.width, this.platno.height)
  }

  crtaNeboZemlju(nivoTla, bojaNeba = 'lightblue', bojaZemlje = 'green', bojaNebaPreliv = 'blue') {
    this.crtaNebo(nivoTla, bojaNeba, bojaNebaPreliv)
    this.crtaZemlju(nivoTla, bojaZemlje)
  }
}
