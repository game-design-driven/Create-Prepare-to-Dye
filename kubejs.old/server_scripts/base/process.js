// priority: -100
ServerEvents.recipes((event) => {
  modpackRecipes.forEach((recipe) => {
    removeAirFromRecipe(recipe);
    if (!hasRemovedItems(recipe)) {
      let r = event.custom(recipe);
      r.id = getUniqueRecipeName(r, recipe.prefix);
      if (recipe.hidden) {
        r.id = r.id + "/hidden";
      }
    }
  });

  modpackRemovedRecipes.forEach((recipeFilter) => {
    event.remove(recipeFilter);
  });

  event.forEachRecipe([{ type: "minecraft:stonecutting" }], (recipe) => {
    if (!recipe) return;
    allStonecuttingRecipes.push({
      type: "minecraft:stonecutting",
      result: solveResult(
        Item.of(
          recipe.json.asJsonObject.get("result"),
          recipe.json.asJsonObject.get("count") || 1
        )
      ),
      ingredient: solveLimitedIngredient(
        recipe.json.asJsonObject.get("ingredient")
      ),
    });
  });
});

function hasRemovedItems(recipe) {
  if (!Array.isArray(recipe.ingredients)) return false;
  recipe.ingredients.forEach((ingredient) => {
    if (itemsToRemove[ingredient]) return true;
  });
}
