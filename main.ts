input.onButtonPressed(Button.A, function () {
    QwQ.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Oo = game.createSprite(QwQ.get(LedSpriteProperty.X), QwQ.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        Oo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    Oo.delete()
})
input.onButtonPressed(Button.B, function () {
    QwQ.move(1)
})
let Oo: game.LedSprite = null
let QwQ: game.LedSprite = null
let Fast = 1500
game.setScore(0)
QwQ = game.createSprite(2, 4)
let OYO = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (Oo) {
        if (Oo.isTouching(OYO)) {
            OYO.set(LedSpriteProperty.X, randint(0, 4))
            OYO.set(LedSpriteProperty.Y, 0)
            Fast += -5
            game.addScore(1)
        }
    }
})
basic.forever(function () {
    if (OYO.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(Fast)
    OYO.change(LedSpriteProperty.Y, 1)
})
