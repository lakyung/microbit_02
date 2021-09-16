def on_button_pressed_a():
    music.play_tone(466, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P1) == 1:
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.show_string("" + str((pins.digital_read_pin(DigitalPin.P1))))
    else:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_string("" + str((pins.digital_read_pin(DigitalPin.P1))))
basic.forever(on_forever)
