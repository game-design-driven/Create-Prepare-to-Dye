//priority: 2
//Create Prepare to Dye 2 - Recipe Removals
//This file contains recipe removals that don't fit neatly into other category files

ServerEvents.recipes((event) => {
  // Charm cyan dye
  event.remove({ id: "charm:extra_recipes/cyan_dye" });

  // Vanilla honey bottle
  event.remove({ id: "minecraft:honey_bottle" });

  // Vanilla andesite recipe
  event.remove({ id: "minecraft:andesite" });

  // Vanilla polished andesite
  event.remove({ id: "minecraft:polished_andesite" });

  // Vanilla bone meal from bones
  event.remove({ id: "minecraft:bone_meal" });

  // Remove crafting table
  // event.remove({ output: "minecraft:crafting_table" });

  // Crossbow recipe
  event.remove({ id: "minecraft:crossbow" });

  // Botania mushroom stew
  event.remove({ id: "botania:mushroom_stew" });

  // Botania mana powder dye
  event.remove({ id: "botania:mana_infusion/mana_powder_dye" });

  // Botania red string
  event.remove({ id: "botania:red_string" });
  event.remove({ id: "botania:red_string_alt" });

  // Botania apothecary types
  let apothecaryTypes = [
    "forest", "plains", "mountain", "fungal", "swamp", "jungle", "taiga", "mesa", "mossy", "livingrock", "deepslate"
  ];
  apothecaryTypes.forEach((type) => {
    event.remove({ id: `botania:apothecary_${type}` });
  });

  // Botania laputa shard
  event.remove({ id: "botania:laputa_shard" });

  // Copycats mod recipes (handled by device system)
  event.remove({ mod: "copycats" });

  // Old cogwheel deploying
  event.remove({ id: "create:deploying/large_cogwheel" });

  // AE2 recipe types
  event.remove({ type: "ae2:inscriber" });
  event.remove({ type: "ae2:entropy" });
  event.remove({ type: "ae2:condenser" });
  event.remove({ type: "ae2:matter_cannon" });

  // Stick recipes
  event.remove({ id: "minecraft:stick_from_bamboo_item" });
  event.remove({ id: "quark:tweaks/crafting/utility/misc/easy_sticks" });
  event.remove({ id: "quark:tweaks/crafting/utility/misc/easy_sticks_bamboo" });

  // Haunting soul campfire
  event.remove({ id: "create:haunting/soul_campfire" });
  event.remove({ id: "minecraft:soul_campfire" });
  event.remove({ id: "minecraft:soul_torch" });

  // Supplementaries
  event.remove({ id: "supplementaries:pancake" });

  // Create Enchantment Industry - experience rotor removed
  event.remove({ output: "create_enchantment_industry:experience_rotor" });

  // Botania crafty crate patterns (makes unpacking too easy)
  var patterns = [
    "botania:pattern_1_1", "botania:pattern_2_2", "botania:pattern_1_2",
    "botania:pattern_2_1", "botania:pattern_1_3", "botania:pattern_3_1",
    "botania:pattern_2_3", "botania:pattern_3_2", "botania:pattern_donut"
  ];
  for (var i = 0; i < patterns.length; i++) {
    event.remove({ output: patterns[i] });
  }

  // Wooden tools (removed from game)
  var woodenTools = [
    "minecraft:wooden_pickaxe",
    "minecraft:wooden_axe",
    "minecraft:wooden_shovel",
    "minecraft:wooden_hoe",
    "minecraft:wooden_sword"
  ];
  for (var i = 0; i < woodenTools.length; i++) {
    event.remove({ output: woodenTools[i] });
  }

  // Saplings (trees grow differently in this pack)
  var saplings = [
    "minecraft:oak_sapling",
    "minecraft:spruce_sapling",
    "minecraft:birch_sapling",
    "minecraft:jungle_sapling",
    "minecraft:acacia_sapling",
    "minecraft:dark_oak_sapling",
    "quark:blue_blossom_sapling",
    "quark:orange_blossom_sapling",
    "quark:lavender_blossom_sapling",
    "quark:pink_blossom_sapling",
    "quark:yellow_blossom_sapling",
    "quark:red_blossom_sapling"
  ];
  for (var i = 0; i < saplings.length; i++) {
    event.remove({ output: saplings[i] });
  }

  // Nether fungi
  event.remove({ output: "minecraft:warped_fungus" });
  event.remove({ output: "minecraft:crimson_fungus" });
  event.remove({ id: "create:haunting/crimson_fungus" });
  event.remove({ id: "create:haunting/warped_fungus" });

  // Easy Villagers (most items removed, villager obtained via elven trade)
  var easyVillagersItems = [
    "easy_villagers:breeder",
    "easy_villagers:converter",
    "easy_villagers:incubator",
    "easy_villagers:trader",
    "easy_villagers:farmer",
    "easy_villagers:iron_farm"
  ];
  for (var i = 0; i < easyVillagersItems.length; i++) {
    event.remove({ output: easyVillagersItems[i] });
  }
});
