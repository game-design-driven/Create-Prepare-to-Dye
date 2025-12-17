// priority: 100

function addFermenting(results, ingredients, processingTime, prefix) {
    processingTime = processingTime || 400;

    let recipe = {
        type: "createdieselgenerators:basin_fermenting",
        ingredients: solveIngredients(ingredients),
        processingTime: processingTime,
        results: solveResults(results)
    };
    if (prefix) recipe.prefix = prefix
    modpackRecipes.push(recipe)
    return recipe;
}
function addDistillation(results, ingredients, processingTime, heatRequirement) {
    processingTime = processingTime || 400;
    let recipe = {
        type: "createdieselgenerators:distillation",
        ingredients: solveIngredients(ingredients),
        processingTime: processingTime,
        results: solveResults(results)
    };
    if (heatRequirement) recipe.heatRequirement = heatRequirement
    modpackRecipes.push(recipe)
    return recipe;
}
// {
//     "type": "createdieselgenerators:distillation",
//     "ingredients": [
//       {
//         "fluidTag": "forge:crude_oil",
//         "amount": 100
//       }
//     ],
//     "heatRequirement": "heated",
//     "processingTime": 100,
//     "results": [
//       {
//         "fluid": "createdieselgenerators:diesel",
//         "amount": 50
//       },
//       {
//         "fluid": "createdieselgenerators:gasoline",
//         "amount": 50
//       }
//     ]
//   }