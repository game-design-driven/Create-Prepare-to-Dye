//priority: 1
//Create Prepare to Dye 2 - Milling Recipes

ServerEvents.recipes((event) => {
  // Carrot milling
  event.recipes.create.milling("minecraft:orange_dye", "#forge:crops/carrot");

  // Cocoa beans milling (replaces default)
  event.remove({ id: "create:milling/cocoa_beans" });
  event.recipes.create.milling("minecraft:brown_dye", "minecraft:cocoa_beans");

  // Sandstone milling (replaces default)
  event.remove({ id: "create:milling/sandstone" });
  event.recipes.create.milling(
    ["3x minecraft:sand", Item.of("minecraft:sand").withChance(0.50)],
    "#forge:sandstone"
  );

  // Coal milling (replaces default)
  event.remove({ id: "create:milling/coal" });
  event.remove({ id: "create:milling/charcoal" });
  event.recipes.create.milling("minecraft:black_dye", "minecraft:coal");

  // Ink sac milling (replaces default)
  event.remove({ id: "create:milling/ink_sac" });
  event.recipes.create.milling("2x minecraft:black_dye", "minecraft:ink_sac");

  // Lilac milling (replaces default)
  event.remove({ id: "create:milling/lilac" });
  event.recipes.create.milling("3x minecraft:magenta_dye", "minecraft:lilac");

  // Soul sand milling
  event.recipes.create.milling("minecraft:brown_dye", "minecraft:soul_sand");

  // Bone meal milling (replaces default)
  event.remove({ id: "create:milling/bone_meal" });
  event.remove({ id: "create:milling/bone" });
  event.recipes.create.milling("minecraft:white_dye", "minecraft:bone_meal");
  event.recipes.create.milling(
    ["2x minecraft:bone_meal", Item.of("minecraft:bone_meal").withChance(0.50)],
    "minecraft:bone"
  );

  // Wheat milling (replaces default)
  event.remove({ id: "create:milling/wheat" });
  event.recipes.create.milling("2x create:wheat_flour", "#forge:crops/wheat");

  // Apple milling
  event.recipes.create.milling("minecraft:red_dye", "minecraft:apple");

  // Seeds milling
  event.recipes.create.milling(
    [
      Item.of("minecraft:green_dye").withChance(0.05),
      Item.of("minecraft:brown_dye").withChance(0.05),
    ],
    "#forge:seeds"
  );

  // Wheat flour milling
  event.recipes.create.milling(
    [Item.of("minecraft:white_dye").withChance(0.50)],
    "create:wheat_flour"
  );

  // Lily of the valley milling (replaces default)
  event.remove({ id: "create:milling/lily_of_the_valley" });
  event.recipes.create.milling("3x minecraft:white_dye", "minecraft:lily_of_the_valley");

  // Charcoal milling
  event.recipes.create.milling("minecraft:gray_dye", "minecraft:charcoal");

  // Meat milling
  event.recipes.create.milling(
    [Item.of("minecraft:red_dye").withChance(0.80)],
    "#forge:meat"
  );

  // Netherrack milling
  event.recipes.create.milling(
    [Item.of("create:cinder_flour").withChance(0.25)],
    "minecraft:netherrack"
  );

  // Cinder flour milling
  event.recipes.create.milling(
    [Item.of("minecraft:red_dye").withChance(0.80)],
    "create:cinder_flour"
  );

  // Wart blocks milling
  event.recipes.create.milling("minecraft:red_dye", "#minecraft:wart_blocks");

  // Red mushroom milling
  event.recipes.create.milling("minecraft:red_dye", "minecraft:red_mushroom");

  // Ash milling
  event.recipes.create.milling("minecraft:gray_dye", "supplementaries:ash");

  // Glow ink sac milling
  event.recipes.create.milling(
    [
      Item.of("minecraft:light_blue_dye").withChance(0.50),
      Item.of("minecraft:glowstone_dust").withChance(0.25),
    ],
    "minecraft:glow_ink_sac"
  );

  // Popped chorus fruit milling
  event.recipes.create.milling(
    ["minecraft:purple_dye", Item.of("minecraft:string").withChance(0.10)],
    "minecraft:popped_chorus_fruit"
  );

  // Raw ore milling
  event.recipes.create.milling(
    ["create:crushed_raw_iron", Item.of("create:crushed_raw_iron").withChance(0.05)],
    "minecraft:raw_iron"
  );
  event.recipes.create.milling(
    ["create:crushed_raw_copper", Item.of("create:crushed_raw_copper").withChance(0.05)],
    "minecraft:raw_copper"
  );
  event.recipes.create.milling(
    ["create:crushed_raw_gold", Item.of("create:crushed_raw_gold").withChance(0.05)],
    "minecraft:raw_gold"
  );

  // Crushed ore milling
  event.recipes.create.milling("5x minecraft:iron_nugget", "create:crushed_raw_iron");
  event.recipes.create.milling("8x create:copper_nugget", "create:crushed_raw_copper");
  event.recipes.create.milling(
    ["3x minecraft:gold_nugget", Item.of("minecraft:gold_nugget").withChance(0.50)],
    "create:crushed_raw_gold"
  );

  // Coal ore milling
  event.recipes.create.milling("3x minecraft:coal", "#forge:ores/coal");

  // Iron ore milling
  event.recipes.create.milling(
    ["2x create:crushed_raw_iron", Item.of("create:crushed_raw_iron").withChance(0.75)],
    "#forge:ores/iron"
  );

  // Copper ore milling
  event.recipes.create.milling("6x create:crushed_raw_copper", "#forge:ores/copper");

  // Quartz milling
  event.recipes.create.milling(
    [Item.of("minecraft:redstone").withChance(0.70), Item.of("minecraft:white_dye").withChance(0.05)],
    "minecraft:quartz"
  );

  // Dirt milling
  event.recipes.create.milling([Item.of("minecraft:sand").withChance(0.20)], "minecraft:dirt");

  // Redstone ore milling
  event.recipes.create.milling("7x minecraft:redstone", "minecraft:redstone_ore");

  // Calcite milling
  event.recipes.create.milling(
    [Item.of("minecraft:bone_meal").withChance(0.40)],
    "minecraft:calcite"
  );

  // Egg milling
  event.recipes.create.milling(
    [Item.of("minecraft:yellow_dye").withChance(0.20)],
    "minecraft:egg"
  );

  // Sugar cane milling (replaces default)
  event.remove({ id: "create:milling/sugar_cane" });
  event.recipes.create.milling(
    [Item.of("minecraft:sugar").withChance(0.25)],
    "minecraft:sugar_cane"
  );

  // Enchanted book milling
  event.recipes.create.milling(
    ["2x minecraft:paper", Item.of("create:experience_nugget").withChance(0.55)],
    Item.of("minecraft:enchanted_book").weakNBT()
  );
});
