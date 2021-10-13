// Recipes.addCrushing([<item:minecraft:orange_dye> % 25, <item:minecraft:red_dye> % 4,<item:minecraft:brown_dye> % 4,<item:minecraft:yellow_dye> % 4],<tag:items:forge:crops/carrot>);
// Recipes.addMilling([<item:minecraft:orange_dye> * 2],<tag:items:forge:crops/carrot>);
let r = addCrushing(['orange_dye %25', 'red_dye %4', 'yellow_dye %4'], 'forge:crops/carrot')
addMilling('2x orange_dye', 'forge:crops/carrot')
console.log("POTATO"+r);