import {unutar} from 'akcije/sudari'
import zvukPucnja from 'zvuci/pucanj.wav'

const mish = {
  stisnut: false,

  iznad(predmet) {
    return unutar(mish, predmet)
  },

  stisnutIznad(predmet) {
    return mish.stisnut && mish.iznad(predmet)
  },

  dodajNishan() {
    mish.pucanj = new Audio(zvukPucnja)
    document.body.addEventListener('click', mish.pucaj)
    document.body.setAttribute('style', 'cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABhCAMAAAAa74SSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAF1QTFRFSkpKISEh7+/vCAgIpaWlEBAQGRkZMzMzKSkptbW1ra2tWlpa5ubm1tbWQkJCc3Nze3t7ZmZmUlJSmZmZhISE3t7excXFOjo6vb29zMzMjIyMa2trlJSUAAAA////c5NlVAAAAB90Uk5T////////////////////////////////////////AM0ZdhAAAAQySURBVHja7JrXlqQgEEBRJJlza6f//8ydbTATpZ2HPVtPPWeUC1VQVBC8XYTFjLE4dnrnDZyexq+PZBciAo7orkek1yPC6xHv/witdD3iiCgLv4/o2yQnWBBeCAW3uojC7yH6imL4OggKwD38BiIrqWT4SXDNfBFDgl8Gud19EJ0Z8COQPE8jih0ATebGaKs7CMZTiIFshid1yzrBHMemyoM1BpcnEOVqCQjc+8PR6+KKriAgc0XUyxyDR6Y63dFt9VjshOgWJdFS60BYjua13h0Q/UzAj9Dko6LbbPWHNWIIppfy3sYNFkjLkCCyiYAKyyuJTauGhRUinZ4PIutbL6w19jgi8snOmcvFWomthSMz4jG5ns7t7i6RamZ7RCNmQzrX8KAUbwIDIg3UWjJFIJOuSj0iERodzgQ5wuZ41CEirlDYnoqjQrEXax1CHNTkZKg28BmiSI14CkOEZ6PBBzdHrkbwhcL7+YBTjBCpEI1sDm6Ip2QIcLAEZD5hM+Bj9HKEMBbwiszZcVOtBqz4doj9gn+uikCO4Ka6eeYXLddUI0MwrqfCE9EF+6MFdng8+mZJ3AeRUILge4F45xf3z75FgwTBX6+8ESkPwJ5HRAZNh8I2S6K7uc6ImG9Zq9R+1IfJu+M1/yq5B9S/LC4dqi1RtLuRwPbgAfP0jOdz/EwErxBR00QxY1yDhA1/6yjRXuI4ZskqSKaN6ik2iEu8HVj8M3bzBunrYklBCK8lwF9AhP8I4hfM/a7BR/jBxUAt68wO5ernRDR143/VIdj64FpzpMJgWX2pqzfArSuaEYXZl/cTA2r9MQ9kgiMisnCDoXCD0dt8J+USZ87nN/o7c7K7WcFuhqU3QgzUSm693BQKWiJ4dL/yxQuC2zsIvxMe0FSCiKA2tbBFhHR/8Sw/O2q+lCwQYqalNBrkeRTu/RBcTziTIkQWVnkhRnTYNeAQneDMB1Efc5g1gu8p3TKMCLEIqkphxKFB/XmEqG60ylxPLCM/jbgjST66QaTU4KoNiKnMVGry7lZfPDAhRCxHtAUKkdvT9AyigLLMfo8QqZLqjGsR4lwdag/7sYTFFTUKHaLBitoDUBXVEkfEtIZjRH1AdFOgUTshGqQMHI5KZ1MlO0/tES1SLx6ol/wisS0igRr1Ao1aX6iyQiw9gpt1QTuaq/6EGe/utJqr5iC1L8svDLRpFh0RYbnEiIlTc6Gnq+ZFrESkj+U5WDj2L1KwJAWIFp0MEYFVGyVo3Bs96zbMC5Iqzua8O32nfZtv/q9uwujaVT3YZjeIkqkUTXaNrKA923R7UqsUClWdR+uwJUYITjqv7uTPXbk0i2RCHqNpBIs2bl+olhIkjcVnCHbN6Kyt6aYlCRG+FczqXZeW+tBMfankHjt8CvL/84YrEb/wqcmVH8zg6z/7AeQjbqv4I8AAaIQJ4m79R7UAAAAASUVORK5CYII=) 50 50, crosshair')
  },

  ukloniNishan() {
    mish.pucanj = null
    document.body.removeEventListener('click', mish.pucaj)
    document.body.setAttribute('style', 'cursor:auto')
  },

  pucaj() {
    if (mish.pucanj.currentTime !== 0) mish.pucanj.currentTime = 0
    mish.pucanj.play()
  }
}

document.onmousemove = e => {
  mish.x = e.pageX
  mish.y = e.pageY
}
document.onmousedown = () => mish.stisnut = true
document.onmouseup = () => mish.stisnut = false

export default mish
