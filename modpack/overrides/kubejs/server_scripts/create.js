settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logErroringRecipes = true

console.info('initiating create scripts...')
onEvent('recipes', event => {
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "minecraft:acacia_leaves"
        },
        "output": {
            "item": "minecraft:white_concrete",
            "count": 2
        },
        "mana": 2000,
        "catalyst": {
            "type": "state",
            "name": "minecraft:furnace",
            "properties": {
                "lit": "true",
                facing: 'north'
            }
        }
    })

    if (feature('Adapting flour and dough recipes')) {
        event.remove({ id: 'create:crafting/appliances/dough' })
    }
    //examples
    addInfusion('54x minecraft:white_concrete', '#forge:stone')
    addInfusion('minecraft:white_concrete', '2x minecraft:oak_leaves', 2000, 'minecraft:furnace@lit=false,facing=north')
    addAltar('54x minecraft:white_concrete', ['create:wheat_flour', '#forge:stone'])
    addPurify('minecraft:cobblestone', '#forge:stone');
    addElvenTrade(['12x minecraft:white_concrete', 'minecraft:gray_concrete'], ['#forge:stone', 'create:wheat_flour'])
    addApothecary('minecraft:gray_concrete', ['minecraft:white_concrete', '#forge:stone'])
    addTerraPlate('minecraft:gray_concrete', ['minecraft:white_concrete', '#forge:stone'],1)
})

onEvent('item.tags', event => {
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})


