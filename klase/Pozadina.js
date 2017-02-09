import Slika from '../klase/Slika'
import platno from '../io/platno'

export default class Pozadina extends Slika {

  constructor(slika) {
    super(slika, platno.width, platno.height)
    this.x = platno.width / 2
    this.y = platno.height / 2
  }

}
