function Lichstärke () {
    if (input.lightLevel() >= 70) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
}
function Feuchtigkeit () {
    if (pins.analogReadPin(AnalogReadWritePin.C16) < 700 || pins.analogReadPin(AnalogReadWritePin.C16) < 800) {
        music.play(music.stringPlayable("E G A G E G A C5 ", 120), music.PlaybackMode.UntilDone)
    }
}
function Temperatur () {
    if (input.temperature() < 15) {
        basic.setLedColor(0xff0000)
    } else if (input.temperature() > 30) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
}
let menupunkt = 0
menupunkt += 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        menupunkt += 1
        if (menupunkt > 3) {
            menupunkt = 1
        }
        basic.showString("" + (menupunkt))
    } else if (input.buttonIsPressed(Button.B)) {
        if (menupunkt == 1) {
            Lichstärke()
            basic.turnRgbLedOff()
        } else if (menupunkt == 2) {
            Temperatur()
        } else if (menupunkt == 3) {
            Feuchtigkeit()
            basic.turnRgbLedOff()
        }
        basic.showString("" + (menupunkt))
    }
})
