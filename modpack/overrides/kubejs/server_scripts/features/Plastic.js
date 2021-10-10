if (global.feature('Vanilla recipe alternatives (plastic)')) {
    addShaped('white_shulker_box', ['p', 'c', 'p'], { p: '#forge:plastic', c: '#forge:chests' })
    addShapeless('shulker_box', ['#forge:dyes/purple', 'white_shulker_box'])
    addShapeless('4x name_tag', ['string', '#forge:plastic'])
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