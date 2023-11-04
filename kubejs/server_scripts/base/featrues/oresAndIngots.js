if (feature('Ores from dyes')) {
    // simple automated ways to acquire iron and redstone
    // addBlockInteract('iron_ore',['minecraft:stone', 'white_dye'])
    let basicOres = {
        'iron_ore': 'white_dye',
        'redstone_ore': 'red_dye',
        'copper_ore': 'orange_dye',
        'coal_ore': 'black_dye',
    }
    let deepslateOnlyOres = {
        'deepslate_emerald_ore': 'lime_dye',
        'deepslate_lapis_ore': 'blue_dye',
        'deepslate_diamond_ore': 'cyan_dye',
        'deepslate_gold_ore': 'yellow_dye',
    }
    Object.entries(basicOres).forEach(entry => {
        const [ore, dye] = entry;
        addBlockInteract(ore, 'minecraft:stone', dye)
        addBlockInteract('deepslate_'+ore, 'minecraft:deepslate', dye)
    })
    Object.entries(deepslateOnlyOres).forEach(entry => {
        const [ore, dye] = entry;
        addBlockInteract(ore, 'minecraft:deepslate', dye)
    })
    
    addShapeless('raw_iron',['white_dye', 'white_dye', '#forge:dyes', 'cobblestone'])
    addShapeless('raw_copper',['orange_dye', 'orange_dye', '#forge:dyes', 'cobblestone'])    
}

if (feature('Ore processing')) {
    removeRecipe({ id: 'create:crushing/coal_ore' })
    removeRecipe({ id: 'create:crushing/deepslate_coal_ore' })
    addCrushing(['coal', '2x coal %75', 'create:experience_nugget %75', 'supplementaries:ash %30'], '#forge:ores/coal')
    addMilling('3x coal', '#forge:ores/coal')

    removeRecipe({ id: 'create:crushing/iron_ore' })
    removeRecipe({ id: 'create:crushing/deepslate_iron_ore' })
    addCrushing(['create:crushed_raw_iron', '2x create:crushed_raw_iron %75', 'create:experience_nugget %75', 'supplementaries:ash %30'], '#forge:ores/iron')

    addMilling(['2x create:crushed_raw_iron', 'create:crushed_raw_iron %75'], '#forge:ores/iron')

    addMilling('5x create:crushed_raw_copper', '#forge:ores/copper')
    // runic ore processing
    let crush_to_ingot_table = {
        'create:crushed_raw_iron': 'minecraft:iron_ingot',
        'create:crushed_raw_copper': 'minecraft:copper_ingot',
        'create:crushed_raw_gold': 'minecraft:gold_ingot'
    }
    Object.entries(crush_to_ingot_table).forEach(entry => {
        const [crushed, ingot] = entry;
        addAltar('12x '+ ingot, ['#botania:runes', '8x '+crushed])
    })

}
if (feature('Dye into ore')) {
    addAssembly('minecraft:coal_ore', 'minecraft:stone',[
        addFilling('minecraft:coal_ore', 'minecraft:stone', 'create_enchantment_industry:ink')
    ],4)
}
if (feature('Gold')) {
    removeItem('gold_ore')
    removeItem('deepslate_gold_ore')
    //remove orechid pool
    // Recipes.addFill(<item:minecraft:gold_ingot>,<tag:items:forge:ingots>,<fluid:create:honey> * 1000); 
    // Recipes.addFluidToItem([<item:minecraft:nether_gold_ore>],[<tag:items:forge:netherrack>*8],<fluid:create:honey>,1);
    addFilling('gold_ingot', '#forge:ingots', '50x create:honey')
    // addFluidTransomItem('nether_gold_ore', '8x netherrack', 'create:honey')
    // addAssembly(['gold_nugget %1', 'white_dye %3', 'yellow_dye %3', 'red_dye %3'], 'egg', [
    //     addFilling('', '', '250x kubejs:acid')//replace with kjs acid
    // ])
    addCrushing(['gold_nugget %3', 'red_dye %3', 'feather %3'], 'egg')
    addMilling('gold_nugget %5', 'egg')
    addItemApplication('minecraft:raw_gold_block', ['minecraft:honeycomb_block', '#forge:ingots/terrasteel'])
}
if (feature('Remove diamond ore')) {
    removeItem('diamond_ore')
}
if (feature('Remove emerald ore')) {
    removeItem('emerald_ore')
    addAssembly(['emerald %25', 'green_dye %3', '2x green_dye %3', 'coal %2', 'diamond %2'], 'diamond', [
        addDeploying('emerald', 'diamond', 'green_dye'),
        addFilling('emerald', 'diamond', '27x create_enchantment_industry:experience')
    ], 2)
    addAssembly(['emerald %25', 'green_dye %3', 'coal %2'], 'botania:mana_diamond', [
        addDeploying('emerald', 'diamond', 'green_dye'),
        addDeploying('emerald', 'diamond', 'green_dye'),
        addDeploying('emerald', 'diamond', 'green_dye'),
        addFilling('emerald', 'diamond', '27x create_enchantment_industry:experience')
    ], 1)
}
if (feature('Remove zinc')) {
    //Orechid.main.removeOreWeight(<blockstate:create:zinc_ore>);
    removeAndReplace('create:zinc_ingot', 'minecraft:iron_ingot')
    removeItems([
        'create:zinc_nugget',
        'create:crushed_zinc_ore',
        'create:zinc_block',
        'create:zinc_ore',
        'create:raw_zinc',
        'create:crushed_raw_zinc'
    ])
    removeRecipe({ type: 'create:mixing', output: 'create:brass_ingot' })

    removeRecipe({ id: 'create:crafting/materials/zinc_ingot_from_decompacting' })
    removeRecipe({ id: 'create:crafting/materials/zinc_ingot_from_compacting' })
    removeRecipe({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })
    removeRecipe({ id: 'create:mixing/andesite_alloy_from_zinc' })
    removeRecipe({ id: 'create:crafting/kinetics/rose_quartz_lamp' })
    // addItemApplication('create:rose_quartz_lamp', ['minecraft:redstone_lamp', 'create:polished_rose_quartz'])

}
if (feature('Andesite_alloy')) {
    removeRecipe({ output: 'create:andesite_alloy' })
    addShaped('4x create:andesite_alloy', ['di', 'ia'], { d: '#forge:dyes', i: '#forge:ingots/iron', a: 'minecraft:andesite' })
    addMixing('8x create:andesite_alloy', ['4x #forge:dyes', '#forge:ingots/iron', 'andesite'])
    addMixing('8x create:andesite_alloy', ['#forge:ingots/manasteel', 'andesite', '#forge:dyes'])
    addMixing('8x create:andesite_alloy', ['#forge:ingots/copper', '4x andesite'])
    addAssembly('create:andesite_alloy', 'minecraft:iron_nugget',[
        addDeploying('create:andesite_alloy', 'minecraft:iron_nugget','minecraft:andesite'),
        addPressing('create:andesite_alloy', 'minecraft:iron_nugget'),
        addFilling('create:andesite_alloy','minecraft:iron_nugget', '200x create_enchantment_industry:ink')
    ])
    addElvenTrade('8x create:andesite_alloy', ['2x #forge:ingots/manasteel', 'andesite', '4x bread'])
}
if (feature('Brass is gold')) {
    addMixing('2x gold_ingot', ['#forge:ingots/iron', '#forge:ingots/copper'], temperature.heated)
    // addMixing('4x create:brass_ingot', ['#forge:ingots/gold', '#forge:ingots/copper'], temperature.heated)
    addMixing('2x gold_ingot', ['#forge:ingots/manasteel', '#forge:ingots/copper'])
    addElvenTrade('8x gold_ingot', ['#forge:ingots/copper', 'create:sweet_roll'])
    // addItemExplode(['create:crushed_brass %75', '2x redstone %25'], ['2x #forge:dusts/mana', 'create:crushed_raw_copper'])
    addToTag('forge:ingots/brass', 'gold_ingot')
    removeItem('create:brass_ingot')

    addToTag('forge:nuggets/brass', 'gold_nugget')
    removeItem('create:brass_nugget')
}


if (feature('Copper')) {
    addDeploying('create:copper_nugget', '#forge:nuggets/gold', 'red_dye')
    addFilling('minecraft:copper_ingot', '#forge:ingots', '1000x create:chocolate')
}
if (feature('Lapis')) {
    // Recipes.addFluidToItem([<item:minecraft: lapis_lazuli>*2],[<tag:items:forge:dyes>,<tag:items:forge:lime>]);
    //     Recipes.addFluidToItem([<item:minecraft:lapis_lazuli>],[<tag:items:forge:dusts/mana>]);
    //     //remove lapis ore
    //     <item:minecraft:lapis_ore>.murdurFamily();
    //     Orechid.main.removeOreWeight(<blockstate:minecraft:lapis_ore>);
    removeItem('lapis_ore')
    addCompacting('lapis_lazuli', '#forge:dusts', temperature.heated,undefined,undefined,'250x water')
    addCompacting('lapis_lazuli', '4x #forge:dusts', temperature.none,undefined,undefined,'1000x water')
    //remove from orechid
    // addFluidTransomItem('2x lapis_lazuli', ['#forge:dyes', '#forge:lime'])
    // addFluidTransomItem('2x lapis_lazuli', '#forge:dusts/mana')
}
// if (feature('Rose quartz')) {
//     addCrushing(['create:rose_quartz %90', 'rose_bush %80', 'black_dye %70'], 'wither_rose')
// }

if (feature('slime from dough and lime')) {
    addAssembly(['3x slime_ball'], '#forge:dough',[
        addDeploying('3x slime_ball', '#forge:dough', 'lime_dye')
    ],3)
    addMixing(['3x slime_ball'], ['3x #forge:dough', 'lime_dye'], temperature.heated)
}

// let example_block = Item.of('minecraft:stone')
// // console.log(example_block.getItem().getBlock().getHardness())
// console.log('^'+Block.getBlock('minecraft:stone').defaultDestroyTime())
// // console.log('^'+Block.getBlock('minecraft:stone').properties.harvestLevel)
// // console.log('^'+Block.getBlock('minecraft:stone').defaultBlockState().asState().properties['hardness'].value)
if (feature('Replace bricks with copper (orange ingot)')) {
    removeAndReplace('minecraft:brick', '#forge:ingots/copper')
}