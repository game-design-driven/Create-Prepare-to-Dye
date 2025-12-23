//priority: 0
// Client Tooltips - item tooltip additions

// Converts _text_ syntax to gold colored text
function formatTooltipText(text) {
  let parts = text.split("_");
  let result = Text.of("");
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      result = result.append(Text.gray(parts[i]));
    } else {
      result = result.append(Text.gold(parts[i]));
    }
  }
  return result;
}

// Static tooltip mappings (item ID -> lang key)
const TOOLTIP_MAPPINGS = {
  // AE2 tooltips
  "ae2:toggle_bus": "ptd.tooltip.ae2.toggle_bus",
  "ae2:inverted_toggle_bus": "ptd.tooltip.ae2.toggle_bus",
  "ae2:storage_bus": "ptd.tooltip.ae2.storage_bus",
  "ae2:terminal": "ptd.tooltip.ae2.terminal",
  "ae2:energy_cell": "ptd.tooltip.ae2.energy_cell",
  "ae2:flawed_budding_quartz": "ptd.tooltip.ae2.budding_quartz",
  "ae2:chipped_budding_quartz": "ptd.tooltip.ae2.budding_quartz",
  "ae2:damaged_budding_quartz": "ptd.tooltip.ae2.budding_quartz",
  "ae2:small_quartz_bud": "ptd.tooltip.ae2.budding_quartz",
  "ae2:medium_quartz_bud": "ptd.tooltip.ae2.budding_quartz",
  "ae2:large_quartz_bud": "ptd.tooltip.ae2.budding_quartz",
  "minecraft:quartz": "ptd.tooltip.ae2.budding_quartz",

  // Critical tooltips
  "minecraft:water_bucket": "ptd.tooltip.minecraft.water_bucket",
  "minecraft:white_concrete_powder": "ptd.tooltip.minecraft.white_concrete_powder",
  "minecraft:lava_bucket": "ptd.tooltip.minecraft.lava_bucket",
  "create:scoria": "ptd.tooltip.create.scoria",
  "minecraft:cobblestone": "ptd.tooltip.minecraft.cobblestone",
  "create:limestone": "ptd.tooltip.create.limestone",
  "minecraft:milk_bucket": "ptd.tooltip.minecraft.milk_bucket",
  "minecraft:cauldron": "ptd.tooltip.minecraft.cauldron",
  "createdieselgenerators:diesel_engine": "ptd.tooltip.createdieselgenerators.diesel_engine",
  "wares:delivery_agreement": "ptd.tooltip.wares.delivery_agreement",
  "wares:completed_delivery_agreement": "ptd.tooltip.wares.completed_delivery_agreement",
  "create:blaze_burner": "ptd.tooltip.create.blaze_burner",
  "supplementaries:ash": "ptd.tooltip.supplementaries.ash",
  "crafting_on_a_stick:stonecutter": "ptd.tooltip.crafting_on_a_stick.stonecutter",
  "minecraft:bone_meal": "ptd.tooltip.minecraft.bone_meal",
  "createdieselgenerators:distillation_controller": "ptd.tooltip.createdieselgenerators.distillation_controller",
  "minecraft:egg": "ptd.tooltip.minecraft.egg",

  // Dyeing tooltips
  "minecraft:redstone": "ptd.tooltip.dyeing.redstone",
  "minecraft:redstone_ore": "ptd.tooltip.dyeing.redstone",
  "minecraft:iron_ore": "ptd.tooltip.dyeing.iron_ore",
  "minecraft:iron_ingot": "ptd.tooltip.dyeing.iron_ingot",
  "minecraft:raw_iron": "ptd.tooltip.dyeing.iron_ingot",
  "minecraft:copper_ore": "ptd.tooltip.dyeing.copper_ore",
  "minecraft:copper_ingot": "ptd.tooltip.dyeing.copper_ingot",
  "minecraft:raw_copper": "ptd.tooltip.dyeing.copper_ingot",
  "minecraft:deepslate_diamond_ore": "ptd.tooltip.dyeing.deepslate_diamond_ore",
  "minecraft:deepslate_emerald_ore": "ptd.tooltip.dyeing.deepslate_emerald_ore",
  "minecraft:deepslate_lapis_ore": "ptd.tooltip.dyeing.deepslate_lapis_ore",
  "minecraft:deepslate_coal_ore": "ptd.tooltip.dyeing.deepslate_coal_ore",
  "minecraft:deepslate_iron_ore": "ptd.tooltip.dyeing.deepslate_iron_ore",
  "minecraft:deepslate_copper_ore": "ptd.tooltip.dyeing.deepslate_copper_ore",
  "minecraft:deepslate_gold_ore": "ptd.tooltip.dyeing.deepslate_gold_ore",
  "minecraft:deepslate_redstone_ore": "ptd.tooltip.dyeing.deepslate_redstone_ore",

  // PTDye custom items
  "ptdye:trading_transceiver": "ptd.tooltip.ptdye.trading_transceiver",
  "ptdye:postage_stamp_transceiver": "ptd.tooltip.ptdye.postage_stamp_transceiver",
  "ptdye:mechanical_device": "ptd.tooltip.ptdye.mechanical_device",
  "ptdye:sturdy_device": "ptd.tooltip.ptdye.sturdy_device",
  "ptdye:smart_device": "ptd.tooltip.ptdye.smart_device",
  "ptdye:sealed_device": "ptd.tooltip.ptdye.sealed_device",
  "ptdye:logic_device": "ptd.tooltip.ptdye.logic_device",
  "ptdye:locomotive_device": "ptd.tooltip.ptdye.locomotive_device",
  "ptdye:red_stringed_device": "ptd.tooltip.ptdye.red_stringed_device",
  "ptdye:furnished_device": "ptd.tooltip.ptdye.furnished_device",
};

// AE2 smart cables - all colors
const AE2_SMART_CABLES = [
  "ae2:fluix_smart_cable",
  "ae2:red_smart_cable",
  "ae2:blue_smart_cable",
  "ae2:green_smart_cable",
  "ae2:purple_smart_cable",
  "ae2:white_smart_cable",
  "ae2:orange_smart_cable",
  "ae2:yellow_smart_cable",
  "ae2:lime_smart_cable",
  "ae2:pink_smart_cable",
  "ae2:gray_smart_cable",
  "ae2:light_gray_smart_cable",
  "ae2:cyan_smart_cable",
  "ae2:light_blue_smart_cable",
  "ae2:magenta_smart_cable",
  "ae2:brown_smart_cable",
  "ae2:black_smart_cable",
];
AE2_SMART_CABLES.forEach((cable) => {
  TOOLTIP_MAPPINGS[cable] = "ptd.tooltip.ae2.smart_cable";
});

// Golden tools - Fortune
const GOLDEN_TOOLS = [
  "minecraft:golden_pickaxe",
  "minecraft:golden_shovel",
  "minecraft:golden_axe",
  "minecraft:golden_sword",
  "minecraft:golden_hoe",
];

// Diamond tools - Silk Touch
const DIAMOND_TOOLS = [
  "minecraft:diamond_pickaxe",
  "minecraft:diamond_shovel",
  "minecraft:diamond_axe",
  "minecraft:diamond_hoe",
];

// Wood logs tooltip
const WOOD_LOGS = [
  "minecraft:oak_wood",
  "minecraft:spruce_wood",
  "minecraft:birch_wood",
  "minecraft:jungle_wood",
  "minecraft:acacia_wood",
  "minecraft:dark_oak_wood",
  "minecraft:crimson_hyphae",
  "minecraft:warped_hyphae",
  "minecraft:stripped_oak_wood",
  "minecraft:stripped_spruce_wood",
  "minecraft:stripped_birch_wood",
  "minecraft:stripped_jungle_wood",
  "minecraft:stripped_acacia_wood",
  "minecraft:stripped_dark_oak_wood",
  "minecraft:stripped_crimson_hyphae",
  "minecraft:stripped_warped_hyphae",
  "minecraft:oak_log",
  "minecraft:spruce_log",
  "minecraft:birch_log",
  "minecraft:jungle_log",
  "minecraft:acacia_log",
  "minecraft:dark_oak_log",
  "minecraft:crimson_stem",
  "minecraft:warped_stem",
  "botania:livingwood_log",
  "botania:livingwood",
  "botania:dreamwood_log",
  "botania:dreamwood",
  "botania:glimmering_livingwood_log",
  "botania:glimmering_livingwood",
  "botania:glimmering_dreamwood_log",
  "botania:glimmering_dreamwood",
  "quark:blossom_log",
  "quark:blossom_wood",
  "quark:stripped_blossom_log",
  "quark:stripped_blossom_wood",
];
WOOD_LOGS.forEach((log) => {
  TOOLTIP_MAPPINGS[log] = "ptd.tooltip.wood_logs";
});

ItemEvents.tooltip((event) => {
  // Static tooltips from lang file
  Object.entries(TOOLTIP_MAPPINGS).forEach(([itemId, langKey]) => {
    let translated = Text.translate(langKey).getString();
    if (translated !== langKey) {
      event.add(itemId, formatTooltipText(translated));
    }
  });

  // Golden tools - Fortune tooltip
  GOLDEN_TOOLS.forEach((tool) => {
    let translated = Text.translate("ptd.tooltip.golden_tools").getString();
    event.add(tool, formatTooltipText(translated));
  });

  // Diamond tools - Silk Touch tooltips
  DIAMOND_TOOLS.forEach((tool) => {
    event.add(tool, Text.of(Text.translate("ptd.tooltip.diamond_silk_touch").getString()).italic().gray());
    let translated = Text.translate("ptd.tooltip.diamond_tools").getString();
    event.add(tool, formatTooltipText(translated));
  });

  // Disabled items tooltip
  event.addAdvanced("#c:removed", (item, advanced, text) => {
    let translated = Text.translate("ptd.tooltip.disabled_item").getString();
    text.add(Text.red(translated));
  });

  // Food nutrition and saturation tooltips
  event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    let foodProps = item.getFoodProperties(null);
    if (!foodProps) return;
    let nutrition = foodProps.getNutrition();
    let saturationMod = foodProps.getSaturationModifier();
    let saturation = Math.round(nutrition * saturationMod * 2 * 10) / 10;
    text.add(Text.darkGreen("Saturation").append(Text.green(` ${saturation}`)));
    text.add(Text.darkGreen("Nutrition").append(Text.green(` ${nutrition}`)));
  });

  // Burn time tooltips
  const $ForgeHooks = Java.loadClass("net.minecraftforge.common.ForgeHooks");
  event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    let burnTime = $ForgeHooks.getBurnTime(item, null);
    if (burnTime <= 0) return;
    text.add(
      Text.darkGray("Burn Time").append(Text.gray(` ${Math.round((burnTime / 20) * 10) / 10} Seconds`))
    );
  });

  // Category and device type tooltips
  event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    let itemObj = Item.of(item);

    // Show mod name on Ctrl
    if (advanced) {
      let modId = itemObj.mod;
      if (modId && modId !== "minecraft") {
        text.add(
          Text.darkGray("[").append(
            Text.blue(Utils.toTitleCase(modId.trim())).append(Text.darkGray("]"))
          )
        );
      }
    }

    // Device type tooltip
    if (itemObj.hasTag("ptd:devices/generics") || itemObj.hasTag("forge:devices")) {
      let deviceTag = itemObj
        .getTags()
        .toArray()
        .find((tag) => tag.location().toString().includes("devices/"));
      if (deviceTag) {
        let deviceType = deviceTag.location().path.split("/").pop().replaceAll("_", " ");
        text.add(Text.aqua(Utils.toTitleCase(deviceType)).append(Text.aqua(" Device")));
      }
    }
  });
});
