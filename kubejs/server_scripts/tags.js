//priority: 1
// Tags - block, item, fluid, and entity type tag modifications

ServerEvents.tags("block", function(event) {
  // Contraption immovable blocks
  var immovableBlocks = [
    "minecraft:bedrock",
    "minecraft:command_block",
    "minecraft:end_portal_frame",
    "minecraft:spawner",
    "minecraft:budding_amethyst",
    "minecraft:jigsaw",
    "minecraft:structure_block",
    "minecraft:structure_void"
  ];
  for (var i = 0; i < immovableBlocks.length; i++) {
    event.add("forge:relocation_not_supported", immovableBlocks[i]);
  }

  // Missing stairs tag entries
  event.add("minecraft:stairs", [
    "create:oxidized_copper_shingle_stairs",
    "create:oxidized_copper_tile_stairs"
  ]);

  // Wrenchable blocks - picked up with Create wrench
  event.add("create:wrench_pickup", [
    "minecraft:dispenser",
    "minecraft:dropper",
    "minecraft:observer",
    "minecraft:cauldron",
    "quark:pipe",
    "quark:crate",
    "minecraft:barrel",
    "minecraft:chest",
    "minecraft:trapped_chest",
    "minecraft:ender_chest",
    "minecraft:shulker_box",
    "minecraft:loom",
    "minecraft:cartography_table",
    "minecraft:smithing_table",
    "minecraft:grindstone",
    "minecraft:lectern",
    "minecraft:stonecutter",
    "minecraft:campfire",
    "minecraft:blast_furnace",
    "minecraft:smoker",
    "minecraft:beacon",
    "minecraft:anvil",
    "minecraft:chipped_anvil",
    "minecraft:damaged_anvil",
    "minecraft:bell",
    "ae2:energy_cell",
    "ae2:fluix_smart_cable",
    "ae2:toggle_bus",
    "ae2:inverted_toggle_bus",
    "ae2:terminal",
    "ae2:storage_bus",
    "ae2:storage_monitor",
    "ae2:quartz_fiber",
    "supplementaries:turn_table",
    "botania:default_apothecary"
  ]);

  // Pure daisy milk conversion
  event.add("ptdye:milk", "minecraft:milk");
});

ServerEvents.tags("item", function(event) {
  // Bone meal as fertilizer
  event.add("forge:fertilizer", "minecraft:bone_meal");

  // Vanilla flowers for bee duplication recipes
  event.add("forge:regular_flowers", [
    "minecraft:dandelion",
    "minecraft:poppy",
    "minecraft:blue_orchid",
    "minecraft:allium",
    "minecraft:azure_bluet",
    "minecraft:red_tulip",
    "minecraft:orange_tulip",
    "minecraft:white_tulip",
    "minecraft:pink_tulip",
    "minecraft:oxeye_daisy",
    "minecraft:cornflower",
    "minecraft:lily_of_the_valley",
    "minecraft:crimson_roots",
    "minecraft:warped_roots",
    "minecraft:sunflower",
    "minecraft:lilac",
    "minecraft:rose_bush",
    "minecraft:peony"
  ]);

  // Charcoal storage block
  event.add("forge:storage_blocks/charcoal", "quark:charcoal_block");

  // Lava fuel sources
  event.add("forge:containers/lava", [
    "supplementaries:magma_cream_block",
    "minecraft:lava_bucket"
  ]);

  // Bush items for recipes
  event.add("forge:bushes", [
    "minecraft:dead_bush",
    "minecraft:fern",
    "minecraft:rose_bush"
  ]);

  // Sugar as dust
  event.add("forge:dusts/sugar", "minecraft:sugar");

  // Raw meat items
  event.add("forge:meat", [
    "minecraft:beef",
    "minecraft:chicken",
    "minecraft:porkchop",
    "minecraft:rabbit",
    "minecraft:mutton",
    "minecraft:cod",
    "minecraft:salmon",
    "minecraft:tropical_fish",
    "minecraft:pufferfish"
  ]);

  // High-fat meats for special recipes
  event.add("forge:meat/fat", [
    "minecraft:mutton",
    "minecraft:beef",
    "minecraft:porkchop",
    "minecraft:salmon"
  ]);

  // Material classifications
  event.add("forge:lime", "create:limesand");
  event.add("forge:acidic", "botania:fel_pumpkin");
  event.add("forge:ingots/andesite_alloy", "create:andesite_alloy");
  event.add("forge:fish_bucket", ["minecraft:pufferfish_bucket", "minecraft:tropical_fish_bucket"]);

  // Silicon counts as plastic
  event.add("forge:plastic", "#forge:silicon");

  // Powder/dust items
  event.add("forge:dusts", [
    "minecraft:gunpowder",
    "minecraft:blaze_powder",
    "create:cinder_flour"
  ]);

  // Cogwheel tag for recipes
  event.add("forge:cogs", "create:cogwheel");

  // Smooth stone in stone tag
  event.add("forge:stone", "minecraft:smooth_stone");

  // Brass sheet as gold plate (brass removed from modpack)
  event.add("forge:plates/gold", "create:brass_sheet");

  // Rod modifications - blaze rod removed, alternatives added
  event.remove("forge:rods", "minecraft:blaze_rod");
  event.remove("forge:rods/blaze", "minecraft:blaze_rod");
  event.add("forge:rods", ["create:shaft", "minecraft:bone", "minecraft:bamboo"]);

  // Coral items
  event.add("forge:coral", [
    "minecraft:brain_coral",
    "minecraft:bubble_coral",
    "minecraft:fire_coral",
    "minecraft:horn_coral"
  ]);

  // Belt connector materials
  event.add("forge:canvasables", [
    "minecraft:leather",
    "ae2:silicon",
    "minecraft:dried_kelp",
    "minecraft:phantom_membrane"
  ]);

  // Glowing items for recipes
  event.add("forge:glowy_items", [
    "minecraft:redstone",
    "minecraft:glowstone_dust",
    "minecraft:glow_ink_sac",
    "minecraft:prismarine_crystals",
    "minecraft:glow_berries"
  ]);

  // Livingwood doesn't burn
  event.remove("minecraft:logs_that_burn", "botania:livingwood_log");

  // Squeezable items for organic mass/plant oil
  event.add("forge:squeezables/seeds", [
    "minecraft:wheat_seeds",
    "minecraft:melon_seeds",
    "minecraft:pumpkin_seeds",
    "minecraft:beetroot_seeds"
  ]);
  event.add("forge:squeezables/poor", [
    "quark:sugar_cane_block",
    "quark:bamboo_block",
    "quark:cactus_block"
  ]);
  event.add("forge:squeezables/rich", [
    "quark:apple_crate",
    "quark:beetroot_crate",
    "quark:carrot_crate",
    "quark:potato_crate",
    "quark:chorus_fruit_block",
    "quark:berry_sack",
    "minecraft:pumpkin"
  ]);

  // AE2 certus quartz variants
  event.add("forge:quartz/lightblue", [
    "ae2:quartz_block",
    "ae2:chipped_budding_quartz"
  ]);

  // Brass removed - gold replaces it
  event.add("forge:ingots/brass", "minecraft:gold_ingot");
  event.add("forge:nuggets/brass", "minecraft:gold_nugget");

  // Iron sheet replaces iron ingot
  event.add("forge:ingots/iron", "create:iron_sheet");
  event.add("balm:iron_ingots", "create:iron_sheet");
  event.add("minecraft:beacon_payment_items", "create:iron_sheet");

  // Dusts that can be infused into lapis
  event.add("forge:dusts/infusable", [
    "minecraft:glowstone_dust",
    "minecraft:redstone",
    "minecraft:sugar",
    "minecraft:gunpowder",
    "minecraft:blaze_powder",
    "supplementaries:ash",
    "create:cinder_flour",
    "create:wheat_flour"
  ]);

  // Lapis replaces mana powder
  event.add("botania:mana_dusts", "minecraft:lapis_lazuli");
  event.remove("botania:mana_dusts", "botania:mana_powder");
  event.remove("forge:dusts", "botania:mana_powder");

  // Terrasteel replaces elementium
  event.add("botania:elementium_ingots", "botania:terrasteel_ingot");

  // Railways zinc tag fix (prevents barrier block recipes)
  event.add("railways:internal/nuggets/zinc_nuggets", "minecraft:iron_nugget");

  // Create Enchantment Industry - hide experience rotor
  event.removeAllTagsFrom("create_enchantment_industry:experience_rotor");
  event.add("c:hidden_from_recipe_viewers", "create_enchantment_industry:experience_rotor");
  event.add("c:removed", "create_enchantment_industry:experience_rotor");

  // Dyes as botania petals (mystical flowers removed)
  var colors = [
    "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink",
    "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
  ];
  for (var i = 0; i < colors.length; i++) {
    event.add("botania:petals/" + colors[i], "minecraft:" + colors[i] + "_dye");
  }
});

ServerEvents.tags("fluid", function(event) {
  // Flowing milk for pure daisy (not source blocks)
  event.add("ptdye:flowing_milk", "minecraft:flowing_milk");
});

ServerEvents.tags("entity_type", function(event) {
  // More Babies blaze can be captured for blaze burner
  event.add("create:blaze_burner_capturable", "more_babies:blaze");
});
