<item:botania:mana_fluxfield>.remove();
[<item:botania:white_mystical_flower>,
<item:botania:orange_mystical_flower>,
<item:botania:magenta_mystical_flower>,
<item:botania:light_blue_mystical_flower>,
<item:botania:yellow_mystical_flower>,
<item:botania:lime_mystical_flower>,
<item:botania:pink_mystical_flower>,
<item:botania:gray_mystical_flower>,
<item:botania:light_gray_mystical_flower>,
<item:botania:cyan_mystical_flower>,
<item:botania:purple_mystical_flower>,
<item:botania:blue_mystical_flower>,
<item:botania:brown_mystical_flower>,
<item:botania:green_mystical_flower>,
<item:botania:red_mystical_flower>].addTip("Use Floral Fertilizer to acquire");

//ideas: yeast, mixer,


RecipeGenerator.addMix(<item:botania:fertilizer>,"none",[<tag:items:botania:petals>*8,<item:minecraft:bone_meal>]);
RecipeGenerator.addFill(<item:botania:fertilizer>,<item:minecraft:bone_meal>,<fluid:pneumaticcraft:yeast_culture>* 100);
val aRealFluid as FluidIngredient= <fluid:create:potion>.withTag({Potion: "minecraft:healing" as string});
// RecipeGenerator.addThermo(
//     <item:botania:fertilizer> as IItemStack,
//     <fluid:minecraft:water> as IFluidStack,
//     <item:minecraft:bone_meal> as IIngredient,
//     <fluid:minecraft:water> as FluidIngredient,
//     2, 0,2147483647,1.0,false
// ); 