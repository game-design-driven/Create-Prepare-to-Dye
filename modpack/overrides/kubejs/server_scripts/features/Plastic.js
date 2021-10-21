if (feature('Vanilla recipe alternatives (plastic)')) {
    addShaped('white_shulker_box', ['p', 'c', 'p'], { p: '#forge:plastic', c: '#forge:chests' })
    addShapeless('shulker_box', ['#forge:dyes/purple', 'white_shulker_box'])
    addShapeless('4x name_tag', ['string', '#forge:plastic'])
}
if (feature('Plastic elytra')) {
    addShaped('elytra', ['mpm', 'm m', 'm m'], { m: 'phantom_membrane', p: '#forge:plastic' })
}
if (feature('Oil recipes')) {
    addMixing('', '#forge:ores/biotite', temperature.heated, 600, '250x contenttweaker:oil')
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

if (feature('Plastic recipes')) {
    addAssembly('contenttweaker:plastic_nurdle', 'slime_ball', [
        addFilling('', '', 'contenttweaker:oil'),
        addFilling('', '', '250x contenttweaker:acid'),
        addCutting(),
        addPressing()
    ])
    addAssembly('contenttweaker:plastic_nurdle', 'ender_pearl', [
        addFilling('', '', 'contenttweaker:oil'),
        addFilling('', '', '20x contenttweaker:acid'),
        addCutting(),
        addPressing()
    ], 5)

}
if (feature('Acid recipes')) {
    addFluidTransformFluid('contenttweaker:acid', '#forge:acidic', 'water')
    addFluidTransformFluid(['contenttweaker:acid%3', 'water'], '8x poisonous_potato', 'water')
    addAssembly(['contenttweaker:acid_bucket %7', 'crimson_fungus%1', 'brown_mushroom%1', 'red_mushroom%1'], 'milk_bucket', [
        addDeploying('', '', 'rotten_flesh'),
        addPressing()
    ], 10)
    addElvenTrade('contenttweaker:acid_bucket', ['lava_bucket', 'spider_eye', 'rotten_flesh', Ingredient.of(['cookie', 'honey_bottle'])])
}
if (feature('Oil recipe')) {
    addMixing('', '#forge:seeds', temperature.heated, 200, 'contenttweaker:oil')
    addFluidTransomItem('contenttweaker:oil_bucket', ['fish_bucket', 'glowstone_dust'], 'contenttweaker:acid')
    addElvenTrade('contenttweaker:oil_bucket', ['bucket', 'porkchop', Ingredient.of(['golden_apple', 'create:sweet_roll'])])
}