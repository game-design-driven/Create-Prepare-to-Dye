//priority:10
/**
 * Remove an item from the game by hiding it and removing recipes for it
 * Recipes that use it as ingredient will stay so that you can take care of those yourself
 * @param {*} item 
 */
function removeItem(item) {
    itemsToRemove[Item.of(item).id] = true
    removeRecipe({ output: item })
    removeRecipe({ input: item })
    ServerEvents.tags('item', event => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
        event.add('c:removed', item)
	})
}

function removeAllRecipesForItem(item) {
    removeRecipe({ output: item })
}
function removeAndReplace(item, withItem, alsoTags) {
    //replace in recipes
    replaceInputForRecipes(item, withItem)
    replaceOutputForRecipes(item, withItem)
    if (alsoTags) {
        replaceInputForRecipes(tag, withItem)

    }
    removeItem(item)
}
function removeItems(items) {
    items.forEach(item => {
        removeItem(item)
    });
}