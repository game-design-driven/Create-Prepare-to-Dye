//priority: -1
// Manapool tweaks - alchemy catalyst -> blaze burner, single-ingredient crafting alternatives
// Note: c:removed tag filtering ensures items hidden by botania_deflowered.js
// or other scripts don't generate unwanted recipes here.

ServerEvents.recipes(function (event) {
  // Remove conjuration catalyst recipes (dupe recipes)
  event.remove({ id: /dupe/ });
  event.remove({ id: "botania:mana_infusion/grass" });
  event.remove({ output: "botania:conjuration_catalyst" });
  event.remove({ output: "botania:alchemy_catalyst" });

  // Collect alchemy recipes to convert
  var alchemyRecipes = [];

  event.forEachRecipe({ type: "botania:mana_infusion" }, function (recipe) {
    try {
      var json = recipe.json;
      if (!json) return;

      var catalyst = json.get("catalyst");
      if (!catalyst) return;

      var catalystStr = "" + catalyst;
      if (catalystStr.indexOf("alchemy_catalyst") === -1) return;

      // Found an alchemy catalyst recipe
      var inputJson = json.get("input");
      var outputJson = json.get("output");
      var mana = json.get("mana");

      if (!inputJson || !outputJson) return;

      console.info("[manapool] Found alchemy recipe: " + recipe.getId());
      console.info("[manapool]   input: " + inputJson);
      console.info("[manapool]   output: " + outputJson);
      console.info("[manapool]   mana: " + mana);

      // Store raw JSON objects instead of parsing
      alchemyRecipes.push({
        id: "" + recipe.getId(),
        inputRaw: "" + inputJson,
        outputRaw: "" + outputJson,
        mana: mana ? parseInt("" + mana) : 1000,
      });

      // Remove original recipe
      recipe.remove();
    } catch (e) {
      console.error("[manapool] Error processing recipe: " + e);
    }
  });

  console.info("[manapool] Found " + alchemyRecipes.length + " alchemy recipes to convert");

  // Add blaze burner alchemy recipes
  var directions = ["south", "north", "east", "west"];
  for (var i = 0; i < alchemyRecipes.length; i++) {
    var r = alchemyRecipes[i];

    try {
      var inputObj = JSON.parse(r.inputRaw);
      var outputObj = JSON.parse(r.outputRaw);

      console.info("[manapool] Creating blaze burner recipes for: " + r.id);
      console.info("[manapool]   parsed input: " + JSON.stringify(inputObj));
      console.info("[manapool]   parsed output: " + JSON.stringify(outputObj));

      // Extract recipe name from original ID (e.g., botania:mana_infusion/peony_to_dandelion -> peony_to_dandelion)
      var recipeName = r.id.split("/").pop();

      // Get multipliers from config
      var fadingMult = global.config_fadingMultiplier ? global.config_fadingMultiplier.get() : 0.5;
      var kindledMult = global.config_kindledMultiplier ? global.config_kindledMultiplier.get() : 2.0;

      for (var d = 0; d < directions.length; d++) {
        var dir = directions[d];
        var isDirectionHidden = dir !== "south";

        // Fading blaze burner (reduced mana) - always hidden from EMI
        event.custom({
          type: "botania:mana_infusion",
          hidden: true,
          input: inputObj,
          output: outputObj,
          mana: Math.floor(r.mana * fadingMult),
          catalyst: {
            type: "state",
            name: "create:blaze_burner",
            properties: { blaze: "fading", facing: dir },
          },
        }).id("ptd:alchemy/fading_" + dir + "/" + recipeName + "/hidden");

        // Kindled blaze burner (increased mana) - only south visible
        event.custom({
          type: "botania:mana_infusion",
          hidden: isDirectionHidden,
          input: inputObj,
          output: outputObj,
          mana: Math.floor(r.mana * kindledMult),
          catalyst: {
            type: "state",
            name: "create:blaze_burner",
            properties: { blaze: "kindled", facing: dir },
          },
        }).id("ptd:alchemy/kindled_" + dir + "/" + recipeName + (isDirectionHidden ? "/hidden" : ""));
      }
    } catch (e) {
      console.error("[manapool] Error creating recipes for " + r.id + ": " + e);
    }
  }

  // Single-ingredient shapeless crafting -> mana pool alternatives
  var singleCraftingRecipes = [];

  event.forEachRecipe({ type: "minecraft:crafting_shapeless" }, function (recipe) {
    try {
      if (recipe.removed) return;

      var json = recipe.json;
      if (!json) return;

      var ingredients = json.get("ingredients");
      if (!ingredients) return;

      // Check if single ingredient
      var ingredientArray = JSON.parse("" + ingredients);
      if (ingredientArray.length !== 1) return;

      var resultJson = json.get("result");
      if (!resultJson) return;

      singleCraftingRecipes.push({
        input: ingredientArray[0],
        output: JSON.parse("" + resultJson),
      });
    } catch (e) {
      // Skip problematic recipes
    }
  });

  console.info("[manapool] Found " + singleCraftingRecipes.length + " single-ingredient crafting recipes");

  // Add mana infusion alternatives (skip removed items)
  var skipped = 0;
  for (var i = 0; i < singleCraftingRecipes.length; i++) {
    var r = singleCraftingRecipes[i];

    // Check if output item is removed
    var outputId = r.output.item;
    if (outputId) {
      var outputItem = Item.of(outputId);
      if (outputItem.hasTag("c:removed")) {
        skipped++;
        continue;
      }
    }

    // Check if input item is removed (only for item inputs, not tags)
    var inputId = r.input.item;
    if (inputId) {
      var inputItem = Item.of(inputId);
      if (inputItem.hasTag("c:removed")) {
        skipped++;
        continue;
      }
    }

    event.custom({
      type: "botania:mana_infusion",
      input: r.input,
      output: r.output,
      mana: 1,
      catalyst: { type: "block", block: "ptdye:mechanical_device" },
    });
  }
  console.info("[manapool] Skipped " + skipped + " recipes with removed items");
});

// Hide removed catalyst items
ServerEvents.tags("item", function (event) {
  var catalysts = ["botania:conjuration_catalyst", "botania:alchemy_catalyst"];
  for (var i = 0; i < catalysts.length; i++) {
    event.removeAllTagsFrom(catalysts[i]);
    event.add("c:hidden_from_recipe_viewers", catalysts[i]);
    event.add("c:removed", catalysts[i]);
  }
});
