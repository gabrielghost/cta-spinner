$(start)

const spinnerArr1 = ['run a marathon', 'cycle to brighton', 'swim 750 meters', 'dance']
const spinnerArr2 = ['with a burrito', 'with pink hair', 'in giant sunglasses', 'with face painted as a lion']
const spinnerArr3 = ['if you raise £1000', 'if you raise £750', 'if you raise £500', 'if you raise £300']

const audio = new Audio('click.mp3')

function start () {
  let startButton = document.getElementById('spinButton')
  startButton.addEventListener('click', spin)
};

function spin () {
  console.log('spin')
  const spin1 = document.getElementById('spin1')
  const spin2 = document.getElementById('spin2')
  const spin3 = document.getElementById('spin3')

setDeceleratingTimeout(function (c, className) { $('#spin1').html(`<p class=${className}>${spinnerArr1[c]}</p>`) }, 5, (50 + randomNum(0, 3)))
setDeceleratingTimeout(function (c, className) { $('#spin2').html(`<p class=${className}>${spinnerArr2[c]}</p>`) }, 5, (60 + randomNum(0, 3)))
setDeceleratingTimeout(function (c, className) { $('#spin3').html(`<p class=${className}>${spinnerArr3[c]}</p>`) }, 5, (70 + randomNum(0, 3)))

  // $('#spin1').html(`<h1>${spinnerArr1[randomNum(0, 3)]}</h1>`)
  $('#spin2').html(`<h1>${spinnerArr2[randomNum(0, 3)]}</h1>`)
  $('#spin3').html(`<h1>${spinnerArr3[randomNum(0, 3)]}</h1>`)
}

// thanks to: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#7228322
function randomNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
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
        if (c === 4) c = 0
      }
      if (tick === 0) {
        callback(c, 'done')
      }
    }
  }(times, 0)
  window.setTimeout(internalCallback, factor)
}
