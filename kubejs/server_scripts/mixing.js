//priority: 1
//Create Prepare to Dye 2 - Mixing Recipes

ServerEvents.recipes((event) => {
  // FOOD - dough from flour and water (replaces default)
  event.remove({ id: "create:crafting/appliances/dough" });
  event.remove({ id: "create:mixing/dough_by_mixing" });
  event.recipes.create.mixing("create:dough", [
    "create:wheat_flour",
    Fluid.water(50),
  ]);

  // DYE - green dye from seeds and water
  event.recipes.create.mixing("minecraft:green_dye", [
    "4x #forge:seeds",
    Fluid.water(1000),
  ]);

  // DYE - brown dye from seeds and water (heated)
  event.recipes.create
    .mixing("minecraft:brown_dye", ["4x #forge:seeds", Fluid.water(1000)])
    .heated();

  // DYE - white dye from flour and milk
  event.recipes.create.mixing("2x minecraft:white_dye", [
    "#forge:flour/wheat",
    Fluid.of("minecraft:milk", 250),
  ]);

  // DYE - light blue dye from glow ink
  event.recipes.create.mixing("minecraft:light_blue_dye", [
    "2x minecraft:glow_ink_sac",
    "#forge:dyes",
  ]);

  // DYE - white dye from sugar
  event.recipes.create.mixing("minecraft:white_dye", ["4x minecraft:sugar"]);

  // ALLOY - ornate iron window from glass and iron plates
  event.recipes.create.mixing("16x create:ornate_iron_window", [
    "#forge:glass",
    "16x quark:iron_plate",
  ]);

  // ALLOY - tool parts from gold, iron sheets, and sticks
  event.recipes.create.mixing("2x ptdye:tool_parts", [
    "#forge:nuggets/gold",
    "2x create:iron_sheet",
    "#forge:rods/wooden",
  ]);

  // ALLOY - andesite alloy from gray dyes and iron
  var grayDye = Ingredient.of("minecraft:gray_dye")
    .or(Item.of("minecraft:light_gray_dye"))
    .or(Item.of("minecraft:black_dye"));
  event.recipes.create.mixing("8x create:andesite_alloy", [
    grayDye,
    grayDye,
    grayDye,
    grayDye,
    "#forge:ingots/iron",
    "minecraft:andesite",
  ]);

  // ALLOY - andesite alloy from manasteel
  event.recipes.create.mixing("8x create:andesite_alloy", [
    "#forge:ingots/manasteel",
    "minecraft:andesite",
    grayDye,
  ]);

  // ALLOY - andesite alloy from copper
  event.recipes.create.mixing("8x create:andesite_alloy", [
    "#forge:ingots/copper",
    "6x minecraft:andesite",
  ]);

  // ALLOY - brass/gold from iron and copper (heated)
  event.recipes.create
    .mixing("2x minecraft:gold_ingot", [
      "#forge:ingots/iron",
      "#forge:ingots/copper",
    ])
    .heated();

  // ALLOY - brass/gold from manasteel and copper
  event.recipes.create.mixing("2x minecraft:gold_ingot", [
    "#forge:ingots/manasteel",
    "#forge:ingots/copper",
  ]);

  // ORE - crushed iron processing (limestone method)
  event.recipes.create.mixing(
    ["10x create:crushed_raw_iron", Fluid.of("minecraft:milk", 10)],
    ["8x minecraft:raw_iron", "4x create:limestone", Fluid.water(100)]
  );

  // ORE - crushed iron processing (scorchia method)
  event.recipes.create.mixing(
    ["8x create:crushed_raw_iron", Fluid.of("minecraft:milk", 50)],
    ["10x minecraft:raw_iron", "4x create:scorchia", Fluid.water(250)]
  );

  // ORE - crushed copper processing (limestone method)
  event.recipes.create.mixing(
    ["10x create:crushed_raw_copper", Fluid.of("create:chocolate", 10)],
    ["8x minecraft:raw_copper", "4x create:limestone", Fluid.water(100)]
  );

  // ORE - crushed copper processing (scorchia method)
  event.recipes.create.mixing(
    ["8x create:crushed_raw_copper", Fluid.of("create:chocolate", 50)],
    ["10x minecraft:raw_copper", "4x create:scorchia", Fluid.water(250)]
  );

  // ORE - crushed gold processing (limestone method)
  event.recipes.create.mixing(
    ["10x create:crushed_raw_gold", Fluid.of("create:honey", 10)],
    ["8x minecraft:raw_gold", "4x create:limestone", Fluid.water(100)]
  );

  // ORE - crushed gold processing (scorchia method)
  event.recipes.create.mixing(
    ["8x create:crushed_raw_gold", Fluid.of("create:honey", 50)],
    ["10x minecraft:raw_gold", "4x create:scorchia", Fluid.water(250)]
  );

  // SLIME - slime from dough and lime dye (heated)
  event.recipes.create
    .mixing("3x minecraft:slime_ball", ["3x #forge:dough", "minecraft:lime_dye"])
    .heated();

  // SLIME - slime from silicon and lime dye
  event.recipes.create.mixing("2x minecraft:slime_ball", [
    "ae2:silicon",
    "minecraft:lime_dye",
  ]);

  // TERRAIN - revive dirt from coarse dirt and fertilizer
  event.recipes.create.mixing("minecraft:dirt", [
    "minecraft:coarse_dirt",
    "#forge:fertilizer",
  ]);

  // BOTANIA - ghast tear from runes
  event.recipes.create.mixing("4x minecraft:ghast_tear", [
    "botania:rune_sloth",
    "botania:rune_air",
  ]);

  // CRAFT - sponge from leaves and plastic (heated)
  event.recipes.create
    .mixing("minecraft:sponge", [
      "#minecraft:leaves",
      "9x #forge:plastic",
    ])
    .heated();

  // FOOD - sugar from honey (heated)
  event.recipes.create
    .mixing(["3x minecraft:sugar", Item.of("3x minecraft:sugar").withChance(0.50)], [
      Fluid.of("create:honey", 250),
    ])
    .heated();

  // CRAFT - honeycomb from silicon and yellow dye
  event.recipes.create.mixing("minecraft:honeycomb", [
    "9x ae2:silicon",
    "minecraft:yellow_dye",
  ]);

  // CRAFT - honeycomb from silicon and yellow dye (heated)
  event.recipes.create
    .mixing("minecraft:honeycomb", [
      "3x ae2:silicon",
      "4x minecraft:yellow_dye",
    ])
    .heated();

  // TERRAIN - powder into sand with soap
  event.recipes.create.mixing("8x minecraft:sand", [
    "8x #forge:concrete_powders",
    "supplementaries:soap",
  ]);
});
