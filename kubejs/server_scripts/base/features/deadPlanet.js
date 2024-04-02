
addGrow('minecraft:dead_bush', 'minecraft:white_concrete_powder', 'bone_meal')
addCrushing(['white_dye %5', 'dead_bush %5', 'bone %3', 'bone_meal %0.1', 'stick %0.1'], 'white_concrete_powder')
addMilling(['dead_bush %7','bone %4'], 'white_concrete_powder')
addCompacting('dirt',['2x createdieselgenerators:wood_chip','#forge:sand','clay_ball'])
addCompacting('dirt %75',['4x createdieselgenerators:wood_chip','clay'])
addCompacting('dirt %75',['4x stick','2x #forge:sand'])
addMixing('white_dye %75',['16x snowball', '10mb kubejs:fermented_goop'])
addPurify('orange_concrete_powder', 'lava', 15)
addPurify('blue_concrete_powder', 'water', 15)
addPurify('white_concrete_powder', 'milk', 15)
addPurify('yellow_concrete_powder', 'create:honey', 15)
addPurify('brown_concrete_powder', 'create:chocolate', 15)
addPurify('green_concrete_powder', 'kubejs:organic_mass', 15)
addPurify('black_concrete_powder', 'create_enchantment_industry:ink', 15)

addShaped('stick', ['a', 'a'], { a: 'cactus' })
addMilling(['stick','stick %75'], 'dead_bush')
addFilling('sand', 'red_sand', '100x milk')

addAltar('2x bone_meal', ['bone_meal', '4x kubejs:fermented_blob'], 1000)
addAltar('create:tree_fertilizer', ['2x bone_meal','#forge:coral', '8x kubejs:fermented_blob'], 7000)

addDripping('grass', 'dead_bush')

removeRecipe({ id: 'supplementaries:soap' })
addMixing('6x supplementaries:soap', ['4x #forge:dusts/ash', '#forge:meat/fat', '1000mb water'])
addMixing('6x supplementaries:soap', ['8x #forge:dusts/ash', '250mb createdieselgenerators:plant_oil', '750mb water'])