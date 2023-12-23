LootJS.modifiers((event) => {
    event.addBlockLootModifier("#minecraft:leaves").removeLoot("minecraft:stick");
    event.addBlockLootModifier("#minecraft:leaves").removeLoot("minecraft:apple");

    // Glass
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
});