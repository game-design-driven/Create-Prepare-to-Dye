// priority: -100
ServerEvents.recipes(event => {
  modpackRecipes.forEach(recipe => {
    removeAirFromRecipe(recipe)
    if (!hasRemovedItems(recipe)) {
        let r = event.custom(recipe)
        r.id = getUniqueRecipeName(r)
        if (recipe.hidden) {
            r.id = r.id+"/hidden"
        }
    }
  });
  
  modpackRemovedRecipes.forEach(recipeFilter => {
      event.remove(recipeFilter)
  });
})

// onEvent('server.datapack.low_priority', (event) => {
//     event.addJson('botania:orechid_ore_weights/orechid.json', {
//         values: botaniaOrechidList
//     });
// }) not sure why I added it here need to look into it

//oh my god. how did no one do this sooner
//what's wrong with you. you've wasted so much of people's limited time on earth.
let lazy_removedRecipesMap = null;

function createRemovedRecipeMap(itemsToRemove){
let map = {};
for(let item of itemsToRemove){
  map[item] = true;
}
return map
}

function hasRemovedItems(recipe) {
  if(!lazy_removedRecipesMap) lazy_removedRecipesMap = createRemovedRecipeMap(global.itemsToRemove);
  if (Array.isArray(recipe.ingredients)) {
      for(let ingredient of recipe.ingredients) {
          if (lazy_removedRecipesMap[ingredient]) {
            return true
          }
      }
  }
  if (recipe.output) {
      if (lazy_removedRecipesMap[recipe.output]) {
          
          return true
      }
  }
  return false
}