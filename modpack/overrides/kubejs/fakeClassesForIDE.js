//fake classes for vscode help

/**
 * Is itemStack that can have amount and/or chance
 * @example 'minecraft:stick', '5x minecraft:stick', 'minecraft:stick %25', '5x minecraft:stick %25'  
 */
class item { }
/**
 * Can be fluidStack or fluid tag, can have amount (defaults to 500mb)
 * @example 'water','700x lava', '100x #forge:hot'
 */
class fluid { }
/**
 * Can be itemStack or tag, can have amount
 * @example 'minecraft:stick', '#forge:stick', '4x stick'
 */
class ingredient { }
/**
 * Can be itemStack or tag, can't have amount (note: if used in list, can have amount)
 * @example 'minecraft:stick', '#forge:stick'
 */
class limitedIngredient { }
/**
 * is itemStack, can have amount, can have chance
 * @example 'minecraft:stick', '#forge:stick', '4x stick %50'
 */
class result { }
/**
 * A json object of a recipe that supports assembly
 * Has to have null output
 * Get one by calling any recipe add of a supported recipe with null as output
 */
 class process { }
