if (feature("Remove crafting table")) {
  removeItem("minecraft:crafting_table");
}
if (
  feature("Craftable devices that are transmuted to specific things on demand")
) {
  let deviceDefinitions = [
    {
      tag: "forge:device/network",
      generic: "ae2:fluix_smart_cable",
      included_devices: [
        "ae2:toggle_bus",
        "ae2:inverted_toggle_bus",
        "ae2:fluix_smart_cable",
        "ae2:level_emitter",
        "ae2:storage_bus",
        "ae2:storage_monitor",
        "ae2:terminal",
        "ae2:quartz_fiber",
      ],
    },
    {
      tag: "forge:device/craftingplaceholder",
      generic: "#forge:nuggets/brass",
      included_devices: ["botania:placeholder", "create:crafter_slot_cover"],
    },
    {
      tag: "forge:device/track",
      generic: "create:track",
      base: "#create:sleepers",
      amount_crafted: 32,
      assembly_loops: 2,
      included_devices: [
        "railways:track_create_andesite_wide",
        "railways:track_create_andesite_narrow",
      ],
      assembly: [
        [
          "botania:livingwood_planks",
          "botania:livingwood_planks",
          "#forge:nuggets",
        ],
        [
          "#forge:nuggets",
          "#forge:nuggets",
          "#forge:nuggets",
          "#minecraft:logs",
        ],
      ],
      post_logic: () => {
        removeRecipe({ id: "create:sequenced_assembly/track" });
        removeAllFromTag("create:sleepers");
        addToTag("create:sleepers", [
          "stone",
          "botania:livingrock",
          "gray_concrete",
          "light_gray_concrete",
          "black_concrete",
          "smooth_stone",
        ]);
      },
    },
    {
      tag: "forge:device/rail",
      generic: "create:controller_rail",
      base: "rail",
      incomplete: "rail",
      assembly: [
        "#forge:ingots/gold",
        "rail",
        "create:polished_rose_quartz",
        "rail",
      ],
      included_devices: ["activator_rail", "powered_rail", "detector_rail"],
      amount_crafted: 10,
      post_logic: () => {
        removeRecipe({ id: "create:crafting/kinetics/controller_rail" });
      },
    },
    {
      tag: "forge:device/furniture",
      generic: "ptdye:furnished_device",
      base: "minecraft:stick",
      assembly: [
        [
          "#minecraft:wool_carpets",
          "#forge:nuggets",
          "#minecraft:planks",
          "#minecraft:planks",
        ],
        ["#forge:ingots", "#minecraft:planks", "#minecraft:logs"],
        [
          "#forge:canvasables",
          "#forge:nuggets",
          "#forge:nuggets",
          "#minecraft:logs",
        ],
      ],
      included_devices: [
        "botania:crafty_crate",
        "minecraft:oak_door",
        "minecraft:oak_sign",
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
        "minecraft:bookshelf",
        "supplementaries:sign_post_oak",
        "storagedrawers:oak_full_drawers_2",
        "minecraft:item_frame",
        "storagedrawers:oak_full_drawers_4",
        "minecraft:painting",
      ],
      amount_crafted: 4,
      post_logic: () => {
        ServerEvents.blockLootTables((event) => {
          event.addSimpleBlock("minecraft:bookshelf", "minecraft:bookshelf");
          event.addSimpleBlock("minecraft:campfire", "minecraft:campfire");
          event.addSimpleBlock("minecraft:soul_campfire", "minecraft:campfire");
        });

        removeRecipe({ id: "create:haunting/soul_campfire" });
        removeRecipe({ id: "minecraft:soul_campfire" });
        removeRecipe({ id: "minecraft:soul_torch" });

        [
          "#minecraft:piglin_repellents",
          "#minecraft:soul_fire_base_blocks",
        ].forEach((material) => {
          ServerEvents.recipes((e) => {
            e.recipes.create
              .item_application("minecraft:soul_campfire", [
                "minecraft:campfire",
                material,
              ])
              .keepHeldItem();
          });
        });
      },
    },
    {
      tag: "forge:device/red_stringed",
      generic: "ptdye:red_stringed_device", //better to use fully qualifed names for better refactorability in future
      assembly: ["botania:livingrock", "string", "red_dye"],
      amount_crafted: 2,
      included_devices: [
        "botania:red_string_container",
        "botania:red_string_dispenser",
        "botania:red_string_fertilizer",
        "botania:red_string_comparator",
        "botania:red_string_relay",
        "botania:red_string_interceptor",
      ],
    },
    {
      tag: "forge:device/smart",
      generic: "ptdye:smart_device",
      assembly: [
        "#forge:plates/brass",
        "#forge:stripped_logs",
        "create:polished_rose_quartz",
      ],
      amount_crafted: 4,
      included_devices: [
        "create:smart_chute",
        "create:elevator_pulley",
        "create:clockwork_bearing",
        "create:mechanical_crafter",
        "create:sequenced_gearshift",
        "create:mechanical_arm",
        "create:rotation_speed_controller",
        "create:content_observer",
        "create:stockpile_switch",
        "create:display_link",
        "create:brass_tunnel",
        "create:brass_funnel",
        "supplementaries:brass_lantern",
        "createdieselgenerators:diesel_engine",
        "storagedrawers:drawer_key",
        "storagedrawers:controller",
        "create:attribute_filter",
        "4x create:brass_casing",
        "create_enchantment_industry:enchanting_guide",
      ],
    },
    {
      tag: "forge:device/logic",
      generic: "ptdye:logic_device",
      amount_crafted: 8,
      assembly: [
        "minecraft:smooth_stone",
        "#forge:plates/copper",
        "minecraft:redstone",
      ],
      included_devices: [
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
    {
      tag: "forge:device/locomotive",
      generic: "ptdye:locomotive_device",
      assembly: [
        "#forge:plates/obsidian",
        "#forge:plates/obsidian",
        "#forge:plates/brass",
      ],
      amount_crafted: 4,
      included_devices: [
        "create:controls",
        "create:track_observer",
        "create:track_signal",
        "create:track_station",
        "railways:track_coupler",
        "railways:track_switch_brass",
        "railways:semaphore",
        "railways:track_switch_andesite",
        "4x create:railway_casing",
      ],
    },
    {
      tag: "forge:device/sealed",
      generic: "ptdye:sealed_device",
      assembly: [
        "#forge:plates/copper",
        "#forge:stripped_logs",
        "#forge:silicon",
      ],
      amount_crafted: 4,
      included_devices: [
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
        "4x create:copper_casing",
        "4x create:fluid_pipe",
        "4x createdieselgenerators:distillation_controller",
      ],
    },
    {
      tag: "forge:device/sturdy",
      generic: "ptdye:sturdy_device",
      assembly: ["cobblestone", "#forge:plates/iron"],
      amount_crafted: 4,
      included_devices: [
        "botania:open_crate",
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
        "create:windmill_bearing",
        "create:nozzle",
        "create:millstone",
        "create:crushing_wheel",
        "supplementaries:turn_table",
        "supplementaries:spring_launcher",
        "botania:apothecary_default",
        "quark:crate",
      ],
    },
    {
      tag: "forge:device/mechanical",
      generic: "ptdye:mechanical_device",
      assembly: [
        "create:iron_sheet",
        "#forge:stripped_logs",
        "create:andesite_alloy",
      ],
      amount_crafted: 4,
      included_devices: [
        "4x create:andesite_casing",
        "create:stressometer",
        "create:speedometer",
        "create:schematic_table",
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
        "create:turntable",
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
        "create:water_wheel",
        "create:mechanical_saw",
        "create:contraption_controls",
        "create:mechanical_drill",
        "create:schematicannon",
        "create:large_water_wheel",
        "create:gantry_carriage",
        "create:mechanical_bearing",
        "create:rope_pulley",
        "create:cart_assembler",
        "quark:pipe",
        "create:filter",
      ],
      post_logic: () => {
        addShapeless("create:gearbox", "create:vertical_gearbox");
        addShapeless("create:vertical_gearbox", "create:gearbox");
      },
    },
  ];
  let addedTagRecipes = {};

  deviceDefinitions.forEach((device) => {
    addToTag("forge:devices/generics", device.generic);
    let generic_id = Item.of(device.generic).id; //support both ids and kjs items

    device.incomplete =
      device.incomplete ||
      generic_id.split(":")[0] + ":incomplete_" + generic_id.split(":")[1];
    device.base = device.base || "create:cogwheel";
    console.log(device.base);
    device.assembly_loops = device.assembly_loops || undefined;
    device.tag = device.tag.startsWith("#") ? device.tag : "#" + device.tag;

    //device recipe
    if (device.assembly) {
      if (!Array.isArray(device.assembly[0])) {
        device.assembly = [device.assembly];
      }
      device.assembly.forEach((singleAssembly) => {
        console.info("device.generic " + device.generic);
        addAssembly(
          Item.of(device.generic).withCount(device.amount_crafted),
          device.base,
          singleAssembly.map((ingredient) => {
            return addDeploying("stick", "stick", ingredient);
          }),
          device.assembly_loops,
          device.incomplete
        );
      });
    }
    //device transmutation
    addStonecutting(device.generic, device.tag);
    addShaped(device.generic, ["#"], {
      "#": device.tag,
    });
    device.included_devices.forEach((included_device) => {
      let item = Item.of(included_device);
      removeAllRecipesForItem(item.id);

      let tagSuffix = item.count > 1 ? "/" + item.count : "";
      if (item.count > 1) {
        if (!addedTagRecipes[device.tag + tagSuffix]) {
          addShapeless(
            device.generic,
            item.count + "x " + device.tag + tagSuffix
          );
          addedTagRecipes[device.tag + tagSuffix] = true;
        }
      }
      let allButCurrentDevice = device.included_devices
        .filter((element) => element !== item.id && Item.of(element).count == 1)
        .map((element) => Item.of(element).strongNBT());
      addStonecutting(
        included_device,
        Ingredient.of(allButCurrentDevice),
        true
      ); //let players transmute any device but don't show in craftables panel

      addToTag(device.tag + tagSuffix, item.id);
      addStonecutting(included_device, device.generic);
    });

    if (device.post_logic) device.post_logic();
  });
}
