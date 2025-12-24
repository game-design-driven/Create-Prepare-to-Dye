//priority: 1
//Create Prepare to Dye 2 - Item Application Recipes

ServerEvents.recipes((event) => {
  // CRAFT - redstone lamp from glass and glowy items
  event.recipes.create.item_application("minecraft:redstone_lamp", [
    "#forge:glass",
    "#forge:glowy_items",
  ]);

  // CRAFT - soul campfire from campfire (piglin repellents)
  event.recipes.create
    .item_application("minecraft:soul_campfire", [
      "minecraft:campfire",
      "#minecraft:piglin_repellents",
    ])
    .keepHeldItem();

  // CRAFT - soul campfire from campfire (soul fire blocks)
  event.recipes.create
    .item_application("minecraft:soul_campfire", [
      "minecraft:campfire",
      "#minecraft:soul_fire_base_blocks",
    ])
    .keepHeldItem();

  // BOTANIA - stripping livingwood log
  event.recipes.create.item_application("botania:stripped_livingwood_log", [
    "botania:livingwood_log",
    "#forge:tools/axes",
  ]);

  // BOTANIA - stripping glimmering livingwood log
  event.recipes.create.item_application("botania:glimmering_stripped_livingwood_log", [
    "botania:glimmering_livingwood_log",
    "#forge:tools/axes",
  ]);

  // BOTANIA - stripping dreamwood log
  event.recipes.create.item_application("botania:stripped_dreamwood_log", [
    "botania:dreamwood_log",
    "#forge:tools/axes",
  ]);

  // BOTANIA - stripping glimmering dreamwood log
  event.recipes.create.item_application("botania:glimmering_stripped_dreamwood_log", [
    "botania:glimmering_dreamwood_log",
    "#forge:tools/axes",
  ]);

  // QUARK - stripping blossom log
  event.recipes.create.item_application("quark:stripped_blossom_log", [
    "quark:blossom_log",
    "#forge:tools/axes",
  ]);

  // ORE - raw gold block from honeycomb block and terrasteel
  event.recipes.create.item_application("minecraft:raw_gold_block", [
    "minecraft:honeycomb_block",
    "#forge:ingots/terrasteel",
  ]);

  // SLIME - slime block from magma block and lime dye
  event.recipes.create.item_application("minecraft:slime_block", [
    "minecraft:magma_block",
    "minecraft:lime_dye",
  ]);

  // SLIME - slime block from honey block and terrasteel
  event.recipes.create.item_application("minecraft:slime_block", [
    "minecraft:honey_block",
    "botania:terrasteel_ingot",
  ]);

  // TERRAIN - netherrack from nether wart block and cobblestone
  event.recipes.create.item_application("minecraft:netherrack", [
    "minecraft:nether_wart_block",
    "minecraft:cobblestone",
  ]);

  // TERRAIN - netherrack from cobblestone and nether wart block
  event.recipes.create.item_application("minecraft:netherrack", [
    "minecraft:cobblestone",
    "minecraft:nether_wart_block",
  ]);

  // BOTANIA - livingwood twig from dead bush and mana dust
  event.recipes.create.item_application("botania:livingwood_twig", [
    "minecraft:dead_bush",
    "#botania:mana_dusts",
  ]);

  // BOTANIA - mana tablet from livingrock and mana diamond
  event.recipes.create.item_application("botania:mana_tablet", [
    "botania:livingrock",
    "botania:mana_diamond",
  ]);

  // BOTANIA - mana tablet from livingrock and mana pearl
  event.recipes.create.item_application("botania:mana_tablet", [
    "botania:livingrock",
    "botania:mana_pearl",
  ]);

  // BOTANIA - mana pool from livingrock and pickaxe
  event.remove({ id: "botania:mana_pool" });
  event.remove({ id: "botania:diluted_mana_pool" });
  event.recipes.create.item_application("botania:mana_pool", [
    "botania:livingrock",
    "#minecraft:pickaxes",
  ]);

  // BOTANIA - diluted pool from mana pool and pickaxe
  event.recipes.create.item_application("botania:diluted_pool", [
    "botania:mana_pool",
    "#minecraft:pickaxes",
  ]);

  // BOTANIA - gaia pylon from mana pylon and pixie dust
  event.remove({ id: "botania:gaia_pylon" });
  event.recipes.create.item_application("botania:gaia_pylon", [
    "botania:mana_pylon",
    "botania:pixie_dust",
  ]);

  // BOTANIA - natura pylon from mana pylon and terrasteel
  event.remove({ id: "botania:natura_pylon" });
  event.recipes.create.item_application("botania:natura_pylon", [
    "botania:mana_pylon",
    "botania:terrasteel_ingot",
  ]);

  // AE2 - quartz block from quartz block and light blue dye
  event.recipes.create.item_application("ae2:quartz_block", [
    "minecraft:quartz_block",
    "minecraft:light_blue_dye",
  ]);

  // AE2 - budding quartz from quartz block and polished rose quartz
  event.recipes.create.item_application("ae2:flawed_budding_quartz", [
    "#forge:quartz/lightblue",
    "create:polished_rose_quartz",
  ]);

  // TERRAIN - pointed dripstone from dripstone block and pickaxe
  event.recipes.create.item_application("minecraft:pointed_dripstone", [
    "minecraft:dripstone_block",
    "#minecraft:pickaxes",
  ]);
});
