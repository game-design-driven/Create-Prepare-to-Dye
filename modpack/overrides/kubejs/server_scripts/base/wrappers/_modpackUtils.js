//priority:10
/**
 * Remove an item from the game by hiding it and removing recipes for it
 * Recipes that use it as ingredient will stay so that you can take care of those yourself
 * @param {*} item 
 */
function removeItem(item) {
    //hide
    global.itemsToHide.push(item)
    // global.itemsToRemove.push(item)
    // //add tooltip
    // //remove recipes
    removeRecipe({ output: item })
    removeRecipe({ input: item })
    // //remove tags from item
    removeAllTagsFrom(item)

    //remove from added recipes this should be added to other recipe operations
    // modpackRecipes.forEach(recipe => {
    //     if (Array.isArray(recipe.ingredients)) {
    //         recipe.ingredients.forEach(ingredient => {
    //             if ((ingredient + "").includes(item)) {
    //                 console.log("This recipe should be removed! " + recipe.ingredients);
    //                 r = true
    //             }
    //         });
    //     }
    //     if (recipe.output) {
    //         if ((recipe.output + "").includes(item)) {
    //             console.log("This recipe should be removed! " + recipe.output);
    //             r = true
    //         }
    //     }
    // });

}
function removeAndReplace(item, withItem, alsoTags) {
    //replace in recipes
    replaceInputForRecipes(item, withItem)
    replaceOutputForRecipes(item, withItem)
    if (alsoTags==true) {
        replaceInputForRecipes(tag, withItem)
    }
    removeItem(item)
}
function removeItems(items) {
    items.forEach(item => {
        removeItem(item)
    });
}