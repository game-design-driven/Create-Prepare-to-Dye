//priority: 1
//Create Prepare to Dye 2 - Crushing Recipes

ServerEvents.recipes((event) => {
  // DYE - carrot to orange/red/yellow dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:orange_dye").withChance(0.55),
      Item.of("minecraft:red_dye").withChance(0.25),
      Item.of("minecraft:yellow_dye").withChance(0.25),
    ],
    "#forge:crops/carrot"
  );

  // DYE - cocoa beans to brown dye
  event.recipes.create.crushing(
    ["minecraft:brown_dye", Item.of("quark:root_item").withChance(0.25)],
    "minecraft:cocoa_beans"
  );

  // DYE - coal to black/gray dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:black_dye").withChance(0.50),
      Item.of("minecraft:gray_dye").withChance(0.25),
    ],
    "minecraft:coal"
  );

  // DYE - charcoal to gray/black dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:gray_dye").withChance(0.25),
      Item.of("minecraft:black_dye").withChance(0.05),
    ],
    "minecraft:charcoal"
  );

  // DYE - ink sac to black/light blue/light gray dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:black_dye").withChance(0.50),
      Item.of("minecraft:light_blue_dye").withChance(0.25),
      Item.of("minecraft:light_gray_dye").withChance(0.20),
    ],
    "minecraft:ink_sac"
  );

  // DYE - lilac to magenta/purple dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:magenta_dye").withChance(0.80),
      Item.of("minecraft:purple_dye").withChance(0.40),
    ],
    "minecraft:lilac"
  );

  // DYE - bone meal to white/light gray/gray dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:white_dye").withChance(0.25),
      Item.of("minecraft:light_gray_dye").withChance(0.10),
      Item.of("minecraft:gray_dye").withChance(0.10),
    ],
    "minecraft:bone_meal"
  );

  // DYE - bone to bone meal and dyes
  event.recipes.create.crushing(
    [
      "2x minecraft:bone_meal",
      Item.of("minecraft:white_dye").withChance(0.25),
      Item.of("minecraft:pink_dye").withChance(0.25),
    ],
    "minecraft:bone"
  );

  // DYE - meat to red dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.40),
      Item.of("minecraft:bone_meal").withChance(0.15),
    ],
    "#forge:meat"
  );

  // DYE - cinder flour to red dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.50),
      Item.of("minecraft:redstone").withChance(0.15),
      Item.of("minecraft:quartz").withChance(0.01),
    ],
    "create:cinder_flour"
  );

  // DYE - nether wart to red dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.60),
      Item.of("minecraft:redstone").withChance(0.50),
    ],
    "#forge:crops/nether_wart"
  );

  // DYE - red mushroom to red dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.50),
      Item.of("minecraft:redstone").withChance(0.15),
    ],
    "minecraft:red_mushroom"
  );

  // DYE - ash to gray/white/light gray dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:gray_dye").withChance(0.50),
      Item.of("minecraft:white_dye").withChance(0.20),
      Item.of("minecraft:light_gray_dye").withChance(0.10),
    ],
    "supplementaries:ash"
  );

  // DYE - glow ink sac to light blue dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:light_blue_dye").withChance(0.30),
      Item.of("minecraft:glowstone_dust").withChance(0.30),
      Item.of("minecraft:black_dye").withChance(0.20),
    ],
    "minecraft:glow_ink_sac"
  );

  // DYE - popped chorus fruit to purple dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:purple_dye").withChance(0.25),
      Item.of("minecraft:string").withChance(0.25),
      Item.of("minecraft:end_stone").withChance(0.02),
    ],
    "minecraft:popped_chorus_fruit"
  );

  // DYE - quartz to redstone/white dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:redstone").withChance(0.50),
      Item.of("minecraft:quartz").withChance(0.25),
      Item.of("minecraft:white_dye").withChance(0.25),
    ],
    "minecraft:quartz"
  );

  // DYE - porkchop to pink/red dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:pink_dye").withChance(0.75),
      Item.of("minecraft:red_dye").withChance(0.25),
    ],
    "minecraft:porkchop"
  );

  // DYE - beef to red/pink dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.75),
      Item.of("minecraft:pink_dye").withChance(0.25),
    ],
    "minecraft:beef"
  );

  // DYE - egg to red/yellow dye and feathers
  event.recipes.create.crushing(
    [
      Item.of("minecraft:red_dye").withChance(0.05),
      Item.of("minecraft:yellow_dye").withChance(0.15),
      Item.of("minecraft:feather").withChance(0.15),
    ],
    "minecraft:egg"
  );

  // FOOD - wheat to flour
  event.recipes.create.crushing(
    ["create:wheat_flour", Item.of("minecraft:wheat_seeds").withChance(0.25)],
    "#forge:crops/wheat"
  );

  // FOOD - sugar cane to sugar
  event.recipes.create.crushing(
    [
      Item.of("minecraft:sugar").withChance(0.10),
      Item.of("minecraft:lime_dye").withChance(0.01),
    ],
    "minecraft:sugar_cane"
  );

  // ORE - sandstone to sand
  event.recipes.create.crushing(
    ["2x minecraft:sand", Item.of("minecraft:stick").withChance(0.25)],
    "#forge:sandstone"
  );

  // ORE - gravel to sand/flint/clay (replaces default)
  event.remove({ id: "create:crushing/gravel" });
  event.recipes.create.crushing(
    [
      Item.of("minecraft:sand").withChance(0.55),
      Item.of("minecraft:flint").withChance(0.10),
      Item.of("minecraft:clay_ball").withChance(0.05),
    ],
    "minecraft:gravel"
  );

  // ORE - soul sand to brown dye and quartz
  event.recipes.create.crushing(
    [
      Item.of("minecraft:brown_dye").withChance(0.30),
      Item.of("minecraft:sand").withChance(0.25),
      Item.of("ae2:large_quartz_bud").withChance(0.10),
    ],
    "minecraft:soul_sand"
  );

  // ORE - netherrack to cinder flour (replaces default)
  event.remove({ id: "create:crushing/netherrack" });
  event.recipes.create.crushing(
    [
      Item.of("create:cinder_flour").withChance(0.15),
      Item.of("minecraft:soul_sand").withChance(0.10),
      Item.of("minecraft:cobblestone").withChance(0.10),
    ],
    "minecraft:netherrack"
  );

  // ORE - raw iron to crushed (replaces default)
  event.remove({ id: "create:crushing/raw_iron" });
  event.recipes.create.crushing(
    ["create:crushed_raw_iron", Item.of("create:experience_nugget").withChance(0.10)],
    "minecraft:raw_iron"
  );

  // ORE - raw copper to crushed (replaces default)
  event.remove({ id: "create:crushing/raw_copper" });
  event.recipes.create.crushing(
    ["create:crushed_raw_copper", Item.of("create:experience_nugget").withChance(0.20)],
    "minecraft:raw_copper"
  );

  // ORE - raw gold to crushed (replaces default)
  event.remove({ id: "create:crushing/raw_gold" });
  event.recipes.create.crushing(
    ["create:crushed_raw_gold", Item.of("create:experience_nugget").withChance(0.40)],
    "minecraft:raw_gold"
  );

  // ORE - coal ore to coal (replaces default)
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

  // ORE - iron ore to crushed (replaces default)
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

  // ORE - diorite to quartz bud (replaces default)
  event.remove({ id: "create:crushing/diorite" });
  event.recipes.create.crushing(
    [Item.of("ae2:small_quartz_bud").withChance(0.10)],
    "minecraft:diorite"
  );

  // ORE - calcite to bone meal/cobblestone/quartz
  event.remove({ id: "create:milling/calcite" });
  event.recipes.create.crushing(
    [
      Item.of("minecraft:bone_meal").withChance(0.20),
      Item.of("minecraft:cobblestone").withChance(0.20),
      Item.of("minecraft:quartz").withChance(0.05),
    ],
    "minecraft:calcite"
  );

  // ORE - nether brick to copper/netherrack/nether wart
  event.recipes.create.crushing(
    [
      Item.of("minecraft:copper_ingot").withChance(0.40),
      Item.of("minecraft:netherrack").withChance(0.25),
      Item.of("minecraft:nether_wart").withChance(0.10),
    ],
    "minecraft:nether_brick"
  );

  // ORE - dirt to sand/clay
  event.recipes.create.crushing(
    [
      Item.of("minecraft:sand").withChance(0.10),
      Item.of("minecraft:clay").withChance(0.10),
    ],
    "minecraft:dirt"
  );

  // SLIME - magma cream to slime ball/blaze powder
  event.recipes.create.crushing(
    [
      Item.of("minecraft:slime_ball").withChance(0.50),
      Item.of("minecraft:blaze_powder").withChance(0.25),
      Item.of("minecraft:red_dye").withChance(0.04),
    ],
    "minecraft:magma_cream"
  );

  // RECYCLING - copper blocks to orange dye
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

  // RECYCLING - oxidized copper to light blue/green/lime dye
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

  // RECYCLING - iron to gray/white dye
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

  // RECYCLING - gold block to yellow dye
  event.recipes.create.crushing(
    [
      Item.of("3x minecraft:yellow_dye").withChance(0.50),
      Item.of("2x minecraft:yellow_dye").withChance(0.20),
    ],
    "minecraft:gold_block"
  );

  // RECYCLING - diamond block to light blue dye
  event.recipes.create.crushing(
    [Item.of("3x minecraft:light_blue_dye").withChance(0.50)],
    "minecraft:diamond_block"
  );

  // RECYCLING - emerald block to green/lime dye
  event.recipes.create.crushing(
    ["2x minecraft:green_dye", Item.of("minecraft:lime_dye").withChance(0.25)],
    "minecraft:emerald_block"
  );

  // RECYCLING - lapis block to blue dye
  event.recipes.create.crushing(
    [Item.of("minecraft:blue_dye").withChance(0.50)],
    "minecraft:lapis_block"
  );

  // RECYCLING - crossbow to string/planks
  event.recipes.create.crushing(
    [
      Item.of("minecraft:string").withChance(0.15),
      Item.of("minecraft:dark_oak_planks").withChance(0.10),
    ],
    "minecraft:crossbow"
  );

  // RECYCLING - enchanted book to paper/XP
  event.recipes.create.crushing(
    [
      Item.of("minecraft:paper").withChance(0.75),
      Item.of("create:experience_nugget").withChance(0.75),
    ],
    Item.of("minecraft:enchanted_book").weakNBT()
  );

  // AE2 - energy cell recycling
  event.recipes.create.crushing(
    [
      Item.of("9x minecraft:quartz").withChance(0.75),
      Item.of("4x minecraft:redstone").withChance(0.50),
      Item.of("minecraft:sand").withChance(0.40),
    ],
    "ae2:energy_cell"
  );

  // TREES - oak leaves to apples, sticks, dye
  event.recipes.create.crushing(
    [
      Item.of("minecraft:apple").withChance(0.05),
      Item.of("minecraft:stick").withChance(0.05),
      Item.of("minecraft:gray_dye").withChance(0.05),
    ],
    "minecraft:oak_leaves"
  );
});
