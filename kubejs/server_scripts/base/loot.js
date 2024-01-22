if (feature("Glass goes back into blocks when broken")) {
  LootJS.modifiers((event) => {
    event
      .addBlockLootModifier("#minecraft:leaves")
      .removeLoot("minecraft:stick");
    event
      .addBlockLootModifier("#minecraft:leaves")
      .removeLoot("minecraft:apple");

    // Glass
    event.addBlockLootModifier("minecraft:glass").addLoot("minecraft:glass");
    event
      .addBlockLootModifier("minecraft:glass_pane")
      .addLoot("minecraft:glass_pane");
    event
      .addBlockLootModifier("minecraft:white_stained_glass")
      .addLoot("minecraft:white_stained_glass");
    event
      .addBlockLootModifier("minecraft:white_stained_glass_pane")
      .addLoot("minecraft:white_stained_glass_pane");
    event
      .addBlockLootModifier("create:framed_glass")
      .addLoot("create:framed_glass");
    event
      .addBlockLootModifier("create:horizontal_framed_glass")
      .addLoot("create:horizontal_framed_glass");
    event
      .addBlockLootModifier("create:vertical_framed_glass")
      .addLoot("create:vertical_framed_glass");
    event
      .addBlockLootModifier("create:tiled_glass_pane")
      .addLoot("create:tiled_glass_pane");
    event
      .addBlockLootModifier("create:framed_glass_pane")
      .addLoot("create:framed_glass_pane");
    event
      .addBlockLootModifier("create:horizontal_framed_glass_pane")
      .addLoot("create:horizontal_framed_glass_pane");
  });
}

if (feature("Gold ore drops more gold")) {
  LootJS.modifiers((event) => {
    event
      .addBlockLootModifier("minecraft:nether_gold_ore")
      .addLoot("minecraft:gold_nugget")
      .addLoot("minecraft:gold_nugget");
    event
      .addBlockLootModifier("minecraft:deepslate_gold_ore")
      .addLoot("minecraft:raw_gold");
  });
}

if (feature("Budding quartz drops themselves instead of degrading")) {
  LootJS.modifiers((event) => {
    event
      .addBlockLootModifier("ae2:flawed_budding_quartz")
      .replaceLoot(ItemFilter.ALWAYS_TRUE, "ae2:flawed_budding_quartz");
    event
      .addBlockLootModifier("ae2:chipped_budding_quartz")
      .replaceLoot(ItemFilter.ALWAYS_TRUE, "ae2:chipped_budding_quartz");
    event
      .addBlockLootModifier("ae2:damaged_budding_quartz")
      .replaceLoot(ItemFilter.ALWAYS_TRUE, "ae2:damaged_budding_quartz");
  });
}

if (feature("Quartz buds drop quartz")) {
  LootJS.modifiers((event) => {
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
  });
}
if (feature("Grass, tall grass and ferns drops seeds all the time")) {
  LootJS.modifiers((event) => {
    event
      .addBlockLootModifier("minecraft:grass")
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
  });
}

if (feature("Remove flax seed from all loottables")) {
  LootJS.modifiers((event) => {
    event.removeGlobalModifier("@supplementaries");
  });
}

if (feature("Remove white ingot from lootables")) {
  LootJS.modifiers((event) => {
    event
      .addEntityLootModifier("minecraft:zombie")
      .removeLoot("minecraft:iron_ingot");
    event
      .addEntityLootModifier("minecraft:zombie_villager")
      .removeLoot("minecraft:iron_ingot");
    event
      .addEntityLootModifier("minecraft:husk")
      .removeLoot("minecraft:iron_ingot");
    event
      .addEntityLootModifier("minecraft:drowned")
      .removeLoot("minecraft:iron_ingot");
    event
      .addLootTypeModifier(LootType.CHEST)
      .removeLoot("minecraft:iron_ingot");
    // event.addLootTypeModifier("minecraft:chests/abandoned_mineshaft").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/desert_pyramid").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/jungle_temple").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/stronghold_corridor").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/stronghold_crossing").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/stronghold_library").removeLoot("minecraft:iron_ingot")
  });
}

if (feature('pillagers drop heads')) {
  LootJS.modifiers((event) => {
    event.addEntityLootModifier('minecraft:pillager').randomChance(0.4).addLoot(Item.of('minecraft:player_head', '{SkullOwner:{Id:[I;449435050,1190088049,-1334360732,942410307],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGFlZTZiYjM3Y2JmYzkyYjBkODZkYjVhZGE0NzkwYzY0ZmY0NDY4ZDY4Yjg0OTQyZmRlMDQ0MDVlOGVmNTMzMyJ9fX0="}]}}}')).applyLootingBonus('minecraft:looting')
    event.addEntityLootModifier('minecraft:pillager').randomChance(0.1).addLoot('minecraft:arrow').applyLootingBonus('minecraft:looting')
    event.addEntityLootModifier('minecraft:pillager').randomChance(0.1).addLoot('minecraft:crossbow')
  })
  
}