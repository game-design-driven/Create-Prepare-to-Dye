// priority: -100
ServerEvents.recipes((event) => {
  modpackRecipes.forEach((recipe) => {
    removeAirFromRecipe(recipe);
    if (!hasRemovedItems(recipe)) {
      let r = event.custom(recipe);
      r.id = getUniqueRecipeName(r);
      if (recipe.hidden) {
        r.id = r.id + "/hidden";
      }
    }
  });

  modpackRemovedRecipes.forEach((recipeFilter) => {
    event.remove(recipeFilter);
  });
});

function hasRemovedItems(recipe) {
  if (!Array.isArray(recipe.ingredients)) return false;
  recipe.ingredients.forEach((ingredient) => {
    if (itemsToRemove[ingredient]) return true;
  });
}
