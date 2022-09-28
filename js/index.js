import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Sounds } from "./sounds.js"
import { events } from "./events.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSetTimer,
    minutesDisplay,
    secondsDisplay,
    Forest,
    Rain,
    CoffeShop,
    FirePlace,
} from "./elements.js"


const sounds = Sounds()


const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSetTimer,
    buttonStop,
    Forest,
    Rain,
    CoffeShop,
    FirePlace
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

events({ controls, timer, sounds })

