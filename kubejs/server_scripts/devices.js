//priority: 1
//Create Prepare to Dye 2 - Device System
//
// Devices are groups of functionally related items that can be freely converted
// between each other via stonecutter. Each group has a "generic" item that can
// be crafted via sequenced assembly.

// =============================================================================
// DEVICE DEFINITIONS
// =============================================================================

const DEVICE_GROUPS = {
  sturdy: {
    generic: "ptdye:sturdy_device",
    tag: "ptd:devices/sturdy",
    incomplete: "ptdye:incomplete_sturdy_device",
    assembly: ["cobblestone", "create:iron_sheet"],
    configKey: "config_deviceSturdy",
    defaultAmount: 8,
    devices: [
      "create:sticker",
      "create:schematicannon",
      "botania:open_crate",
      "create:item_vault",
      "create:redstone_contact",
      "minecraft:stonecutter",
      "minecraft:cauldron",
      "minecraft:hopper",
      "minecraft:piston",
      "minecraft:sticky_piston",
      "minecraft:minecart",
      "quark:magnet",
      "minecraft:dropper",
      "minecraft:dispenser",
      "minecraft:observer",
      "create:basin",
      "createdieselgenerators:basin_lid",
      "create:chute",
      // "create:windmill_bearing",
      "create:nozzle",
      "create:millstone",
      "create:crushing_wheel",
      "supplementaries:turn_table",
      "supplementaries:spring_launcher",
      "botania:apothecary_default",
    ],
  },

  mechanical: {
    generic: "ptdye:mechanical_device",
    tag: "ptd:devices/mechanical",
    incomplete: "ptdye:incomplete_mechanical_device",
    assembly: ["create:iron_sheet", "create:andesite_alloy"],
    configKey: "config_deviceMechanical",
    defaultAmount: 10,
    devices: [
      "create:andesite_casing",
      "create:vertical_gearbox",
      "create:andesite_tunnel",
      "create:andesite_funnel",
      "create:mechanical_plough",
      "create:mechanical_harvester",
      "create:radial_chassis",
      "create:linear_chassis",
      "create:mechanical_piston",
      "create:sticky_mechanical_piston",
      "create:weighted_ejector",
      "create:depot",
      "create:hand_crank",
      "create:encased_fan",
      "create:adjustable_chain_gearshift",
      "create:encased_chain_drive",
      "create:gearshift",
      "create:clutch",
      "create:gearbox",
      "create:mechanical_mixer",
      "create:mechanical_press",
      "create:deployer",
      "create:mechanical_roller",
      "create:portable_storage_interface",
      // "create:water_wheel",
      "create:mechanical_saw",
      "create:mechanical_drill",
      // "create:large_water_wheel",
      "create:gantry_carriage",
      "create:mechanical_bearing",
      "create:rope_pulley",
      "create:cart_assembler",
      "quark:pipe",
      "create:filter",
    ],
  },

  sealed: {
    generic: "ptdye:sealed_device",
    tag: "ptd:devices/sealed",
    incomplete: "ptdye:incomplete_sealed_device",
    assembly: ["create:copper_sheet", "ae2:silicon"],
    configKey: "config_deviceSealed",
    defaultAmount: 16,
    devices: [
      "create_enchantment_industry:printer",
      "create_enchantment_industry:disenchanter",
      "create:portable_fluid_interface",
      "create:steam_engine",
      "create:steam_whistle",
      "create:spout",
      "create:item_drain",
      "create:hose_pulley",
      "create:fluid_tank",
      "create:copper_valve_handle",
      "create:fluid_valve",
      "create:smart_fluid_pipe",
      "create:mechanical_pump",
      "supplementaries:copper_lantern",
      "create:copper_casing",
      "create:fluid_pipe",
      "createdieselgenerators:distillation_controller",
    ],
  },

  smart: {
    generic: "ptdye:smart_device",
    tag: "ptd:devices/smart",
    incomplete: "ptdye:incomplete_smart_device",
    assembly: ["create:brass_sheet", "create:polished_rose_quartz"],
    configKey: "config_deviceSmart",
    defaultAmount: 8,
    devices: [
      "create:smart_chute",
      "create:elevator_pulley",
      "create:clockwork_bearing",
      "create:mechanical_crafter",
      "create:sequenced_gearshift",
      "create:mechanical_arm",
      "create:rotation_speed_controller",
      "create:content_observer",
      "create:contraption_controls", //need to retexture to look smart
      "create:stressometer", //need to retexture to look smart
      "create:speedometer", //need to retexture to look smart
      "create:stockpile_switch",
      "create:display_link",
      "create:brass_tunnel",
      "create:brass_funnel",
      "supplementaries:brass_lantern",
      "createdieselgenerators:diesel_engine",
      "storagedrawers:drawer_key",
      "storagedrawers:shroud_key",
      "storagedrawers:quantify_key",
      "storagedrawers:controller",
      "create:attribute_filter",
      "create:brass_casing",
      "create_enchantment_industry:enchanting_guide",
    ],
  },

  locomotive: {
    generic: "ptdye:locomotive_device",
    tag: "ptd:devices/locomotive",
    incomplete: "ptdye:incomplete_locomotive_device",
    assembly: ["create:sturdy_sheet", "create:brass_sheet"],
    configKey: "config_deviceLocomotive",
    defaultAmount: 8,
    devices: [
      "create:controls",
      "create:track_observer",
      "create:track_signal",
      "create:track_station",
      "railways:track_coupler",
      "railways:track_switch_brass",
      "railways:semaphore",
      "railways:track_switch_andesite",
      "create:railway_casing",
      "create:schedule",
      "railways:remote_lens",
      "railways:conductor_whistle",
      "railways:yellow_conductor_cap",
    ],
  },

  logic: {
    generic: "ptdye:logic_device",
    tag: "ptd:devices/logic",
    incomplete: "ptdye:incomplete_logic_device",
    assembly: ["minecraft:smooth_stone", "create:copper_sheet", "minecraft:redstone"],
    configKey: "config_deviceLogic",
    defaultAmount: 12,
    devices: [
      "create:powered_toggle_latch",
      "create:analog_lever",
      "minecraft:redstone_torch",
      "botania:hourglass",
      "supplementaries:hourglass",
      "minecraft:repeater",
      "create:pulse_repeater",
      "minecraft:comparator",
      "create:redstone_link",
      "quark:redstone_randomizer",
      "minecraft:lever",
      "minecraft:daylight_detector",
      "minecraft:tripwire_hook",
      "botania:animated_torch",
      "create:pulse_extender",
      "create:powered_latch",
    ],
  },

  red_stringed: {
    generic: "ptdye:red_stringed_device",
    tag: "ptd:devices/red_stringed",
    incomplete: "ptdye:incomplete_red_stringed_device",
    assembly: ["botania:livingrock", "minecraft:string", "minecraft:red_dye"],
    configKey: "config_deviceRedStringed",
    defaultAmount: 8,
    devices: [
      "botania:red_string_container",
      "botania:red_string_dispenser",
      "botania:red_string_fertilizer",
      "botania:red_string_comparator",
      "botania:red_string_relay",
      "botania:red_string_interceptor",
    ],
  },

  furnished: {
    generic: "ptdye:furnished_device",
    tag: "ptd:devices/furnished",
    incomplete: "ptdye:incomplete_furnished_device",
    assembly: ["#minecraft:wool", "#minecraft:logs"],
    configKey: "config_deviceFurnished",
    defaultAmount: 8,
    devices: [
      "botania:crafty_crate",
      "create:schematic_table",
      "minecraft:oak_door",
      "minecraft:oak_sign",
      "create:turntable",
      "minecraft:light_blue_bed",
      "minecraft:composter",
      "minecraft:barrel",
      "minecraft:campfire",
      "create:cuckoo_clock",
      "create:wooden_bracket",
      "create:white_seat",
      "supplementaries:notice_board",
      "supplementaries:speaker_block",
      "supplementaries:pulley_block",
      "supplementaries:bellows",
      "supplementaries:hanging_sign_oak",
      "storagedrawers:oak_full_drawers_1",
      "minecraft:target",
      "minecraft:oak_trapdoor",
      "minecraft:note_block",
      "minecraft:lectern",
      "minecraft:jukebox",
      "minecraft:chest",
      "minecraft:trapped_chest",
      "minecraft:bookshelf",
      "supplementaries:sign_post_oak",
      "storagedrawers:oak_full_drawers_2",
      "minecraft:item_frame",
      "storagedrawers:oak_full_drawers_4",
      "minecraft:painting",
    ],
  },

  tools: {
    generic: "ptdye:tool_parts",
    tag: "ptd:devices/tools",
    // No assembly - made via mixing
    devices: [
      "create:wrench",
      "wands:netherite_wand",
      "ptdye:hammer",
      "create:schematic_and_quill",
      "create:empty_schematic",
      "create:linked_controller",
      "create:wand_of_symmetry",
      "botania:twig_wand",
      "create:clipboard",
      "crafting_on_a_stick:stonecutter",
      "quark:abacus",
      "minecraft:elytra",
    ],
  },

  lamp: {
    generic: "minecraft:redstone_lamp",
    tag: "ptd:devices/lamp",
    // No assembly - made via item application
    devices: [
      "quark:red_crystal_lamp",
      "quark:orange_crystal_lamp",
      "quark:yellow_crystal_lamp",
      "quark:green_crystal_lamp",
      "quark:blue_crystal_lamp",
      "quark:indigo_crystal_lamp",
      "quark:violet_crystal_lamp",
      "quark:white_crystal_lamp",
      "quark:black_crystal_lamp",
      "create:rose_quartz_lamp",
      "supplementaries:redstone_illuminator",
    ],
  },

  cogs: {
    generic: "create:cogwheel",
    tag: "ptd:devices/cogs",
    // No assembly - kept original recipe
    devices: [
      "create:large_cogwheel",
      "copycats:copycat_cogwheel",
      "copycats:copycat_large_cogwheel",
    ],
  },

  network: {
    generic: "ae2:fluix_smart_cable",
    tag: "ptd:devices/network",
    // No assembly - cables crafted separately
    devices: [
      "ae2:toggle_bus",
      "ae2:inverted_toggle_bus",
      "ae2:level_emitter",
      "ae2:storage_bus",
      "ae2:storage_monitor",
      "ae2:terminal",
      "ae2:quartz_fiber",
      "ae2:wireless_access_point",
      "ae2:wireless_terminal",
    ],
  },

  craftingplaceholder: {
    generic: "minecraft:gold_nugget",
    tag: "ptd:devices/craftingplaceholder",
    // No assembly - simple placeholder conversion
    convertBack: false,
    devices: [
      "botania:placeholder",
      "create:crafter_slot_cover",
    ],
  },

  track: {
    generic: "create:track",
    tag: "ptd:devices/track",
    incomplete: "create:incomplete_track",
    assembly: ["#create:sleepers", "botania:livingwood_planks", "botania:livingwood_planks", "#forge:nuggets"],
    amount: 32,
    loops: 2,
    devices: [
      "railways:track_create_andesite_wide",
      "railways:track_create_andesite_narrow",
    ],
  },

  rail: {
    generic: "create:controller_rail",
    tag: "ptd:devices/rail",
    incomplete: "minecraft:rail",
    assembly: ["minecraft:rail", "create:polished_rose_quartz", "minecraft:rail", "minecraft:rail", "minecraft:rail", "minecraft:rail"],
    amount: 5,
    devices: [
      "minecraft:activator_rail",
      "minecraft:powered_rail",
      "minecraft:detector_rail",
    ],
  },

  window: {
    generic: "create:ornate_iron_window",
    tag: "ptd:devices/window",
    // No assembly - made via mixing
    devices: [
      "create:oak_window",
      "create:spruce_window",
      "create:birch_window",
      "create:jungle_window",
      "create:acacia_window",
      "create:dark_oak_window",
      "create:mangrove_window",
      "create:crimson_window",
      "create:warped_window",
    ],
  },

  copycats: {
    generic: "copycats:copycat_ghost_block",
    tag: "ptd:devices/copycats",
    // No assembly - made via stonecutting from andesite alloy
    devices: [
      "create:copycat_panel",
      "create:copycat_step",
      "copycats:copycat_block",
      "copycats:copycat_slab",
      "copycats:copycat_beam",
      "copycats:copycat_vertical_step",
      "copycats:copycat_stairs",
      "copycats:copycat_fence",
      "copycats:copycat_fence_gate",
      "copycats:copycat_wall",
      "copycats:copycat_board",
      "copycats:copycat_box",
      "copycats:copycat_catwalk",
      "copycats:copycat_ladder",
    ],
  },

  smokestack: {
    generic: "railways:smokestack_woodburner",
    tag: "ptd:devices/smokestack",
    incomplete: "minecraft:campfire",
    assembly: ["minecraft:campfire", "create:iron_sheet", "minecraft:black_dye"],
    amount: 8,
    devices: [
      "railways:smokestack_streamlined",
      "railways:smokestack_caboosestyle",
      "railways:smokestack_long",
      "railways:smokestack_coalburner",
      "railways:smokestack_oilburner",
    ],
  },
};

// =============================================================================
// ITEM TAGS
// =============================================================================

ServerEvents.tags("item", function(event) {
  var groupNames = Object.keys(DEVICE_GROUPS);

  for (var g = 0; g < groupNames.length; g++) {
    var group = DEVICE_GROUPS[groupNames[g]];

    // Tag all devices in the group
    for (var i = 0; i < group.devices.length; i++) {
      var device = group.devices[i];
      if (!Item.of(device).isEmpty()) {
        event.add(group.tag, device);
      }
    }

    // Also tag the generic item
    if (!Item.of(group.generic).isEmpty()) {
      event.add(group.tag, group.generic);
      event.add("ptd:devices/generics", group.generic);
    }
  }
});

// =============================================================================
// RECIPES
// =============================================================================

ServerEvents.recipes(function(event) {
  let groupNames = Object.keys(DEVICE_GROUPS);

  for (let g = 0; g < groupNames.length; g++) {
    let group = DEVICE_GROUPS[groupNames[g]];

    // Build item list: generic first, then devices sorted alphabetically
    let items = [];

    if (!Item.of(group.generic).isEmpty()) {
      items.push(group.generic);
    }

    let devices = [];
    for (let i = 0; i < group.devices.length; i++) {
      if (!Item.of(group.devices[i]).isEmpty()) {
        devices.push(group.devices[i]);
      }
    }
    devices.sort();

    for (let i = 0; i < devices.length; i++) {
      items.push(devices[i]);
    }

    if (items.length === 0) continue;

    // Remove all existing recipes for these items
    for (let i = 0; i < items.length; i++) {
      event.remove({ output: items[i] });
    }

    // Create the shared ingredient ONCE
    let ingredient = Ingredient.of(items);

    // Stonecutting: ingredient → each item
    for (let i = 0; i < items.length; i++) {
      event.stonecutting(items[i], ingredient);
    }

    // Shapeless: tag → generic (inventory conversion)
    // Skip if convertBack is explicitly false
    if (!Item.of(group.generic).isEmpty() && group.convertBack !== false) {
      event.shapeless(group.generic, ["#" + group.tag]);
    }

    // Sequenced assembly
    if (group.assembly && group.incomplete) {
      let deploySteps = [];
      for (let i = 1; i < group.assembly.length; i++) {
        deploySteps.push(event.recipes.create.deploying(group.incomplete, [group.incomplete, group.assembly[i]]));
      }
      // Use config value if available, otherwise use defaultAmount or amount
      let outputAmount = group.defaultAmount || group.amount || 1;
      if (group.configKey && global[group.configKey]) {
        outputAmount = global[group.configKey].get();
      }
      event.recipes.create
        .sequenced_assembly(Item.of(group.generic, outputAmount), group.assembly[0], deploySteps)
        .transitionalItem(group.incomplete)
        .loops(group.loops || 1);
    }
  }

  // =============================================================================
  // SPECIAL RECIPES
  // =============================================================================

  // Tool parts - made via mixing
  event.recipes.create.mixing("2x ptdye:tool_parts", [
    "#forge:nuggets/gold",
    "2x create:iron_sheet",
    "#forge:rods/wooden",
  ]);
  event.stonecutting("ptdye:tool_parts", "create:schematic");

  // Redstone lamp - made via item application
  event.remove({ output: "minecraft:redstone_lamp" });
  event.recipes.create.item_application("minecraft:redstone_lamp", ["#forge:glass", "minecraft:glowstone"]);

  // Gearbox conversion
  event.shapeless("create:gearbox", ["create:vertical_gearbox"]);
  event.shapeless("create:vertical_gearbox", ["create:gearbox"]);

  // Track - remove original sequenced assembly
  event.remove({ id: "create:sequenced_assembly/track" });

  // Rails - remove original controller rail recipe
  event.remove({ id: "create:crafting/kinetics/controller_rail" });

  // Copycats - stonecutting from andesite alloy (recipes already removed in recipe_removals.js)
  event.stonecutting("4x copycats:copycat_ghost_block", "#forge:ingots/andesite_alloy");
});

// Sleepers tag modification
ServerEvents.tags("block", function(event) {
  // Clear and repopulate sleepers tag for tracks
  event.removeAll("create:sleepers");
  event.add("create:sleepers", [
    "minecraft:stone",
    "botania:livingrock",
    "minecraft:gray_concrete",
    "minecraft:light_gray_concrete",
    "minecraft:black_concrete",
    "minecraft:smooth_stone",
  ]);
});
