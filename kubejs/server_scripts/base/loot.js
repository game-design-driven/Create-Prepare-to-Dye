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
      .applyOreBonus("minecraft:fortune")
    event
      .addBlockLootModifier("ae2:medium_quartz_bud")
      .replaceLoot(ItemFilter.ALWAYS_TRUE, "minecraft:quartz")
      .applyOreBonus("minecraft:fortune")
    event
      .addBlockLootModifier("ae2:large_quartz_bud")
      .replaceLoot(ItemFilter.ALWAYS_TRUE, "2x minecraft:quartz")
      .applyOreBonus("minecraft:fortune")
    event
      .addBlockLootModifier("ae2:quartz_cluster")
      .replaceLoot(ItemFilter.ALWAYS_TRUE, "4x minecraft:quartz")
      .applyOreBonus("minecraft:fortune")
  });
  //add more with fortune

  //remove flax seed from all loottables

}


if (feature('Remove flax seed from all loottables')) {
  LootJS.modifiers((event) => {
    event.removeGlobalModifier("@supplementaries");
  });
}

if (feature('Remove white ingot from lootables')) {
  LootJS.modifiers(event =>{
    event.addEntityLootModifier("minecraft:zombie").removeLoot("minecraft:iron_ingot")
    event.addEntityLootModifier("minecraft:zombie_villager").removeLoot("minecraft:iron_ingot")
    event.addEntityLootModifier("minecraft:husk").removeLoot("minecraft:iron_ingot")
    event.addEntityLootModifier("minecraft:drowned").removeLoot("minecraft:iron_ingot")
    event.addLootTypeModifier(LootType.CHEST).removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/abandoned_mineshaft").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/desert_pyramid").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/jungle_temple").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/stronghold_corridor").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/stronghold_crossing").removeLoot("minecraft:iron_ingot")
    // event.addLootTypeModifier("minecraft:chests/stronghold_library").removeLoot("minecraft:iron_ingot")
  })
}