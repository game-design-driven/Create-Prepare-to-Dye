    function stone(scene) {
        scene.world.setBlock([2, 1, 2], "minecraft:air", true)
        scene.idle(20)
        scene.world.setBlock([2, 1, 2], "minecraft:water", true)
        scene.world.modifyBlock([3, 1, 2], (curState) => curState.with("level", "8"), true)
        scene.idle(5)
        scene.world.setBlock([2, 1, 2], "minecraft:stone", true)
        scene.idle(20)
    }
    
    Ponder.registry((event) => {
    event.create("minecraft:stone").scene("stone", "stone generation", (scene, util) => {
        scene.showStructure()
        // setup cobblestone scene
        scene.world.setBlock([3, 1, 2], "create:framed_glass_trapdoor", false)
        scene.world.modifyBlock([3, 1, 2], (curState) => curState.with("facing", "east"), false)
        scene.world.modifyBlock([3, 1, 2], (curState) => curState.with("open", "true"), false)
        scene.world.modifyBlock([3, 1, 2], (curState) => curState.with("waterlogged", "true"), false)
        scene.world.setBlock([1, 1, 2], "minecraft:lava", false)
        scene.world.setBlock([2, 1, 2], "minecraft:cobblestone", false)

        //cobblestone scene
        scene.idle(10)
        scene.text(70, "This is a cobblestone generator! But you probably already knew how that works", [2, 2.5, 2.5]).attachKeyFrame()
        scene.world.setBlock([2, 1, 2], "minecraft:air", true)
        scene.idle(20)
        scene.world.setBlock([2, 1, 2], "minecraft:cobblestone", true)
        scene.idle(20)
        scene.world.setBlock([2, 1, 2], "minecraft:air", true)
        scene.idle(20)
        scene.world.setBlock([2, 1, 2], "minecraft:cobblestone", true)

        // fade out the cobble gen scene and remove all the blocks
        scene.world.hideSection([4, 4, 4, 0, 1, 0], Facing.EAST)
        scene.idle(20)
        scene.world.setBlocks([4, 4, 4, 0, 1, 0], "minecraft:air", false)

        // setup stone scene
        scene.world.setBlock([2, 1, 2], "minecraft:stone", false)
        scene.world.setBlock([2, 2, 2], "minecraft:lava", false)
        scene.world.setBlock([1, 1, 2], "minecraft:water", false)
        scene.world.setBlock([1, 2, 2], "create:framed_glass_trapdoor", false)
        scene.world.modifyBlock([1, 2, 2], (curState) => curState.with("facing", "west"), false)
        scene.world.modifyBlock([1, 2, 2], (curState) => curState.with("open", "true"), false)
        // start stone scene
        scene.text(60, "But did you know you can make a stone generator too?", [2, 2.5, 2.5]).attachKeyFrame()
        scene.world.showSection([4, 4, 4, 0, 1, 0], Facing.EAST)
        scene.idle(20)
        stone(scene)
        scene.text(200,  "By having lava flow onto the top of water it generates stone!", [2, 2.5, 2.5])
        stone(scene)
        stone(scene)
        stone(scene)
    })
})