settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logErroringRecipes = true

console.info('initiating create scripts...')
onEvent('recipes', event => {
    if (feature('Adapting flour and dough recipes')) {
        event.remove({ id: 'create:crafting/appliances/dough' })
    }
    //examples
    addCompacting('1x white_concrete', ['2x cobblestone', '2x stick'], temperature.heated, 1000, 'water', ['water', 'lava'])
    addCompacting('5x white_concrete', ['stick'], temperature.heated)
    addCompacting('2x white_concrete', 'stick', temperature.heated)
    addCompacting('3x white_concrete', 'stick', temperature.heated, 1, '', 'lava')
    addCompacting('4x white_concrete', '', temperature.heated, 1, 'lava', 'water')
    addPressing('2x white_concrete', 'white_concrete')
    addPressing(['4x white_concrete', 'apple%50'], 'white_concrete')
    addSandpaperPolishing('2x white_concrete', 'stick')
    addFilling('white_concrete', 'gray_concrete', 'water')
    addMixing('white_concrete', 'gray_concrete')
    addMixing('5x white_concrete', 'gray_concrete', temperature.superHeated, 1, ['500x lava', 'water'], ['create:honey', 'milk'])
    addMixing('1x white_concrete', '5x #forge:stone')
    addMixing('42x white_concrete', ['5x #forge:stone','5x stick'])
    addMixing(Item.of('2x minecraft:white_concrete'), Ingredient.of('#forge:stone'))
    addMixing(Item.of('3x minecraft:white_concrete'), {
        "tag": "forge:stone",
    })
    addMixing(['4x minecraft:white_concrete', {
        "item": "minecraft:gray_concrete",
    }], ['minecraft:gray_concrete', 'minecraft:stick'])
    addCrushing(['1x minecraft:white_concrete', {
        "item": "minecraft:gray_concrete",
        "count": 4,
        "chance": "0.3"
    }, Item.of('minecraft:stick').withChance(0.4)], ['minecraft:gray_concrete', 'minecraft:stick'])
    addMixing('5x minecraft:white_concrete%5', '5x #forge:stone') //shouldn't work, but shouldn't break
    addCrushing('2x minecraft:white_concrete %5', '5x #forge:stone')
    addInfusion('white_concrete', 'gray_concrete')
    addInfusion('2x white_concrete', 'gray_concrete', 10000, 'minecraft:furnace')
    addInfusion('3x white_concrete', 'stick', 10000, 'minecraft:furnace[lit=true]')
    addInfusion('3x white_concrete', 'stick', 10000, '#forge:cobblestone')
    addAltar('54x minecraft:white_concrete', ['create:wheat_flour', '#forge:stone'])
    addPurify('minecraft:furnace[lit=true]', '#forge:stone')
    addPurify('minecraft:white_concrete', '#forge:planks');

    addCrushing('minecraft:white_concrete %50','stick')

    addInfusion('2x minecraft:white_concrete', 'minecraft:gray_concrete')
    addInfusion('2x minecraft:white_concrete', '2x minecraft:gray_concrete')
    addInfusion('2x minecraft:white_concrete', '2x #forge:stone')
    addCrushing(Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'), '#forge:stone')
    addInfusion(Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'), '#forge:stone')
    addCrushing('2x minecraft:white_concrete%25', Item.of('minecraft:potion', '{Potion:"minecraft:healing"}'))
    addCrushing('2x minecraft:white_concrete%65', {
        "item": 'minecraft:potion',
        "type": "forge:nbt",
        "nbt": {
            "Potion": "minecraft:harming"
        }
    })
    addCrushing({
        "item": 'minecraft:white_concrete',
        "count": 6
    }, 'minecraft:gray_concrete')
    addInfusion('54x minecraft:white_concrete', Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'))
    addInfusion('54x minecraft:white_concrete', Item.of('minecraft:enchanted_book', { StoredEnchantments: [{ lvl: 1, id: "minecraft:sweeping" }] }))
    addInfusion('minecraft:white_concrete', '2x minecraft:oak_leaves', 2000, 'minecraft:furnace[lit=false,facing=north]')
    addElvenTrade(['12x minecraft:white_concrete', 'minecraft:gray_concrete'], ['4x #forge:stone', 'create:wheat_flour'])
    addElvenTrade(['12x minecraft:white_concrete', 'minecraft:gray_concrete'], ['4x stone', 'create:wheat_flour'])
    // addElvenTrade('4x minecraft:white_concrete', '#forge:stone')
    // addApothecary('minecraft:white_concrete', ['minecraft:gray_concrete', '#forge:stone'])
    // addTerraPlate('minecraft:white_concrete', 'minecraft:gray_concrete', 1)
    // addCrushing('minecraft:white_concrete', 'minecraft:gray_concrete')
    // addCrushing('22x minecraft:white_concrete %4', '#forge:stone', 3000)
    // addCrushing(Item.of('6x minecraft:white_concrete').withChance(0.32).item, '#forge:stone', 3000)
    // addCrushing('4x minecraft:white_concrete %25', '#forge:stone', 3000)
    // addCutting('minecraft:white_concrete', '#forge:stone', 3000)
    // addMilling(['minecraft:white_concrete', 'minecraft:white_concrete %25'], 'minecraft:gray_concrete', 3000)
    // addMixing('minecraft:white_concrete', '4x #forge:stone', temperature.heated)
    // addMixing('minecraft:white_concrete', '4x minecraft:gray_concrete', temperature.heated)
    // addDeploying('minecraft:white_concrete', '#forge:stone', 'minecraft:gray_concrete')
    // addDeploying('minecraft:white_concrete', '#forge:stone', 'create:wheat_flour', 2000)
    // addDeploying('minecraft:white_concrete', '#forge:stone', Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'), 2000)
    // addInfusion(Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'), 'stick')
    // addFilling('minecraft:white_concrete', 'minecraft:gray_concrete', Fluid.of('minecraft:water', 250))
    // addFilling('minecraft:white_concrete', 'minecraft:gray_concrete', 'minecraft:water')
    // addFilling('minecraft:white_concrete', 'minecraft:gray_concrete', {
    //     "fluid": "create:potion",
    //     "nbt": {
    //         "Bottle": "REGULAR",
    //         "Potion": "minecraft:strength"
    //     },
    //     "amount": 25
    // })
    // addFilling('minecraft:white_concrete', 'minecraft:gray_concrete', '125 x ~minecraft:lava')
    // '250 mb fluid:forge:milk'
})

onEvent('item.tags', event => {
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})


