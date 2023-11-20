//priority:10
/**
 * Remove an item from the game by hiding it and removing recipes for it
 * Recipes that use it as ingredient will stay so that you can take care of those yourself
 * @param {*} item 
 */
function removeItem(item) {
    global.itemsToRemove.push(item) //why was that commented out?
    // //add tooltip
    // //remove recipes
    removeRecipe({ output: item })
    removeRecipe({ input: item })
    //remove tags from item
    removeAllTagsFrom(item)
    //hide
    hideItem(item)
}

function removeAllRecipesForItem(item) {
    removeRecipe({ output: item })
    global.itemsToRemove.push(item)
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
function hideItem(item) {
    global.itemsToHide.push(item)
}
function hideItems(items) {
    items.forEach(item => {
        removeItem(item)
    });
}
function hideRecipeType(cat) {
    global.categoriesToHide.push(cat)
}