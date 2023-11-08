function addFluidTransform(result, ingredients, fluid){
    let recipe = {
        type: "ae2:transform",
        circumstance: {
            "type": "fluid",
            "tag": fluid
          },
        ingredients: solveIngredients(ingredients),
        result: solveResult(result) 
    };
    modpackRecipes.push(recipe)
    return recipe;
}