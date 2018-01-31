$(start)

const spinnerArr = [
  'Try the Facebook Frame',
  'Make a green heart',
  'Wear a green heart',
  'Share a green heart',
  'Send your MP a green heart',
  'Share the film', 'Notice signs of spring around you',
  'Find a green heart event near you',
  'Think about how you travel and whether you can cycle, walk, or take public transportation more',
  'Eat less meat and more seasonal foods',
  'Think about energy waste in your home',
  `Take a picture with your sports club, book club, or crafting group to show us how you're showing the love`,
  'Share what you love',
  'Leave a message for your MP'
]

const audio = new Audio('click.wav')

function start () {
  console.log('start')
  let startButton = document.getElementById('spinButton')
  startButton.addEventListener('click', activate)
};

function activate () {
  console.log('click')
  spin()
  onClick()
}

function spin () {
  let randomNumberSpin = randomNum(0, 13)
  // const spin1 = document.getElementById('spin1')
  setDeceleratingTimeout(function (c, className) { $('#spin1').html(`<p class=${className}>${spinnerArr[c]}</p>`) }, 5, (50 + randomNumberSpin))
  // $('#spin1').html(`<h1>${spinnerArr[randomNumberSpin]}</h1>`)
}
// thanks to: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#7228322
function randomNum (min, max) {
  console.log(max)
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(randomNumber)
  return randomNumber
}
// thanks to: https://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running
function setDeceleratingTimeout (callback, factor, times) {
  let c = 0
  let internalCallback = function (tick, counter) {
    return function () {
      if (--tick >= 0) {
        window.setTimeout(internalCallback, ++counter * factor)
        callback(c)
        audio.currentTime = 0
        audio.play()
        c++
        if (c === 14) c = 0
      }
      if (tick === 0) {
        callback(c, 'done')
        const container = document.getElementById('container')
        $('#container').fadeIn(1000)
        //     let cssContainer = 'visibility: visible;'
        // container.setAttribute(
        //   'style', cssContainer
        // )
      }
    }
  }(times, 0)
  window.setTimeout(internalCallback, factor)
}

let deg = 0
let totDegrees = 0
let count = 0
const degreeArray = [25.71, 51.42, 77.14, 102.85, 128.57, 154.28, 180, 205.71, 231.42, 257.14, 282.85, 308.57, 334.28, 360]

function onClick () {
  console.log('here')
  const wheel = document.getElementById('rainbow-wheel')

  wheel.removeAttribute('style')

  deg = 4000

  var css = '-webkit-transform: rotate(' + deg + 'deg);'

  wheel.setAttribute(
    'style', css
  )
}
