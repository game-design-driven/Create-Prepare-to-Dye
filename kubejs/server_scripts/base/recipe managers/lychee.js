
function addItemInside(post, input, block_in) {
    let result = {
        type: 'lychee:item_inside',
        item_in: solveLimitedIngredient(input),
        block_in: block_in,
        post: post,
    }
    modpackRecipes.push(result)
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