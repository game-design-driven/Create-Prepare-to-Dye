//priority: 1
//Create Prepare to Dye 2 - Milling Recipes

ServerEvents.recipes((event) => {
  // DYE - carrot to orange dye
  event.recipes.create.milling("minecraft:orange_dye", "#forge:crops/carrot");

  // DYE - cocoa beans to brown dye (replaces default)
  event.remove({ id: "create:milling/cocoa_beans" });
  event.recipes.create.milling("minecraft:brown_dye", "minecraft:cocoa_beans");

  // DYE - coal to black dye (replaces default)
  event.remove({ id: "create:milling/coal" });
  event.remove({ id: "create:milling/charcoal" });
  event.recipes.create.milling("minecraft:black_dye", "minecraft:coal");

  // DYE - ink sac to black dye (replaces default)
  event.remove({ id: "create:milling/ink_sac" });
  event.recipes.create.milling("2x minecraft:black_dye", "minecraft:ink_sac");

  // DYE - lilac to magenta dye (replaces default)
  event.remove({ id: "create:milling/lilac" });
  event.recipes.create.milling("3x minecraft:magenta_dye", "minecraft:lilac");

  // DYE - soul sand to brown dye
  event.recipes.create.milling("minecraft:brown_dye", "minecraft:soul_sand");

  // DYE - bone meal to white dye (replaces default)
  event.remove({ id: "create:milling/bone_meal" });
  event.recipes.create.milling("minecraft:white_dye", "minecraft:bone_meal");

  // DYE - bone to bone meal (replaces default)
  event.remove({ id: "create:milling/bone" });
  event.recipes.create.milling(
    ["2x minecraft:bone_meal", Item.of("minecraft:bone_meal").withChance(0.50)],
    "minecraft:bone"
  );

  // DYE - apple to red dye
  event.recipes.create.milling("minecraft:red_dye", "minecraft:apple");

  // DYE - seeds to green/brown dye
  event.recipes.create.milling(
    [
      Item.of("minecraft:green_dye").withChance(0.05),
      Item.of("minecraft:brown_dye").withChance(0.05),
    ],
    "#forge:seeds"
  );

  // DYE - wheat flour to white dye
  event.recipes.create.milling(
    [Item.of("minecraft:white_dye").withChance(0.50)],
    "create:wheat_flour"
  );

  // DYE - lily of the valley to white dye (replaces default)
  event.remove({ id: "create:milling/lily_of_the_valley" });
  event.recipes.create.milling("3x minecraft:white_dye", "minecraft:lily_of_the_valley");

  // DYE - charcoal to gray dye
  event.recipes.create.milling("minecraft:gray_dye", "minecraft:charcoal");

  // DYE - meat to red dye
  event.recipes.create.milling(
    [Item.of("minecraft:red_dye").withChance(0.80)],
    "#forge:meat"
  );

  // DYE - cinder flour to red dye
  event.recipes.create.milling(
    [Item.of("minecraft:red_dye").withChance(0.80)],
    "create:cinder_flour"
  );

  // DYE - wart blocks to red dye
  event.recipes.create.milling("minecraft:red_dye", "#minecraft:wart_blocks");

  // DYE - red mushroom to red dye
  event.recipes.create.milling("minecraft:red_dye", "minecraft:red_mushroom");

  // DYE - ash to gray dye
  event.recipes.create.milling("minecraft:gray_dye", "supplementaries:ash");

  // DYE - glow ink sac to light blue dye
  event.recipes.create.milling(
    [
      Item.of("minecraft:light_blue_dye").withChance(0.50),
      Item.of("minecraft:glowstone_dust").withChance(0.25),
    ],
    "minecraft:glow_ink_sac"
  );

  // DYE - popped chorus fruit to purple dye
  event.recipes.create.milling(
    ["minecraft:purple_dye", Item.of("minecraft:string").withChance(0.10)],
    "minecraft:popped_chorus_fruit"
  );

  // DYE - quartz to redstone/white dye
  event.recipes.create.milling(
    [Item.of("minecraft:redstone").withChance(0.70), Item.of("minecraft:white_dye").withChance(0.05)],
    "minecraft:quartz"
  );

  // DYE - egg to yellow dye
  event.recipes.create.milling(
    [Item.of("minecraft:yellow_dye").withChance(0.20)],
    "minecraft:egg"
  );

  // FOOD - wheat to flour (replaces default)
  event.remove({ id: "create:milling/wheat" });
  event.recipes.create.milling("2x create:wheat_flour", "#forge:crops/wheat");

  // FOOD - sugar cane to sugar (replaces default)
  event.remove({ id: "create:milling/sugar_cane" });
  event.recipes.create.milling(
    [Item.of("minecraft:sugar").withChance(0.25)],
    "minecraft:sugar_cane"
  );

  // ORE - sandstone to sand (replaces default)
  event.remove({ id: "create:milling/sandstone" });
  event.recipes.create.milling(
    ["3x minecraft:sand", Item.of("minecraft:sand").withChance(0.50)],
    "#forge:sandstone"
  );

  // ORE - netherrack to cinder flour
  event.recipes.create.milling(
    [Item.of("create:cinder_flour").withChance(0.25)],
    "minecraft:netherrack"
  );

  // ORE - raw iron to crushed
  event.recipes.create.milling(
    ["create:crushed_raw_iron", Item.of("create:crushed_raw_iron").withChance(0.05)],
    "minecraft:raw_iron"
  );

  // ORE - raw copper to crushed
  event.recipes.create.milling(
    ["create:crushed_raw_copper", Item.of("create:crushed_raw_copper").withChance(0.05)],
    "minecraft:raw_copper"
  );

  // ORE - raw gold to crushed
  event.recipes.create.milling(
    ["create:crushed_raw_gold", Item.of("create:crushed_raw_gold").withChance(0.05)],
    "minecraft:raw_gold"
  );

  // ORE - crushed iron to nuggets
  event.recipes.create.milling("5x minecraft:iron_nugget", "create:crushed_raw_iron");

  // ORE - crushed copper to nuggets
  event.recipes.create.milling("8x create:copper_nugget", "create:crushed_raw_copper");

  // ORE - crushed gold to nuggets
  event.recipes.create.milling(
    ["3x minecraft:gold_nugget", Item.of("minecraft:gold_nugget").withChance(0.50)],
    "create:crushed_raw_gold"
  );

  // ORE - coal ore to coal
  event.recipes.create.milling("3x minecraft:coal", "#forge:ores/coal");

  // ORE - iron ore to crushed
  event.recipes.create.milling(
    ["2x create:crushed_raw_iron", Item.of("create:crushed_raw_iron").withChance(0.75)],
    "#forge:ores/iron"
  );

  // ORE - copper ore to crushed
  event.recipes.create.milling("6x create:crushed_raw_copper", "#forge:ores/copper");

  // ORE - dirt to sand
  event.recipes.create.milling([Item.of("minecraft:sand").withChance(0.20)], "minecraft:dirt");

  // ORE - redstone ore to redstone
  event.recipes.create.milling("7x minecraft:redstone", "minecraft:redstone_ore");

  // ORE - calcite to bone meal
  event.recipes.create.milling(
    [Item.of("minecraft:bone_meal").withChance(0.40)],
    "minecraft:calcite"
  );

  // RECYCLING - enchanted book to paper/XP
  event.recipes.create.milling(
    ["2x minecraft:paper", Item.of("create:experience_nugget").withChance(0.55)],
    Item.of("minecraft:enchanted_book").weakNBT()
  );

  // TREES - oak leaves to apples
  event.recipes.create.milling(
    [Item.of("minecraft:apple").withChance(0.20)],
    "minecraft:oak_leaves"
  );
});
