onEvent('block.break', event => {
    if (event.block.id === 'minecraft:oak_log') {
        if (event.entity.getFoodLevel() < 20) {
            event.entity.runCommandSilent("playsound create:blaze_munch block @p ~ ~ ~ 1 " + (Math.random() * 7) / 10)
            event.entity.runCommandSilent("playsound create:crafter_click block @p ~ ~ ~ 1 " + (Math.random() * 7) / 10)
            event.entity.runCommandSilent("playsound quark:ambient.clock block @p ~ ~ ~ 1 1" + (Math.random() * 7) / 10)
            event.entity.runCommandSilent("playsound minecraft:block.furnace.fire_crackle block @p ~ ~ ~ 1 " + (Math.random() * 20) / 10)
            event.entity.addFood(1, 1)
        } else {
            //the block should drop regularly
        }
    }
})
// onEvent('block.loot_tables', event => {
//     console.log("TEST loot ");
//     event.addBlock('minecraft:oak_log', loot =>{
//         console.log("TEST loot of log!");

//     })
// })

// let fuelBlocks d
//setOnFire
///playsound create:blaze_munch block PandaBoy444 ~ ~ ~ 1 1.6
///playsound create:crafter_click block @p ~ ~ ~
///playsound quark:ambient.clock block @p ~ ~ ~ 1 1.4
///playsound minecraft:block.campfire.crackle block @p ~ ~ ~