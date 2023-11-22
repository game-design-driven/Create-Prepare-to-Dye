LootJS.modifiers((event) => {
    event.addBlockLootModifier("#minecraft:leaves").removeLoot("minecraft:stick");
    event.addBlockLootModifier("#minecraft:leaves").removeLoot("minecraft:apple");
});