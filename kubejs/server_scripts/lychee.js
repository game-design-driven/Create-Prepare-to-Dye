//priority: 1
//Create Prepare to Dye 2 - Lychee Recipes (Block Interactions)

ServerEvents.recipes((event) => {
  // Ore generation from dyes
  // Basic ores (stone variants)
  let basicOres = {
    iron_ore: "minecraft:white_dye",
    redstone_ore: "minecraft:red_dye",
    copper_ore: "minecraft:orange_dye",
    coal_ore: "minecraft:black_dye",
  };

  Object.entries(basicOres).forEach(([ore, dye]) => {
    event.custom({
      type: "lychee:block_interacting",
      item_in: { item: dye },
      block_in: "minecraft:stone",
      post: [
        { type: "place", block: `minecraft:${ore}` },
      ],
    });
    event.custom({
      type: "lychee:block_interacting",
      item_in: { item: dye },
      block_in: "minecraft:deepslate",
      post: [
        { type: "place", block: `minecraft:deepslate_${ore}` },
      ],
    });
  });

  // Deepslate-only ores
  let deepslateOnlyOres = {
    deepslate_emerald_ore: "minecraft:lime_dye",
    deepslate_lapis_ore: "minecraft:blue_dye",
    deepslate_diamond_ore: "minecraft:light_blue_dye",
    deepslate_gold_ore: "minecraft:yellow_dye",
  };

  Object.entries(deepslateOnlyOres).forEach(([ore, dye]) => {
    event.custom({
      type: "lychee:block_interacting",
      item_in: { item: dye },
      block_in: "minecraft:deepslate",
      post: [
        { type: "place", block: `minecraft:${ore}` },
      ],
    });
  });

  // Nether ores
  event.custom({
    type: "lychee:block_interacting",
    item_in: { item: "minecraft:yellow_dye" },
    block_in: "minecraft:netherrack",
    post: [
      { type: "place", block: "minecraft:nether_gold_ore" },
    ],
  });

  // Raw ore from concrete powder
  event.custom({
    type: "lychee:block_interacting",
    item_in: { item: "minecraft:white_dye" },
    block_in: "minecraft:white_concrete_powder",
    post: [
      { type: "drop_item", item: "minecraft:raw_iron" },
    ],
  });

  event.custom({
    type: "lychee:block_interacting",
    item_in: { item: "minecraft:orange_dye" },
    block_in: "minecraft:orange_concrete_powder",
    post: [
      { type: "drop_item", item: "minecraft:raw_copper" },
    ],
  });

  event.custom({
    type: "lychee:block_interacting",
    item_in: { item: "minecraft:yellow_dye" },
    block_in: "minecraft:yellow_concrete_powder",
    post: [
      { type: "drop_item", item: "minecraft:raw_gold" },
    ],
  });

  // Soul sand from sand and brown dye
  event.custom({
    type: "lychee:block_interacting",
    item_in: { item: "minecraft:brown_dye" },
    block_in: { tag: "forge:sand" },
    post: [
      { type: "place", block: "minecraft:soul_sand" },
    ],
  });

  // Magma block to lava
  event.custom({
    type: "lychee:block_interacting",
    item_in: { item: "create:blaze_cake" },
    block_in: "minecraft:magma_block",
    post: [
      { type: "place", block: "minecraft:lava" },
    ],
  });

  // Water duplication from kelp/seagrass
  event.custom({
    type: "lychee:block_interacting",
    item_in: [{ item: "minecraft:kelp" }, { item: "minecraft:seagrass" }],
    block_in: "minecraft:water",
    post: [
      { type: "place", block: "minecraft:water" },
    ],
  });

  // Chorus flower from chorus batch
  event.custom({
    type: "lychee:block_interacting",
    item_in: { item: "minecraft:bone_meal" },
    block_in: "quark:chorus_fruit_block",
    post: [
      { type: "drop_item", item: "minecraft:chorus_flower" },
    ],
  });
});
