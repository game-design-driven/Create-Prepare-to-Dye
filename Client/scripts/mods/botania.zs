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


Recipes.addMix(<item:botania:fertilizer>,"none",[<tag:items:botania:petals>*8,<item:minecraft:bone_meal>]);
Recipes.addFill(<item:botania:fertilizer>,<item:minecraft:bone_meal>,<fluid:pneumaticcraft:yeast_culture>* 100);
// val aRealFluid as FluidIngredient= <fluid:create:potion>.withTag({Potion: "minecraft:healing" as string});
// Recipes.addThermo(
//     <item:botania:fertilizer> as IItemStack,
//     <fluid:minecraft:water> as IFluidStack,
//     <item:minecraft:bone_meal> as IIngredient,
//     <fluid:minecraft:water> as FluidIngredient,
//     2, 0,2147483647,1.0,false
// ); 

//purge of runes goes here
[<item:quark:white_rune>,
<item:quark:orange_rune>,
<item:quark:magenta_rune>,
<item:quark:light_blue_rune>,
<item:quark:yellow_rune>,
<item:quark:lime_rune>,
<item:quark:pink_rune>,
<item:quark:gray_rune>,
<item:quark:light_gray_rune>,
<item:quark:cyan_rune>,
<item:quark:purple_rune>,
<item:quark:blue_rune>,
<item:quark:brown_rune>,
<item:quark:green_rune>,
<item:quark:red_rune>,
<item:quark:black_rune>,
<item:quark:rainbow_rune>,
<item:quark:blank_rune>
].remove();

//purge of glass shards
[<item:quark:clear_shard>,
<item:quark:dirty_shard>,
<item:quark:white_shard>,
<item:quark:orange_shard>,
<item:quark:magenta_shard>,
<item:quark:light_blue_shard>,
<item:quark:yellow_shard>,
<item:quark:lime_shard>,
<item:quark:pink_shard>,
<item:quark:gray_shard>,
<item:quark:light_gray_shard>,
<item:quark:cyan_shard>,
<item:quark:purple_shard>,
<item:quark:blue_shard>,
<item:quark:brown_shard>,
<item:quark:green_shard>,
<item:quark:red_shard>,
<item:quark:black_shard>
].remove();

//purge music discks quark
[<item:quark:music_disc_drips>,
<item:quark:music_disc_ocean>,
<item:quark:music_disc_rain>,
<item:quark:music_disc_wind>,
<item:quark:music_disc_fire>,
<item:quark:music_disc_clock>,
<item:quark:music_disc_crickets>,
<item:quark:music_disc_chatter>
].remove();