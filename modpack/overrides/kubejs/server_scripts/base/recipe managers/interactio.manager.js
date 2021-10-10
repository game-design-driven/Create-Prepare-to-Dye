// priority: 100

function addFluidTransomItem(output, input, fluid, consumeFluidChance, emptyWeight, rolls) {
    if (!fluid) fluid = 'water'
    let recipe = {
        type: "interactio:item_fluid_transform",
        output: {
            entries: solveInteractioResults(output),
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
function addFluidTransformFluid(output, input, fluid, emptyWeight) {
    // if (!emptyWeight) emptyWeight = 0
    if (!fluid) fluid = solveFluid('water')
    let recipe = {
        type: "interactio:fluid_fluid_transform",
        output: {
            entries: solveInteractioFluidResults(output),
            // empty_weight: emptyWeight,
        },
        items: solveIngredients(input),
        input: solveFluid(fluid),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addItemExplode(output, input, emptyWeight, rolls) {
    let recipe = {
        type: "interactio:item_explode",
        output: {
            entries: solveInteractioResults(output),
            empty_weight: emptyWeight,
            rolls: rolls
        },
        inputs: solveIngredients(input),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addItemAnvil(output, input, anvilDamage, emptyWeight, rolls) {
    let recipe = {
        type: "interactio:item_anvil_smashing",
        output: {
            entries: solveInteractioResults(output),
            empty_weight: emptyWeight,
            rolls: rolls
        },
        inputs: solveIngredients(input),
        damage: anvilDamage
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addBlockExplode(output, input, emptyWeight, rolls) {
    let recipe = {
        type: "interactio:block_explode",
        output: {
            type: 'block',
            entries: solveInteractioBlocks(output),
            empty_weight: emptyWeight,
            rolls: rolls
        },
        input: solveInteractioBlock(input, true),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addBlockAnvil(output, input, emptyWeight, rolls) {
    let recipe = {
        type: "interactio:block_anvil_smashing",
        output: {
            type: 'block',
            entries: solveInteractioBlocks(output),
            empty_weight: emptyWeight,
            rolls: rolls
        },
        input: solveInteractioBlock(input, true),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function solveInteractioBlock(block, basic) {
    let blockName = block
    let weight = 1
    if (block.includes('%')) {
        blockName = block.split('%')[0]
        weight = parseInt(block.split('%')[1])
    }
    let result = (block + "").startsWith('#') ? { tag: blockName } : { block: blockName }
    if (basic) return result
    return ({
        result: result,
        weight: weight
    })
}
function solveInteractioBlocks(blocks) {
    if (!Array.isArray(blocks)) return solveInteractioBlocks([blocks])//make array if not array in an none mutating way
    let outArr = []
    blocks.forEach(block => {
        outArr.push(solveInteractioBlock(block))
    });
    return outArr

}
function addLightning(output, input, emptyWeight, rolls) {
    let recipe = {
        type: "interactio:item_lightning",
        output: {
            entries: solveInteractioResults(output),
            empty_weight: emptyWeight,
            rolls: rolls
        },
        inputs: solveIngredients(input),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function solveInteractioFluidResults(results) {
    if (!Array.isArray(results)) return solveInteractioFluidResults([results])//make array if not array in an none mutating way
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

function solveInteractioResults(results) {
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