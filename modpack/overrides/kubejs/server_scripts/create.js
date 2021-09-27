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
    addPurify('minecraft:white_concrete', '#forge:stone');
    addElvenTrade(['12x minecraft:white_concrete', 'minecraft:gray_concrete'], ['#forge:stone', 'create:wheat_flour'])
    addElvenTrade('4x minecraft:white_concrete', '#forge:stone')
    addApothecary('minecraft:white_concrete', ['minecraft:gray_concrete', '#forge:stone'])
    addTerraPlate('minecraft:white_concrete', 'minecraft:gray_concrete',1)
    addCrushing('minecraft:white_concrete','minecraft:gray_concrete')
    addCrushing('minecraft:white_concrete','#forge:stone',3000)
    addCrushing(Item.of('6x minecraft:white_concrete').withChance(0.32),'#forge:stone',3000)
    addCrushing('4x minecraft:white_concrete %25','#forge:stone',3000)
    addCutting('minecraft:white_concrete','#forge:stone',3000)
    addMilling(['minecraft:white_concrete','minecraft:white_concrete %25'],'minecraft:gray_concrete',3000)
    addMixing('minecraft:white_concrete','#forge:stone', temperature.heated)
    addDeploying('minecraft:white_concrete', '#forge:stone','minecraft:gray_concrete')
    addDeploying('minecraft:white_concrete', '#forge:stone','create:wheat_flour',2000)
    // '250 x fluid:forge:milk'
})

onEvent('item.tags', event => {
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})


