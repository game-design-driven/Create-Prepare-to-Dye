//priority: 1
//Create Prepare to Dye 2 - Filling Recipes

ServerEvents.recipes((event) => {
  // Slime dye recipes
  event.recipes.create.filling("4x minecraft:brown_dye", [
    Fluid.of("create:chocolate", 200),
    "minecraft:slime_ball",
  ]);
  event.recipes.create.filling("4x minecraft:white_dye", [
    Fluid.of("minecraft:milk", 200),
    "minecraft:slime_ball",
  ]);
  event.recipes.create.filling("4x minecraft:yellow_dye", [
    Fluid.of("create:honey", 200),
    "minecraft:slime_ball",
  ]);
  event.recipes.create.filling("4x minecraft:orange_dye", [
    Fluid.of("minecraft:lava", 200),
    "minecraft:slime_ball",
  ]);
  event.recipes.create.filling("4x minecraft:lime_dye", [
    Fluid.of("create_enchantment_industry:experience", 12),
    "minecraft:slime_ball",
  ]);
  event.recipes.create.filling("2x minecraft:blue_dye", [
    Fluid.water(),
    "minecraft:slime_ball",
  ]);
  event.recipes.create.filling("4x minecraft:black_dye", [
    Fluid.of("create_enchantment_industry:ink", 200),
    "minecraft:slime_ball",
  ]);

  // Dye mixing with fluids
  event.recipes.create.filling("minecraft:orange_dye", [
    Fluid.of("create:honey", 50),
    "minecraft:red_dye",
  ]);
  event.recipes.create.filling("minecraft:lime_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:green_dye",
  ]);
  event.recipes.create.filling("minecraft:light_blue_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:blue_dye",
  ]);
  event.recipes.create.filling("minecraft:gray_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:black_dye",
  ]);
  event.recipes.create.filling("minecraft:light_gray_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:gray_dye",
  ]);
  event.recipes.create.filling("minecraft:cyan_dye", [
    Fluid.water(),
    "2x minecraft:green_dye",
  ]);
  event.recipes.create.filling("minecraft:pink_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:red_dye",
  ]);
  event.recipes.create.filling("minecraft:purple_dye", [
    Fluid.water(),
    "2x minecraft:red_dye",
  ]);
  event.recipes.create.filling("minecraft:light_blue_dye", [
    Fluid.water(),
    "2x minecraft:white_dye",
  ]);

  // Gold ingot from ingots and honey
  event.recipes.create.filling("minecraft:gold_ingot", [
    Fluid.of("create:honey", 50),
    "#forge:ingots",
  ]);

  // Copper ingot from ingots and chocolate
  event.recipes.create.filling("minecraft:copper_ingot", [
    Fluid.of("create:chocolate", 100),
    "#forge:ingots",
  ]);

  // Coal ore from stone and ink
  event.recipes.create.filling("minecraft:coal_ore", [
    Fluid.of("create_enchantment_industry:ink", 200),
    "minecraft:stone",
  ]);

  // Blaze cake (cheaper)
  event.remove({ id: "create:filling/blaze_cake" });
  event.recipes.create.filling("create:blaze_cake", [
    Fluid.of("minecraft:lava", 10),
    "create:blaze_cake_base",
  ]);

  // Cookie recipe
  event.remove({ output: "minecraft:cookie" });
  event.recipes.create.filling("8x minecraft:cookie", [
    Fluid.of("create:chocolate", 100),
    "create:dough",
  ]);

  // Honeycomb from silicon
  event.recipes.create.filling("minecraft:honeycomb", [
    Fluid.of("create:honey", 750),
    "ae2:silicon",
  ]);

  // Slime from silicon
  event.recipes.create.filling("minecraft:slime_ball", [
    Fluid.of("create_enchantment_industry:experience", 1),
    "ae2:silicon",
  ]);

  // Overgrowth seed - TODO: Uncomment when kubejs fluids are registered
  // event.recipes.create.filling("botania:overgrowth_seed", [
  //   Fluid.of("kubejs:fermented_goop", 250),
  //   "#forge:coral",
  // ]);

  // Rotten flesh to leather
  event.recipes.create.filling("minecraft:leather", [
    Fluid.of("create:potion", 50, { Potion: "minecraft:regeneration" }),
    "minecraft:rotten_flesh",
  ]);

  // Netherrack from cobblestone
  event.recipes.create.filling("minecraft:netherrack", [
    Fluid.of("create:potion", 5, { Potion: "minecraft:healing" }),
    "minecraft:cobblestone",
  ]);

  // AE2 quartz growing
  event.recipes.create.filling("ae2:medium_quartz_bud", [
    Fluid.water(),
    "ae2:small_quartz_bud",
  ]);
  event.recipes.create.filling("ae2:large_quartz_bud", [
    Fluid.water(),
    "ae2:medium_quartz_bud",
  ]);
  event.recipes.create.filling("ae2:quartz_cluster", [
    Fluid.water(),
    "ae2:large_quartz_bud",
  ]);
});
