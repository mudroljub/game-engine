import tipke from 'io/tipke'
import * as $ from 'konstante'

let pripremi = false

// zahteva da akter ima implementirane metode
export function proveriTipke(akter) {
  if (tipke[$.A]) akter.nalevo()
  if (tipke[$.D]) akter.nadesno()
  if (tipke[$.W]) akter.nagore()
  if (tipke[$.S]) akter.nadole()
//  if (tipke[$.RAZMAK]) akter.pucaj()
	if (tipke[$.RAZMAK]) {
		pripremi = true
	}	
	if (pripremi && !tipke[$.RAZMAK]) {
		akter.pucaj()
		pripremi = false
	}	
}

export function proveriTipke2(akter) {
  if (tipke[$.LEVO]) akter.nalevo()
  if (tipke[$.DESNO]) akter.nadesno()
  if (tipke[$.GORE]) akter.nagore()
  if (tipke[$.DOLE]) akter.nadole()
  if (tipke[$.M]) akter.pucaj()
}
