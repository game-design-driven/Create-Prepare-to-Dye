//priority: 1
//Create Prepare to Dye 2 - Filling Recipes

ServerEvents.recipes((event) => {
  // DYE - slime ball with chocolate to brown dye
  event.recipes.create.filling("4x minecraft:brown_dye", [
    Fluid.of("create:chocolate", 200),
    "minecraft:slime_ball",
  ]);

  // DYE - slime ball with milk to white dye
  event.recipes.create.filling("4x minecraft:white_dye", [
    Fluid.of("minecraft:milk", 200),
    "minecraft:slime_ball",
  ]);

  // DYE - slime ball with honey to yellow dye
  event.recipes.create.filling("4x minecraft:yellow_dye", [
    Fluid.of("create:honey", 200),
    "minecraft:slime_ball",
  ]);

  // DYE - slime ball with lava to orange dye
  event.recipes.create.filling("4x minecraft:orange_dye", [
    Fluid.of("minecraft:lava", 200),
    "minecraft:slime_ball",
  ]);

  // DYE - slime ball with XP to lime dye
  event.recipes.create.filling("4x minecraft:lime_dye", [
    Fluid.of("create_enchantment_industry:experience", 12),
    "minecraft:slime_ball",
  ]);

  // DYE - slime ball with water to blue dye
  event.recipes.create.filling("2x minecraft:blue_dye", [
    Fluid.water(),
    "minecraft:slime_ball",
  ]);

  // DYE - slime ball with ink to black dye
  event.recipes.create.filling("4x minecraft:black_dye", [
    Fluid.of("create_enchantment_industry:ink", 200),
    "minecraft:slime_ball",
  ]);

  // DYE - red dye with honey to orange dye
  event.recipes.create.filling("minecraft:orange_dye", [
    Fluid.of("create:honey", 50),
    "minecraft:red_dye",
  ]);

  // DYE - green dye with milk to lime dye
  event.recipes.create.filling("minecraft:lime_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:green_dye",
  ]);

  // DYE - blue dye with milk to light blue dye
  event.recipes.create.filling("minecraft:light_blue_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:blue_dye",
  ]);

  // DYE - black dye with milk to gray dye
  event.recipes.create.filling("minecraft:gray_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:black_dye",
  ]);

  // DYE - gray dye with milk to light gray dye
  event.recipes.create.filling("minecraft:light_gray_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:gray_dye",
  ]);

  // DYE - green dye with water to cyan dye
  event.recipes.create.filling("minecraft:cyan_dye", [
    Fluid.water(),
    "2x minecraft:green_dye",
  ]);

  // DYE - red dye with milk to pink dye
  event.recipes.create.filling("minecraft:pink_dye", [
    Fluid.of("minecraft:milk", 50),
    "minecraft:red_dye",
  ]);

  // DYE - red dye with water to purple dye
  event.recipes.create.filling("minecraft:purple_dye", [
    Fluid.water(),
    "2x minecraft:red_dye",
  ]);

  // DYE - white dye with water to light blue dye
  event.recipes.create.filling("minecraft:light_blue_dye", [
    Fluid.water(),
    "2x minecraft:white_dye",
  ]);

  // ALLOY - gold ingot from ingots and honey
  event.recipes.create.filling("minecraft:gold_ingot", [
    Fluid.of("create:honey", 50),
    "#forge:ingots",
  ]);

  // ALLOY - copper ingot from ingots and chocolate
  event.recipes.create.filling("minecraft:copper_ingot", [
    Fluid.of("create:chocolate", 100),
    "#forge:ingots",
  ]);

  // ORE - coal ore from stone and ink
  event.recipes.create.filling("minecraft:coal_ore", [
    Fluid.of("create_enchantment_industry:ink", 200),
    "minecraft:stone",
  ]);

  // FOOD - blaze cake (cheaper)
  event.remove({ id: "create:filling/blaze_cake" });
  event.recipes.create.filling("create:blaze_cake", [
    Fluid.of("minecraft:lava", 10),
    "create:blaze_cake_base",
  ]);

  // FOOD - cookie from dough and chocolate
  event.remove({ output: "minecraft:cookie" });
  event.recipes.create.filling("8x minecraft:cookie", [
    Fluid.of("create:chocolate", 100),
    "create:dough",
  ]);

  // CRAFT - honeycomb from silicon and honey
  event.recipes.create.filling("minecraft:honeycomb", [
    Fluid.of("create:honey", 750),
    "ae2:silicon",
  ]);

  // SLIME - slime from silicon and XP
  event.recipes.create.filling("minecraft:slime_ball", [
    Fluid.of("create_enchantment_industry:experience", 1),
    "ae2:silicon",
  ]);

  // CRAFT - rotten flesh to leather with regen potion
  event.recipes.create.filling("minecraft:leather", [
    Fluid.of("create:potion", 50, { Potion: "minecraft:regeneration" }),
    "minecraft:rotten_flesh",
  ]);

  // TERRAIN - netherrack from cobblestone and healing potion
  event.recipes.create.filling("minecraft:netherrack", [
    Fluid.of("create:potion", 5, { Potion: "minecraft:healing" }),
    "minecraft:cobblestone",
  ]);

  // AE2 - quartz bud growing (medium)
  event.recipes.create.filling("ae2:medium_quartz_bud", [
    Fluid.water(),
    "ae2:small_quartz_bud",
  ]);

  // AE2 - quartz bud growing (large)
  event.recipes.create.filling("ae2:large_quartz_bud", [
    Fluid.water(),
    "ae2:medium_quartz_bud",
  ]);

  // AE2 - quartz bud growing (cluster)
  event.recipes.create.filling("ae2:quartz_cluster", [
    Fluid.water(),
    "ae2:large_quartz_bud",
  ]);
});
