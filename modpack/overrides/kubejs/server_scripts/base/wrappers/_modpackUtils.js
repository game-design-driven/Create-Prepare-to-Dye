//priority:1
/**
 * Remove an item from the game by hiding it and removing recipes for it
 * Recipes that use it as ingredient will stay so that you can take care of those yourself
 * @param {*} item 
 */
function removeItem(item) {
    //hide
    global.itemsToHide.push(item)
    //add tooltip
    //remove recipes
    removeRecipe({ output: item })
    //remove recipes that 
}
function removeAndReplace(item, withItem) {
    //replace in recipes
    replaceInputForRecipes(item, withItem)
    replaceOutputForRecipes(item, withItem)
    removeItem(item)
}
function removeItems(items) {
    items.forEach(item => {
        removeItem(item)
    });
}