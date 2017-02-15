const platno = document.getElementById('platno') || document.createElement('canvas')
const podloga = platno.getContext('2d')
const dijagonalaPlatna = Math.sqrt(platno.height * platno.height + platno.width * platno.width)

if (!document.getElementById('platno')) {
  document.body.appendChild(platno)
  platno.id = 'platno'
}

platno.height = window.innerHeight || 600 // mora prvo visina
platno.width = document.body.clientWidth || 800
platno.style.backgroundColor = 'lightgray'
platno.focus()

/** FUNKCIJE **/

const sakrijPlatno = () => {
  platno.style.display = 'none'
}

const pokaziPlatno = () => {
  platno.style.display = 'block'
}

const ograniciVisinu = () => {
  if (platno.height > platno.width) platno.height = platno.width * 0.8
}

/** EXPORT **/

export {platno, podloga, sakrijPlatno, pokaziPlatno, ograniciVisinu, dijagonalaPlatna}
export default platno
