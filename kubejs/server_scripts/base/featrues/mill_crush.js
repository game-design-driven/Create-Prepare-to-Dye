// <recipetype:create:milling>.removeByName("create:milling/sand");
// <recipetype:create:milling>.removeByName("create:milling/diorite");
// Recipes.addMilling([
//     <item:create:limesand>,
//     <item:create:limesand> % 50,
// ],<tag:items:forge:sand/colorless>);
if (feature('Improve milling recipes')) {
    addMilling('orange_dye', '#forge:crops/carrot')
    
    removeRecipe({ id: 'create:milling/cocoa_beans' })
    addMilling('brown_dye', 'cocoa_beans')

    removeRecipe({ id: 'create:milling/sandstone' })
    addMilling(['3x sand', 'sand %50'], '#forge:sandstone')

    removeRecipe({ id: 'create:milling/coal' })
    removeRecipe({ id: 'create:milling/charcoal' })
    addMilling('black_dye', 'coal')

    removeRecipe({ id: 'create:milling/ink_sac' })
    addMilling('2x black_dye', 'ink_sac')

    removeRecipe({ id: 'create:milling/lilac' })
    addMilling('3x magenta_dye', 'lilac')

    addMilling('brown_dye', 'soul_sand')

    removeRecipe({ id: 'create:milling/bone_meal' })
    removeRecipe({ id: 'create:milling/bone' })
    addMilling('white_dye', 'bone_meal')
    addMilling(['2x bone_meal', 'bone_meal %50'], 'bone')
    removeRecipe({ id: 'create:milling/wheat' })
    addMilling('2x create:wheat_flour', '#forge:crops/wheat')
    addCrushing(['create:wheat_flour', 'wheat_seeds %25'], '#forge:crops/wheat')

}
if (feature('Improve crushing recipes')) {
    addCrushing(['orange_dye %55', 'red_dye %25', 'yellow_dye %25' ], '#forge:crops/carrot')

    addCrushing(['brown_dye', 'quark:root_item %25'], 'cocoa_beans')

    addCrushing(['2x sand', 'stick %25'], '#forge:sandstone')

    addCrushing(['sand', 'flint %10', 'clay_ball %10'], 'gravel')

    addCrushing(['black_dye %50', 'gray_dye %25'], 'coal')
    addCrushing(['gray_dye %25', 'black_dye %5'], 'charcoal')

    addCrushing(['black_dye %50', 'light_blue_dye %25', 'light_gray_dye %20'], 'ink_sac')

    addCrushing(['magenta_dye %80', 'purple_dye %40'], 'lilac')

    addCrushing(['brown_dye %30', 'sand %25', 'ae2:large_quartz_bud %10'], 'soul_sand')

    addCrushing(['white_dye %25', 'light_gray_dye %10', 'gray_dye %10'], 'bone_meal')
    addCrushing(['2x bone_meal', 'white_dye %25', 'pink_dye %25'], 'bone')

}

// <recipetype:create:milling>.removeByName("create:milling/bone");
// Recipes.addMilling([<item:minecraft:bone_meal>*3,<item:minecraft:bone_meal>*2%50], <item:minecraft:bone>);
// Recipes.addCrushing([<item:minecraft:bone_meal>*3,<item:minecraft:white_dye>*3%80,<item:minecraft:pink_dye>%40], <item:minecraft:bone>);

