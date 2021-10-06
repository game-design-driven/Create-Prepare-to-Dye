function addItemFluidTransform(output, input, fluid, consumeFluidChance, emptyWeight, rolls) {
    if (!fluid) fluid = solveFluid('water')
    let recipe = {
        type: "interactio:item_fluid_transform",
        output: {
            entries: parseInteractioResults(output),
            empty_weight: emptyWeight,
            rolls: rolls
        },
        inputs: solveIngredients(input),
        fluid: solveFluid(fluid),
        consume_fluid: consumeFluidChance
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addFluidFluidTransform(output, input, fluid, emptyWeight) {
    // if (!emptyWeight) emptyWeight = 0
    if (!fluid) fluid = solveFluid('water')
    let recipe = {
        type: "interactio:fluid_fluid_transform",
        output: {
            entries: parseInteractioFluidResults(output),
            // empty_weight: emptyWeight,
        },
        items: solveIngredients(input),
        input: solveFluid(fluid),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function parseInteractioFluidResults(results) {
    if (!Array.isArray(results)) return parseInteractioFluidResults([results])//make array if not array in an none mutating way
    let outArr = []
    results.forEach(result => {
        if (typeof result === 'string') {//custom handling
            let r
            let w = 1
            if (result.includes('%')) {
                r = solveFluid(result.split('%')[0])
                w = parseInt(result.split('%')[1])
            } else r = solveFluid(result)
            outArr.push({
                result: r,
                weight: w
            })
        } else {

        }
    });
    return outArr
}
function parseInteractioResults(results) {
    let originalArr = solveResults(results)
    let outArr = [];
    originalArr.forEach(res => {
        outArr.push({
            result: res,
            weight: res.hasChance() ? parseInt(res.getChance() * 100) : 1
        })
    });
    return outArr;
}