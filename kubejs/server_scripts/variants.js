//priority: 1
// Variants - stonecutting conversion groups for blocks
// Items in each group can freely convert via stonecutting

const VARIANT_GROUPS = {
  // Minecraft stone variants
  stone: [
    "minecraft:stone", "minecraft:stone_slab", "minecraft:stone_stairs",
    "minecraft:stone_bricks", "minecraft:stone_brick_slab", "minecraft:stone_brick_stairs", "minecraft:stone_brick_wall",
    "minecraft:smooth_stone", "minecraft:smooth_stone_slab",
    "minecraft:chiseled_stone_bricks", "minecraft:cracked_stone_bricks",
  ],
  cobblestone: [
    "minecraft:cobblestone", "minecraft:cobblestone_slab", "minecraft:cobblestone_stairs", "minecraft:cobblestone_wall",
    "minecraft:mossy_cobblestone", "minecraft:mossy_cobblestone_slab", "minecraft:mossy_cobblestone_stairs", "minecraft:mossy_cobblestone_wall",
  ],
  mossy_stone_bricks: [
    "minecraft:mossy_stone_bricks", "minecraft:mossy_stone_brick_slab", "minecraft:mossy_stone_brick_stairs", "minecraft:mossy_stone_brick_wall",
  ],
  deepslate: [
    "minecraft:cobbled_deepslate", "minecraft:cobbled_deepslate_slab", "minecraft:cobbled_deepslate_stairs", "minecraft:cobbled_deepslate_wall",
    "minecraft:polished_deepslate", "minecraft:polished_deepslate_slab", "minecraft:polished_deepslate_stairs", "minecraft:polished_deepslate_wall",
    "minecraft:deepslate_bricks", "minecraft:deepslate_brick_slab", "minecraft:deepslate_brick_stairs", "minecraft:deepslate_brick_wall",
    "minecraft:deepslate_tiles", "minecraft:deepslate_tile_slab", "minecraft:deepslate_tile_stairs", "minecraft:deepslate_tile_wall",
    "minecraft:chiseled_deepslate", "minecraft:cracked_deepslate_bricks", "minecraft:cracked_deepslate_tiles",
  ],
  granite: [
    "minecraft:granite", "minecraft:granite_slab", "minecraft:granite_stairs", "minecraft:granite_wall",
    "minecraft:polished_granite", "minecraft:polished_granite_slab", "minecraft:polished_granite_stairs",
  ],
  diorite: [
    "minecraft:diorite", "minecraft:diorite_slab", "minecraft:diorite_stairs", "minecraft:diorite_wall",
    "minecraft:polished_diorite", "minecraft:polished_diorite_slab", "minecraft:polished_diorite_stairs",
  ],
  andesite: [
    "minecraft:andesite", "minecraft:andesite_slab", "minecraft:andesite_stairs", "minecraft:andesite_wall",
    "minecraft:polished_andesite", "minecraft:polished_andesite_slab", "minecraft:polished_andesite_stairs",
  ],
  bricks: [
    "minecraft:bricks", "minecraft:brick_slab", "minecraft:brick_stairs", "minecraft:brick_wall",
  ],
  mud_bricks: [
    "minecraft:mud_bricks", "minecraft:mud_brick_slab", "minecraft:mud_brick_stairs", "minecraft:mud_brick_wall",
  ],
  nether_bricks: [
    "minecraft:nether_bricks", "minecraft:nether_brick_slab", "minecraft:nether_brick_stairs", "minecraft:nether_brick_wall",
    "minecraft:nether_brick_fence", "minecraft:chiseled_nether_bricks", "minecraft:cracked_nether_bricks",
  ],
  red_nether_bricks: [
    "minecraft:red_nether_bricks", "minecraft:red_nether_brick_slab", "minecraft:red_nether_brick_stairs", "minecraft:red_nether_brick_wall",
  ],
  blackstone: [
    "minecraft:blackstone", "minecraft:blackstone_slab", "minecraft:blackstone_stairs", "minecraft:blackstone_wall",
    "minecraft:polished_blackstone", "minecraft:polished_blackstone_slab", "minecraft:polished_blackstone_stairs", "minecraft:polished_blackstone_wall",
    "minecraft:polished_blackstone_bricks", "minecraft:polished_blackstone_brick_slab", "minecraft:polished_blackstone_brick_stairs", "minecraft:polished_blackstone_brick_wall",
    "minecraft:chiseled_polished_blackstone", "minecraft:cracked_polished_blackstone_bricks", "minecraft:gilded_blackstone",
  ],
  sandstone: [
    "minecraft:sandstone", "minecraft:sandstone_slab", "minecraft:sandstone_stairs", "minecraft:sandstone_wall",
    "minecraft:cut_sandstone", "minecraft:cut_sandstone_slab",
    "minecraft:smooth_sandstone", "minecraft:smooth_sandstone_slab", "minecraft:smooth_sandstone_stairs",
    "minecraft:chiseled_sandstone",
  ],
  red_sandstone: [
    "minecraft:red_sandstone", "minecraft:red_sandstone_slab", "minecraft:red_sandstone_stairs", "minecraft:red_sandstone_wall",
    "minecraft:cut_red_sandstone", "minecraft:cut_red_sandstone_slab",
    "minecraft:smooth_red_sandstone", "minecraft:smooth_red_sandstone_slab", "minecraft:smooth_red_sandstone_stairs",
    "minecraft:chiseled_red_sandstone",
  ],
  prismarine: [
    "minecraft:prismarine", "minecraft:prismarine_slab", "minecraft:prismarine_stairs", "minecraft:prismarine_wall",
    "minecraft:prismarine_bricks", "minecraft:prismarine_brick_slab", "minecraft:prismarine_brick_stairs",
    "minecraft:dark_prismarine", "minecraft:dark_prismarine_slab", "minecraft:dark_prismarine_stairs",
  ],
  end_stone: [
    "minecraft:end_stone", "minecraft:end_stone_bricks",
    "minecraft:end_stone_brick_slab", "minecraft:end_stone_brick_stairs", "minecraft:end_stone_brick_wall",
  ],
  purpur: [
    "minecraft:purpur_block", "minecraft:purpur_slab", "minecraft:purpur_stairs", "minecraft:purpur_pillar",
  ],
  quartz: [
    "minecraft:quartz_block", "minecraft:quartz_slab", "minecraft:quartz_stairs",
    "minecraft:quartz_bricks", "minecraft:quartz_pillar", "minecraft:chiseled_quartz_block",
    "minecraft:smooth_quartz", "minecraft:smooth_quartz_slab", "minecraft:smooth_quartz_stairs",
  ],
  // Minecraft wood variants
  oak: ["minecraft:oak_planks", "minecraft:oak_slab", "minecraft:oak_stairs", "minecraft:oak_fence", "minecraft:oak_fence_gate"],
  spruce: ["minecraft:spruce_planks", "minecraft:spruce_slab", "minecraft:spruce_stairs", "minecraft:spruce_fence", "minecraft:spruce_fence_gate"],
  birch: ["minecraft:birch_planks", "minecraft:birch_slab", "minecraft:birch_stairs", "minecraft:birch_fence", "minecraft:birch_fence_gate"],
  jungle: ["minecraft:jungle_planks", "minecraft:jungle_slab", "minecraft:jungle_stairs", "minecraft:jungle_fence", "minecraft:jungle_fence_gate"],
  acacia: ["minecraft:acacia_planks", "minecraft:acacia_slab", "minecraft:acacia_stairs", "minecraft:acacia_fence", "minecraft:acacia_fence_gate"],
  dark_oak: ["minecraft:dark_oak_planks", "minecraft:dark_oak_slab", "minecraft:dark_oak_stairs", "minecraft:dark_oak_fence", "minecraft:dark_oak_fence_gate"],
  mangrove: ["minecraft:mangrove_planks", "minecraft:mangrove_slab", "minecraft:mangrove_stairs", "minecraft:mangrove_fence", "minecraft:mangrove_fence_gate"],
  cherry: ["minecraft:cherry_planks", "minecraft:cherry_slab", "minecraft:cherry_stairs", "minecraft:cherry_fence", "minecraft:cherry_fence_gate"],
  bamboo: ["minecraft:bamboo_planks", "minecraft:bamboo_slab", "minecraft:bamboo_stairs", "minecraft:bamboo_fence", "minecraft:bamboo_fence_gate", "minecraft:bamboo_mosaic", "minecraft:bamboo_mosaic_slab", "minecraft:bamboo_mosaic_stairs"],
  crimson: ["minecraft:crimson_planks", "minecraft:crimson_slab", "minecraft:crimson_stairs", "minecraft:crimson_fence", "minecraft:crimson_fence_gate"],
  warped: ["minecraft:warped_planks", "minecraft:warped_slab", "minecraft:warped_stairs", "minecraft:warped_fence", "minecraft:warped_fence_gate"],
  // Minecraft copper variants
  copper: ["minecraft:cut_copper", "minecraft:cut_copper_slab", "minecraft:cut_copper_stairs"],
  exposed_copper: ["minecraft:exposed_cut_copper", "minecraft:exposed_cut_copper_slab", "minecraft:exposed_cut_copper_stairs"],
  weathered_copper: ["minecraft:weathered_cut_copper", "minecraft:weathered_cut_copper_slab", "minecraft:weathered_cut_copper_stairs"],
  oxidized_copper: ["minecraft:oxidized_cut_copper", "minecraft:oxidized_cut_copper_slab", "minecraft:oxidized_cut_copper_stairs"],
  waxed_copper: ["minecraft:waxed_cut_copper", "minecraft:waxed_cut_copper_slab", "minecraft:waxed_cut_copper_stairs"],
  waxed_exposed_copper: ["minecraft:waxed_exposed_cut_copper", "minecraft:waxed_exposed_cut_copper_slab", "minecraft:waxed_exposed_cut_copper_stairs"],
  waxed_weathered_copper: ["minecraft:waxed_weathered_cut_copper", "minecraft:waxed_weathered_cut_copper_slab", "minecraft:waxed_weathered_cut_copper_stairs"],
  waxed_oxidized_copper: ["minecraft:waxed_oxidized_cut_copper", "minecraft:waxed_oxidized_cut_copper_slab", "minecraft:waxed_oxidized_cut_copper_stairs"],
  // Minecraft glass/wool variants
  glass: ["minecraft:glass", "minecraft:glass_pane"],
  white_wool: ["minecraft:white_wool", "minecraft:white_carpet"],
  orange_wool: ["minecraft:orange_wool", "minecraft:orange_carpet"],
  magenta_wool: ["minecraft:magenta_wool", "minecraft:magenta_carpet"],
  light_blue_wool: ["minecraft:light_blue_wool", "minecraft:light_blue_carpet"],
  yellow_wool: ["minecraft:yellow_wool", "minecraft:yellow_carpet"],
  lime_wool: ["minecraft:lime_wool", "minecraft:lime_carpet"],
  pink_wool: ["minecraft:pink_wool", "minecraft:pink_carpet"],
  gray_wool: ["minecraft:gray_wool", "minecraft:gray_carpet"],
  light_gray_wool: ["minecraft:light_gray_wool", "minecraft:light_gray_carpet"],
  cyan_wool: ["minecraft:cyan_wool", "minecraft:cyan_carpet"],
  purple_wool: ["minecraft:purple_wool", "minecraft:purple_carpet"],
  blue_wool: ["minecraft:blue_wool", "minecraft:blue_carpet"],
  brown_wool: ["minecraft:brown_wool", "minecraft:brown_carpet"],
  green_wool: ["minecraft:green_wool", "minecraft:green_carpet"],
  red_wool: ["minecraft:red_wool", "minecraft:red_carpet"],
  black_wool: ["minecraft:black_wool", "minecraft:black_carpet"],
  white_glass: ["minecraft:white_stained_glass", "minecraft:white_stained_glass_pane"],
  orange_glass: ["minecraft:orange_stained_glass", "minecraft:orange_stained_glass_pane"],
  magenta_glass: ["minecraft:magenta_stained_glass", "minecraft:magenta_stained_glass_pane"],
  light_blue_glass: ["minecraft:light_blue_stained_glass", "minecraft:light_blue_stained_glass_pane"],
  yellow_glass: ["minecraft:yellow_stained_glass", "minecraft:yellow_stained_glass_pane"],
  lime_glass: ["minecraft:lime_stained_glass", "minecraft:lime_stained_glass_pane"],
  pink_glass: ["minecraft:pink_stained_glass", "minecraft:pink_stained_glass_pane"],
  gray_glass: ["minecraft:gray_stained_glass", "minecraft:gray_stained_glass_pane"],
  light_gray_glass: ["minecraft:light_gray_stained_glass", "minecraft:light_gray_stained_glass_pane"],
  cyan_glass: ["minecraft:cyan_stained_glass", "minecraft:cyan_stained_glass_pane"],
  purple_glass: ["minecraft:purple_stained_glass", "minecraft:purple_stained_glass_pane"],
  blue_glass: ["minecraft:blue_stained_glass", "minecraft:blue_stained_glass_pane"],
  brown_glass: ["minecraft:brown_stained_glass", "minecraft:brown_stained_glass_pane"],
  green_glass: ["minecraft:green_stained_glass", "minecraft:green_stained_glass_pane"],
  red_glass: ["minecraft:red_stained_glass", "minecraft:red_stained_glass_pane"],
  black_glass: ["minecraft:black_stained_glass", "minecraft:black_stained_glass_pane"],
  moss: ["minecraft:moss_block", "minecraft:moss_carpet"],

  // Create mod stone variants
  create_andesite: [
    "create:cut_andesite", "create:cut_andesite_slab", "create:cut_andesite_stairs", "create:cut_andesite_wall",
    "create:cut_andesite_bricks", "create:cut_andesite_brick_slab", "create:cut_andesite_brick_stairs", "create:cut_andesite_brick_wall",
    "create:polished_cut_andesite", "create:polished_cut_andesite_slab", "create:polished_cut_andesite_stairs", "create:polished_cut_andesite_wall",
    "create:small_andesite_bricks", "create:small_andesite_brick_slab", "create:small_andesite_brick_stairs", "create:small_andesite_brick_wall",
  ],
  create_asurine: [
    "create:asurine", "create:cut_asurine", "create:cut_asurine_slab", "create:cut_asurine_stairs", "create:cut_asurine_wall",
    "create:cut_asurine_bricks", "create:cut_asurine_brick_slab", "create:cut_asurine_brick_stairs", "create:cut_asurine_brick_wall",
    "create:polished_cut_asurine", "create:polished_cut_asurine_slab", "create:polished_cut_asurine_stairs", "create:polished_cut_asurine_wall",
    "create:small_asurine_bricks", "create:small_asurine_brick_slab", "create:small_asurine_brick_stairs", "create:small_asurine_brick_wall",
  ],
  create_calcite: [
    "create:cut_calcite", "create:cut_calcite_slab", "create:cut_calcite_stairs", "create:cut_calcite_wall",
    "create:cut_calcite_bricks", "create:cut_calcite_brick_slab", "create:cut_calcite_brick_stairs", "create:cut_calcite_brick_wall",
    "create:polished_cut_calcite", "create:polished_cut_calcite_slab", "create:polished_cut_calcite_stairs", "create:polished_cut_calcite_wall",
    "create:small_calcite_bricks", "create:small_calcite_brick_slab", "create:small_calcite_brick_stairs", "create:small_calcite_brick_wall",
  ],
  create_crimsite: [
    "create:crimsite", "create:cut_crimsite", "create:cut_crimsite_slab", "create:cut_crimsite_stairs", "create:cut_crimsite_wall",
    "create:cut_crimsite_bricks", "create:cut_crimsite_brick_slab", "create:cut_crimsite_brick_stairs", "create:cut_crimsite_brick_wall",
    "create:polished_cut_crimsite", "create:polished_cut_crimsite_slab", "create:polished_cut_crimsite_stairs", "create:polished_cut_crimsite_wall",
    "create:small_crimsite_bricks", "create:small_crimsite_brick_slab", "create:small_crimsite_brick_stairs", "create:small_crimsite_brick_wall",
  ],
  create_deepslate: [
    "create:cut_deepslate", "create:cut_deepslate_slab", "create:cut_deepslate_stairs", "create:cut_deepslate_wall",
    "create:cut_deepslate_bricks", "create:cut_deepslate_brick_slab", "create:cut_deepslate_brick_stairs", "create:cut_deepslate_brick_wall",
    "create:polished_cut_deepslate", "create:polished_cut_deepslate_slab", "create:polished_cut_deepslate_stairs", "create:polished_cut_deepslate_wall",
    "create:small_deepslate_bricks", "create:small_deepslate_brick_slab", "create:small_deepslate_brick_stairs", "create:small_deepslate_brick_wall",
  ],
  create_diorite: [
    "create:cut_diorite", "create:cut_diorite_slab", "create:cut_diorite_stairs", "create:cut_diorite_wall",
    "create:cut_diorite_bricks", "create:cut_diorite_brick_slab", "create:cut_diorite_brick_stairs", "create:cut_diorite_brick_wall",
    "create:polished_cut_diorite", "create:polished_cut_diorite_slab", "create:polished_cut_diorite_stairs", "create:polished_cut_diorite_wall",
    "create:small_diorite_bricks", "create:small_diorite_brick_slab", "create:small_diorite_brick_stairs", "create:small_diorite_brick_wall",
  ],
  create_dripstone: [
    "create:cut_dripstone", "create:cut_dripstone_slab", "create:cut_dripstone_stairs", "create:cut_dripstone_wall",
    "create:cut_dripstone_bricks", "create:cut_dripstone_brick_slab", "create:cut_dripstone_brick_stairs", "create:cut_dripstone_brick_wall",
    "create:polished_cut_dripstone", "create:polished_cut_dripstone_slab", "create:polished_cut_dripstone_stairs", "create:polished_cut_dripstone_wall",
    "create:small_dripstone_bricks", "create:small_dripstone_brick_slab", "create:small_dripstone_brick_stairs", "create:small_dripstone_brick_wall",
  ],
  create_granite: [
    "create:cut_granite", "create:cut_granite_slab", "create:cut_granite_stairs", "create:cut_granite_wall",
    "create:cut_granite_bricks", "create:cut_granite_brick_slab", "create:cut_granite_brick_stairs", "create:cut_granite_brick_wall",
    "create:polished_cut_granite", "create:polished_cut_granite_slab", "create:polished_cut_granite_stairs", "create:polished_cut_granite_wall",
    "create:small_granite_bricks", "create:small_granite_brick_slab", "create:small_granite_brick_stairs", "create:small_granite_brick_wall",
  ],
  create_limestone: [
    "create:limestone", "create:cut_limestone", "create:cut_limestone_slab", "create:cut_limestone_stairs", "create:cut_limestone_wall",
    "create:cut_limestone_bricks", "create:cut_limestone_brick_slab", "create:cut_limestone_brick_stairs", "create:cut_limestone_brick_wall",
    "create:polished_cut_limestone", "create:polished_cut_limestone_slab", "create:polished_cut_limestone_stairs", "create:polished_cut_limestone_wall",
    "create:small_limestone_bricks", "create:small_limestone_brick_slab", "create:small_limestone_brick_stairs", "create:small_limestone_brick_wall",
  ],
  create_ochrum: [
    "create:ochrum", "create:cut_ochrum", "create:cut_ochrum_slab", "create:cut_ochrum_stairs", "create:cut_ochrum_wall",
    "create:cut_ochrum_bricks", "create:cut_ochrum_brick_slab", "create:cut_ochrum_brick_stairs", "create:cut_ochrum_brick_wall",
    "create:polished_cut_ochrum", "create:polished_cut_ochrum_slab", "create:polished_cut_ochrum_stairs", "create:polished_cut_ochrum_wall",
    "create:small_ochrum_bricks", "create:small_ochrum_brick_slab", "create:small_ochrum_brick_stairs", "create:small_ochrum_brick_wall",
  ],
  create_scorchia: [
    "create:scorchia", "create:cut_scorchia", "create:cut_scorchia_slab", "create:cut_scorchia_stairs", "create:cut_scorchia_wall",
    "create:cut_scorchia_bricks", "create:cut_scorchia_brick_slab", "create:cut_scorchia_brick_stairs", "create:cut_scorchia_brick_wall",
    "create:polished_cut_scorchia", "create:polished_cut_scorchia_slab", "create:polished_cut_scorchia_stairs", "create:polished_cut_scorchia_wall",
    "create:small_scorchia_bricks", "create:small_scorchia_brick_slab", "create:small_scorchia_brick_stairs", "create:small_scorchia_brick_wall",
  ],
  create_scoria: [
    "create:scoria", "create:cut_scoria", "create:cut_scoria_slab", "create:cut_scoria_stairs", "create:cut_scoria_wall",
    "create:cut_scoria_bricks", "create:cut_scoria_brick_slab", "create:cut_scoria_brick_stairs", "create:cut_scoria_brick_wall",
    "create:polished_cut_scoria", "create:polished_cut_scoria_slab", "create:polished_cut_scoria_stairs", "create:polished_cut_scoria_wall",
    "create:small_scoria_bricks", "create:small_scoria_brick_slab", "create:small_scoria_brick_stairs", "create:small_scoria_brick_wall",
  ],
  create_tuff: [
    "create:cut_tuff", "create:cut_tuff_slab", "create:cut_tuff_stairs", "create:cut_tuff_wall",
    "create:cut_tuff_bricks", "create:cut_tuff_brick_slab", "create:cut_tuff_brick_stairs", "create:cut_tuff_brick_wall",
    "create:polished_cut_tuff", "create:polished_cut_tuff_slab", "create:polished_cut_tuff_stairs", "create:polished_cut_tuff_wall",
    "create:small_tuff_bricks", "create:small_tuff_brick_slab", "create:small_tuff_brick_stairs", "create:small_tuff_brick_wall",
  ],
  create_veridium: [
    "create:veridium", "create:cut_veridium", "create:cut_veridium_slab", "create:cut_veridium_stairs", "create:cut_veridium_wall",
    "create:cut_veridium_bricks", "create:cut_veridium_brick_slab", "create:cut_veridium_brick_stairs", "create:cut_veridium_brick_wall",
    "create:polished_cut_veridium", "create:polished_cut_veridium_slab", "create:polished_cut_veridium_stairs", "create:polished_cut_veridium_wall",
    "create:small_veridium_bricks", "create:small_veridium_brick_slab", "create:small_veridium_brick_stairs", "create:small_veridium_brick_wall",
  ],
  // Create mod windows
  create_oak_window: ["create:oak_window", "create:oak_window_pane"],
  create_spruce_window: ["create:spruce_window", "create:spruce_window_pane"],
  create_birch_window: ["create:birch_window", "create:birch_window_pane"],
  create_jungle_window: ["create:jungle_window", "create:jungle_window_pane"],
  create_acacia_window: ["create:acacia_window", "create:acacia_window_pane"],
  create_dark_oak_window: ["create:dark_oak_window", "create:dark_oak_window_pane"],
  create_mangrove_window: ["create:mangrove_window", "create:mangrove_window_pane"],
  create_crimson_window: ["create:crimson_window", "create:crimson_window_pane"],
  create_warped_window: ["create:warped_window", "create:warped_window_pane"],
  create_ornate_iron_window: ["create:ornate_iron_window", "create:ornate_iron_window_pane"],
  create_framed_glass: ["create:framed_glass", "create:framed_glass_pane"],
  create_tiled_glass: ["create:tiled_glass", "create:tiled_glass_pane"],
  create_horizontal_framed_glass: ["create:horizontal_framed_glass", "create:horizontal_framed_glass_pane"],
  create_vertical_framed_glass: ["create:vertical_framed_glass", "create:vertical_framed_glass_pane"],
  // Create mod copper roofing
  create_copper_shingles: ["create:copper_shingles", "create:copper_shingle_slab", "create:copper_shingle_stairs"],
  create_copper_tiles: ["create:copper_tiles", "create:copper_tile_slab", "create:copper_tile_stairs"],
  create_exposed_copper_shingles: ["create:exposed_copper_shingles", "create:exposed_copper_shingle_slab", "create:exposed_copper_shingle_stairs"],
  create_exposed_copper_tiles: ["create:exposed_copper_tiles", "create:exposed_copper_tile_slab", "create:exposed_copper_tile_stairs"],
  create_weathered_copper_shingles: ["create:weathered_copper_shingles", "create:weathered_copper_shingle_slab", "create:weathered_copper_shingle_stairs"],
  create_weathered_copper_tiles: ["create:weathered_copper_tiles", "create:weathered_copper_tile_slab", "create:weathered_copper_tile_stairs"],
  create_oxidized_copper_shingles: ["create:oxidized_copper_shingles", "create:oxidized_copper_shingle_slab", "create:oxidized_copper_shingle_stairs"],
  create_oxidized_copper_tiles: ["create:oxidized_copper_tiles", "create:oxidized_copper_tile_slab", "create:oxidized_copper_tile_stairs"],
  create_waxed_copper_shingles: ["create:waxed_copper_shingles", "create:waxed_copper_shingle_slab", "create:waxed_copper_shingle_stairs"],
  create_waxed_copper_tiles: ["create:waxed_copper_tiles", "create:waxed_copper_tile_slab", "create:waxed_copper_tile_stairs"],
  create_waxed_exposed_copper_shingles: ["create:waxed_exposed_copper_shingles", "create:waxed_exposed_copper_shingle_slab", "create:waxed_exposed_copper_shingle_stairs"],
  create_waxed_exposed_copper_tiles: ["create:waxed_exposed_copper_tiles", "create:waxed_exposed_copper_tile_slab", "create:waxed_exposed_copper_tile_stairs"],
  create_waxed_weathered_copper_shingles: ["create:waxed_weathered_copper_shingles", "create:waxed_weathered_copper_shingle_slab", "create:waxed_weathered_copper_shingle_stairs"],
  create_waxed_weathered_copper_tiles: ["create:waxed_weathered_copper_tiles", "create:waxed_weathered_copper_tile_slab", "create:waxed_weathered_copper_tile_stairs"],
  create_waxed_oxidized_copper_shingles: ["create:waxed_oxidized_copper_shingles", "create:waxed_oxidized_copper_shingle_slab", "create:waxed_oxidized_copper_shingle_stairs"],
  create_waxed_oxidized_copper_tiles: ["create:waxed_oxidized_copper_tiles", "create:waxed_oxidized_copper_tile_slab", "create:waxed_oxidized_copper_tile_stairs"],
  create_sail: ["create:white_sail", "create:sail_frame"],

  // Botania stone variants
  botania_livingrock: [
    "botania:livingrock", "botania:livingrock_slab", "botania:livingrock_stairs", "botania:livingrock_wall",
    "botania:livingrock_bricks", "botania:livingrock_bricks_slab", "botania:livingrock_bricks_stairs", "botania:livingrock_bricks_wall",
    "botania:polished_livingrock", "botania:polished_livingrock_slab", "botania:polished_livingrock_stairs", "botania:polished_livingrock_wall",
    "botania:chiseled_livingrock_bricks", "botania:cracked_livingrock_bricks",
  ],
  botania_mossy_livingrock: [
    "botania:mossy_livingrock_bricks", "botania:mossy_livingrock_bricks_slab", "botania:mossy_livingrock_bricks_stairs", "botania:mossy_livingrock_bricks_wall",
  ],
  botania_livingwood: [
    "botania:livingwood_planks", "botania:livingwood_slab", "botania:livingwood_stairs", "botania:livingwood_fence", "botania:livingwood_fence_gate",
  ],
  botania_dreamwood: [
    "botania:dreamwood_planks", "botania:dreamwood_slab", "botania:dreamwood_stairs", "botania:dreamwood_fence", "botania:dreamwood_fence_gate",
  ],
  botania_shimmerrock: ["botania:shimmerrock", "botania:shimmerrock_slab", "botania:shimmerrock_stairs"],
  botania_shimmerwood: ["botania:shimmerwood_planks", "botania:shimmerwood_planks_slab", "botania:shimmerwood_planks_stairs"],
  botania_black_pavement: ["botania:black_pavement", "botania:black_pavement_slab", "botania:black_pavement_stairs"],
  botania_blue_pavement: ["botania:blue_pavement", "botania:blue_pavement_slab", "botania:blue_pavement_stairs"],
  botania_green_pavement: ["botania:green_pavement", "botania:green_pavement_slab", "botania:green_pavement_stairs"],
  botania_red_pavement: ["botania:red_pavement", "botania:red_pavement_slab", "botania:red_pavement_stairs"],
  botania_white_pavement: ["botania:white_pavement", "botania:white_pavement_slab", "botania:white_pavement_stairs"],
  botania_yellow_pavement: ["botania:yellow_pavement", "botania:yellow_pavement_slab", "botania:yellow_pavement_stairs"],
  botania_blaze_quartz: ["botania:blaze_quartz", "botania:blaze_quartz_slab", "botania:blaze_quartz_stairs", "botania:blaze_quartz_chiseled", "botania:blaze_quartz_pillar"],
  botania_dark_quartz: ["botania:dark_quartz", "botania:dark_quartz_slab", "botania:dark_quartz_stairs", "botania:dark_quartz_chiseled", "botania:dark_quartz_pillar"],
  botania_elf_quartz: ["botania:elf_quartz", "botania:elf_quartz_slab", "botania:elf_quartz_stairs", "botania:elf_quartz_chiseled", "botania:elf_quartz_pillar"],
  botania_lavender_quartz: ["botania:lavender_quartz", "botania:lavender_quartz_slab", "botania:lavender_quartz_stairs", "botania:lavender_quartz_chiseled", "botania:lavender_quartz_pillar"],
  botania_mana_quartz: ["botania:mana_quartz", "botania:mana_quartz_slab", "botania:mana_quartz_stairs", "botania:mana_quartz_chiseled", "botania:mana_quartz_pillar"],
  botania_red_quartz: ["botania:red_quartz", "botania:red_quartz_slab", "botania:red_quartz_stairs", "botania:red_quartz_chiseled", "botania:red_quartz_pillar"],
  botania_sunny_quartz: ["botania:sunny_quartz", "botania:sunny_quartz_slab", "botania:sunny_quartz_stairs", "botania:sunny_quartz_chiseled", "botania:sunny_quartz_pillar"],
  botania_corporea: ["botania:corporea_block", "botania:corporea_slab", "botania:corporea_stairs"],
  botania_corporea_brick: ["botania:corporea_brick", "botania:corporea_brick_slab", "botania:corporea_brick_stairs", "botania:corporea_brick_wall"],
  botania_bifrost: ["botania:bifrost", "botania:bifrost_pane"],
  botania_elf_glass: ["botania:elf_glass", "botania:elf_glass_pane"],
  botania_mana_glass: ["botania:mana_glass", "botania:mana_glass_pane"],
  // Botania metamorphic stones
  botania_meta_desert: [
    "botania:metamorphic_desert_stone", "botania:metamorphic_desert_stone_slab", "botania:metamorphic_desert_stone_stairs", "botania:metamorphic_desert_stone_wall",
    "botania:metamorphic_desert_cobblestone", "botania:metamorphic_desert_cobblestone_slab", "botania:metamorphic_desert_cobblestone_stairs", "botania:metamorphic_desert_cobblestone_wall",
    "botania:metamorphic_desert_bricks", "botania:metamorphic_desert_bricks_slab", "botania:metamorphic_desert_bricks_stairs", "botania:metamorphic_desert_bricks_wall",
    "botania:metamorphic_desert_chiseled_bricks",
  ],
  botania_meta_forest: [
    "botania:metamorphic_forest_stone", "botania:metamorphic_forest_stone_slab", "botania:metamorphic_forest_stone_stairs", "botania:metamorphic_forest_stone_wall",
    "botania:metamorphic_forest_cobblestone", "botania:metamorphic_forest_cobblestone_slab", "botania:metamorphic_forest_cobblestone_stairs", "botania:metamorphic_forest_cobblestone_wall",
    "botania:metamorphic_forest_bricks", "botania:metamorphic_forest_bricks_slab", "botania:metamorphic_forest_bricks_stairs", "botania:metamorphic_forest_bricks_wall",
    "botania:metamorphic_forest_chiseled_bricks",
  ],
  botania_meta_fungal: [
    "botania:metamorphic_fungal_stone", "botania:metamorphic_fungal_stone_slab", "botania:metamorphic_fungal_stone_stairs", "botania:metamorphic_fungal_stone_wall",
    "botania:metamorphic_fungal_cobblestone", "botania:metamorphic_fungal_cobblestone_slab", "botania:metamorphic_fungal_cobblestone_stairs", "botania:metamorphic_fungal_cobblestone_wall",
    "botania:metamorphic_fungal_bricks", "botania:metamorphic_fungal_bricks_slab", "botania:metamorphic_fungal_bricks_stairs", "botania:metamorphic_fungal_bricks_wall",
    "botania:metamorphic_fungal_chiseled_bricks",
  ],
  botania_meta_mesa: [
    "botania:metamorphic_mesa_stone", "botania:metamorphic_mesa_stone_slab", "botania:metamorphic_mesa_stone_stairs", "botania:metamorphic_mesa_stone_wall",
    "botania:metamorphic_mesa_cobblestone", "botania:metamorphic_mesa_cobblestone_slab", "botania:metamorphic_mesa_cobblestone_stairs", "botania:metamorphic_mesa_cobblestone_wall",
    "botania:metamorphic_mesa_bricks", "botania:metamorphic_mesa_bricks_slab", "botania:metamorphic_mesa_bricks_stairs", "botania:metamorphic_mesa_bricks_wall",
    "botania:metamorphic_mesa_chiseled_bricks",
  ],
  botania_meta_mountain: [
    "botania:metamorphic_mountain_stone", "botania:metamorphic_mountain_stone_slab", "botania:metamorphic_mountain_stone_stairs", "botania:metamorphic_mountain_stone_wall",
    "botania:metamorphic_mountain_cobblestone", "botania:metamorphic_mountain_cobblestone_slab", "botania:metamorphic_mountain_cobblestone_stairs", "botania:metamorphic_mountain_cobblestone_wall",
    "botania:metamorphic_mountain_bricks", "botania:metamorphic_mountain_bricks_slab", "botania:metamorphic_mountain_bricks_stairs", "botania:metamorphic_mountain_bricks_wall",
    "botania:metamorphic_mountain_chiseled_bricks",
  ],
  botania_meta_plains: [
    "botania:metamorphic_plains_stone", "botania:metamorphic_plains_stone_slab", "botania:metamorphic_plains_stone_stairs", "botania:metamorphic_plains_stone_wall",
    "botania:metamorphic_plains_cobblestone", "botania:metamorphic_plains_cobblestone_slab", "botania:metamorphic_plains_cobblestone_stairs", "botania:metamorphic_plains_cobblestone_wall",
    "botania:metamorphic_plains_bricks", "botania:metamorphic_plains_bricks_slab", "botania:metamorphic_plains_bricks_stairs", "botania:metamorphic_plains_bricks_wall",
    "botania:metamorphic_plains_chiseled_bricks",
  ],
  botania_meta_swamp: [
    "botania:metamorphic_swamp_stone", "botania:metamorphic_swamp_stone_slab", "botania:metamorphic_swamp_stone_stairs", "botania:metamorphic_swamp_stone_wall",
    "botania:metamorphic_swamp_cobblestone", "botania:metamorphic_swamp_cobblestone_slab", "botania:metamorphic_swamp_cobblestone_stairs", "botania:metamorphic_swamp_cobblestone_wall",
    "botania:metamorphic_swamp_bricks", "botania:metamorphic_swamp_bricks_slab", "botania:metamorphic_swamp_bricks_stairs", "botania:metamorphic_swamp_bricks_wall",
    "botania:metamorphic_swamp_chiseled_bricks",
  ],
  botania_meta_taiga: [
    "botania:metamorphic_taiga_stone", "botania:metamorphic_taiga_stone_slab", "botania:metamorphic_taiga_stone_stairs", "botania:metamorphic_taiga_stone_wall",
    "botania:metamorphic_taiga_cobblestone", "botania:metamorphic_taiga_cobblestone_slab", "botania:metamorphic_taiga_cobblestone_stairs", "botania:metamorphic_taiga_cobblestone_wall",
    "botania:metamorphic_taiga_bricks", "botania:metamorphic_taiga_bricks_slab", "botania:metamorphic_taiga_bricks_stairs", "botania:metamorphic_taiga_bricks_wall",
    "botania:metamorphic_taiga_chiseled_bricks",
  ],

  // Quark stone variants
  quark_limestone: [
    "quark:limestone", "quark:limestone_slab", "quark:limestone_stairs", "quark:limestone_wall", "quark:limestone_vertical_slab",
    "quark:limestone_bricks", "quark:limestone_bricks_slab", "quark:limestone_bricks_stairs", "quark:limestone_bricks_wall", "quark:limestone_bricks_vertical_slab",
    "quark:polished_limestone", "quark:polished_limestone_slab", "quark:polished_limestone_stairs", "quark:polished_limestone_vertical_slab",
    "quark:chiseled_limestone_bricks", "quark:limestone_pillar",
  ],
  quark_jasper: [
    "quark:jasper", "quark:jasper_slab", "quark:jasper_stairs", "quark:jasper_wall", "quark:jasper_vertical_slab",
    "quark:jasper_bricks", "quark:jasper_bricks_slab", "quark:jasper_bricks_stairs", "quark:jasper_bricks_wall", "quark:jasper_bricks_vertical_slab",
    "quark:polished_jasper", "quark:polished_jasper_slab", "quark:polished_jasper_stairs", "quark:polished_jasper_vertical_slab",
    "quark:chiseled_jasper_bricks", "quark:jasper_pillar",
  ],
  quark_shale: [
    "quark:shale", "quark:shale_slab", "quark:shale_stairs", "quark:shale_wall", "quark:shale_vertical_slab",
    "quark:shale_bricks", "quark:shale_bricks_slab", "quark:shale_bricks_stairs", "quark:shale_bricks_wall", "quark:shale_bricks_vertical_slab",
    "quark:polished_shale", "quark:polished_shale_slab", "quark:polished_shale_stairs", "quark:polished_shale_vertical_slab",
  ],
  quark_myalite: [
    "quark:myalite", "quark:myalite_slab", "quark:myalite_stairs", "quark:myalite_wall", "quark:myalite_vertical_slab",
    "quark:myalite_bricks", "quark:myalite_bricks_slab", "quark:myalite_bricks_stairs", "quark:myalite_bricks_wall", "quark:myalite_bricks_vertical_slab",
    "quark:polished_myalite", "quark:polished_myalite_slab", "quark:polished_myalite_stairs", "quark:polished_myalite_vertical_slab",
    "quark:chiseled_myalite_bricks", "quark:myalite_pillar",
  ],
  quark_permafrost: [
    "quark:permafrost", "quark:permafrost_slab", "quark:permafrost_stairs", "quark:permafrost_wall", "quark:permafrost_vertical_slab",
    "quark:permafrost_bricks", "quark:permafrost_bricks_slab", "quark:permafrost_bricks_stairs", "quark:permafrost_bricks_wall", "quark:permafrost_bricks_vertical_slab",
  ],
  quark_soul_sandstone: [
    "quark:soul_sandstone", "quark:soul_sandstone_slab", "quark:soul_sandstone_stairs", "quark:soul_sandstone_wall", "quark:soul_sandstone_vertical_slab",
    "quark:soul_sandstone_bricks", "quark:soul_sandstone_bricks_slab", "quark:soul_sandstone_bricks_stairs", "quark:soul_sandstone_bricks_wall", "quark:soul_sandstone_bricks_vertical_slab",
    "quark:smooth_soul_sandstone", "quark:smooth_soul_sandstone_slab", "quark:smooth_soul_sandstone_stairs", "quark:smooth_soul_sandstone_vertical_slab",
    "quark:cut_soul_sandstone", "quark:cut_soul_sandstone_slab", "quark:cut_soul_sandstone_vertical_slab",
    "quark:chiseled_soul_sandstone",
  ],
  quark_iron_plate: [
    "quark:iron_plate", "quark:iron_plate_slab", "quark:iron_plate_stairs", "quark:iron_plate_vertical_slab", "quark:iron_pillar",
    "ptdye:gray_fence", "ptdye:gray_fence_gate",
  ],
  quark_rusty_iron_plate: [
    "quark:rusty_iron_plate", "quark:rusty_iron_plate_slab", "quark:rusty_iron_plate_stairs", "quark:rusty_iron_plate_vertical_slab",
  ],
  quark_midori: ["quark:midori_block", "quark:midori_block_slab", "quark:midori_block_stairs", "quark:midori_block_vertical_slab", "quark:midori_pillar"],
  quark_duskbound: ["quark:duskbound_block", "quark:duskbound_block_slab", "quark:duskbound_block_stairs", "quark:duskbound_block_vertical_slab"],
  quark_thatch: ["quark:thatch", "quark:thatch_slab", "quark:thatch_stairs", "quark:thatch_vertical_slab"],
  quark_shingles: ["quark:shingles", "quark:shingles_slab", "quark:shingles_stairs", "quark:shingles_vertical_slab"],
  quark_white_shingles: ["quark:white_shingles", "quark:white_shingles_slab", "quark:white_shingles_stairs", "quark:white_shingles_vertical_slab"],
  quark_orange_shingles: ["quark:orange_shingles", "quark:orange_shingles_slab", "quark:orange_shingles_stairs", "quark:orange_shingles_vertical_slab"],
  quark_magenta_shingles: ["quark:magenta_shingles", "quark:magenta_shingles_slab", "quark:magenta_shingles_stairs", "quark:magenta_shingles_vertical_slab"],
  quark_light_blue_shingles: ["quark:light_blue_shingles", "quark:light_blue_shingles_slab", "quark:light_blue_shingles_stairs", "quark:light_blue_shingles_vertical_slab"],
  quark_yellow_shingles: ["quark:yellow_shingles", "quark:yellow_shingles_slab", "quark:yellow_shingles_stairs", "quark:yellow_shingles_vertical_slab"],
  quark_lime_shingles: ["quark:lime_shingles", "quark:lime_shingles_slab", "quark:lime_shingles_stairs", "quark:lime_shingles_vertical_slab"],
  quark_pink_shingles: ["quark:pink_shingles", "quark:pink_shingles_slab", "quark:pink_shingles_stairs", "quark:pink_shingles_vertical_slab"],
  quark_gray_shingles: ["quark:gray_shingles", "quark:gray_shingles_slab", "quark:gray_shingles_stairs", "quark:gray_shingles_vertical_slab"],
  quark_light_gray_shingles: ["quark:light_gray_shingles", "quark:light_gray_shingles_slab", "quark:light_gray_shingles_stairs", "quark:light_gray_shingles_vertical_slab"],
  quark_cyan_shingles: ["quark:cyan_shingles", "quark:cyan_shingles_slab", "quark:cyan_shingles_stairs", "quark:cyan_shingles_vertical_slab"],
  quark_purple_shingles: ["quark:purple_shingles", "quark:purple_shingles_slab", "quark:purple_shingles_stairs", "quark:purple_shingles_vertical_slab"],
  quark_blue_shingles: ["quark:blue_shingles", "quark:blue_shingles_slab", "quark:blue_shingles_stairs", "quark:blue_shingles_vertical_slab"],
  quark_brown_shingles: ["quark:brown_shingles", "quark:brown_shingles_slab", "quark:brown_shingles_stairs", "quark:brown_shingles_vertical_slab"],
  quark_green_shingles: ["quark:green_shingles", "quark:green_shingles_slab", "quark:green_shingles_stairs", "quark:green_shingles_vertical_slab"],
  quark_red_shingles: ["quark:red_shingles", "quark:red_shingles_slab", "quark:red_shingles_stairs", "quark:red_shingles_vertical_slab"],
  quark_black_shingles: ["quark:black_shingles", "quark:black_shingles_slab", "quark:black_shingles_stairs", "quark:black_shingles_vertical_slab"],
  quark_framed_glass: ["quark:framed_glass", "quark:framed_glass_pane"],
  quark_white_framed_glass: ["quark:white_framed_glass", "quark:white_framed_glass_pane"],
  quark_orange_framed_glass: ["quark:orange_framed_glass", "quark:orange_framed_glass_pane"],
  quark_magenta_framed_glass: ["quark:magenta_framed_glass", "quark:magenta_framed_glass_pane"],
  quark_light_blue_framed_glass: ["quark:light_blue_framed_glass", "quark:light_blue_framed_glass_pane"],
  quark_yellow_framed_glass: ["quark:yellow_framed_glass", "quark:yellow_framed_glass_pane"],
  quark_lime_framed_glass: ["quark:lime_framed_glass", "quark:lime_framed_glass_pane"],
  quark_pink_framed_glass: ["quark:pink_framed_glass", "quark:pink_framed_glass_pane"],
  quark_gray_framed_glass: ["quark:gray_framed_glass", "quark:gray_framed_glass_pane"],
  quark_light_gray_framed_glass: ["quark:light_gray_framed_glass", "quark:light_gray_framed_glass_pane"],
  quark_cyan_framed_glass: ["quark:cyan_framed_glass", "quark:cyan_framed_glass_pane"],
  quark_purple_framed_glass: ["quark:purple_framed_glass", "quark:purple_framed_glass_pane"],
  quark_blue_framed_glass: ["quark:blue_framed_glass", "quark:blue_framed_glass_pane"],
  quark_brown_framed_glass: ["quark:brown_framed_glass", "quark:brown_framed_glass_pane"],
  quark_green_framed_glass: ["quark:green_framed_glass", "quark:green_framed_glass_pane"],
  quark_red_framed_glass: ["quark:red_framed_glass", "quark:red_framed_glass_pane"],
  quark_black_framed_glass: ["quark:black_framed_glass", "quark:black_framed_glass_pane"],
  quark_white_corundum: ["quark:white_corundum", "quark:white_corundum_pane"],
  quark_orange_corundum: ["quark:orange_corundum", "quark:orange_corundum_pane"],
  quark_yellow_corundum: ["quark:yellow_corundum", "quark:yellow_corundum_pane"],
  quark_green_corundum: ["quark:green_corundum", "quark:green_corundum_pane"],
  quark_blue_corundum: ["quark:blue_corundum", "quark:blue_corundum_pane"],
  quark_indigo_corundum: ["quark:indigo_corundum", "quark:indigo_corundum_pane"],
  quark_violet_corundum: ["quark:violet_corundum", "quark:violet_corundum_pane"],
  quark_red_corundum: ["quark:red_corundum", "quark:red_corundum_pane"],
  quark_black_corundum: ["quark:black_corundum", "quark:black_corundum_pane"],
  quark_andesite_bricks: ["quark:andesite_bricks", "quark:andesite_bricks_slab", "quark:andesite_bricks_stairs", "quark:andesite_bricks_wall", "quark:andesite_bricks_vertical_slab"],
  quark_diorite_bricks: ["quark:diorite_bricks", "quark:diorite_bricks_slab", "quark:diorite_bricks_stairs", "quark:diorite_bricks_wall", "quark:diorite_bricks_vertical_slab"],
  quark_granite_bricks: ["quark:granite_bricks", "quark:granite_bricks_slab", "quark:granite_bricks_stairs", "quark:granite_bricks_wall", "quark:granite_bricks_vertical_slab"],
  quark_cobblestone_bricks: ["quark:cobblestone_bricks", "quark:cobblestone_bricks_slab", "quark:cobblestone_bricks_stairs", "quark:cobblestone_bricks_wall", "quark:cobblestone_bricks_vertical_slab"],
  quark_mossy_cobblestone_bricks: ["quark:mossy_cobblestone_bricks", "quark:mossy_cobblestone_bricks_slab", "quark:mossy_cobblestone_bricks_stairs", "quark:mossy_cobblestone_bricks_wall", "quark:mossy_cobblestone_bricks_vertical_slab"],
  quark_blackstone_bricks: ["quark:blackstone_bricks", "quark:blackstone_bricks_slab", "quark:blackstone_bricks_stairs", "quark:blackstone_bricks_wall", "quark:blackstone_bricks_vertical_slab"],
  quark_dirt_bricks: ["quark:dirt_bricks", "quark:dirt_bricks_slab", "quark:dirt_bricks_stairs", "quark:dirt_bricks_wall", "quark:dirt_bricks_vertical_slab"],
  quark_netherrack_bricks: ["quark:netherrack_bricks", "quark:netherrack_bricks_slab", "quark:netherrack_bricks_stairs", "quark:netherrack_bricks_wall", "quark:netherrack_bricks_vertical_slab"],
  quark_blue_nether_bricks: ["quark:blue_nether_bricks", "quark:blue_nether_bricks_slab", "quark:blue_nether_bricks_stairs", "quark:blue_nether_bricks_wall", "quark:blue_nether_bricks_vertical_slab"],
  quark_sandstone_bricks: ["quark:sandstone_bricks", "quark:sandstone_bricks_slab", "quark:sandstone_bricks_stairs", "quark:sandstone_bricks_wall", "quark:sandstone_bricks_vertical_slab"],
  quark_red_sandstone_bricks: ["quark:red_sandstone_bricks", "quark:red_sandstone_bricks_slab", "quark:red_sandstone_bricks_stairs", "quark:red_sandstone_bricks_wall", "quark:red_sandstone_bricks_vertical_slab"],
  quark_calcite_bricks: ["quark:calcite_bricks", "quark:calcite_bricks_slab", "quark:calcite_bricks_stairs", "quark:calcite_bricks_wall", "quark:calcite_bricks_vertical_slab"],
  quark_dripstone_bricks: ["quark:dripstone_bricks", "quark:dripstone_bricks_slab", "quark:dripstone_bricks_stairs", "quark:dripstone_bricks_wall", "quark:dripstone_bricks_vertical_slab"],
  quark_tuff_bricks: ["quark:tuff_bricks", "quark:tuff_bricks_slab", "quark:tuff_bricks_stairs", "quark:tuff_bricks_wall", "quark:tuff_bricks_vertical_slab"],
  quark_raw_iron_bricks: ["quark:raw_iron_bricks", "quark:raw_iron_bricks_slab", "quark:raw_iron_bricks_stairs", "quark:raw_iron_bricks_vertical_slab"],
  quark_raw_copper_bricks: ["quark:raw_copper_bricks", "quark:raw_copper_bricks_slab", "quark:raw_copper_bricks_stairs", "quark:raw_copper_bricks_vertical_slab"],
  quark_raw_gold_bricks: ["quark:raw_gold_bricks", "quark:raw_gold_bricks_slab", "quark:raw_gold_bricks_stairs", "quark:raw_gold_bricks_vertical_slab"],
  quark_polished_calcite: ["quark:polished_calcite", "quark:polished_calcite_slab", "quark:polished_calcite_stairs", "quark:polished_calcite_vertical_slab"],
  quark_polished_dripstone: ["quark:polished_dripstone", "quark:polished_dripstone_slab", "quark:polished_dripstone_stairs", "quark:polished_dripstone_vertical_slab"],
  quark_polished_tuff: ["quark:polished_tuff", "quark:polished_tuff_slab", "quark:polished_tuff_stairs", "quark:polished_tuff_vertical_slab"],
  quark_calcite: ["minecraft:calcite", "quark:calcite_slab", "quark:calcite_stairs", "quark:calcite_wall", "quark:calcite_vertical_slab"],
  quark_tuff: ["minecraft:tuff", "quark:tuff_slab", "quark:tuff_stairs", "quark:tuff_wall", "quark:tuff_vertical_slab"],
  quark_dripstone: ["minecraft:dripstone_block", "quark:dripstone_block_slab", "quark:dripstone_block_stairs", "quark:dripstone_block_wall", "quark:dripstone_block_vertical_slab"],
  quark_azalea: ["quark:azalea_planks", "quark:azalea_planks_slab", "quark:azalea_planks_stairs", "quark:azalea_fence", "quark:azalea_fence_gate", "quark:azalea_planks_vertical_slab"],
  quark_blossom: ["quark:blossom_planks", "quark:blossom_planks_slab", "quark:blossom_planks_stairs", "quark:blossom_fence", "quark:blossom_fence_gate", "quark:blossom_planks_vertical_slab"],
  quark_ancient: ["quark:ancient_planks", "quark:ancient_planks_slab", "quark:ancient_planks_stairs", "quark:ancient_fence", "quark:ancient_fence_gate", "quark:ancient_planks_vertical_slab"],
  quark_dirty_glass: ["quark:dirty_glass", "quark:dirty_glass_pane"],
  quark_bamboo_mat: ["quark:bamboo_mat", "quark:bamboo_mat_carpet"],
  quark_oak_leaves: ["minecraft:oak_leaves", "quark:oak_leaf_carpet"],
  quark_spruce_leaves: ["minecraft:spruce_leaves", "quark:spruce_leaf_carpet"],
  quark_birch_leaves: ["minecraft:birch_leaves", "quark:birch_leaf_carpet"],
  quark_jungle_leaves: ["minecraft:jungle_leaves", "quark:jungle_leaf_carpet"],
  quark_acacia_leaves: ["minecraft:acacia_leaves", "quark:acacia_leaf_carpet"],
  quark_dark_oak_leaves: ["minecraft:dark_oak_leaves", "quark:dark_oak_leaf_carpet"],
  quark_mangrove_leaves: ["minecraft:mangrove_leaves", "quark:mangrove_leaf_carpet"],
  quark_azalea_leaves: ["minecraft:azalea_leaves", "quark:azalea_leaf_carpet"],
  quark_flowering_azalea_leaves: ["minecraft:flowering_azalea_leaves", "quark:flowering_azalea_leaf_carpet"],
  quark_ancient_leaves: ["quark:ancient_leaves", "quark:ancient_leaf_carpet"],
  quark_blue_blossom_leaves: ["quark:blue_blossom_leaves", "quark:blue_blossom_leaf_carpet"],
  quark_lavender_blossom_leaves: ["quark:lavender_blossom_leaves", "quark:lavender_blossom_leaf_carpet"],
  quark_orange_blossom_leaves: ["quark:orange_blossom_leaves", "quark:orange_blossom_leaf_carpet"],
  quark_pink_blossom_leaves: ["quark:pink_blossom_leaves", "quark:pink_blossom_leaf_carpet"],
  quark_yellow_blossom_leaves: ["quark:yellow_blossom_leaves", "quark:yellow_blossom_leaf_carpet"],
  quark_red_blossom_leaves: ["quark:red_blossom_leaves", "quark:red_blossom_leaf_carpet"],

  // Botania stripped wood
  botania_stripped_livingwood: ["botania:stripped_livingwood", "botania:stripped_livingwood_slab", "botania:stripped_livingwood_stairs", "botania:stripped_livingwood_wall"],
  botania_stripped_dreamwood: ["botania:stripped_dreamwood", "botania:stripped_dreamwood_slab", "botania:stripped_dreamwood_stairs", "botania:stripped_dreamwood_wall"],

  // Supplementaries blocks
  supplementaries_ash_bricks: ["supplementaries:ash_bricks", "supplementaries:ash_bricks_slab", "supplementaries:ash_bricks_stairs", "supplementaries:ash_bricks_wall", "supplementaries:ash_bricks_vertical_slab"],
  supplementaries_blackstone_tile: ["supplementaries:blackstone_tile", "supplementaries:blackstone_tile_slab", "supplementaries:blackstone_tile_stairs", "supplementaries:blackstone_tile_wall", "supplementaries:blackstone_tile_vertical_slab"],
  supplementaries_stone_tile: ["supplementaries:stone_tile", "supplementaries:stone_tile_slab", "supplementaries:stone_tile_stairs", "supplementaries:stone_tile_wall", "supplementaries:stone_tile_vertical_slab"],
  supplementaries_lapis_bricks: ["supplementaries:lapis_bricks", "supplementaries:lapis_bricks_slab", "supplementaries:lapis_bricks_stairs", "supplementaries:lapis_bricks_wall", "supplementaries:lapis_bricks_vertical_slab"],
  supplementaries_checker: ["supplementaries:checker_block", "supplementaries:checker_slab", "supplementaries:checker_vertical_slab"],

  // Create Diesel Generators blocks
  diesel_asphalt: ["createdieselgenerators:asphalt_block", "createdieselgenerators:asphalt_slab", "createdieselgenerators:asphalt_stairs"],
  diesel_chip_wood: ["createdieselgenerators:chip_wood_block", "createdieselgenerators:chip_wood_slab", "createdieselgenerators:chip_wood_stairs"],
};

// Tag each item with its variant group
ServerEvents.tags("item", function(event) {
  var groupNames = Object.keys(VARIANT_GROUPS);

  for (var g = 0; g < groupNames.length; g++) {
    var groupName = groupNames[g];
    var items = VARIANT_GROUPS[groupName];
    var tagName = "ptd:variant/" + groupName;

    for (var i = 0; i < items.length; i++) {
      if (!Item.of(items[i]).isEmpty()) {
        event.add(tagName, items[i]);
      }
    }
  }
});

// Stonecutting recipes for variant conversions
ServerEvents.recipes(function(event) {
  var itemsToRemove = [];
  var groupNames = Object.keys(VARIANT_GROUPS);

  for (var i = 0; i < groupNames.length; i++) {
    var items = VARIANT_GROUPS[groupNames[i]];
    for (var j = 1; j < items.length; j++) {
      if (!Item.of(items[j]).isEmpty()) {
        itemsToRemove.push(items[j]);
      }
    }
  }

  event.remove({ type: "minecraft:stonecutting", output: itemsToRemove });
  event.remove({ type: "minecraft:crafting_shaped", output: itemsToRemove });
  event.remove({ type: "minecraft:crafting_shapeless", output: itemsToRemove });
  event.remove({ type: "minecraft:smelting", output: itemsToRemove });
  event.remove({ type: "create:cutting", output: itemsToRemove });

  for (var i = 0; i < groupNames.length; i++) {
    var items = VARIANT_GROUPS[groupNames[i]];
    var validItems = [];

    for (var j = 0; j < items.length; j++) {
      if (!Item.of(items[j]).isEmpty()) {
        validItems.push(items[j]);
      }
    }

    if (validItems.length === 0) continue;

    var firstItem = validItems[0];
    var restItems = validItems.slice(1).sort();
    var orderedItems = [firstItem];

    for (var j = 0; j < restItems.length; j++) {
      orderedItems.push(restItems[j]);
    }

    var groupIngredient = Ingredient.of(orderedItems);

    for (var j = 0; j < orderedItems.length; j++) {
      event.stonecutting(orderedItems[j], groupIngredient);
    }
  }

  // Additional stonecutting recipes
  event.stonecutting("4x create:copycat_step", "railways:conductor_vent");
  event.stonecutting("4x create:copycat_panel", "railways:conductor_vent");
  event.remove({ id: "minecraft:iron_trapdoor" });
  event.stonecutting("3x minecraft:iron_trapdoor", "minecraft:iron_block");

  event.remove({ id: "minecraft:bucket" });
  event.stonecutting("minecraft:bucket", "#forge:ingots/iron");

  event.remove({ id: "minecraft:lead" });
  event.stonecutting("minecraft:lead", "minecraft:string");

  // AE2 cable decoloring
  var coloredCables = [
    "ae2:white_smart_cable", "ae2:orange_smart_cable", "ae2:magenta_smart_cable", "ae2:light_blue_smart_cable",
    "ae2:yellow_smart_cable", "ae2:lime_smart_cable", "ae2:pink_smart_cable", "ae2:gray_smart_cable",
    "ae2:light_gray_smart_cable", "ae2:cyan_smart_cable", "ae2:purple_smart_cable", "ae2:blue_smart_cable",
    "ae2:brown_smart_cable", "ae2:green_smart_cable", "ae2:red_smart_cable", "ae2:black_smart_cable",
  ];
  event.stonecutting("ae2:fluix_smart_cable", Ingredient.of(coloredCables));

  // QUARK - iron plate from andesite alloy
  event.stonecutting("32x quark:iron_plate", "#forge:ingots/andesite_alloy");
});
