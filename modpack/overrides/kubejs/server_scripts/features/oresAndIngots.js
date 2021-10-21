if (feature('Gold')) {
    removeItem('gold_ore')
    //remove orechid pool
    // Recipes.addFill(<item:minecraft:gold_ingot>,<tag:items:forge:ingots>,<fluid:create:honey> * 1000); 
    // Recipes.addFluidToItem([<item:minecraft:nether_gold_ore>],[<tag:items:forge:netherrack>*8],<fluid:create:honey>,1);
    addFilling('gold_ingot', '#forge:ingots', 'create:honey')
    addFluidTransomItem('nether_gold_ore', '8x netherrack', 'create:honey')
    addAssembly(['gold_nugget %1', 'white_dye %3', 'yellow_dye %3', 'red_dye %3'], 'egg', [
        addFilling('', '', '250x contenttweaker:acid')//replace with kjs acid
    ])
}
if (feature('Remove emerald ore')) {
    removeItem('emerald_ore')
    //remove orechid ore weight
    addAssembly(['emerald %10', 'green_dye %3', '2x green_dye %3', 'coal %2', 'diamond %2'], 'diamond', [
        addDeploying('', '', 'green_dye'),
        addFilling('', '', '250x contenttweaker:acid')//replace with kjs acid
    ], 4)
    addAssembly(['emerald %15', 'green_dye %3', 'coal %2'], 'botania:mana_diamond', [
        addDeploying('', '', 'green_dye'),
        addDeploying('', '', 'green_dye'),
        addDeploying('', '', 'green_dye'),
        addDeploying('', '', 'green_dye'),
        addFilling('', '', 'contenttweaker:acid')//replace with kjs acid
    ], 2)
}
if (feature('Remove zinc')) {
    //Orechid.main.removeOreWeight(<blockstate:create:zinc_ore>);
    removeAndReplace('create:zinc_ingot', 'minecraft:iron_ingot')
    removeItems([
        'create:zinc_nugget',
        'create:crushed_zinc_ore',
        'create:zinc_block',
        'create:zinc_ore'
    ])
    removeRecipe({ type: 'create:mixing', output: 'create:brass_ingot' })
    addMixing('create:brass_ingot', ['#forge:ingots/iron', '#forge:ingots/copper'])
}
if (feature('Andesite_alloy')) {
    removeRecipe({ output: 'create:andesite_alloy' })
    addShapeless('create:andesite_alloy', ['2x #forge:nuggets/iron', '2x minecraft:andesite'])
    // addMixing('create:andesite_alloy',['2x #forge:nuggets/iron','minecraft:andesite'])
    addMixing('create:andesite_alloy', ['#forge:nuggets/manasteel', 'andesite'])
    addMixing('create:andesite_alloy', ['#forge:nuggets/copper', '2x andesite'])
    addElvenTrade('2x create:andesite_alloy', ['2x #forge:nuggets/manasteel', 'andesite', 'bread'])
}
if (feature('Brass')) {
    addMixing('create:brass_ingot', ['#forge:ingots/copper', '#forge:ingots/gold'], temperature.heated)
    addMixing('3x create:brass_ingot', ['2x #forge:ingots/copper', '3x #forge:ingots/iron', '#forge:ingots/gold'])
    addMixing('4x create:crushed_brass', ['8x create:crushed_copper_ore', '4x #forge:nuggets'])
    addMixing('2x create:crushed_brass', ['create:crushed_copper_ore', 'create:crushed_iron_ore', '4x #forge:nuggets/manasteel'])
    addElvenTrade('create:brass_ingot', ['#forge:ingots/copper', 'create:sweet_roll'])
    addItemExplode(['create:crushed_brass %75', '2x redstone %25'], ['2x #forge:dusts/mana', 'create:crushed_copper_ore'])
}
if (feature('Copper')) {
    addDeploying('create:copper_nugget', '#forge:nuggets/gold', 'minecraft:redstone')
    addAssembly(['create:copper_ingot %8', 'brick %2'], 'gold_ingot', [
        addDeploying('', '', 'redstone')
    ], 4)
    addShaped('create:copper_ore', [' r ', 'r#r', ' r '], { r: 'redstone', '#': '#forge:ores' })
    addItemExplode(['8x create:copper_ore %8', '2x stone %2'], ['8x #forge:ores', '#forge:dusts/redstone'])
    addMixing('3x create:copper_ore', ['9x redstone', '#forge:ores', '#forge:stone'], temperature.heated)
    //add tip that copper needs to be crafted instead of mined
    addBlockExplode(['create:copper_block', 'lime_stained_glass', 'green_stained_glass'], 'emerald_block')
    // Recipes.addBlockExplosion(<block:create:copper_block>,<blockstate:minecraft:emerald_block>,100); // oxidization doesn't seem to work
}
if (feature('Lapis')) {
    // Recipes.addFluidToItem([<item:minecraft: lapis_lazuli>*2],[<tag:items:forge:dyes>,<tag:items:forge:lime>]);
    //     Recipes.addFluidToItem([<item:minecraft:lapis_lazuli>],[<tag:items:forge:dusts/mana>]);
    //     //remove lapis ore
    //     <item:minecraft:lapis_ore>.murdurFamily();
    //     Orechid.main.removeOreWeight(<blockstate:minecraft:lapis_ore>);
    removeItem('lapis_ore')
    //remove from orechid
    addFluidTransomItem('2x lapis_lazuli', ['#forge:dyes', '#forge:lime'])
    addFluidTransomItem('2x lapis_lazuli', '#forge:dusts/mana')
}
if (feature('Rose quartz')) {
    addCrushing(['create:rose_quartz %90', 'rose_bush %80', 'black_dye %70'], 'wither_rose')
}