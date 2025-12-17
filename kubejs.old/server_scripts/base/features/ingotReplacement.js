//priority: -1

if (feature("Gold is 4 nuggets")) {
  removeRecipe({ id: "create:splashing/crushed_raw_gold" });
  if (feature("Nerf nugget output of washing crushed stuff")) {
    addSplashing(
      ["3x gold_nugget", "ae2:large_quartz_bud %7"],
      "create:crushed_raw_gold"
    );
  } else {
    addSplashing(
      ["4x gold_nugget", "ae2:large_quartz_bud %5"],
      "create:crushed_raw_gold"
    );
  }

  removeRecipe({ id: "minecraft:gold_ingot_from_nuggets" });
  replaceShapeless("gold_ingot", ["4x minecraft:gold_nugget"]);

  removeRecipe({ id: "minecraft:gold_nugget" });
  addShapeless("4x minecraft:gold_nugget", "gold_ingot");

  removeRecipe({ id: "create:crushing/nether_gold_ore" });
  addCrushing(
    ["8x gold_nugget", "create:experience_nugget %75", "netherrack %10"],
    "nether_gold_ore"
  );
}

//*
if (feature("Replace white ingot with white plate directly")) {
  removeItem("minecraft:iron_ingot");


  removeFromTag("forge:ingots/iron", "minecraft:iron_ingot");
  removeFromTag("balm:iron_ingots", "minecraft:iron_ingot");
  removeFromTag("minecraft:beacon_payment_items", "minecraft:iron_ingot");

  addToTag("forge:ingots/iron", "create:iron_sheet");
  addToTag("balm:iron_ingots", "create:iron_sheet");
  addToTag("minecraft:beacon_payment_items", "create:iron_sheet");
  removeRecipe({ id: "create:pressing/iron_ingot" });
  replaceInputForRecipes("minecraft:iron_ingot", "#forge:ingots/iron");
  replaceOutputForRecipes("minecraft:iron_ingot", "create:iron_sheet");
  removeRecipe({ id: "botania:elven_trade/iron_return" });
  addElvenTrade("create:iron_sheet", "create:iron_sheet");

  removeRecipe({ id: "minecraft:iron_ingot_from_nuggets" });
  addShaped("create:iron_sheet", ["iii", "iii"], {
    i: "minecraft:iron_nugget",
  });

  addCompacting("create:iron_sheet", "6x minecraft:iron_nugget");
  
  removeRecipe({ id: "minecraft:iron_nugget" });
  addShapeless("6x minecraft:iron_nugget", "#forge:ingots/iron");
  ServerEvents.recipes((event) =>
    event
      .shapeless("create:iron_sheet", "minecraft:iron_ingot")
      .id("kubejs:iron_sheet_from_ingot/hidden/recipe")
  );
}

if (feature("No More Ingots")) {
  console.log("ddddddddd");
  //this went over relatively smoothly
  // replaceInputForRecipes("#forge:ingots/iron","create:iron_sheet");

  // removeRecipe({id: "create:pressing/iron_ingot"})
  // addPressing("create:iron_sheet","minecraft:raw_iron");
  // addPressing("create:iron_sheet","minecraft:iron_ingot");

  // addShapeless("create:iron_sheet",["9x #forge:nuggets/iron"])

  // //addToTag("forge:ingots/copper","ptdye:orange_tubes");
  // //removeAndReplace("#forge:plates/copper","ptdye:orange_tubes");

  // //removeRecipe({id: "create:pressing/copper_ingot"})
  // //removeRecipe({output: "create:fluid_pipe"})
  // //addStonecutting("create:fluid_pipe","ptdye:orange_tubes");
  // //addShapeless("ptdye:orange_tubes","create:fluid_pipe");

  // //addShapeless("ptdye:orange_tube_block",["9x ptdye:orange_tubes"])
  // //addShapeless("9x ptdye:orange_tubes",["ptdye:orange_tube_block"])

  // addCompacting("4x minecraft:gold_ingot","4x minecraft:raw_gold");

  //TODO: this needs ballencing!!!! i just felt like it didn't make sense to have it be processed in a press anymore, and it's a very fluid-oriented material.
  //addMixing(["ptdye:orange_tubes",Item.of("minecraft:clay").withChance(0.5)],"minecraft:raw_copper","NONE",300,Fluid.of("minecraft:water").withAmount(10),Fluid.of("minecraft:milk").withAmount(10))
  //addSplashing("ptdye:orange_tubes","minecraft:raw_copper");
}
//*/
