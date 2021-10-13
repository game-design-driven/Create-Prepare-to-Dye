if (feature('Paper recipes')) {
    replaceShaped('paper', '###', { '#': 'sugar_cane' }, true)

}
if (feature('Chest recipes')) {
    addShaped('chest', ['###', '# #', '###'], { '#': '#planks' })
    addShaped('4x chest', ['###', '# #', '###'], { '#': '#logs' })
}
if (feature('Convenience recipes')) {
    addShaped('2x piston', ['www', 'cmc', 'crc'], { 'w': '#planks', c: '#forge:cobblestone', m: '#forge:ingots/brass', r: 'redstone' })
    addShaped('dispenser', ['###', '#p#', '#r#'], { '#': '#forge:cobblestone', p: 'piston', r: 'redstone' })
    addShaped('2x hopper', ['#r#', '#c#', ' # '], { '#': '#forge:ingots/brass', r: 'redstone', c: '#forge:chests' })
}
if (feature('Make dispenser use tags')) {
    removeRecipe({ id: 'minecraft:dispenser' })
    addShaped('dispenser', ['###', '#p#', '#r#'], { '#': '#forge:cobblestone', p: 'bow', r: 'redstone' })
}
if (feature('Torch from tallow')) {
    addShaped('8x torch', ['t', 's'], { t: 'quark:tallow', s: '#forge:rods/wooden' })
}
if (feature('Glass from stained glass')) {
    addFluidTransomItem('glass', '#forge:stained_glass')
}
if (feature('Firecharge recipes')) {
    addShapeless('fire_charge', ['2x redstone', '#forge:gunpowder', '#coals'])
}
if (feature('Revive dirt')) {
    addMixing('dirt', ['coarse_dirt', '#forge:fertilizer'])
}
if (feature('Tnt recipes')) {
    addAltar('16x tnt', ['4x sand', '4x #forge:gunpowder', '8x #forge:dyes/red'])
}
if (feature('Redstone recipes')) {
    // Recipes.addFluidToItem([<item:minecraft: redstone>],[<tag:items:forge:nuggets>,<tag:items:forge:crops/nether_wart>],<fluid:create:honey>,1.0);
    // Recipes.addFluidToItem([<item:minecraft:redstone>],[<tag:items:forge:nuggets/gold>*32,<tag:items:forge:crops/nether_wart>*4],<fluid:minecraft:water>);
    addFluidTransomItem('redstone', ['#forge:nuggets', '#forge:crops/nether_wart'], 'create:honey', 1)
    addFluidTransomItem('redstone', ['32x #forge:nuggets/gold', '4x #forge:crops/nether_wart'])
}