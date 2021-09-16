basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showString("" + (pins.digitalReadPin(DigitalPin.P1)))
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showString("" + (pins.digitalReadPin(DigitalPin.P1)))
    }
})
