if (feature('iron and redstone basic income')) {
    // simple automated ways to acquire iron and redstone
    addItemApplication('iron_ore',['minecraft:stone', 'red_dye'])
    addItemApplication('iron_ore',['minecraft:smooth_stone', 'red_dye'])
    addItemApplication('nether_quartz_ore',['netherrack', 'white_dye'])
    addItemApplication('redstone_ore',['minecraft:stone', 'nether_wart'])    
    addItemApplication('deepslate_iron_ore',['minecraft:deepslate', 'red_dye'])
    addItemApplication('deepslate_redstone_ore',['minecraft:deepslate', 'nether_wart'])

    addShapeless('raw_iron',['red_dye', 'red_dye', '#forge:dyes', 'cobblestone', 'cobblestone'])
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
        'create:crushed_gold_ore': 'minecraft:gold_ingot'
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
    //remove orechid pool
    // Recipes.addFill(<item:minecraft:gold_ingot>,<tag:items:forge:ingots>,<fluid:create:honey> * 1000); 
    // Recipes.addFluidToItem([<item:minecraft:nether_gold_ore>],[<tag:items:forge:netherrack>*8],<fluid:create:honey>,1);
    addFilling('gold_ingot', '#forge:ingots', '250x create:honey')
    // addFluidTransomItem('nether_gold_ore', '8x netherrack', 'create:honey')
    // addAssembly(['gold_nugget %1', 'white_dye %3', 'yellow_dye %3', 'red_dye %3'], 'egg', [
    //     addFilling('', '', '250x kubejs:acid')//replace with kjs acid
    // ])
    addCrushing(['gold_nugget %3', 'red_dye %3', 'feather %3'], 'egg')
    addMilling('gold_nugget %5', 'egg')
    addItemApplication('minecraft:raw_gold_block', ['minecraft:honeycomb_block', '#forge:ingots/terrasteel'])
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
    addDeploying('create:copper_nugget', '#forge:nuggets/gold', 'minecraft:redstone')
    addAssembly(['minecraft:copper_ingot %8', 'brick %2'], 'gold_ingot', [
        addDeploying('minecraft:copper_ingot', 'gold_ingot', 'redstone')
    ], 3)    
    addAssembly(['minecraft:copper_ingot %9', 'brick %1'], 'gold_ingot', [
        addDeploying('minecraft:copper_ingot', 'gold_ingot', 'redstone'),
        addFilling('minecraft:copper_ingot', 'gold_ingot', '250x create:chocolate'),
        addDeploying('minecraft:copper_ingot', 'gold_ingot', 'redstone')
    ])    
    addAssembly(['minecraft:copper_ingot %8', '9x iron_nugget %1', 'redstone %1'], 'iron_ingot', [
        addDeploying('minecraft:copper_ingot', 'iron_ingot', 'redstone'),
        addFilling('minecraft:copper_ingot', 'iron_ingot', '1000x create:chocolate'),
        addDeploying('minecraft:copper_ingot', 'iron_ingot', 'redstone')
    ])
    addShaped('minecraft:copper_ore', [' r ', 'r#r', ' r '], { r: 'redstone', '#': '#forge:ores' })
    // addItemExplode(['8x minecraft:copper_ore %8', '2x stone %2'], ['8x #forge:ores', '#forge:dusts/redstone'])
    addMixing('3x minecraft:copper_ore', ['9x redstone', '#forge:ores'], temperature.heated)
    //add tip that copper needs to be crafted instead of mined
    // addBlockExplode(['create:copper_block', 'lime_stained_glass', 'green_stained_glass'], 'emerald_block')
    // Recipes.addBlockExplosion(<block:create:copper_block>,<blockstate:minecraft:emerald_block>,100); // oxidization doesn't seem to work
    addAssembly('minecraft:copper_ore', '#forge:ores',[
        addDeploying('minecraft:copper_ore', '#forge:ores', 'redstone'),
    ],4)    
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