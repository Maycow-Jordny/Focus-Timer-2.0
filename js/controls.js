
export function Controls({
    buttonPlay,
    buttonPause,
    buttonSetTimer,
    buttonStop,
    Forest,
    Rain,
    CoffeShop,
    FirePlace
}) {

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSetTimer.classList.add('hide')
        buttonStop.classList.remove('hide')

    }


    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')

    }


    function resetSVG() {
        Forest.classList.add('svg-color')
        Rain.classList.add('svg-color')
        CoffeShop.classList.add('svg-color')
        FirePlace.classList.add('svg-color')
    }

    function resetCard() {
        Forest.classList.remove('card-color')
        Rain.classList.remove('card-color')
        CoffeShop.classList.remove('card-color')
        FirePlace.classList.remove('card-color')
    }


    function reset() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        buttonStop.classList.add('hide')
        buttonSetTimer.classList.remove('hide')
    }

    return {
        play,
        pause,
        resetCard,
        resetSVG,
        reset

    }

}
