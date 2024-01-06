if (feature("Remove createdieselgenerators things we dont need")) {
  removeItems([
    "createdieselgenerators:chemical_sprayer",
    "createdieselgenerators:chemical_sprayer_lighter",
    "createdieselgenerators:chip_wood_block",
    "createdieselgenerators:chip_wood_slab",
    "createdieselgenerators:chip_wood_stairs",
    "createdieselgenerators:engine_piston",
    "createdieselgenerators:engine_silencer",
    "createdieselgenerators:lighter",
    "createdieselgenerators:oil_scanner",
    "createdieselgenerators:large_diesel_engine",
    "createdieselgenerators:huge_diesel_engine",
    "createdieselgenerators:pumpjack_bearing",
    "createdieselgenerators:pumpjack_head",
    "createdieselgenerators:pumpjack_crank",
    "createdieselgenerators:asphalt_block",
    "createdieselgenerators:asphalt_slab",
    "createdieselgenerators:asphalt_stairs",
    "createdieselgenerators:kelp_handle",
    "createdieselgenerators:kelp_handle",
    "createdieselgenerators:oil_barrel",
  ]);
}

if (!feature("Remove crafting table recipes for devices"))
  if (feature("add recipes for createdieselgenerators")) {
    addShaped("createdieselgenerators:diesel_engine", [" b ", "sfs", " c "], {
      b: "create:brass_casing",
      c: "create:copper_casing",
      s: "create:shaft",
      f: "minecraft:furnace",
    });
  }

if (feature("Ethanol")) {
  removeRecipe({ id: "createdieselgenerators:basin_fermenting/fermentable" });
  //createdieselgenerators:ethanol
  addFermenting(
    ["250mb kubejs:fermented_goop", "3x minecraft:white_dye"],
    ["500mb milk"], undefined, 'z'
  );
  
  addFermenting(
    ["600mb kubejs:fermented_goop", "1x minecraft:white_dye"],
    ["4x minecraft:bone_meal", "500mb milk"]
    );
    addFermenting(
      ["100mb kubejs:fermented_goop"],
      ["minecraft:bone_meal", "#forge:fermentable"]
    );
  addFermenting(
    ["500mb kubejs:fermented_goop", "5x minecraft:green_dye", "50mb water"],
    ["4x minecraft:bone_meal", "500mb kubejs:organic_mass"]
  );
  addFermenting(
    ["200mb kubejs:fermented_goop", "75mb water"],
    ["500mb kubejs:organic_mass"]
  );

  addMixing("kubejs:fermented_blob %10", "10mb kubejs:fermented_goop");
  addMixing("slime_ball", ["kubejs:fermented_blob", "#forge:dyes/lime"]);
  addMixing("slime_ball %80", [
    "500mb kubejs:fermented_goop",
    "4x #forge:dyes/lime",
  ]);
  addDistillation(
    ["40mb createdieselgenerators:ethanol", "10mb water"],
    ["20mb kubejs:fermented_goop"],
    40,
    temperature.heated
  );
  addDistillation(["15mb water"], ["15mb milk"], 40);
}

if (feature("Replace oil with ink")) {
  removeRecipe({ id: "createdieselgenerators:distillation/crude_oil" });
  addDistillation(
    ["15mb create:honey", "50mb createdieselgenerators:diesel"],
    "250mb create_enchantment_industry:ink"
  );
}

if (feature("Overhaul wooden chips recipes")) {
  removeRecipe({ id: "createdieselgenerators:cutting/wood_chips" });
  removeRecipe({ id: "createdieselgenerators:crushing/wood_chip_slabs" });
  removeRecipe({ id: "createdieselgenerators:crushing/wood_chip_stairs" });
  removeRecipe({ id: "createdieselgenerators:crushing/wood_chip_fences" });
  addCutting("createdieselgenerators:wood_chip", "minecraft:stick");
}
