onEvent("ponder.tag.registry", event => {
    event.create("botania_ponder", "botania:twig_wand", "botania", "how to botania")
})
const T = 20;

onEvent("ponder.registry", event => {
    event.create("botania:terra", "botania:terra_plate")
        .tag("kubejs:botania_ponder")
        .scene("basic_usage_2", "Terrestrial Agglomeration", "terra", (scene, util) => {
            scene.showBasePlate()
            scene.idle(T/2)
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.idle(T)
            scene.world().showSection(util.select().layersFrom(2), Facing.down)
            scene.idle(T)
             var pos = util.grid().at(2, 2, 2)

             scene.overlay().showControls(new PonderInput(pos, PonderPointing.DOWN)
                 .rightClick().withItem("botania:twig_wand"),
                 T*2)
             scene.idle(T)

            //  scene.overlay().showText(T*3)
            //      .text("Right click with wand after all ingredients and mana are supplied to make terrasteal")
            //      .pointAt(util.vector().centerOf(pos))
            //  scene.idle(T)

        })
})


onEvent("ponder.registry", event => {
    event.create("botania:elf", "botania:alfheim_portal")
        .tag("kubejs:botania_ponder")
        .scene("elven_trading", "elven portal", "elfportal2", (scene, util) => {
            scene.showBasePlate()
            scene.idle(T/2)
            scene.world().showSection(util.select().layersFrom(1), Facing.down)
            scene.idle(T)
           
             var pos = util.grid().at(3, 1, 5)
             var pos2 = util.grid().at(1, 1, 1)


            // scene.overlay().showText(T*3)
            //     .text("at least 2 Mana Pools must be placed, Mana consumption is split between all pools.")
            //     .pointAt(util.vector().centerOf(pos2))
            // scene.idle(T)
//
             scene.overlay().showControls(new PonderInput(pos, PonderPointing.DOWN)
                 .rightClick().withItem("botania:twig_wand"),
                 T*2)
             scene.idle(T/2)

            //    scene.overlay().showText(T*2)
            //      .text("Right click with wand to activate")
            //      .pointAt(util.vector().centerOf(pos))
            //  scene.idle(T/2)

             scene.world().setBlock(pos, Block.id('botania:alfheim_portal').with('state', 'on_z').blockState, true)
             scene.idle(T*3)
             //scene.world().setBlock(pos, util.getDefaultState("botania:alfheim_portal"), true)
             //    /setblock ~ ~ ~ botania:alfheim_portal[state=on_x]
             // Block.id('minecraft:furnace').with('lit', false).blockState
           

            // scene.overlay().showText(T*4)
            //     .text("If the portal runs out of Mana, or a part of the structure is broken, the Portal will close.")
            //     .pointAt(util.vector().centerOf(pos))
            // scene.idle(T*5)

            // scene.overlay().showText(T*4)
            //     .text("To exchange items throw them into the portal- it will consume Mana and drop resulting items in its center.")
            //     .pointAt(util.vector().centerOf(pos))
            // scene.idle(T*5)

           

        })
})

onEvent("ponder.registry", event => {
    event.create("botania:enchant", "botania:enchanter")
        .tag("kubejs:botania_ponder")
        .scene("mana_enchnting", "mana enchanting", "enchanter2", (scene, util) => {
            scene.showBasePlate()
            scene.idle(T/2)
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.idle(T)
            scene.world().showSection(util.select().layersFrom(2), Facing.down)
            scene.idle(T)
             var pos = util.grid().at(6, 2, 4)

             scene.overlay().showControls(new PonderInput(pos, PonderPointing.DOWN)
                 .rightClick().withItem("botania:twig_wand"),
                 T*2)
             scene.idle(T)

             scene.world().setBlock(pos, util.getDefaultState('botania:enchanter'), true)
             scene.idle(T*3)  

        })
})
