//priority: 0
//Create Prepare to Dye 2 - Loot Table Modifications

LootJS.modifiers((event) => {
  // =============================================================================
  // BLOCK LOOT MODIFICATIONS
  // =============================================================================

  // Leaves don't drop sticks or apples
  event.addBlockLootModifier("#minecraft:leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("#minecraft:leaves").removeLoot("minecraft:apple");

  // Glass drops itself when broken
  event.addBlockLootModifier("minecraft:glass").addLoot("minecraft:glass");
  event.addBlockLootModifier("minecraft:glass_pane").addLoot("minecraft:glass_pane");
  event.addBlockLootModifier("minecraft:white_stained_glass").addLoot("minecraft:white_stained_glass");
  event.addBlockLootModifier("minecraft:white_stained_glass_pane").addLoot("minecraft:white_stained_glass_pane");
  event.addBlockLootModifier("create:framed_glass").addLoot("create:framed_glass");
  event.addBlockLootModifier("create:horizontal_framed_glass").addLoot("create:horizontal_framed_glass");
  event.addBlockLootModifier("create:vertical_framed_glass").addLoot("create:vertical_framed_glass");
  event.addBlockLootModifier("create:tiled_glass_pane").addLoot("create:tiled_glass_pane");
  event.addBlockLootModifier("create:framed_glass_pane").addLoot("create:framed_glass_pane");
  event.addBlockLootModifier("create:horizontal_framed_glass_pane").addLoot("create:horizontal_framed_glass_pane");

  // =============================================================================
  // ORE BONUS DROPS
  // =============================================================================

  // Gold ore drops more gold
  event
    .addBlockLootModifier("minecraft:nether_gold_ore")
    .addLoot("12x minecraft:gold_nugget")
    .applyOreBonus("minecraft:fortune");
  event
    .addBlockLootModifier("minecraft:deepslate_gold_ore")
    .addLoot("3x minecraft:raw_gold")
    .applyOreBonus("minecraft:fortune");

  // Iron ore drops more raw iron
  event.addBlockLootModifier("minecraft:iron_ore").addLoot("3x minecraft:raw_iron");
  event
    .addBlockLootModifier("minecraft:deepslate_iron_ore")
    .addLoot("3x minecraft:raw_iron")
    .applyOreBonus("minecraft:fortune");

  // Coal ore drops more coal
  event.addBlockLootModifier("minecraft:coal_ore").addLoot("minecraft:coal");
  event
    .addBlockLootModifier("minecraft:deepslate_coal_ore")
    .addLoot("minecraft:coal")
    .applyOreBonus("minecraft:fortune");

  // Copper ore drops more copper
  event.addBlockLootModifier("minecraft:copper_ore").addLoot("2x minecraft:raw_copper");
  event
    .addBlockLootModifier("minecraft:deepslate_copper_ore")
    .addLoot("2x minecraft:raw_copper")
    .applyOreBonus("minecraft:fortune");

  // Redstone ore drops more redstone
  event.addBlockLootModifier("minecraft:redstone_ore").addLoot("2x minecraft:redstone");
  event
    .addBlockLootModifier("minecraft:deepslate_redstone_ore")
    .addLoot("2x minecraft:redstone")
    .applyOreBonus("minecraft:fortune");

  // =============================================================================
  // AE2 QUARTZ MODIFICATIONS
  // =============================================================================

  // Budding quartz drops itself instead of degrading
  event
    .addBlockLootModifier("ae2:flawed_budding_quartz")
    .replaceLoot(ItemFilter.ALWAYS_TRUE, "ae2:flawed_budding_quartz");
  event
    .addBlockLootModifier("ae2:chipped_budding_quartz")
    .replaceLoot(ItemFilter.ALWAYS_TRUE, "ae2:chipped_budding_quartz");
  event
    .addBlockLootModifier("ae2:damaged_budding_quartz")
    .replaceLoot(ItemFilter.ALWAYS_TRUE, "ae2:damaged_budding_quartz");

  // Quartz buds drop quartz
  event
    .addBlockLootModifier("ae2:small_quartz_bud")
    .replaceLoot(ItemFilter.ALWAYS_TRUE, "minecraft:quartz")
    .applyOreBonus("minecraft:fortune");
  event
    .addBlockLootModifier("ae2:medium_quartz_bud")
    .replaceLoot(ItemFilter.ALWAYS_TRUE, "minecraft:quartz")
    .applyOreBonus("minecraft:fortune");
  event
    .addBlockLootModifier("ae2:large_quartz_bud")
    .replaceLoot(ItemFilter.ALWAYS_TRUE, "2x minecraft:quartz")
    .applyOreBonus("minecraft:fortune");
  event
    .addBlockLootModifier("ae2:quartz_cluster")
    .replaceLoot(ItemFilter.ALWAYS_TRUE, "4x minecraft:quartz")
    .applyOreBonus("minecraft:fortune");

  // =============================================================================
  // GRASS/FERN SEED DROPS
  // =============================================================================

  // Grass and ferns always drop seeds
  event
    .addBlockLootModifier("minecraft:short_grass")
    .addLoot("minecraft:wheat_seeds")
    .applyOreBonus("minecraft:fortune");
  event
    .addBlockLootModifier("minecraft:tall_grass")
    .addLoot("minecraft:wheat_seeds")
    .applyOreBonus("minecraft:fortune");
  event
    .addBlockLootModifier("minecraft:fern")
    .addLoot("minecraft:wheat_seeds")
    .applyOreBonus("minecraft:fortune");

  // =============================================================================
  // REMOVE ITEMS FROM LOOT TABLES
  // =============================================================================

  // Remove flax seeds from supplementaries
  event.removeGlobalModifier("@supplementaries");

  // Remove iron ingots from zombie loot
  event.addEntityLootModifier("minecraft:zombie").removeLoot("minecraft:iron_ingot");
  event.addEntityLootModifier("minecraft:zombie_villager").removeLoot("minecraft:iron_ingot");
  event.addEntityLootModifier("minecraft:husk").removeLoot("minecraft:iron_ingot");
  event.addEntityLootModifier("minecraft:drowned").removeLoot("minecraft:iron_ingot");

  // Remove iron ingots from chest loot
  event.addLootTypeModifier(LootType.CHEST).removeLoot("minecraft:iron_ingot");

  // =============================================================================
  // ENTITY LOOT MODIFICATIONS
  // =============================================================================

  // Pillagers drop heads
  event
    .addEntityLootModifier("minecraft:pillager")
    .randomChance(0.4)
    .addLoot(
      Item.of(
        "minecraft:player_head",
        '{SkullOwner:{Id:[I;449435050,1190088049,-1334360732,942410307],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGFlZTZiYjM3Y2JmYzkyYjBkODZkYjVhZGE0NzkwYzY0ZmY0NDY4ZDY4Yjg0OTQyZmRlMDQ0MDVlOGVmNTMzMyJ9fX0="}]}}}'
      )
    )
    .applyLootingBonus("minecraft:looting");
  event
    .addEntityLootModifier("minecraft:pillager")
    .randomChance(0.1)
    .addLoot("minecraft:arrow")
    .applyLootingBonus("minecraft:looting");
  event.addEntityLootModifier("minecraft:pillager").randomChance(0.1).addLoot("minecraft:crossbow");

  // Iron golem drops iron sheets instead of ingots
  event
    .addEntityLootModifier("minecraft:iron_golem")
    .replaceLoot("minecraft:iron_ingot", "create:iron_sheet", true);
});
