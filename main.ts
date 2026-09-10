input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.setGroup(4815)
    radio.sendNumber(3)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    radio.setGroup(4815)
    radio.sendNumber(1)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.setGroup(4815)
    radio.sendNumber(2)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.setGroup(4815)
    radio.sendNumber(4)
})
basic.showString("ZYAN FOUNDATIONS CAR DRIVING REMOTE")
radio.setGroup(4815)
music.play(music.stringPlayable("C5 G B A F A C5 B ", 13), music.PlaybackMode.InBackground)
basic.setLedColors(0x00ff00, 0xff8000, 0x0000ff)
