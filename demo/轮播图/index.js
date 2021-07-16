const slide = document.querySelector('#slide')
const next = document.querySelector('#right')
const prev = document.querySelector('#left')
const indicator = document.querySelector('#indicator')
const lis = document.querySelectorAll('#indicator li')
let curIndex = 1
let scrolling = false
let timer = null

startTimer()

next.onclick = () => {
  curIndex++
  scroll(-curIndex * 600)
}

prev.onclick = () => {
  curIndex--
  scroll(-curIndex * 600)
}

swiper.onmouseenter = () => {
  stopTimer()
}

swiper.onmouseleave= () => {
  startTimer()
}

indicator.addEventListener('click', (e) => {
  if(e.target.tagName.toLowerCase() == 'li') {    
    curIndex = parseInt(e.target.id)
    setTransform(-curIndex * 600)
    changeIndicator()
  }
})

function scroll(curPosition) {
  scrolling = true
  slide.style.transition = "transform 300ms"
  setTransform(curPosition)
  checkPosition()
  scrolling = false
}

function checkPosition() {
  window.setTimeout(() => {
    slide.style.transition = "0ms"
    if(curIndex >= 6) {
      curIndex = 1
      setTransform(-curIndex * 600)
    } else if(curIndex <= 0) {
      curIndex = 5
      setTransform(-curIndex * 600)
    }
    changeIndicator()
  }, 300)
}

function setTransform(position) {
  slide.style.transform = `translate(${position}px)`
}

function changeIndicator() {
  for(let i = 0; i < lis.length; i++) {
    lis[i].className = ''
  }
  lis[curIndex - 1].className = 'active'
}

function startTimer() {
  timer = window.setInterval(() => {
    curIndex++
    scroll(-curIndex * 600)
  }, 3000)
}

function stopTimer() {
  window.clearInterval(timer)
}