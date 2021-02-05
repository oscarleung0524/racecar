input.onButtonPressed(Button.A, function () {
    主角.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    主角.change(LedSpriteProperty.Y, -1)
    if (主角.get(LedSpriteProperty.Y) == 0) {
        game.addScore(1)
        主角.set(LedSpriteProperty.Y, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    主角.change(LedSpriteProperty.X, 1)
})
let 賽車5: game.LedSprite = null
let 賽車4: game.LedSprite = null
let 賽車3: game.LedSprite = null
let 賽車2: game.LedSprite = null
let 賽車1: game.LedSprite = null
let 主角: game.LedSprite = null
game.setScore(0)
let 生命值 = 5
主角 = game.createSprite(2, 4)
主角.set(LedSpriteProperty.Blink, 10)
basic.forever(function () {
    basic.pause(randint(0, 3000))
    賽車1 = game.createSprite(0, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000 - game.score() * 10)
        賽車1.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(1000 - game.score() * 10)
    賽車1.delete()
})
basic.forever(function () {
    if (賽車1) {
        if (賽車1.isTouching(主角)) {
            生命值 += -1
            賽車1.delete()
            主角.set(LedSpriteProperty.Y, 4)
        }
    }
})
basic.forever(function () {
    basic.pause(randint(0, 3000))
    賽車2 = game.createSprite(1, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000 - game.score() * 10)
        賽車2.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(1000 - game.score() * 10)
    賽車2.delete()
})
basic.forever(function () {
    if (賽車2) {
        if (賽車2.isTouching(主角)) {
            生命值 += -1
            賽車2.delete()
            主角.set(LedSpriteProperty.Y, 4)
        }
    }
})
basic.forever(function () {
    basic.pause(randint(0, 3000))
    賽車3 = game.createSprite(2, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000 - game.score() * 10)
        賽車3.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(1000 - game.score() * 10)
    賽車3.delete()
})
basic.forever(function () {
    if (賽車3) {
        if (賽車3.isTouching(主角)) {
            生命值 += -1
            賽車3.delete()
            主角.set(LedSpriteProperty.Y, 4)
        }
    }
})
basic.forever(function () {
    basic.pause(randint(0, 3000))
    賽車4 = game.createSprite(3, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000 - game.score() * 10)
        賽車4.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(1000 - game.score() * 10)
    賽車4.delete()
})
basic.forever(function () {
    if (賽車4) {
        if (賽車4.isTouching(主角)) {
            生命值 += -1
            賽車4.delete()
            主角.set(LedSpriteProperty.Y, 4)
        }
    }
})
basic.forever(function () {
    basic.pause(randint(0, 3000))
    賽車5 = game.createSprite(4, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000 - game.score() * 10)
        賽車5.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(1000 - game.score() * 10)
    賽車5.delete()
})
basic.forever(function () {
    if (賽車5) {
        if (賽車5.isTouching(主角)) {
            生命值 += -1
            賽車5.delete()
            主角.set(LedSpriteProperty.Y, 4)
        }
    }
})
basic.forever(function () {
    if (生命值 == 0) {
        主角.delete()
        game.gameOver()
    }
})
