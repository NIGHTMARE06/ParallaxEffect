const iphone = document.getElementById('iphone')
const mask = document.getElementById('mask')
var position

window.addEventListener('scroll', (e) => {
  position = 54 + window.scrollY
  mask.style.backgroundPosition = `-${position}px`
  iphone.style.transform = `rotate(-${position*0.01}deg)`
})
