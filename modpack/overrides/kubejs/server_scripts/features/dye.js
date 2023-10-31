// Recipes.addCrushing([<item:minecraft:orange_dye> % 25, <item:minecraft:red_dye> % 4,<item:minecraft:brown_dye> % 4,<item:minecraft:yellow_dye> % 4],<tag:items:forge:crops/carrot>);
// Recipes.addMilling([<item:minecraft:orange_dye> * 2],<tag:items:forge:crops/carrot>);
if (feature('Dye crafting')) {
    removeRecipe({ id: 'charm:extra_recipes/cyan_dye' })
    addInfusion('cyan_dye', 'warped_roots')

    addShapeless('gray_dye', 'gunpowder')

    addElvenTrade('4x yellow_dye', ['glowstone_dust', 'bread'])
    addFluidTransomItem('4x yellow_dye', '4x forge:dyes/white', 'honey', 1)
}