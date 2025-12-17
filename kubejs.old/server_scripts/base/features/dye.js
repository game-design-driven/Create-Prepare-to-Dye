// Recipes.addCrushing([<item:minecraft:orange_dye> % 25, <item:minecraft:red_dye> % 4,<item:minecraft:brown_dye> % 4,<item:minecraft:yellow_dye> % 4],<tag:items:forge:crops/carrot>);
// Recipes.addMilling([<item:minecraft:orange_dye> * 2],<tag:items:forge:crops/carrot>);
if (feature("Dye crafting")) {
  removeRecipe({ id: "charm:extra_recipes/cyan_dye" });
  addInfusion("cyan_dye", "warped_roots");

  addShapeless("gray_dye", ["gunpowder", "white_dye"]);
  addInfusion("gray_dye", "gunpowder");

  addElvenTrade("8x yellow_dye", ["glowstone_dust", "#forge:meat"]);
  addInfusion("yellow_dye", "#forge:dyes", 300, "bee_nest[honey_level=5]");

  removeRecipe({ id: "minecraft:yellow_dye_from_sunflower" });
  addShapeless("yellow_dye", "sunflower");

  addMilling("red_dye", "apple");
}

if (feature("Dye Storage Blocks")) {
  global.colors.forEach((color) => {
    addShapeless(`9x minecraft:${color}_dye`, `ptdye:${color}_dye_block`);
    const dye = `minecraft:${color}_dye`;
    addShapeless(`ptdye:${color}_dye_block`, [
      dye,
      dye,
      dye,
      dye,
      dye,
      dye,
      dye,
      dye,
      dye,
    ]);
  });
}

if (feature("Dye from seeds")) {
  addMilling(["green_dye %5", "brown_dye %5"], "#forge:seeds");
  addMixing("green_dye", ["4x #forge:seeds", "1000mb water"]);
  addMixing(
    "brown_dye",
    ["4x #forge:seeds", "1000mb water"],
    temperature.heated
  );
}

if (feature("white dye is more expensive")) {
  removeRecipe({ id: "minecraft:white_dye" });
  addShapeless("white_dye", [
    "bone_meal",
    "bone_meal",
    "bone_meal",
    "bone_meal",
  ]);
  addShapeless("white_dye", [
    "create:wheat_flour",
    "create:wheat_flour",
    "create:wheat_flour",
    "create:wheat_flour",
  ]);
  addMilling("white_dye %50", "create:wheat_flour");

  removeRecipe({ id: "create:milling/lily_of_the_valley" });
  addMilling("3x white_dye", "lily_of_the_valley");

  addMixing(
    "2x white_dye",
    ["#forge:flour/wheat", "250mb milk"],
    temperature.none,
    1
  );
}

if (feature("black dye is more expensive")) {
  removeRecipe({
    id: "quark:tweaks/crafting/utility/misc/charcoal_to_black_dye",
  });
  addShapeless("black_dye", ["coal", "coal", "coal", "coal"]);

  addMilling("gray_dye", "charcoal");
}

if (feature("Red from meat")) {
  addMilling("red_dye %80", "#forge:meat");
  addCrushing(["red_dye %40", "bone_meal %15"], "#forge:meat");
}

if (feature("Red from cinder flour")) {
  removeRecipe({ id: "create:crushing/netherrack" });
  addMilling("create:cinder_flour %25", "netherrack");
  addCrushing(
    ["create:cinder_flour %15", "soul_sand %10", "cobblestone %10"],
    "netherrack"
  );
  addMilling("red_dye %80", "create:cinder_flour");
  addCrushing(
    ["red_dye %50", "redstone %15", "quartz %1"],
    "create:cinder_flour"
  );
}

if (feature("Red from crops")) {
  addCrushing(["red_dye %60", "redstone %50"], "#forge:crops/nether_wart");
  addMilling("red_dye", "#minecraft:wart_blocks");
  addMilling("red_dye", "minecraft:red_mushroom");
  addCrushing(["red_dye %50", "redstone %15"], "minecraft:red_mushroom");
}

if (feature("Gray from ash")) {
  addCrushing(
    ["gray_dye %50", "white_dye %20", "light_gray_dye %10"],
    "supplementaries:ash"
  );
  addMilling("gray_dye", "supplementaries:ash");
}

if (feature("slime dye")) {
  addFilling("4x brown_dye", "slime_ball", "200x create:chocolate");
  addFilling("4x white_dye", "slime_ball", "200x minecraft:milk");
  addFilling("4x yellow_dye", "slime_ball", "200x create:honey");
  addFilling("4x orange_dye", "slime_ball", "200x lava");
  addFilling(
    "4x lime_dye",
    "slime_ball",
    "12x create_enchantment_industry:experience"
  );
  addFilling("2x blue_dye", "slime_ball", "water");
  addFilling("4x black_dye", "slime_ball", "create_enchantment_industry:ink");
}

if (feature("dye mixing")) {
  //red_dye + honey = orange dye
  let milkDyeAmount = 50;
  addFilling("orange_dye", "red_dye", "50x create:honey");
  //green + milk = lime
  addFilling("lime_dye", "green_dye", `${milkDyeAmount}x minecraft:milk`);
  //blue + milk = light blue
  addFilling("light_blue_dye", "blue_dye", `${milkDyeAmount}x minecraft:milk`);
  //black + milk = gray
  addFilling("gray_dye", "black_dye", `${milkDyeAmount}x minecraft:milk`);
  //gray + milk = light gray
  addFilling("light_gray_dye", "gray_dye", `${milkDyeAmount}x minecraft:milk`);
  //green + water = cyan
  addFilling("cyan_dye", "2x green_dye", "water");
  //red + milk = pink
  addFilling("pink_dye", "red_dye", `${milkDyeAmount}x minecraft:milk`);
  //red + water = purple
  addFilling("purple_dye", "2x red_dye", "water");
  //white + water = light blue
  addFilling("light_blue_dye", "2x white_dye", "water");
}

if (feature("Yellow mixing recipe")) {
  addShapeless("yellow_dye", ["red_dye", "green_dye"]);
}
if (feature("Color combinations output nerf")) {
  removeRecipe({ id: "minecraft:pink_dye_from_red_and_white" });
  addShapeless("pink_dye", ["red_dye", "white_dye"]);

  removeRecipe({ id: "minecraft:purple_dye" });
  addShapeless("purple_dye", ["red_dye", "blue_dye"]);

  removeRecipe({ id: "minecraft:light_blue_dye_from_blue_and_white_dye" });
  addShapeless("light_blue_dye", ["blue_dye", "white_dye"]);

  removeRecipe({ id: "minecraft:orange_dye_from_red_and_yellow" });
  addShapeless("orange_dye", ["red_dye", "yellow_dye"]);

  removeRecipe({ id: "minecraft:magenta_dye_from_purple_and_pink" });
  removeRecipe({ id: "minecraft:magenta_dye_from_blue_red_pink" });
  removeRecipe({ id: "minecraft:magenta_dye_from_blue_red_white" });
  addShapeless("magenta_dye", ["purple_dye", "pink_dye"]);
  addShapeless("magenta_dye", ["blue_dye", "red_dye", "pink_dye"]);
  addShapeless("magenta_dye", ["blue_dye", "2x red_dye", "white_dye"]);

  removeRecipe({ id: "minecraft:lime_dye" });
  addShapeless("lime_dye", ["green_dye", "white_dye"]);

  removeRecipe({ id: "minecraft:gray_dye" });
  addShapeless("gray_dye", ["black_dye", "white_dye"]);

  removeRecipe({ id: "minecraft:light_gray_dye_from_gray_white_dye" });
  removeRecipe({ id: "minecraft:light_gray_dye_black_white_dye" });
  addShapeless("light_gray_dye", ["gray_dye", "white_dye"]);
  addShapeless("light_gray_dye", ["black_dye", "2x white_dye"]);

  removeRecipe({ id: "minecraft:cyan_dye" });
  addShapeless("cyan_dye", ["green_dye", "blue_dye"]);
}

if (feature("brown dye is more expensive")) {
  removeRecipe({ id: "minecraft:brown_dye" });
  addShapeless("brown_dye", [
    "cocoa_beans",
    "cocoa_beans",
    "cocoa_beans",
    "cocoa_beans",
  ]);
}
if (feature("dye from glow ink sack")) {
  addShapeless("light_blue_dye", [
    "minecraft:glow_ink_sac",
    "minecraft:glow_ink_sac",
    "minecraft:glow_ink_sac",
    "minecraft:glow_ink_sac",
  ]);
  addMixing("light_blue_dye", ["2x minecraft:glow_ink_sac", "#forge:dyes"]);
  addMilling(["light_blue_dye %50", "glowstone_dust %25"], "glow_ink_sac");
  addCrushing(
    ["light_blue_dye %30", "glowstone_dust %30", "black_dye %20"],
    "glow_ink_sac"
  );
}
if (feature("Purple from choros fruit")) {
  addMilling(["purple_dye", "string %10"], "popped_chorus_fruit");
  addCrushing(
    ["purple_dye %25", "string %25", "end_stone %2"],
    "popped_chorus_fruit"
  );
}
