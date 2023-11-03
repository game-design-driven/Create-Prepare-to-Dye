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
    addShaped('2x hopper', ['# #', '#c#', ' # '], { '#': '#forge:ingots/brass', c: '#forge:chests' })
    replaceShaped('beacon', ['ggg', 'gng', 'ooo'], { g: '#forge:glass', n: 'nether_star', o: 'obsidian' })
}
if (feature('Make dispenser use tags')) {
    removeRecipe({ id: 'minecraft:dispenser' })
    addShaped('dispenser', ['###', '#p#', '#r#'], { '#': '#forge:cobblestone', p: 'bow', r: 'redstone' })
}
if (feature('Glass from stained glass')) {
    // addFluidTransomItem('glass', '#forge:stained_glass')
}
if (feature('Firecharge recipes')) {
    addShapeless('fire_charge', ['redstone', 'redstone', '#forge:gunpowder', '#coals'])
}
if (feature('Revive dirt')) {
    addMixing('dirt', ['coarse_dirt', '#forge:fertilizer'])
}
if (feature('Tnt recipes')) {
    addAltar('16x tnt', ['4x sand', '4x #forge:gunpowder', '8x #forge:dyes/red'])
}
if (feature('Redstone recipes')) {
    // addFluidTransomItem('redstone', ['#forge:nuggets', '#forge:crops/nether_wart'], 'create:honey', 1)
    // addFluidTransomItem('redstone', ['32x #forge:nuggets/gold', '4x #forge:crops/nether_wart'])
    addCompacting('redstone', ['nether_wart_block', '#forge:dusts/mana'])
}
if (feature('Kelp recipes')) {
    addInfusion('kelp', '4x sugar_cane')
    // addFluidTransomItem('kelp', '#forge:bushes', undefined, 0.25, 3);
}
if (feature('Bee duping flowers and saplings')) {
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
    // addFluidTransomItem(['prismarine_crystals %5', 'blue_dye %2', 'light_blue_dye %1', 'cyan_dye %2'], '#forge:dusts/prismarine')
}
if (feature('Red sand')) {
    // addFluidTransomItem('red_sand', '#forge:sand/colorless', 'create:honey', 0.2)
}
if (feature('Diamond recipes')) {
    addCompacting('diamond', '8x #forge:storage_blocks/coal', temperature.superHeated)
    addCompacting('diamond', '64x #forge:storage_blocks/charcoal', temperature.superHeated)
}
if (feature('Obsidian recipes')) {
    // addFluidTransomItem('obsidian', '#forge:containers/lava')
}
if (feature('phantom_membrane')) {
    addAltar('phantom_membrane', ['#beds', '2x cake', '2x leather'])
}
if (feature('Ghast tear')) {
    addMixing('4x ghast_tear', ['botania:rune_sloth', 'botania:rune_air'])
    addMixing('ghast_tear', '#forge:nuggets/gold', false, undefined, undefined,['lava', 'milk'])
}
if (feature('Netherrack and nether_brick')) {
    addCrushing(['brick %50', 'netherrack %25', 'nether_wart %10'], 'nether_brick')
    // addBlockExplode('netherrack', 'red_nether_bricks')
}
if (feature('Uses for netherite')) {
    addShaped('beacon', ['ggg', 'grg', 'ono'], { g: '#forge:glass', r: 'botania:terrasteel_ingot', o: 'obsidian', n: '#forge:storage_blocks/netherite' })
}
if (feature('Dye from meat')) {
    addCrushing(['pink_dye%75', 'red_dye%25'], 'porkchop')
    addCrushing(['red_dye%75', 'pink_dye%25'], 'beef')
}
if (feature('Bone recipes')) {
    // addFluidTransomItem('bone', '8x #forge:meat', 'kubejs:acid', 0.1)//use kjs acid
}
if (feature('Bamboo recipes')) {
    addAlchemyRecipe('bamboo', 'sugar_cane')
}
if (feature('Rail recipes')) {
    replaceShaped('8x rail', ['m m', 'msm', 'm m'], { m: '#forge:ingots/iron', s: 'stick' })
    addShaped('16x rail', ['m m', 'msm', 'm m'], { m: '#forge:ingots/andesite_alloy', s: 'stick' })
}
if (feature('Crying obsidian recipes')) {
    // addBlockAnvil('crying_obsidian', 'obsidian')
}
if (feature('Shapeless lever')) {
    replaceShapeless('lever',['#forge:cobblestone','#forge:rods'])
}
if (feature('Sponge recipes')) {
    addMixing('sponge',['#minecraft:leaves', '9x #forge:plastic'],temperature.heated,2000)
}

if (feature('Sticky pistons using bottle of honey')) {
    //instead of slime
    addShaped('sticky_piston',['h','p'], {p:'piston',h:'honey_bottle'})
}

if (feature('slime from honey and terrasteel')) {
    addItemApplication('slime_block', 'honey_block', 'botania:terrasteel_ingot')
    addCompacting('slime_block', '12x botania:terrasteel_nugget', temperature.none, undefined, undefined, '750x create:honey')
}

if (feature('Seperate magma cream')) {
    addAssembly(['slime_ball %90', 'red_dye %1', 'orange_dye %1', 'yellow_dye %1', 'blaze_powder %7'], 'magma_cream', [
        addCutting('slime_ball', 'magma_cream'),
    ], 2)
    addCrushing(['slime_ball %50', 'blaze_powder %25', 'red_dye %4'], 'magma_cream')
}

if (feature('Netherrack from nether_wart_block')) {
    addItemApplication('netherrack', 'nether_wart_block', 'cobblestone')
    addItemApplication('netherrack', 'cobblestone', 'nether_wart_block')
}

if (feature('Netherwart to redstone')) {
    addSmelting('redstone', '#forge:crops/nether_wart')
}

if (feature('Redstone from quartz')) {
    addCrushing(['redstone %50', 'quartz %25', 'white_dye %25'], 'quartz')
    addMilling(['redstone %70', 'white_dye %5'], 'quartz')
}

if (feature('Sand recipes')) {
    addItemApplication('sand', 'gravel', 'quark:hammer')
    
}

if (feature('Dirt to sand')) {
    addMilling('sand %20', 'dirt')
    addCrushing(['sand %10', 'clay %10'], 'dirt')
}

if (feature('Enchanting table from amathist')) {
    // addShaped('enchanting_table',[' a ','cdc','ddd'], {b:'book',c:'',d:'obsidian'})
    
}
if (feature('Calcite from quartz')) {
    addInfusion('calcite', 'quartz_block', 500, 'obsidian')
}

if (feature('Deepslate from livingwood')) {
    addAlchemyRecipe('deepslate', 'botania:livingwood')
}

if (feature('Remove and replace shulker shell with purple dye')) {
    removeAndReplace('shulker_shell', '#forge:dyes/purple')
}