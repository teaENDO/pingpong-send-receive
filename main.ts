radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    } else {
        if (receivedNumber == 1) {
            basic.showString("HiHi")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.clearScreen()
})
radio.setGroup(1)
