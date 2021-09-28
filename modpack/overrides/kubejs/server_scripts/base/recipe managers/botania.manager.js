// priority: 100
/**
 * @param {fluid} output
 * @param {ingredient} input
 * @param {number} mana Amount of mana the recipe uses, defaults to 1000
 * @param {block} catalyst
 */
function addInfusion(output, input, mana, catalyst) {
    if (!mana) mana = 1000
    let recipeOut = {
        type: 'botania:mana_infusion',
        input: solveIngredients(input),
        output: solveItem(output),
        mana: mana
    }
    //<blockstate:minecraft:furnace@lit=false,facing=north> using this as example bcause ct hand gives that
    if (catalyst)
        if (catalyst.includes('@')) {
            //has state data
            var properties = {}
            catalyst.split('@')[1].split(',').forEach(property => {
                properties[property.split('=')[0]] = property.split('=')[1]
            });
            recipeOut.catalyst = {
                type: 'state',
                name: catalyst.split('@')[0],
                properties: {
                    blaze: "kindled"
                }
            }
        } else {
            recipeOut.catalyst = {
                type: 'block',
                block: catalyst
            }
        }
    modpackRecipes.push(recipeOut)
}
addAltar
/**
 * @param {fluid} output
 * @param {ingredient[]} inputs
 * @param {number} mana Amount of mana the recipe uses. default(2500)
 */
function addAltar(output, inputs, mana) {
    if (!mana) mana = 2500
    let recipeOut = {
        type: 'botania:runic_altar',
        output: solveItem(output),
        mana: mana,
        ingredients: solveIngredients(inputs)
    }
    modpackRecipes.push(recipeOut)
}
/**
 * @param {block} output
 * @param {block} input
 * @param {number} time amount of time in ticks default(150)
 */
function addPurify(output, input, time) {
    let blockIngredient =
        input.startsWith('#')
            ? { type: 'tag', tag: input.slice(1) }
            : { type: 'block', block: input };

    let recipeOut = {
        type: 'botania:pure_daisy',
        input: blockIngredient,
        output: { name: output }
    }
    modpackRecipes.push(recipeOut);
}
/**
 * @param {fluid[]} outputs
 * @param {ingredient[]} inputs
 */
function addElvenTrade(outputs, inputs) {
    modpackRecipes.push({
        type: 'botania:elven_trade',
        ingredients: solveIngredients(inputs),
        output: solveItems(outputs)
    })
}
/**
 * @param {fluid} output
 * @param {ingredient[]} inputs
 */
function addApothecary(output, inputs) {
    modpackRecipes.push({
        type: 'botania:petal_apothecary',
        output: solveItem(output),
        ingredients: solveIngredients(inputs)
    })
}
/**
 * @param {fluid} output
 * @param {ingredient[]} inputs
 * @param {number} mana default(100000)
 */
function addTerraPlate(output, inputs, mana) {
    (!mana)?mana= 100000:

    modpackRecipes.push({
        type: 'botania:terra_plate',
        result: solveItem(output),
        ingredients: solveIngredients(inputs),
        mana:mana
    })
}