// priority: 100

function addItemInside(post, input, block_in) {
    let result = {
        type: 'lychee:item_inside',
        item_in: solveLimitedIngredients(input),
        block_in: block_in,
        post: post,
    }
    modpackRecipes.push(result)
}
function addItemInsidePlace(block_out, input, block_in) {
    let result = {
        type: 'lychee:item_inside',
        item_in: solveLimitedIngredients(input),
        block_in: block_in,
        post: {
            type: 'place',
            block: block_out
        },
    }
    modpackRecipes.push(result)
}

function addDripping(block_out, target_block, source_block) {
    if (!source_block) source_block = 'water'
    let result = {
        type: "lychee:dripstone_dripping",
        source_block: source_block,
        target_block: target_block,
        post: [
            {
                type: "place",
                block: block_out
            }
        ]
    }
    modpackRecipes.push(result)
}
function addBlockInteract(block_out, block_in, item_in) {
    let post = {
        type: 'place',
        block: block_out,
    }
    let recipe = {
        type: 'lychee:block_interacting',
        item_in: solveLimitedIngredient(item_in),
        block_in: block_in,
        post: post,
    }
    modpackRecipes.push(recipe)
}
function addBlockExplode(block_out, block_in) {
    let post = {
        type: 'place',
        block: block_out,
    }
    let recipe = {
        type: 'lychee:block_exploding',
        block_in: block_in,
        post: post,
    }
    modpackRecipes.push(recipe)
}
function addBlockInteractToItem(item_out, block_in, item_in) {
    let post = {
        type: 'drop_item',
        item: item_out,
    }
    let recipe = {
        type: 'lychee:block_interacting',
        item_in: solveLimitedIngredient(item_in),
        block_in: block_in,
        post: post,
    }
    modpackRecipes.push(recipe)
}
function addGrow(block_out, block_in, item_in) {
    let post = [{
        type: 'place',
        block: block_out,
        offsetY: 1,
    },
    {
        "type": "execute",
        "command": "particle minecraft:happy_villager ~ ~1 ~ 1 1 1 0 5",
        "hide": true
    },
    {
        "type": "execute",
        "command": "playsound minecraft:item.bone_meal.use block @r ~ ~1 ~",
        "hide": true
    }]
    let recipe = {
        type: 'lychee:block_interacting',
        item_in: solveLimitedIngredient(item_in),
        block_in: block_in,
        post: post,
    }
    modpackRecipes.push(recipe)
}
addItemInside([
    {type: 'drop_item', item: 'white_dye'},
    {type: 'place', block: {blocks: ['water_cauldron'], state: {level: 2}}},
], '#forge:dyes', { blocks: ['water_cauldron'],level: 3, state: {}})

addItemInside([
    {
        type: 'drop_item',
        item: 'white_dye'
    },
    {type: 'place', block: {blocks: ['water_cauldron'], state: {level: 1}}},
], '#forge:dyes', {
    blocks: ['water_cauldron'],
    state: {
        level: 2
    }
})

addItemInside([
    {
        type: 'drop_item',
        item: 'white_dye'
    },
    {
        type: 'place',
        block: 'cauldron'
    }
], '#forge:dyes', {
    blocks: ['water_cauldron'],
    state: {
        level: 1
    }
})

addItemInside([
    {
        type: 'drop_item',
        item: 'white_dye'
    }
], '#forge:dyes', {
    blocks: ['water'],
})



// {
//     "type": "lychee:item_inside",
//     "item_in": {
//         "item": "bucket"
//     },
//     "block_in": {
//         "blocks": ["water_cauldron"],
//         "state": {
//             "level": 3
//         }
//     },
//     "post": [
//         {
//             "type": "drop_item",
//             "item": "water_bucket"
//         },
//         {
//             "type": "place",
//             "block": "cauldron"
//         }
//     ]
// }