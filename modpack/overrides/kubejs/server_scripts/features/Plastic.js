if (feature('Acid recipes')) {
    addFluidTransformFluid('kubejs:acid', '#forge:acidic', 'water')
    addFluidTransformFluid(['kubejs:acid%3', 'water%7'], '8x poisonous_potato', 'water')
    addAssembly(['kubejs:acid_bucket %7', 'crimson_fungus%1', 'brown_mushroom%1', 'red_mushroom%1'], 'milk_bucket', [
        addDeploying('', '', 'rotten_flesh'),
        addPressing()
    ], 10)
    addElvenTrade('kubejs:acid_bucket', ['lava_bucket', 'spider_eye', 'rotten_flesh', Ingredient.of(['cookie', 'honey_bottle'])])
}
if (feature('Oil recipe')) {
    addMixing('', '#forge:seeds', temperature.heated, 100, '10x kubejs:oil')
    addFluidTransomItem('kubejs:oil_bucket', ['#forge:fish_bucket', 'glowstone_dust'], 'kubejs:acid')
    addElvenTrade('kubejs:oil_bucket', ['bucket', 'porkchop', Ingredient.of(['golden_apple', 'create:sweet_roll'])])
}
if (feature('Plastic recipes')) {
    addAssembly('kubejs:plastic', 'slime_ball', [
        addFilling('', '', 'kubejs:oil'),
        addFilling('', '', '250x kubejs:acid'),
        addCutting(),
        addPressing()
    ])
    addAssembly('kubejs:plastic', 'ender_pearl', [
        addFilling('', '', 'kubejs:oil'),
        addFilling('', '', '20x kubejs:acid'),
        addCutting(),
        addPressing()
    ], 5)

}
if (feature('Vanilla recipe alternatives (plastic)')) {
    addShaped('white_shulker_box', ['p', 'c', 'p'], { p: '#forge:plastic', c: '#forge:chests' })
    addShapeless('shulker_box', ['#forge:dyes/purple', 'white_shulker_box'])
    addShapeless('4x name_tag', ['string', '#forge:plastic'])
}
if (feature('Plastic elytra')) {
    addShaped('elytra', ['mpm', 'm m', 'm m'], { m: 'phantom_membrane', p: '#forge:plastic' })
}
if (feature('Oil recipes')) {
    addMixing('', '#forge:ores/biotite', temperature.heated, 600, '250x kubejs:oil')
}
// <item:minecraft:leather_helmet>.withNameAndColor("Synthetic Cap",16383998) : [
//     [<tag:items:forge:plastic>,<tag:items:forge:plastic>,<tag:items:forge:plastic>],
//     [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>]
// ],
// <item:minecraft:leather_chestplate>.withNameAndColor("Synthetic Tunic",16383998) : [
//     [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>],
//     [<tag:items:forge:plastic>,<tag:items:forge:plastic>,<tag:items:forge:plastic>],
//     [<tag:items:forge:plastic>,<tag:items:forge:plastic>,<tag:items:forge:plastic>]
// ],
// <item:minecraft:leather_leggings>.withNameAndColor("Synthetic Pants",16383998) : [
//     [<tag:items:forge:plastic>,<tag:items:forge:plastic>,<tag:items:forge:plastic>],
//     [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>],
//     [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>]
// ],
// <item:minecraft:leather_boots>.withNameAndColor("Synthetic Boots",16383998) : [
//     [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>]
// ]

//oxidized gunpowder
// Recipes.addMix(<item:contenttweaker:oxidized_gunpowder>,"heated",[tag.oxidiesers,<item:minecraft:gunpowder>]);

