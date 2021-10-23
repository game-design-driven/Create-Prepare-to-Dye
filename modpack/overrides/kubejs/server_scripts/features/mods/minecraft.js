if (feature('Paper recipes')) {
    replaceShaped('paper', '###', { '#': 'sugar_cane' }, true)
}
if (feature('Chest recipes')) {
    addShaped('chest', ['###', '# #', '###'], { '#': '#planks' })
    addShaped('4x chest', ['###', '# #', '###'], { '#': '#logs' })
}
if (feature('Convenience recipes')) {
    addShaped('2x piston', ['www', 'cmc', 'crc'], { w: '#planks', c: '#forge:cobblestone', m: '#forge:ingots/brass', r: 'redstone' })
    addShaped('dispenser', ['###', '#p#', '#r#'], { '#': '#forge:cobblestone', p: 'piston', r: 'redstone' })
    addShaped('2x hopper', ['#r#', '#c#', ' # '], { '#': '#forge:ingots/brass', r: 'redstone', c: '#forge:chests' })
    replaceShaped('beacon', ['ggg', 'gng', 'ooo'], { g: '#forge:glass', n: 'nether_star', o: 'obsidian' })
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
    addFluidTransomItem('redstone', ['#forge:nuggets', '#forge:crops/nether_wart'], 'create:honey', 1)
    addFluidTransomItem('redstone', ['32x #forge:nuggets/gold', '4x #forge:crops/nether_wart'])
    addCompacting('redstone', ['nether_wart_block', 'botania:mana_powder'])
}
if (feature('Kelp recipes')) {
    addInfusion('kelp', 'sugar_cane')
    addFluidTransomItem('kelp', '#forge:bushes', undefined, 0.25, 3);
}
if (feature('Bee duping')) {
    let manaCost = 3000;
    Ingredient.of('#forge:regular_flowers').stacks.forEach(flower => {
        flower = flower.id
        addInfusion('2x ' + flower, flower, manaCost, 'bee_nest[honey_level=5]')
    });
    Ingredient.of('#minecraft:saplings').stacks.forEach(sapling => {
        sapling = sapling.id
        addInfusion('2x ' + sapling, sapling, manaCost, 'bee_nest[honey_level=5]')
    });
}
if (feature('prismarine_crystals removed from mobdrop')) {
    // <entitytype:minecraft:guardian>.addLootModifier("remove_prismarine_crystals_g", CommonLootModifiers.remove(<item:minecraft:prismarine_crystals>));
    // <entitytype:minecraft:elder_guardian>.addLootModifier("remove_prismarine_crystals_eg", CommonLootModifiers.remove(<item:minecraft:prismarine_crystals>));
    addFluidTransomItem(['prismarine_crystals %5', 'blue_dye %2', 'light_blue_dye %1', 'cyan_dye %2'], '#forge:dusts/prismarine')
}
if (feature('Red sand')) {
    addFluidTransomItem('red_sand', '#forge:sand/colorless', 'create:honey', 0.2)
}
if (feature('Diamond recipes')) {
    addCompacting('diamond', '8x #forge:storage_blocks/coal', temperature.superHeated)
    addCompacting('diamond', '64x #forge:storage_blocks/charcoal', temperature.superHeated)
}
if (feature('Obsidian recipes')) {
    addFluidTransomItem('obsidian', '#forge:containers/lava')
}
if (feature('phantom_membrane')) {
    addAltar('phantom_membrane', ['#beds', '2x cake', 'leather'])
}
if (feature('Ghast tier')) {
    addMixing('4x ghast_tear', ['botania:rune_sloth', 'botania:rune_air'])
    addMixing(undefined, 'ghast_tear', undefined, undefined, 'milk')
}
if (feature('Netherrack and nether_brick')) {
    addCrushing(['brick %50', 'netherrack %25', 'nether_wart %10'], 'nether_brick')
    addBlockExplode('netherrack', 'red_nether_bricks')
}
if (feature('Uses for netherite')) {
    addShaped('beacon', ['ggg', 'grg', 'ono'], { g: '#forge:glass', r: 'create:refined_radiance', o: 'obsidian', n: '#forge:ingots/netherite' })
}
if (feature('Dye from meat')) {
    addCrushing(['pink_dye%80', 'red_dye%30'], 'porkchop')
    addCrushing(['red_dye%50', 'pink_dye%40'], 'beef')
}
if (feature('Bone recipes')) {
    addFluidTransomItem('bone', '8x #forge:meat', 'kubejs:acid', 0.1)//use kjs acid
}
if (feature('Bamboo recipes')) {
    addAlchemyRecipe('bamboo', 'sugar_cane')
}
if (feature('Rail recipes')) {
    replaceShaped('8x rail', ['m m', 'msm', 'm m'], { m: '#forge:ingots/iron', s: 'stick' })
    addShaped('16x rail', ['m m', 'msm', 'm m'], { m: '#forge:ingots/andesite_alloy', s: 'stick' })
}
if (feature('Crying obsidian recipes')) {
    addBlockAnvil('crying_obsidian', 'obsidian')
}
if (feature('Shulker box Recipes')) {
    replaceShaped('shulker_box',['a','b','a'],{a:'shulker_shell',b:'#forge:chests'})
}