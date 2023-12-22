// priority: 100
function solveStateResult(block) {
    return solveStateBlock(block, true)
}
function solveStateIngredient(block) {
    return solveStateBlock(block, false)
}
function solveStateBlock(block, basic) {
    if (!block) return
    if (!block.includes('[')) {
        if (basic)
            return { name: block }
        else
            return block.startsWith('#')
                ? { type: 'tag', tag: block.slice(1) }
                : { type: 'block', block: block }
    } else {
        let properties = {}
        block.split('[')[1].replace(']', '').split(',').forEach(property => {
            properties[property.split('=')[0]] = property.split('=')[1]
        })
        return {
            type: 'state',
            name: block.split('[')[0],
            properties: properties
        }
    }
}
/**
 * @param {result} output
 * @param {ingredient} input
 * @param {number} mana Amount of mana the recipe uses, defaults to 1000
 * @param {block} catalyst
 */
function addInfusion(output, input, mana, catalyst, hidden) {
    if (!hidden) hidden = false
    if (!mana) mana = 1000
    let result = {
        hidden: hidden,
        type: 'botania:mana_infusion',
        input: solveLimitedIngredient(input),
        output: solveResult(output),
        mana: mana
    }
    if (catalyst) result.catalyst = solveStateIngredient(catalyst)
    modpackRecipes.push(result)
}

function addAlchemyRecipe(output, input, mana) {
    let sides = ['north', 'east', 'west']
    addInfusion(output, input, mana / 2, 'create:blaze_burner[blaze=fading,facing=south]')
    addInfusion(output, input, mana * 2, 'create:blaze_burner[blaze=kindled,facing=south]')
    for (let side of sides) {
        addInfusion(output, input, mana / 2, `create:blaze_burner[blaze=fading,facing=${side}]`, true)
        addInfusion(output, input, mana * 2, `create:blaze_burner[blaze=kindled,facing=${side}]`, true)
    }

}


/**
 * @param {result} output
 * @param {ingredient[]} inputs
 * @param {number} mana Amount of mana the recipe uses. default(2500)
 */
function addAltar(output, inputs, mana) {
    if (!mana) mana = 2500
    modpackRecipes.push({
        type: 'botania:runic_altar',
        output: solveResult(output),
        mana: mana,
        ingredients: solveLimitedIngredients(inputs)
    })
}
/**
 * @param {block} output
 * @param {block} input
 * @param {number} time amount of time in ticks default(150)
 */
function addPurify(output, input, time) {
    time = time || 30
    modpackRecipes.push({
        type: 'botania:pure_daisy',
        input: solveStateIngredient(input),
        output: solveStateResult(output),
        time: time
    });
}
/**
 * @param {result[]} outputs
 * @param {ingredient[]} inputs
 */
function addElvenTrade(outputs, inputs) {
    modpackRecipes.push({
        type: 'botania:elven_trade',
        ingredients: solveLimitedIngredients(inputs),
        output: solveResults(outputs)
    })
}
/**
 * @param {result} output
 * @param {ingredient[]} inputs
 */
function addApothecary(output, inputs) {
    modpackRecipes.push({
        type: 'botania:petal_apothecary',
        output: solveResult(output),
        ingredients: solveLimitedIngredients(inputs),
        reagent: {
            "tag": "botania:seed_apothecary_reagent"
        }
    })
}
/**
 * @param {result} output
 * @param {ingredient[]} inputs
 * @param {number} mana default(100000)
 */
function addTerraPlate(output, inputs, mana) {
    (!mana) ? mana = 100000 :
        modpackRecipes.push({
            type: 'botania:terra_plate',
            result: solveResult(output),
            ingredients: solveLimitedIngredients(inputs),
            mana: mana
        })
}
/**
 * 
 * @param {string} output 'botania:absorption' 
 * @param {ingredient[]} input 
 */
function addBrew(output, input) {
    modpackRecipes.push({
        type: 'botania:brew',
        brew: output,
        ingredients: solveLimitedIngredients(input)
    })
}