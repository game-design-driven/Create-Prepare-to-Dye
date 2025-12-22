//priority: 1
//Create Prepare to Dye 2 - Botania Recipes

ServerEvents.recipes((event) => {
  // Mana infusion recipes
  event.custom({
    type: "botania:mana_infusion",
    input: { tag: "forge:dyes" },
    output: { item: "minecraft:cyan_dye" },
    mana: 300,
    catalyst: { type: "block", block: "minecraft:warped_roots" },
  });

  event.custom({
    type: "botania:mana_infusion",
    input: { item: "minecraft:gunpowder" },
    output: { item: "minecraft:gray_dye" },
    mana: 300,
  });

  event.custom({
    type: "botania:mana_infusion",
    input: { item: "minecraft:sugar_cane" },
    output: { item: "minecraft:kelp" },
    mana: 500,
  });

  event.custom({
    type: "botania:mana_infusion",
    input: { item: "minecraft:kelp" },
    output: { item: "minecraft:sugar_cane" },
    mana: 300,
  });

  event.custom({
    type: "botania:mana_infusion",
    input: { item: "minecraft:granite" },
    output: { item: "minecraft:pointed_dripstone" },
    mana: 500,
  });

  event.custom({
    type: "botania:mana_infusion",
    input: { item: "quark:chorus_fruit_block" },
    output: { item: "minecraft:crimson_stem" },
    mana: 500,
  });

  // Reduce manasteel mana cost
  event.remove({ id: "botania:mana_infusion/manasteel" });
  event.remove({ id: "botania:mana_infusion/manasteel_block" });
  event.custom({
    type: "botania:mana_infusion",
    input: { tag: "forge:ingots/iron" },
    output: { item: "botania:manasteel_ingot" },
    mana: 1000,
  });
  event.custom({
    type: "botania:mana_infusion",
    input: { tag: "forge:storage_blocks/iron" },
    output: { item: "botania:manasteel_block" },
    mana: 9000,
  });

  // Livingrock from terracotta (pure daisy)
  event.custom({
    type: "botania:pure_daisy",
    input: { type: "block", block: "minecraft:white_terracotta" },
    output: { name: "botania:livingrock" },
  });

  // Livingrock from white concrete (pure daisy)
  event.custom({
    type: "botania:pure_daisy",
    input: { type: "block", block: "minecraft:white_concrete" },
    output: { name: "botania:livingrock" },
  });

  // Slime from silicon
  event.custom({
    type: "botania:mana_infusion",
    input: { item: "ae2:silicon" },
    output: { item: "minecraft:slime_ball" },
    mana: 5000,
  });

  // Calcite from quartz
  event.custom({
    type: "botania:mana_infusion",
    input: { item: "minecraft:quartz_block" },
    output: { item: "minecraft:calcite" },
    mana: 500,
    catalyst: { type: "block", block: "minecraft:obsidian" },
  });

  // Spider eye
  event.custom({
    type: "botania:mana_infusion",
    input: { item: "minecraft:red_dye" },
    output: { item: "minecraft:spider_eye" },
    mana: 1250,
    catalyst: { type: "block", block: "minecraft:grass_block" },
  });

  // Blaze rod
  event.custom({
    type: "botania:mana_infusion",
    input: { item: "minecraft:stick" },
    output: { item: "minecraft:blaze_rod" },
    mana: 20000,
    catalyst: { type: "block", block: "minecraft:magma_block" },
  });

  // Elven trade recipes
  event.custom({
    type: "botania:elven_trade",
    ingredients: [
      { item: "minecraft:glowstone_dust" },
      { tag: "forge:meat" },
    ],
    output: [{ item: "minecraft:yellow_dye", count: 8 }],
  });

  event.custom({
    type: "botania:elven_trade",
    ingredients: [
      { tag: "forge:ingots/copper" },
      { item: "create:sweet_roll" },
    ],
    output: [{ item: "minecraft:gold_ingot", count: 8 }],
  });

  event.custom({
    type: "botania:elven_trade",
    ingredients: [
      { tag: "forge:ingots/manasteel", count: 2 },
      { item: "minecraft:andesite" },
      { tag: "forge:meat", count: 4 },
    ],
    output: [{ item: "create:andesite_alloy", count: 8 }],
  });

  // Easy Villagers villager from elven trade
  var villagerFoods = ["create:honeyed_apple", "minecraft:pumpkin_pie", "create:sweet_roll"];
  for (var i = 0; i < villagerFoods.length; i++) {
    event.custom({
      type: "botania:elven_trade",
      ingredients: [
        { item: "minecraft:milk_bucket" },
        { item: "minecraft:emerald", count: 2 },
        { item: villagerFoods[i] }
      ],
      output: [{ item: "easy_villagers:villager" }]
    });
  }

  // Terrasteel from manasteel
  event.remove({ id: "botania:elven_trade/elementium" });
  event.custom({
    type: "botania:elven_trade",
    ingredients: [
      { tag: "forge:ingots/manasteel", count: 2 },
      { tag: "forge:meat" },
    ],
    output: [{ item: "botania:terrasteel_ingot" }],
  });

  // Petal apothecary recipes
  event.remove({ id: "botania:petal_apothecary/rannuncarpus" });
  event.custom({
    type: "botania:petal_apothecary",
    output: { item: "botania:rannuncarpus" },
    ingredients: [
      { item: "minecraft:orange_dye" },
      { item: "minecraft:orange_dye" },
      { item: "minecraft:yellow_dye" },
      { item: "botania:livingwood_twig" },
    ],
    reagent: { tag: "botania:seed_apothecary_reagent" },
  });

  // Runic altar recipes for ore processing
  event.custom({
    type: "botania:runic_altar",
    output: { item: "minecraft:iron_ingot", count: 12 },
    mana: 5000,
    ingredients: [
      { tag: "botania:runes" },
      { item: "create:crushed_raw_iron" },
      { item: "create:crushed_raw_iron" },
      { item: "create:crushed_raw_iron" },
      { item: "create:crushed_raw_iron" },
      { item: "create:crushed_raw_iron" },
      { item: "create:crushed_raw_iron" },
      { item: "create:crushed_raw_iron" },
      { item: "create:crushed_raw_iron" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "minecraft:copper_ingot", count: 12 },
    mana: 5000,
    ingredients: [
      { tag: "botania:runes" },
      { item: "create:crushed_raw_copper" },
      { item: "create:crushed_raw_copper" },
      { item: "create:crushed_raw_copper" },
      { item: "create:crushed_raw_copper" },
      { item: "create:crushed_raw_copper" },
      { item: "create:crushed_raw_copper" },
      { item: "create:crushed_raw_copper" },
      { item: "create:crushed_raw_copper" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "minecraft:gold_ingot", count: 12 },
    mana: 5000,
    ingredients: [
      { tag: "botania:runes" },
      { item: "create:crushed_raw_gold" },
      { item: "create:crushed_raw_gold" },
      { item: "create:crushed_raw_gold" },
      { item: "create:crushed_raw_gold" },
      { item: "create:crushed_raw_gold" },
      { item: "create:crushed_raw_gold" },
      { item: "create:crushed_raw_gold" },
      { item: "create:crushed_raw_gold" },
    ],
  });

  // TNT from runic altar
  event.custom({
    type: "botania:runic_altar",
    output: { item: "minecraft:tnt", count: 16 },
    mana: 5000,
    ingredients: [
      { item: "minecraft:sand" },
      { item: "minecraft:sand" },
      { item: "minecraft:sand" },
      { item: "minecraft:sand" },
      { tag: "forge:gunpowder" },
      { tag: "forge:gunpowder" },
      { tag: "forge:gunpowder" },
      { tag: "forge:gunpowder" },
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
    ],
  });

  // Phantom membrane from runic altar
  event.custom({
    type: "botania:runic_altar",
    output: { item: "minecraft:phantom_membrane" },
    mana: 5000,
    ingredients: [
      { tag: "minecraft:beds" },
      { item: "minecraft:cake" },
      { item: "minecraft:cake" },
      { item: "minecraft:leather" },
      { item: "minecraft:leather" },
    ],
  });

  // Detiered runes - all runes craftable without requiring other runes
  // Remove original recipes
  event.remove({ id: "botania:runic_altar/water" });
  event.remove({ id: "botania:runic_altar/fire" });
  event.remove({ id: "botania:runic_altar/earth" });
  event.remove({ id: "botania:runic_altar/air" });
  event.remove({ id: "botania:runic_altar/spring" });
  event.remove({ id: "botania:runic_altar/summer" });
  event.remove({ id: "botania:runic_altar/autumn" });
  event.remove({ id: "botania:runic_altar/winter" });
  event.remove({ id: "botania:runic_altar/mana" });
  event.remove({ id: "botania:runic_altar/lust" });
  event.remove({ id: "botania:runic_altar/gluttony" });
  event.remove({ id: "botania:runic_altar/greed" });
  event.remove({ id: "botania:runic_altar/sloth" });
  event.remove({ id: "botania:runic_altar/wrath" });
  event.remove({ id: "botania:runic_altar/envy" });
  event.remove({ id: "botania:runic_altar/pride" });

  // Tier 1: Elemental runes - dye + thematic item + manasteel
  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_water" },
    mana: 5000,
    ingredients: [
      { tag: "forge:dyes/blue" },
      { tag: "forge:dyes/blue" },
      { tag: "forge:dyes/blue" },
      { item: "minecraft:sugar_cane" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_fire" },
    mana: 5000,
    ingredients: [
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
      { item: "minecraft:nether_brick" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_earth" },
    mana: 5000,
    ingredients: [
      { tag: "forge:dyes/green" },
      { tag: "forge:dyes/green" },
      { tag: "forge:dyes/green" },
      { item: "minecraft:stone" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_air" },
    mana: 5000,
    ingredients: [
      { tag: "forge:dyes/light_blue" },
      { tag: "forge:dyes/light_blue" },
      { tag: "forge:dyes/light_blue" },
      { item: "minecraft:feather" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  // Tier 2: Seasonal runes - dye + thematic item + manasteel + mana dust
  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_spring" },
    mana: 8000,
    ingredients: [
      { tag: "forge:dyes/pink" },
      { tag: "forge:dyes/pink" },
      { tag: "forge:dyes/lime" },
      { tag: "forge:dyes/lime" },
      { tag: "minecraft:saplings" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_summer" },
    mana: 8000,
    ingredients: [
      { tag: "forge:dyes/yellow" },
      { tag: "forge:dyes/yellow" },
      { tag: "forge:dyes/orange" },
      { tag: "forge:dyes/orange" },
      { item: "minecraft:melon_slice" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_autumn" },
    mana: 8000,
    ingredients: [
      { tag: "forge:dyes/orange" },
      { tag: "forge:dyes/orange" },
      { tag: "forge:dyes/brown" },
      { tag: "forge:dyes/brown" },
      { tag: "minecraft:leaves" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_winter" },
    mana: 8000,
    ingredients: [
      { tag: "forge:dyes/white" },
      { tag: "forge:dyes/white" },
      { tag: "forge:dyes/light_blue" },
      { tag: "forge:dyes/light_blue" },
      { item: "minecraft:snow_block" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  // Rune of Mana
  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_mana" },
    mana: 10000,
    ingredients: [
      { tag: "forge:ingots/manasteel" },
      { tag: "forge:ingots/manasteel" },
      { tag: "forge:ingots/manasteel" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:dyes/light_blue" },
      { tag: "forge:dyes/light_blue" },
    ],
  });

  // Tier 3: Sin runes - dye + thematic item + manasteel + mana dust
  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_lust" },
    mana: 12000,
    ingredients: [
      { tag: "forge:dyes/pink" },
      { tag: "forge:dyes/pink" },
      { tag: "forge:dyes/magenta" },
      { tag: "forge:dyes/magenta" },
      { item: "minecraft:cookie" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_gluttony" },
    mana: 12000,
    ingredients: [
      { tag: "forge:dyes/orange" },
      { tag: "forge:dyes/orange" },
      { tag: "forge:dyes/brown" },
      { tag: "forge:dyes/brown" },
      { item: "minecraft:pumpkin_pie" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_greed" },
    mana: 12000,
    ingredients: [
      { tag: "forge:dyes/yellow" },
      { tag: "forge:dyes/yellow" },
      { tag: "forge:dyes/lime" },
      { tag: "forge:dyes/lime" },
      { item: "minecraft:gold_ingot" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_sloth" },
    mana: 12000,
    ingredients: [
      { tag: "forge:dyes/light_gray" },
      { tag: "forge:dyes/light_gray" },
      { tag: "forge:dyes/gray" },
      { tag: "forge:dyes/gray" },
      { tag: "minecraft:beds" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_wrath" },
    mana: 12000,
    ingredients: [
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/red" },
      { tag: "forge:dyes/black" },
      { tag: "forge:dyes/black" },
      { item: "minecraft:blaze_powder" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_envy" },
    mana: 12000,
    ingredients: [
      { tag: "forge:dyes/cyan" },
      { tag: "forge:dyes/cyan" },
      { tag: "forge:dyes/green" },
      { tag: "forge:dyes/green" },
      { item: "minecraft:ender_eye" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  event.custom({
    type: "botania:runic_altar",
    output: { item: "botania:rune_pride" },
    mana: 12000,
    ingredients: [
      { tag: "forge:dyes/purple" },
      { tag: "forge:dyes/purple" },
      { tag: "forge:dyes/magenta" },
      { tag: "forge:dyes/magenta" },
      { item: "minecraft:diamond" },
      { tag: "forge:dusts/mana" },
      { tag: "forge:ingots/manasteel" },
    ],
  });

  // Remove spring rune requirement from agricarnation
  event.remove({ id: "botania:petal_apothecary/agricarnation" });
  event.custom({
    type: "botania:petal_apothecary",
    output: { item: "botania:agricarnation" },
    ingredients: [
      { tag: "forge:dyes/lime" },
      { tag: "forge:dyes/lime" },
      { tag: "forge:dyes/green" },
      { tag: "forge:dyes/yellow" },
      { item: "minecraft:redstone" },
    ],
    reagent: { tag: "botania:seed_apothecary_reagent" },
  });
});
