import {platno, podloga} from '../io/platno'

let then = 0

export default class Scena {

  constructor() {
    this.predmeti = []
    this.platno = platno
    this.podloga = podloga
    this.nivoTla = this.visina
    this.loopID = null
    this.start()
  }

  dodaj(...premeti) {
    this.predmeti.push(...premeti)
  }

  /* PETLJA */

  proveriUnose() {
    this.predmeti
      .filter(predmet => 'proveriTipke' in predmet)
      .map(predmet => predmet.proveriTipke())
  }

  update(dt) {
    this.predmeti
      .filter(predmet => 'update' in predmet)
      .map(predmet => predmet.update(dt))
  }

  render() {
    this.predmeti
      .filter(predmet => 'render' in predmet)
      .map(predmet => predmet.render())
  }

  loop(time) {
    const now = time / 1000 || 0
    const delta = now - then
    this.loopID = window.requestAnimationFrame(this.loop.bind(this))
    this.proveriUnose()
    this.update(delta)
    if (this.customUpdate) this.customUpdate()
    this.cisti()
    this.render()
    then = now
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

  get ide() {
    return Boolean(this.loopID)
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
}
