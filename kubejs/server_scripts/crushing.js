//priority: 1
//Create Prepare to Dye 2 - Crushing Recipes

ServerEvents.recipes((event) => {
  // Carrot crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:orange_dye").withChance(0.55),
      Item.of("minecraft:red_dye").withChance(0.25),
      Item.of("minecraft:yellow_dye").withChance(0.25),
    ],
    "#forge:crops/carrot"
  );

  // Cocoa beans crushing
  event.recipes.create.crushing(
    ["minecraft:brown_dye", Item.of("quark:root_item").withChance(0.25)],
    "minecraft:cocoa_beans"
  );

  // Sandstone crushing
  event.recipes.create.crushing(
    ["2x minecraft:sand", Item.of("minecraft:stick").withChance(0.25)],
    "#forge:sandstone"
  );

  // Gravel crushing (replaces default)
  event.remove({ id: "create:crushing/gravel" });
  event.recipes.create.crushing(
    [
      Item.of("minecraft:sand").withChance(0.55),
      Item.of("minecraft:flint").withChance(0.10),
      Item.of("minecraft:clay_ball").withChance(0.05),
    ],
    "minecraft:gravel"
  );

  // Coal crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:black_dye").withChance(0.50),
      Item.of("minecraft:gray_dye").withChance(0.25),
    ],
    "minecraft:coal"
  );

  // Charcoal crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:gray_dye").withChance(0.25),
      Item.of("minecraft:black_dye").withChance(0.05),
    ],
    "minecraft:charcoal"
  );

  // Ink sac crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:black_dye").withChance(0.50),
      Item.of("minecraft:light_blue_dye").withChance(0.25),
      Item.of("minecraft:light_gray_dye").withChance(0.20),
    ],
    "minecraft:ink_sac"
  );

  // Lilac crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:magenta_dye").withChance(0.80),
      Item.of("minecraft:purple_dye").withChance(0.40),
    ],
    "minecraft:lilac"
  );

  // Soul sand crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:brown_dye").withChance(0.30),
      Item.of("minecraft:sand").withChance(0.25),
      Item.of("ae2:large_quartz_bud").withChance(0.10),
    ],
    "minecraft:soul_sand"
  );

  // Bone meal crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:white_dye").withChance(0.25),
      Item.of("minecraft:light_gray_dye").withChance(0.10),
      Item.of("minecraft:gray_dye").withChance(0.10),
    ],
    "minecraft:bone_meal"
  );

  // Bone crushing
  event.recipes.create.crushing(
    [
      "2x minecraft:bone_meal",
      Item.of("minecraft:white_dye").withChance(0.25),
      Item.of("minecraft:pink_dye").withChance(0.25),
    ],
    "minecraft:bone"
  );

  // Wheat crushing
  event.recipes.create.crushing(
    ["create:wheat_flour", Item.of("minecraft:wheat_seeds").withChance(0.25)],
    "#forge:crops/wheat"
  );

  // Meat crushing for red dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.40),
      Item.of("minecraft:bone_meal").withChance(0.15),
    ],
    "#forge:meat"
  );

  // Netherrack crushing (replaces default)
  event.remove({ id: "create:crushing/netherrack" });
  event.recipes.create.crushing(
    [
      Item.of("create:cinder_flour").withChance(0.15),
      Item.of("minecraft:soul_sand").withChance(0.10),
      Item.of("minecraft:cobblestone").withChance(0.10),
    ],
    "minecraft:netherrack"
  );

  // Cinder flour crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.50),
      Item.of("minecraft:redstone").withChance(0.15),
      Item.of("minecraft:quartz").withChance(0.01),
    ],
    "create:cinder_flour"
  );

  // Nether wart crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.60),
      Item.of("minecraft:redstone").withChance(0.50),
    ],
    "#forge:crops/nether_wart"
  );

  // Red mushroom crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.50),
      Item.of("minecraft:redstone").withChance(0.15),
    ],
    "minecraft:red_mushroom"
  );

  // Ash crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:gray_dye").withChance(0.50),
      Item.of("minecraft:white_dye").withChance(0.20),
      Item.of("minecraft:light_gray_dye").withChance(0.10),
    ],
    "supplementaries:ash"
  );

  // Glow ink sac crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:light_blue_dye").withChance(0.30),
      Item.of("minecraft:glowstone_dust").withChance(0.30),
      Item.of("minecraft:black_dye").withChance(0.20),
    ],
    "minecraft:glow_ink_sac"
  );

  // Popped chorus fruit crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:purple_dye").withChance(0.25),
      Item.of("minecraft:string").withChance(0.25),
      Item.of("minecraft:end_stone").withChance(0.02),
    ],
    "minecraft:popped_chorus_fruit"
  );

  // Recycling - Copper blocks
  event.recipes.create.crushing(
    [Item.of("minecraft:orange_dye").withChance(0.25)],
    "minecraft:cut_copper"
  );
  event.recipes.create.crushing(
    [Item.of("minecraft:orange_dye").withChance(0.75)],
    "minecraft:copper_block"
  );
  event.recipes.create.crushing(
    [Item.of("minecraft:orange_dye").withChance(0.05)],
    "create:copper_shingles"
  );
  event.recipes.create.crushing(
    [Item.of("minecraft:orange_dye").withChance(0.05)],
    "create:copper_tiles"
  );
  event.recipes.create.crushing(
    [Item.of("minecraft:light_blue_dye").withChance(0.05)],
    "create:oxidized_copper_shingles"
  );
  event.recipes.create.crushing(
    [Item.of("minecraft:light_blue_dye").withChance(0.05)],
    "create:oxidized_copper_tiles"
  );
  event.recipes.create.crushing(
    [
      Item.of("minecraft:light_blue_dye").withChance(0.15),
      Item.of("minecraft:green_dye").withChance(0.15),
      Item.of("minecraft:lime_dye").withChance(0.15),
    ],
    "minecraft:oxidized_copper"
  );
  event.recipes.create.crushing(
    [
      Item.of("minecraft:light_blue_dye").withChance(0.02),
      Item.of("minecraft:green_dye").withChance(0.02),
      Item.of("minecraft:lime_dye").withChance(0.10),
    ],
    "minecraft:oxidized_cut_copper"
  );
  event.recipes.create.crushing(
    [
      Item.of("minecraft:light_blue_dye").withChance(0.02),
      Item.of("minecraft:green_dye").withChance(0.02),
      Item.of("minecraft:lime_dye").withChance(0.10),
    ],
    "minecraft:weathered_copper"
  );

  // Recycling - Iron
  event.recipes.create.crushing(
    [Item.of("minecraft:gray_dye").withChance(0.08)],
    "quark:iron_plate"
  );
  event.recipes.create.crushing(
    [Item.of("minecraft:white_dye").withChance(0.90)],
    "minecraft:iron_block"
  );
  event.recipes.create.crushing(
    [Item.of("minecraft:white_dye").withChance(0.05)],
    "minecraft:iron_bars"
  );

  // Recycling - Gold
  event.recipes.create.crushing(
    [
      Item.of("3x minecraft:yellow_dye").withChance(0.50),
      Item.of("2x minecraft:yellow_dye").withChance(0.20),
    ],
    "minecraft:gold_block"
  );

  // Recycling - Diamond
  event.recipes.create.crushing(
    [Item.of("3x minecraft:light_blue_dye").withChance(0.50)],
    "minecraft:diamond_block"
  );

  // Recycling - Emerald
  event.recipes.create.crushing(
    ["2x minecraft:green_dye", Item.of("minecraft:lime_dye").withChance(0.25)],
    "minecraft:emerald_block"
  );

  // Recycling - Lapis
  event.recipes.create.crushing(
    [Item.of("minecraft:blue_dye").withChance(0.50)],
    "minecraft:lapis_block"
  );

  // Recycling - Crossbow
  event.recipes.create.crushing(
    [
      Item.of("minecraft:string").withChance(0.15),
      Item.of("minecraft:dark_oak_planks").withChance(0.10),
    ],
    "minecraft:crossbow"
  );

  // Raw ore crushing (reduced XP)
  event.remove({ id: "create:crushing/raw_iron" });
  event.remove({ id: "create:crushing/raw_copper" });
  event.remove({ id: "create:crushing/raw_gold" });
  event.recipes.create.crushing(
    ["create:crushed_raw_iron", Item.of("create:experience_nugget").withChance(0.10)],
    "minecraft:raw_iron"
  );
  event.recipes.create.crushing(
    ["create:crushed_raw_copper", Item.of("create:experience_nugget").withChance(0.20)],
    "minecraft:raw_copper"
  );
  event.recipes.create.crushing(
    ["create:crushed_raw_gold", Item.of("create:experience_nugget").withChance(0.40)],
    "minecraft:raw_gold"
  );

  // Ore crushing
  event.remove({ id: "create:crushing/coal_ore" });
  event.remove({ id: "create:crushing/deepslate_coal_ore" });
  event.recipes.create.crushing(
    [
      "minecraft:coal",
      Item.of("2x minecraft:coal").withChance(0.75),
      Item.of("create:experience_nugget").withChance(0.75),
      Item.of("supplementaries:ash").withChance(0.30),
    ],
    "#forge:ores/coal"
  );

  event.remove({ id: "create:crushing/iron_ore" });
  event.remove({ id: "create:crushing/deepslate_iron_ore" });
  event.recipes.create.crushing(
    [
      "create:crushed_raw_iron",
      Item.of("2x create:crushed_raw_iron").withChance(0.75),
      Item.of("create:experience_nugget").withChance(0.75),
      Item.of("supplementaries:ash").withChance(0.30),
    ],
    "#forge:ores/iron"
  );

  // Diorite crushing for quartz
  event.remove({ id: "create:crushing/diorite" });
  event.recipes.create.crushing(
    [Item.of("ae2:small_quartz_bud").withChance(0.10)],
    "minecraft:diorite"
  );

  // Calcite crushing
  event.remove({ id: "create:milling/calcite" });
  event.recipes.create.crushing(
    [
      Item.of("minecraft:bone_meal").withChance(0.20),
      Item.of("minecraft:cobblestone").withChance(0.20),
      Item.of("minecraft:quartz").withChance(0.05),
    ],
    "minecraft:calcite"
  );

  // Nether brick crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:copper_ingot").withChance(0.40),
      Item.of("minecraft:netherrack").withChance(0.25),
      Item.of("minecraft:nether_wart").withChance(0.10),
    ],
    "minecraft:nether_brick"
  );

  // Meat crushing for dyes
  event.recipes.create.crushing(
    [
      Item.of("minecraft:pink_dye").withChance(0.75),
      Item.of("minecraft:red_dye").withChance(0.25),
    ],
    "minecraft:porkchop"
  );
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.75),
      Item.of("minecraft:pink_dye").withChance(0.25),
    ],
    "minecraft:beef"
  );

  // Quartz crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:redstone").withChance(0.50),
      Item.of("minecraft:quartz").withChance(0.25),
      Item.of("minecraft:white_dye").withChance(0.25),
    ],
    "minecraft:quartz"
  );

  // Dirt crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:sand").withChance(0.10),
      Item.of("minecraft:clay").withChance(0.10),
    ],
    "minecraft:dirt"
  );

  // Magma cream crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:slime_ball").withChance(0.50),
      Item.of("minecraft:blaze_powder").withChance(0.25),
      Item.of("minecraft:red_dye").withChance(0.04),
    ],
    "minecraft:magma_cream"
  );

  // Sugar cane crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:sugar").withChance(0.10),
      Item.of("minecraft:lime_dye").withChance(0.01),
    ],
    "minecraft:sugar_cane"
  );

  // Egg crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.05),
      Item.of("minecraft:yellow_dye").withChance(0.15),
      Item.of("minecraft:feather").withChance(0.15),
    ],
    "minecraft:egg"
  );

  // Enchanted book crushing
  event.recipes.create.crushing(
    [
      Item.of("minecraft:paper").withChance(0.75),
      Item.of("create:experience_nugget").withChance(0.75),
    ],
    Item.of("minecraft:enchanted_book").weakNBT()
  );

  // AE2 energy cell recycling
  event.recipes.create.crushing(
    [
      Item.of("9x minecraft:quartz").withChance(0.75),
      Item.of("4x minecraft:redstone").withChance(0.50),
      Item.of("minecraft:sand").withChance(0.40),
    ],
    "ae2:energy_cell"
  );
});
