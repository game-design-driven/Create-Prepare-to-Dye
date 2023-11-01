// Recipes.addCrushing([<item:minecraft:orange_dye> % 25, <item:minecraft:red_dye> % 4,<item:minecraft:brown_dye> % 4,<item:minecraft:yellow_dye> % 4],<tag:items:forge:crops/carrot>);
// Recipes.addMilling([<item:minecraft:orange_dye> * 2],<tag:items:forge:crops/carrot>);
if (feature('Dye crafting')) {
    removeRecipe({ id: 'charm:extra_recipes/cyan_dye' })
    addInfusion('cyan_dye', 'warped_roots')
    
    addShapeless('gray_dye', 'gunpowder', 'white_dye')
    addInfusion('gray_dye', 'gunpowder')

    addElvenTrade('4x yellow_dye', ['glowstone_dust', 'bread'])
    addInfusion('yellow_dye', '#forge:dyes', 3000, 'bee_nest[honey_level=5]')

    removeRecipe({ id: 'minecraft:yellow_dye_from_sunflower' })
    addShapeless('yellow_dye', 'sunflower')

    addMilling('red_dye', 'apple')
}

if(feature('Dye from seeds')){
    addMilling(['green_dye %5', 'brown_dye %5'], '#forge:seeds')
    addMixing('green_dye', ['4x #forge:seeds'], temperature.none, undefined, undefined, 'water')
    addMixing('brown_dye', ['4x #forge:seeds'], temperature.heated, undefined, undefined, 'water')
}

if (feature('white dye is more expensive')) {
    removeRecipe({ id: 'minecraft:white_dye' })
    addShapeless('white_dye', ['bone_meal','bone_meal','bone_meal','bone_meal'])
    addShapeless('white_dye', ['create:wheat_flour','create:wheat_flour','create:wheat_flour','create:wheat_flour'])
    addMilling('white_dye %50', 'create:wheat_flour')

    removeRecipe({ id: 'create:milling/lily_of_the_valley' })   
    addMilling('3x white_dye', 'lily_of_the_valley')

}

if (feature('black dye is more expensive')) {
    removeRecipe({ id: 'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye' })
    addShapeless('black_dye', ['coal','coal','coal','coal'])
    
    addMilling('gray_dye', 'charcoal')
}

if (feature('Red from meat')) {
    addMilling('red_dye %80', '#forge:meat')
}

if (feature('Red from cinder flour')) {
    removeRecipe({ id: 'create:crushing/netherrack' })
    addMilling('red_dye %80', 'create:cinder_flour')
    addCrushing(['red_dye %50', 'redstone %15', 'quartz %15'], 'create:cinder_flour')
}

if (feature('Red from crops')) {
    addCrushing(['red_dye %60', 'redstone %50', 'quartz %5'], '#forge:crops/nether_wart')
    addMilling('red_dye', '#minecraft:wart_blocks')
    addMilling('red_dye', 'minecraft:red_mushroom')
    addCrushing(['red_dye %50', 'redstone %15', 'quartz %15'], 'minecraft:red_mushroom')
}

if (feature('Gray from ash')) {
    addShaped('supplementaries:ash', ['aa', 'aa'], { a: '#forge:dusts/ash' })
    addCrushing(['gray_dye %50', 'white_dye %20', 'light_gray_dye %10'], 'supplementaries:ash')
    addMilling('gray_dye', 'supplementaries:ash')
}

if (feature('slime dye')) {
    addFilling('4x brown_dye', 'slime_ball', '200x create:chocolate')
    addFilling('4x white_dye', 'slime_ball', '200x minecraft:milk')
    addFilling('4x yellow_dye', 'slime_ball', '200x create:honey')
    addFilling('4x orange_dye', 'slime_ball', '200x lava')
    addFilling('4x lime_dye', 'slime_ball', '12x create_enchantment_industry:experience')
    addFilling('2x blue_dye', 'slime_ball', 'water')
    addFilling('4x black_dye', 'slime_ball', 'create_enchantment_industry:ink')
}

if (feature('dye mixing')) {
    //red_dye + honey = orange dye
    addFilling('orange_dye', 'red_dye', '50x create:honey')
    //green + milk = lime
    addFilling('lime_dye', 'green_dye', '50x minecraft:milk')
    //blue + milk = light blue
    addFilling('light_blue_dye', 'blue_dye', '50x minecraft:milk')
    //black + milk = gray
    addFilling('gray_dye', 'black_dye', '50x minecraft:milk')
    //gray + milk = light gray
    addFilling('light_gray_dye', 'gray_dye', '50x minecraft:milk')
    //green + water = cyan
    addFilling('cyan_dye', '2x green_dye', 'water')
    //red + milk = pink
    addFilling('pink_dye', 'red_dye', '50x minecraft:milk')
    //red + water = purple
    addFilling('purple_dye', '2x red_dye', 'water')
    //white + water = light blue
    addFilling('light_blue_dye', '2x white_dye', 'water')

}

if (feature('brown dye is more expensive')) {
    removeRecipe({ id: 'minecraft:brown_dye' })
    addShapeless('brown_dye', ['cocoa_beans','cocoa_beans','cocoa_beans','cocoa_beans'])
}
if (feature('dye from glow ink sack')) {
    addShapeless('light_blue_dye', ['minecraft:glow_ink_sac', 'minecraft:glow_ink_sac', 'minecraft:glow_ink_sac', 'minecraft:glow_ink_sac'])
    addMixing('light_blue_dye', ['2x minecraft:glow_ink_sac', '#forge:dyes'])
    addMilling(['light_blue_dye %50', 'glowstone_dust %25'], 'glow_ink_sac')
    addCrushing(['light_blue_dye %30', 'glowstone_dust %30', 'black_dye %20'], 'glow_ink_sac')
}
