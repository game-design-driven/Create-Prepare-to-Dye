// priority: -20
let indestructibleItems = [
    'wares:delivery_agreement',
    'wares:completed_delivery_agreement',
    'wares:sealed_delivery_agreement',
    "create:brass_casing",
    "create:copper_casing",
    "create:andesite_casing",
    "ptdye:cobblestone_casing",
    "ptdye:redstone_casing",
    "create:controller_rail",
    "create:railway_casing"
]
indestructibleItems.concat(
    Ingredient.of('#forge:indestructible').itemIds
)
ItemEvents.modification((event) => {
    event.modify(indestructibleItems, (item) => {
        item.setFireResistant(true);
    });
});