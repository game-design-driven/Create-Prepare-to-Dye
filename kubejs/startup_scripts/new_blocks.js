// Block registrations for Create: Prepare to Dye 2

const COLORS = [
  "white",
  "orange",
  "light_blue",
  "yellow",
  "lime",
  "pink",
  "gray",
  "light_gray",
  "cyan",
  "purple",
  "magenta",
  "blue",
  "brown",
  "green",
  "red",
  "black",
];

StartupEvents.registry("block", (event) => {
  // Dye blocks for each color
  COLORS.forEach((color) => {
    event
      .create(`ptdye:${color}_dye_block`)
      .hardness(1)
      .resistance(4)
      .soundType("slime_block")
      .textureAll(`ptdye:block/dye_blocks/${color}_dye_block`);
  });

  // Frail bone block
  event
    .create("ptdye:frail_bone_block")
    .soundType("bone_block")
    .hardness(0)
    .resistance(0)
    .opaque(false)
    .notSolid()
    .fullBlock(true)
    .textureAll("ptdye:block/frail_bone_block_side")
    .noDrops();

  // Orange tube block with axis property
  event
    .create("ptdye:orange_tube_block")
    .soundType("copper")
    .property(BlockProperties.AXIS)
    .placementState((state) => {
      state.setValue(BlockProperties.AXIS, state.clickedFace.axis);
    }).blockstateJson = {
    variants: {
      "axis=x": { model: "ptdye:block/orange_tube_block", x: 90, y: 90 },
      "axis=y": { model: "ptdye:block/orange_tube_block" },
      "axis=z": { model: "ptdye:block/orange_tube_block", x: 90 },
    },
  };

  // Device blocks helper
  const device = (name) => {
    return event
      .create(name, "cardinal")
      .hardness(2)
      .resistance(6)
      .tagBlock("create:wrench_pickup")
      .opaque(false)
      .notSolid()
      .fullBlock(false)
      .defaultCutout()
      .transparent(true);
  };

  device("ptdye:sturdy_device").soundType("stone");
  device("ptdye:logic_device").soundType("stone").box(0, 0, 0, 16, 2, 16);
  device("ptdye:sealed_device").soundType("copper").box(0, 0, 0, 16, 15, 16);
  device("ptdye:smart_device").soundType("metal");
  device("ptdye:furnished_device").soundType("wood").box(0, 0, 0, 16, 12, 16);
  device("ptdye:mechanical_device").soundType("wood");
  device("ptdye:locomotive_device").soundType("metal").box(3, 0, 0, 13, 9, 16);
  device("ptdye:red_stringed_device").soundType("stone").box(2, 0, 1, 14, 14, 15);

  // Trading platform fire block
  event
    .create("ptdye:upside_down_fire")
    .displayName("Upside-Down Fire")
    .hardness(0)
    .resistance(0)
    .renderType("cutout")
    .lightLevel(15)
    .opaque(false)
    .notSolid()
    .noCollision()
    .noItem();

  // Gray fence using quark texture
  event
    .create("ptdye:gray_fence", "fence")
    .texture("texture", "quark:block/iron_plate")
    .soundType("metal");

  event
    .create("ptdye:gray_fence_gate", "fence_gate")
    .texture("texture", "quark:block/iron_plate")
    .tagBoth("forge:fence_gates")
    .soundType("metal");
});

// Block modifications
BlockEvents.modification((event) => {
  event.modify("quark:crate", (block) => {
    block.soundType = "metal";
  });

  event.modify("wares:delivery_table", (block) => {
    block.destroySpeed = -1;
    block.explosionResistance = 3600000;
  });
});

// Add blocks to creative tabs
StartupEvents.modifyCreativeTab("minecraft:colored_blocks", (event) => {
  COLORS.forEach((color) => event.add(`ptdye:${color}_dye_block`));
});

StartupEvents.modifyCreativeTab("minecraft:functional_blocks", (event) => {
  event.add("ptdye:sturdy_device");
  event.add("ptdye:logic_device");
  event.add("ptdye:sealed_device");
  event.add("ptdye:smart_device");
  event.add("ptdye:furnished_device");
  event.add("ptdye:mechanical_device");
  event.add("ptdye:locomotive_device");
  event.add("ptdye:red_stringed_device");
});

StartupEvents.modifyCreativeTab("minecraft:building_blocks", (event) => {
  event.add("ptdye:orange_tube_block");
  event.add("ptdye:gray_fence");
  event.add("ptdye:gray_fence_gate");
});
