
export function Sounds() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const soundForest = new Audio("./sounds/Floresta.wav")
    const soundFirePlace = new Audio("./sounds/Lareira.wav")
    const soundCoffeShop = new Audio("./sounds/Cafeteria.wav")
    const soundRain = new Audio("./sounds/Chuva.wav")

    let soundForestPlay = true
    let soundRainPlay = true
    let soundCoffeShopPlay = true
    let soundFirePlacePlay = true

    function resetSounds() {

        soundForestPlay = true
        soundRainPlay = true
        soundCoffeShopPlay = true
        soundFirePlacePlay = true
    }


    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function forestSoundPlay() {
        if (soundForestPlay) {
            resetSounds()
            soundForestPlay = false
            soundForest.play()
            soundRain.pause()
            soundFirePlace.pause()
            soundCoffeShop.pause()
        } else {
            resetSounds()
            soundForest.pause()

        }
    }

    function firePlaceSoundPlay() {
        if (soundFirePlacePlay) {
            resetSounds()
            soundFirePlacePlay = false
            soundFirePlace.play()
            soundCoffeShop.pause()
            soundRain.pause()
            soundForest.pause()
        } else {
            resetSounds()
            soundFirePlace.pause()
        }

    }

    function coffeshopSoundPlay() {
        if (soundCoffeShopPlay) {
            resetSounds()
            soundCoffeShopPlay = false
            soundCoffeShop.play()
            soundRain.pause()
            soundForest.pause()
            soundFirePlace.pause()
        } else {
            resetSounds()
            soundCoffeShop.pause()
        }
    }

    function rainSoundPlay() {
        if (soundRainPlay) {
            resetSounds()
            soundRainPlay = false
            soundRain.play()
            soundForest.pause()
            soundFirePlace.pause()
            soundCoffeShop.pause()
        } else {
            resetSounds()
            soundRain.pause()
        }
    }
    return {
        pressButton,
        timeEnd,
        forestSoundPlay,
        firePlaceSoundPlay,
        coffeshopSoundPlay,
        rainSoundPlay,
        resetSounds
    }

}

