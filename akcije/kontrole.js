import tipke from 'io/tipke'
import * as $ from 'konstante'

// zahteva da akter ima implementirane metode
export function proveriTipke(akter) {
  if (tipke.stisnute[$.A]) akter.nalevo()
  if (tipke.stisnute[$.D]) akter.nadesno()
  if (tipke.stisnute[$.W]) akter.nagore()
  if (tipke.stisnute[$.S]) akter.nadole()
  if (tipke.stisnute[$.RAZMAK]) akter.pucaj()
}

export function proveriTipke2(akter) {
  if (tipke.stisnute[$.LEVO]) akter.nalevo()
  if (tipke.stisnute[$.DESNO]) akter.nadesno()
  if (tipke.stisnute[$.GORE]) akter.nagore()
  if (tipke.stisnute[$.DOLE]) akter.nadole()
  if (tipke.stisnute[$.M]) akter.pucaj()
}
