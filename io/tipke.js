export const A = 65, B = 66, C = 67, D = 68, E = 69, F = 70, G = 71, H = 72,
  I = 73, J = 74, K = 75, L = 76, M = 77, N = 78, O = 79, P = 80, Q = 81,
  R = 82, S = 83, T = 84, U = 85, V = 86, W = 87, X = 88, Y = 89, Z = 90,
  LEVO = 37, DESNO = 39, GORE = 38, DOLE = 40, RAZMAK = 32, SPEJS = 32,
  ENTER = 13, IZLAZ = 27, PGUP = 33, PGDOWN = 34, HOME = 36, END = 35,
  BR_0 = 48, BR_1 = 49, BR_2 = 50, BR_3 = 51, BR_4 = 52, BR_5 = 53, BR_6 = 54, BR_7 = 55, BR_8 = 56, BR_9 = 57

const tipke = []

/* FUNCTIONS */

const neTresi = e => {
  if (e.keyCode === RAZMAK || e.keyCode === GORE || e.keyCode === DOLE) e.preventDefault()
}

const odluciKomandu = dodir => {
  if (dodir.pageY < window.innerHeight / 2) tipke[GORE] = true
  if (dodir.pageY >= window.innerHeight / 2) tipke[DOLE] = true
  if (dodir.pageX < window.innerWidth / 2) tipke[LEVO] = true
  if (dodir.pageX >= window.innerWidth / 2) tipke[DESNO] = true
}

/* EVENTS */

document.addEventListener('keydown', neTresi)
document.addEventListener('keydown', e => tipke[e.keyCode] = true)
document.addEventListener('keyup', e => tipke[e.keyCode] = false)

document.addEventListener('touchstart', e => odluciKomandu(e.touches[0]))
document.addEventListener('touchmove', e => odluciKomandu(e.touches[0]))

export default tipke
