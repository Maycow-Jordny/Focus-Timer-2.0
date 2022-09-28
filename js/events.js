import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAddTime,
    buttonReduceTime,
    buttonSetTimer,
    minutesDisplay,
    Forest,
    Rain,
    CoffeShop,
    FirePlace,
} from "./elements.js"

export function events({ timer, controls, sounds }) {
    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countDown()
        sounds.pressButton()
    })

    buttonPause.addEventListener('click', function () {
        controls.pause()
        timer.pauseTimer()
        sounds.pressButton()
    })

    buttonSetTimer.addEventListener('click', function () {
        timer.setTimer()
        sounds.pressButton()

    })

    buttonStop.addEventListener('click', function () {
        buttonSetTimer.classList.remove('hide')
        buttonStop.classList.add('hide')
        controls.pause()
        timer.pauseTimer()
        timer.resetTimer()
        sounds.pressButton()
    })

    buttonAddTime.addEventListener('click', function () {
        let limit = minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart('2', 0)
        if (limit >= 60) {
            minutesDisplay.textContent = "60"
        }
        sounds.pressButton()
    })

    buttonReduceTime.addEventListener('click', function () {
        let limit = minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart('2', 0)
        if (limit <= 0) {
            minutesDisplay.textContent = "00"
        }
        sounds.pressButton()
    })

    Forest.addEventListener('click', function () {
        controls.resetSVG()
        Forest.classList.remove('svg-color')
        controls.resetCard()
        Forest.classList.add('card-color')
        sounds.forestSoundPlay()

    })

    Rain.addEventListener('click', function () {
        controls.resetSVG()
        Rain.classList.remove('svg-color')
        controls.resetCard()
        Rain.classList.add('card-color')
        sounds.rainSoundPlay()
    })


    CoffeShop.addEventListener('click', function () {
        controls.resetSVG()
        CoffeShop.classList.remove('svg-color')
        controls.resetCard()
        CoffeShop.classList.add('card-color')
        sounds.coffeshopSoundPlay()

    })

    FirePlace.addEventListener('click', function () {
        controls.resetSVG()
        FirePlace.classList.remove('svg-color')
        controls.resetCard()
        FirePlace.classList.add('card-color')
        sounds.firePlaceSoundPlay()
    })

}