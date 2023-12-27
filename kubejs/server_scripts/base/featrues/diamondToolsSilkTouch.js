if (feature('Diamond tools have silk touch')) {
    let silky_tools = ['minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel', 'minecraft:diamond_hoe', 'minecraft:diamond_sword']
    BlockEvents.broken((event) => {
        if (silky_tools.includes(event.player.getMainHandItem().id )){
            event.block.popItem(event.block.id)
            event.block.set('air')
        }
    })
}