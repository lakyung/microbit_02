let 거리 = 0
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    거리 = 340 * pins.pulseIn(DigitalPin.P1, PulseValue.High) / 1000 / 2
    basic.showNumber(거리)
})
