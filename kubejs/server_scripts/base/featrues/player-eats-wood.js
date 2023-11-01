// BlockEvents.broken(Block.getBlock(ice), event => {
//     if (event.block.id === 'minecraft:oak_log') {
//         if (event.entity.getFoodLevel() < 20) {
//             event.entity.runCommandSilent("playsound create:blaze_munch block @p ~ ~ ~ 1 " + (Math.random() * 7) / 10)
//             event.entity.runCommandSilent("playsound create:crafter_click block @p ~ ~ ~ 1 " + (Math.random() * 7) / 10)
//             event.entity.runCommandSilent("playsound quark:ambient.clock block @p ~ ~ ~ 1 1" + (Math.random() * 7) / 10)
//             event.entity.runCommandSilent("playsound minecraft:block.furnace.fire_crackle block @p ~ ~ ~ 1 " + (Math.random() * 20) / 10)
//             event.entity.addFood(1, 1)
//         } else {
//             //the block should drop regularly
//         }
//     }
// })