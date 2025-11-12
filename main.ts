basic.forever(function () {
    if (input.temperature() >= 30) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    } else {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() <= 20) {
        basic.setLedColors(0x0000ff, 0x0000ff, 0x0000ff)
    } else {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
