import Slika from './Slika'
import {platno, podloga} from '../io/platno'
import mish from '../io/mish'
import {pitagora} from '../utils'
import {sudara} from '../akcije/sudari'

export default class Predmet extends Slika {

  constructor(src, sirina, visina) {
    super(src, sirina, visina)
    this.dx = 0
    this.dy = 0
    this.ugao = 0
    this.brzina = 0
    this.ziv = true
    this.vidljiv = true
    this.oznake = {}
  }

  update(delta) {
    this.x += this.dx * delta
    this.y += this.dy * delta
    this.proveriGranice()
  }

  /* POLOZAJ */

  tlo(y) {
    this.y = y - this.visina / 2
  }

  polozaj(x, y) {
    this.x = x
    this.y = y
  }

  /* KRETANJE */

  azurirajSilu(jacina = this.brzina, ugao = this.ugao) {
    this.dx = jacina * Math.cos(ugao)
    this.dy = jacina * Math.sin(ugao)
  }

  dodajSilu(jacina, ugao = this.ugao) {
    this.dx += jacina * Math.cos(ugao)
    this.dy += jacina * Math.sin(ugao)
  }

  get brzina() {
    return Math.sqrt(this.dx * this.dx + this.dy * this.dy)
  }

  set brzina(novaBrzina) {
    this.azurirajSilu(novaBrzina, this.ugao)
  }

  trenje(koeficijent = 0.1) {
    const modifikator = 1 - koeficijent
    this.dx *= modifikator
    this.dy *= modifikator
  }

  pomeri(razmak) {
    this.x += razmak * Math.cos(this.ugao)
    this.y += razmak * Math.sin(this.ugao)
  }

  stani() {
    this.brzina = 0
  }

  /* UGLOVI */

  get ugao() {
    return this._ugao
    // return Math.atan2(this.dy, this.dx)
  }

  set ugao(noviUgao) {
    this._ugao = noviUgao % (Math.PI * 2)
    this.azurirajSilu()
  }

  ugaoKa(predmet) {
    const mojX = this.x + this.sirina / 2
    const mojY = this.y + this.visina / 2
    const tudjX = predmet.x + predmet.sirina / 2
    const tudjY = predmet.y + predmet.visina / 2
    return Math.atan2(tudjY - mojY, tudjX - mojX)
  }

  /* VIDLJIVOST */

  pokazi() {
    this.vidljiv = true
  }

  sakrij() {
    this.vidljiv = false
  }

  nestani() {
    this.sakrij()
    this.stani()
  }

  /* STANJE */

  get mrtav() {
    return !this.ziv
  }

  umri() {
    this.stani()
    this.zameniSliku(this.slikaMrtav)
    this.ziv = false
  }

  /* GRANICE */

  proveriGranice() {
    if (this.granice) this.granice(this)
  }

  /* KOLIZIJA */

  sudara(predmet) {
    if (!this.vidljiv || !predmet.vidljiv) return false
    return sudara(this, predmet)
  }

  razmakDo(predmet) {
    return pitagora(this.x, predmet.x, this.y, predmet.y)
  }

  /* MISH */

  pratiMisha() {
    this.x = mish.x - platno.offsetLeft
    this.y = mish.y - platno.offsetTop
  }

  /* RENDER */

  render() {
    if (!this.vidljiv) return
    podloga.save()
    podloga.translate(this.x, this.y)
    podloga.rotate(this.ugaoSlike || this.ugao)
    podloga.scale(this.z, this.z)
    podloga.drawImage(this.slika, -this.sirina / 2, -this.visina / 2, this.sirina, this.visina)
    podloga.restore()
  }
}
