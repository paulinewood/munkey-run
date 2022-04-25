namespace SpriteKind {
    export const Car = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    munkey.setVelocity(-5, 0)
    munkey.sayText("oopsies!", 500, false)
})
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    munkey.sayText("thanks!", 1000, true)
    music.magicWand.play()
    pause(1000)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.powerDown.play()
    game.over(false)
})
let munkey: Sprite = null
scene.setBackgroundImage(img`
    dddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111dd
    dddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111dd
    dddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dd
    dddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbdddddd
    ddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbdddddd
    ddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbdddddddddddddddddddd
    ddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbdddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbb
    ddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddd
    11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddd
    11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11dddddddd
    11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11dddddddd
    dddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd
    dddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddddddddd
    ddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddddddddd
    dddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111dd
    dddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111dd
    dddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dd
    dddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbdddddd
    ddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbdddddd
    ddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbdddddddddddddddddddd
    ddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbdddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbb
    ddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddd
    11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddd
    11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11dddddddd
    11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11dddddddd
    dddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd
    dddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddddddddd
    ddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbddddddddddddddddddddddddddddddbbdddddddddddd
    dddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111dd
    dddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111ddddddddddddddddbbdddddddd1111dd
    dddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dd
    dddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddd
    ddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbdddddd
    ddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbdddddd
    ddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbdddddddddddddddddddd
    ddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbb
    ddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddd
    11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11dddddddddddddddddddddddddddd11dddddddd
    11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11dddddddd
    11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddd11ddddddddddddddddddddbbdddddd11dddddddd
    dddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd
    dddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddddddddd
    ddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbddddddddddddddddddddddddddddddbbdddddddddddd
    dddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111dd
    dddd1111ddddddddddddddddbbdddddddd1111ddddddddddddddddbbdddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111ddddddddddddddddbbdddddddd1111dd
    dddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dd
    dddd1111dddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddd1111dd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddd
    ddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbdddddd
    ddbbddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddbbddddddddddddbbbbddddddddddddbbdddddd
    ddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbbdddddddddddddddddddd
    ddddddddddddddddbbbbddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbb
    ddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddd
    11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11dddddddddddddddddddddddddddd11dddddddd
    11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddd11dddddddd
    11ddddddddddddddddddddbbdddddd11ddddddddddddddddddddbbdddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddd11ddddddddddddddddddddbbdddddd11dddddddd
    dddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd
    dddddddddd11dddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdddddddddddd
    ddddddddddddddddddddddddddbbddddddddddddddddddddddddddddbbdd............................................................ddddddddddddddddddddddddddbbdddddddddddd
    `)
munkey = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
munkey.setPosition(30, 41)
munkey.setImage(assets.image`bigmunky`)
munkey.sayText("aah! you there! help me!", 3000, true)
pause(3000)
munkey.sayText("i'm being chased by the evil monkey king!", 5000, true)
pause(5000)
munkey.setImage(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `)
scene.setTileMap(assets.image`map`)
scene.setTile(13, img`
    d d d d d d d d d d d d d d d d 
    d d d 1 1 d d d d d d d d b d d 
    d d d 1 1 d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d b d d d d d d b b d d d d d 
    d d d d d d d d d b b d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d b d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d b d d d 
    d d d d d d 1 d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d b d 
    `, false)
scene.setTile(10, img`
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . c 6 7 7 6 c . . . . . 
    . . . . c 6 7 5 7 7 6 c . . . . 
    . . 6 6 c c 6 5 5 6 c c 6 6 . . 
    6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
    6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
    . c c c 6 6 7 6 6 5 7 6 c c 6 . 
    6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
    6 6 7 7 7 c c c c c c 7 7 7 6 6 
    6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
    c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
    . c c 5 5 7 6 7 7 6 7 5 5 c c . 
    . c 6 7 5 5 6 7 7 6 5 5 7 6 c . 
    . 6 6 7 7 6 6 5 5 6 6 7 7 6 6 . 
    . . 6 6 6 6 c 6 7 6 c 6 6 6 . . 
    . . . 6 6 c . 6 6 6 . c 6 . . . 
    `, true)
scene.setTile(5, img`
    . . . . . . . . . . 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . 8 7 8 . . . 8 7 8 . . . . 
    . . . 8 7 6 8 . 8 8 7 8 . . . . 
    . . . 8 6 7 8 . 8 7 7 8 . 8 8 . 
    . . . 8 8 7 8 8 8 7 7 8 . 8 6 8 
    . . . 8 8 7 6 8 6 7 6 8 8 8 8 6 
    8 8 . 8 8 7 7 8 7 7 8 8 6 7 8 6 
    8 7 8 8 8 7 7 8 7 6 8 7 7 6 8 8 
    8 6 7 6 8 6 7 6 7 6 6 7 6 8 8 7 
    . 8 7 7 6 6 7 6 7 6 7 7 8 8 7 7 
    . . 8 7 7 6 7 8 7 6 7 6 8 7 7 8 
    . . . 8 7 6 7 8 6 6 7 8 6 7 8 8 
    . . . 8 7 8 7 8 6 6 8 8 6 6 8 6 
    . . . 8 6 8 6 8 6 6 8 8 6 6 8 6 
    . . . 8 6 8 6 6 6 6 8 8 6 6 8 6 
    `, true)
scene.getTile(1, 3).place(munkey)
scene.cameraFollowSprite(munkey)
info.setScore(0)
let column = 0
munkey.setVelocity(3, 0)
munkey.ax = 4
controller.moveSprite(munkey, 0, 30)
animation.runImageAnimation(
munkey,
assets.animation`munkey run`,
100,
true
)
let evil_munkey = sprites.create(assets.image`munkey king`, SpriteKind.Enemy)
evil_munkey.setPosition(6, 55)
animation.runImageAnimation(
evil_munkey,
[img`
    ................
    ................
    ......ff.ff.ff..
    .....f55f55f55f.
    ......f555555f..
    .......ffffff...
    ......feeeeef...
    .....fefeddddf..
    .....feeffffffc.
    ....ffeed2dd2dc.
    ...fddeeddddeedc
    ...cdbeedddddddc
    ff.cdbeeeddccccc
    fef.cffeeeddddf.
    fef.feeeeffffff.
    feffeeeeeeeffff.
    .ffeeeefefddfddf
    ..feeeefefbdfbdf
    ..feffffffffffff
    ..fddcf.........
    ..ffff..........
    `,img`
    ................
    ................
    ................
    ......ff.ff.ff..
    .....f55f55f55f.
    ......f555555f..
    ....fffeeeeef...
    ...fddeeeedddf..
    ...cdbeeedddddc.
    ...cdbeeffddffc.
    .ff.cfeedffffddc
    fef..feed2dd2ddc
    fef..feeddddeedc
    fef..ffeedddddf.
    fef.feeeeedfff..
    .fffeeeeeeef....
    ..ffbeeeeeff....
    ..ffddceeffef...
    ....fffcddbddf..
    .....ffdddcddf..
    ......fffffff...
    `,img`
    ................
    ................
    ................
    ......ff.f.ff...
    .....f55f5f55f..
    ......f55555f...
    ......fffffff...
    .....feeeddddf..
    ....ffeeffffffc.
    ...fddeed2dd2dc.
    ...cdbeeddddeedc
    ...cdbeedddddddc
    ....cfeeeddccccc
    .....ffeeeddddf.
    ....feeeefffff..
    ff.feeeeeeff....
    fe.feefeefeef...
    fe.feeefeefeef..
    feffefbbfbdfdbf.
    ffffebddfddfddf.
    .fffffffffffff..
    `],
100,
true
)
pause(1000)
munkey.sayText("help me escape!", 2000, true)
music.bigCrash.play()
for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
    pause(1000)
    value.follow(munkey, 18)
    evil_munkey.setVelocity(4, 0)
    evil_munkey.ax = 5
    evil_munkey.setFlag(SpriteFlag.GhostThroughWalls, true)
}
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
forever(function () {
    munkey.y += -2
    pause(randint(200, 400))
    munkey.y += 2
    pause(randint(500, 1000))
})
