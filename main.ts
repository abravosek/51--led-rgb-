let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
})
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
})
