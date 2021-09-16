input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
pins.digitalWritePin(DigitalPin.P8, 0)
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.temperature() >= 30) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    basic.showNumber(input.temperature())
})
