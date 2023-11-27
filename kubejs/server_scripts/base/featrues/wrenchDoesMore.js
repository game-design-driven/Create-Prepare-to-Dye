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
]
ServerEvents.tags('block', event => {
    wrenchables.forEach(block => {
        event.add('create:wrench_pickup', block)
    })
})