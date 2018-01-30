$(start)

// const spinnerArr1 = ['run a marathon', 'cycle to brighton', 'swim 750 meters', 'dance']
// const spinnerArr2 = ['with a burrito', 'with pink hair', 'in giant sunglasses', 'with face painted as a lion']
// const spinnerArr3 = ['if you raise £1000', 'if you raise £750', 'if you raise £500', 'if you raise £300']
//
// const audio = new Audio('click.wav')
//
// function start () {
//   let startButton = document.getElementById('spinButton')
//   startButton.addEventListener('click', spin)
// };
//
// function spin () {
//   console.log('spin')
//   const spin1 = document.getElementById('spin1')
//   const spin2 = document.getElementById('spin2')
//   const spin3 = document.getElementById('spin3')
//
// setDeceleratingTimeout(function (c, className) { $('#spin1').html(`<p class=${className}>${spinnerArr1[c]}</p>`) }, 5, (50 + randomNum(0, 3)))
// setDeceleratingTimeout(function (c, className) { $('#spin2').html(`<p class=${className}>${spinnerArr2[c]}</p>`) }, 5, (60 + randomNum(0, 3)))
// setDeceleratingTimeout(function (c, className) { $('#spin3').html(`<p class=${className}>${spinnerArr3[c]}</p>`) }, 5, (70 + randomNum(0, 3)))
//
//   // $('#spin1').html(`<h1>${spinnerArr1[randomNum(0, 3)]}</h1>`)
//   $('#spin2').html(`<h1>${spinnerArr2[randomNum(0, 3)]}</h1>`)
//   $('#spin3').html(`<h1>${spinnerArr3[randomNum(0, 3)]}</h1>`)
// }
//
// thanks to: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#7228322
function randomNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
//
//
//
// // thanks to: https://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running
// function setDeceleratingTimeout (callback, factor, times) {
//   let c = 0
//   let internalCallback = function (tick, counter) {
//     return function () {
//       if (--tick >= 0) {
//         window.setTimeout(internalCallback, ++counter * factor)
//         callback(c)
//         audio.currentTime = 0
//         audio.play()
//         c++
//         if (c === 4) c = 0
//       }
//       if (tick === 0) {
//         callback(c, 'done')
//       }
//     }
//   }(times, 0)
//   window.setTimeout(internalCallback, factor)
// }

// inspired by https://jsfiddle.net/YNBxz/2/

function start () {
  let startButton = document.getElementById('spinButton')
  startButton.addEventListener('click', onClick)
};

function sliceName (n) {
  console.log(n)
  if (n =< 25.714) { console.log('Leave a message for your MP') }
  if ((n =< 51.42) && (25.714 < n)) {console.log('Share what you love') }
  if ((n =< 77.14) && (51.42 < n)) { console.log('Take a picture with your sports') }
  if ((n =< 102.86) && (77.14 < n)) { console.log('Think about energy waste') }
  if ((n =< 128.57) && (102.86 < n)) { console.log('Eat less meat and more') }
  if ((n =< 154.29) && (128.57 < n)) { console.log('Think about how you would travel and') }
  if ((n =< 180) && (154.29 < n)) { console.log('Find a green heart event near') }
  if ((n =< 205.71) && (180 < n)) { console.log('Look for signs of spring around') }
  if ((n =< 231.42) && (205.71 < n)) { console.log('Share the film') }
  if ((n =< 257.14) && (231.42 < n)) { console.log('Send your MP a green heart') }
  if ((n =< 282.85) && (257.14 < n)) { console.log('Share a green heart') }
  if ((n =< 308.57) && (282.85 < n)) { console.log('Wear a green heart') }
  if ((n =< 334.28) && (308.57 < n)) { console.log('Make a green heart') }
  if ((n =< 360) && (334.28 < n)) { console.log('Try the Facebook Frame') }
}

let deg = 0
let totDegrees = 0
let count = 0
const degreeArray = [25.71, 51.42, 77.14, 102.85, 128.57, 154.28, 180, 205.71, 231.42, 257.14, 282.85, 308.57, 334.28, 360]

function onClick () {
  const wheel = document.getElementById('rainbow-wheel')

  wheel.removeAttribute('style')

  let randomDegree = degreeArray[randomNum(0, 14)]

  sliceName(randomDegree)

  deg = 3600 + randomDegree + deg

  var css = '-webkit-transform: rotate(' + deg + 'deg);'

  totDegrees = totDegrees + randomDegree

  sliceName((totDegrees % 360))

  wheel.setAttribute(
    'style', css
  )
}
