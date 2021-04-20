pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            . . . . .
            `)
        music.ringTone(262)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.stopAllSounds()
    }
})
