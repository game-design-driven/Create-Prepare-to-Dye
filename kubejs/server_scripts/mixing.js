//priority: 1
//Create Prepare to Dye 2 - Mixing Recipes

ServerEvents.recipes((event) => {
  // Tomato sauce - TODO: needs salt mod or alternative ingredient
  // event.recipes.create
  //   .mixing(Fluid.of("ptdye:tomato_sauce", 50), ["ptdye:tomato", "salt:salt"])
  //   .heated();

  // Dough (replaces default)
  event.remove({ id: "create:crafting/appliances/dough" });
  event.remove({ id: "create:mixing/dough_by_mixing" });
  event.recipes.create.mixing("create:dough", [
    "create:wheat_flour",
    Fluid.water(50),
  ]);

  // Green dye from seeds
  event.recipes.create.mixing("minecraft:green_dye", [
    "4x #forge:seeds",
    Fluid.water(1000),
  ]);

  // Brown dye from seeds (heated)
  event.recipes.create
    .mixing("minecraft:brown_dye", ["4x #forge:seeds", Fluid.water(1000)])
    .heated();

  // White dye from flour and milk
  event.recipes.create.mixing("2x minecraft:white_dye", [
    "#forge:flour/wheat",
    Fluid.of("minecraft:milk", 250),
  ]);

  // Light blue dye from glow ink
  event.recipes.create.mixing("minecraft:light_blue_dye", [
    "2x minecraft:glow_ink_sac",
    "#forge:dyes",
  ]);

  // Ornate iron window
  event.recipes.create.mixing("16x create:ornate_iron_window", [
    "#forge:glass",
    "16x quark:iron_plate",
  ]);

  // Tool parts
  event.recipes.create.mixing("2x ptdye:tool_parts", [
    "#forge:nuggets/gold",
    "2x create:iron_sheet",
    "#forge:rods/wooden",
  ]);

  // Andesite alloy recipes
  let grayDye = Ingredient.of("minecraft:gray_dye")
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
  event.recipes.create.mixing("8x create:andesite_alloy", [
    "#forge:ingots/manasteel",
    "minecraft:andesite",
    grayDye,
  ]);
  event.recipes.create.mixing("8x create:andesite_alloy", [
    "#forge:ingots/copper",
    "6x minecraft:andesite",
  ]);

  // Brass/Gold from iron and copper
  event.recipes.create
    .mixing("2x minecraft:gold_ingot", [
      "#forge:ingots/iron",
      "#forge:ingots/copper",
    ])
    .heated();
  event.recipes.create.mixing("2x minecraft:gold_ingot", [
    "#forge:ingots/manasteel",
    "#forge:ingots/copper",
  ]);

  // Crushed ore processing
  event.recipes.create.mixing(
    ["10x create:crushed_raw_iron", Fluid.of("minecraft:milk", 10)],
    ["8x minecraft:raw_iron", "4x create:limestone", Fluid.water(100)]
  );
  event.recipes.create.mixing(
    ["8x create:crushed_raw_iron", Fluid.of("minecraft:milk", 50)],
    ["10x minecraft:raw_iron", "4x create:scorchia", Fluid.water(250)]
  );
  event.recipes.create.mixing(
    ["10x create:crushed_raw_copper", Fluid.of("create:chocolate", 10)],
    ["8x minecraft:raw_copper", "4x create:limestone", Fluid.water(100)]
  );
  event.recipes.create.mixing(
    ["8x create:crushed_raw_copper", Fluid.of("create:chocolate", 50)],
    ["10x minecraft:raw_copper", "4x create:scorchia", Fluid.water(250)]
  );
  event.recipes.create.mixing(
    ["10x create:crushed_raw_gold", Fluid.of("create:honey", 10)],
    ["8x minecraft:raw_gold", "4x create:limestone", Fluid.water(100)]
  );
  event.recipes.create.mixing(
    ["8x create:crushed_raw_gold", Fluid.of("create:honey", 50)],
    ["10x minecraft:raw_gold", "4x create:scorchia", Fluid.water(250)]
  );

  // Slime from dough and lime
  event.recipes.create
    .mixing("3x minecraft:slime_ball", ["3x #forge:dough", "minecraft:lime_dye"])
    .heated();

  // Slime from silicon
  event.recipes.create.mixing("2x minecraft:slime_ball", [
    "ae2:silicon",
    "minecraft:lime_dye",
  ]);

  // Revive dirt
  event.recipes.create.mixing("minecraft:dirt", [
    "minecraft:coarse_dirt",
    "#forge:fertilizer",
  ]);

  // Ghast tear
  event.recipes.create.mixing("4x minecraft:ghast_tear", [
    "botania:rune_sloth",
    "botania:rune_air",
  ]);

  // Sponge
  event.recipes.create
    .mixing("minecraft:sponge", [
      "#minecraft:leaves",
      "9x #forge:plastic",
    ])
    .heated();

  // Sugar from honey
  event.recipes.create
    .mixing(["3x minecraft:sugar", Item.of("3x minecraft:sugar").withChance(0.50)], [
      Fluid.of("create:honey", 250),
    ])
    .heated();

  // Experience from organic mass - TODO: Uncomment when kubejs fluids are registered
  // event.recipes.create
  //   .mixing(Fluid.of("create_enchantment_industry:experience", 10), [
  //     Fluid.of("kubejs:organic_mass", 200),
  //     Fluid.of("minecraft:milk", 50),
  //   ])
  //   .heated();

  // Sugar to white dye
  event.recipes.create.mixing("minecraft:white_dye", ["4x minecraft:sugar"]);

  // Wax recipes
  event.recipes.create.mixing("minecraft:honeycomb", [
    "9x ae2:silicon",
    "minecraft:yellow_dye",
  ]);
  event.recipes.create
    .mixing("minecraft:honeycomb", [
      "3x ae2:silicon",
      "4x minecraft:yellow_dye",
    ])
    .heated();

  // Powder into sand
  event.recipes.create.mixing("8x minecraft:sand", [
    "8x #forge:concrete_powders",
    "supplementaries:soap",
  ]);
});
