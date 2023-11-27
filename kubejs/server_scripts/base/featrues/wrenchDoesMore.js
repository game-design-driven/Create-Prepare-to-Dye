// BlockEvents.rightClicked(event => {
//     if (event.item.id === 'create:wrench') {
//         event.cancel()
//     }
// })
let wrenchables = [
    'quark:magent',
    'minecraft:dispenser',
    'minecraft:dropper',
    'minecraft:observer',
    'minecraft:cauldron',
    'quark:pipe',
    'quark:crate',
    'minecraft:barrel',
    'minecraft:chest',
    'minecraft:trapped_chest',
    'minecraft:ender_chest',
    'minecraft:shulker_box',
    'minecraft:barrel',
    'minecraft:loom',
    'minecraft:cartography_table',
    'minecraft:smithing_table',
    'minecraft:grindstone',
    'minecraft:lectern',
    'minecraft:stonecutter',
    'minecraft:campfire',
    'minecraft:blast_furnace',
    'minecraft:smoker',
    'minecraft:brewing_stand',
    'minecraft:beacon',
    'minecraft:anvil',
    'minecraft:chipped_anvil',
    'minecraft:damaged_anvil',
    'minecraft:bell',
]
ServerEvents.tags('block', event => {
    wrenchables.forEach(block => {
        event.add('create:wrench_pickup', block)
    })
})