import {randomRange} from '../utils'
import {platno} from '../io/platno'

/* AKCIJE RANDOM */

export function postaviRandom(predmet) {
  predmet.polozaj(Math.random() * platno.width, Math.random() * platno.height)
}

export function randomX(predmet, pocetnoX = predmet.sirina/2, zavrsnoX = platno.width - predmet.sirina/2) {
  predmet.x = randomRange(pocetnoX, zavrsnoX)
}

export function randomY(predmet, pocetnoY = predmet.visina/2, zavrsnoY = platno.height - predmet.visina/2) {
  predmet.y = randomRange(pocetnoY, zavrsnoY)
}

export function postaviRandomUredno(predmet) { // ne viri sa platna
  predmet.randomX()
  predmet.randomY()
}
