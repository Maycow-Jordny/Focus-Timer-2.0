import { Sounds } from "./sounds.js"

export function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls
}) {

    let breakTimer
    let minutes

    function setTimer() {
        minutes = prompt("Escolha o tempo")

        if (isNaN(minutes)) {
            alert("Digite apenas números!")
            setTimer()
            return
        }

        if (Number(minutes) >= 60) {
            alert("Tempo máximo do temporizador é de 60 minutos")
            setTimer()
            return
        }

        minutesDisplay.textContent = String(minutes.padStart('2', 0)) || 0
    }

    function resetTimer() {

        if (minutes == null) {
            minutes = 25
        }
        minutesDisplay.textcontent = Number(minutesDisplay.textContent = String(minutes).padStart(2, "0"))
        secondsDisplay.textContent = String(secondsDisplay.textContent = 0).padStart(2, "0")

    }

    function pauseTimer() {
        clearTimeout(breakTimer)
    }


    function countDown() {
        breakTimer = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            let isFinished = minutes <= 0 && seconds <= 0

            if (isFinished) {
                Sounds().timeEnd()
                resetTimer()
                resetControls()

                return
            }

            if (seconds <= 0) {
                seconds = 60

                minutesDisplay.textContent = String(minutes - 1).padStart('2', 0)
            }

            secondsDisplay.textContent = String(seconds - 1).padStart('2', 0)

            countDown()
        }, 1000)


    }

    return {
        setTimer,
        resetTimer,
        countDown,
        pauseTimer,
    }

}


