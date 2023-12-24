// if (feature('Diamond tools have silk touch')) {
let silky_tools = [
  "minecraft:diamond_pickaxe",
  "minecraft:diamond_axe",
  "minecraft:diamond_shovel",
  "minecraft:diamond_hoe",
  "minecraft:diamond_sword",
];
ItemEvents.tooltip((event) => {
  silky_tools.forEach((item) => {
    event.add(item, Text.of(`Silk Touch`).italic().gray());
  });
});

// }
