input.onButtonPressed(Button.A, function () {
    cont += 1
    basic.showNumber(cont)
    basic.showIcon(IconNames.Happy)
    music.playMelody("C5 B F B C5 A C5 B ", 250)
})
input.onButtonPressed(Button.B, function () {
    cont += -1
    basic.showNumber(cont)
    music.playMelody("C5 A C5 B C5 A C5 B ", 250)
    basic.showIcon(IconNames.Asleep)
})
let cont = 0
basic.showIcon(IconNames.Happy)
basic.showString(" BUEN DIA CAMACHISTAS ")
music.playMelody("C5 A C5 B C5 A C5 B ", 250)
basic.showString(" JUGEMOS ALGO ")
basic.showLeds(`
    # # # # #
    # # . # #
    . . # . .
    . . . . .
    . # # # .
    `)
basic.showString(" UN JUEGO DE PUNTERIA")
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
basic.showString(" TENDREMOS UN CONTADOR QUE RECTIFIQUE TUS ASIERTOS")
basic.showString(" EMPESEMOS")
basic.showString(" A Y RECUERDA VOLVER A TIRAR CUANDO TERMINE LA COANCION")
basic.showIcon(IconNames.Happy)
basic.showString(" A Y RECUERDA VOLVER A TIRAR CUANDO TERMINE LA CANCION")
basic.showString(" SIN TRAMPAS, NO SE PERMITE RETIRAR LA BOTELLAS")
basic.showIcon(IconNames.Asleep)
basic.showNumber(cont)
cont = 0
basic.forever(function () {
	
})
