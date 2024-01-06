// priority: 100

function addItemInside(post, input, block_in) {
  let result = {
    type: "lychee:item_inside",
    item_in: solveLimitedIngredients(input),
    block_in: block_in,
    post: post,
  };
  modpackRecipes.push(result);
}
function addFakeTradeRecipe(output_item, input, block_in) {
  let result = {
    type: "lychee:item_inside",
    item_in: input,
    block_in: block_in,
    post: {
      type: "drop_item",
      item: output_item.id,
      nbt: output_item.nbtString,
    },
    ghost: true,
  };
  modpackRecipes.push(result);
}
function addTradeBlendingRecipe(output_item, input) {
  output_item = Array.isArray(output_item) ? output_item : [output_item];
  let result = {
    type: "lychee:item_inside",
    item_in: input,
    block_in: "minecraft:stone_slab",
    post: output_item.map((item) => {
      return {
        type: "drop_item",
        item: item.id,
        nbt: item.nbtString,
      };
    }),
  };
  modpackRecipes.push(result);
}
function addItemInsidePlace(block_out, input, block_in) {
  let result = {
    type: "lychee:item_inside",
    item_in: solveLimitedIngredients(input),
    block_in: block_in,
    post: {
      type: "place",
      block: block_out,
    },
  };
  modpackRecipes.push(result);
}

function addDripping(block_out, target_block, source_block) {
  if (!source_block) source_block = "water";
  let result = {
    type: "lychee:dripstone_dripping",
    source_block: source_block,
    target_block: target_block,
    post: [
      {
        type: "place",
        block: block_out,
      },
    ],
  };
  modpackRecipes.push(result);
}
function addBlockInteract(block_out, block_in, item_in) {
  let post = {
    type: "place",
    block: block_out,
  };
  let recipe = {
    type: "lychee:block_interacting",
    item_in: solveLimitedIngredient(item_in),
    block_in: block_in,
    post: post,
  };
  modpackRecipes.push(recipe);
}
function addBlockExplode(block_out, block_in) {
  let post = {
    type: "place",
    block: block_out,
  };
  let recipe = {
    type: "lychee:block_exploding",
    block_in: block_in,
    post: post,
  };
  modpackRecipes.push(recipe);
}
const advancementRadius = 50;
function addBlockInteractToItem(
  item_out,
  block_in,
  item_in,
  advancement,
  ghost
) {
  item_out = Item.of(item_out);
  ghost = ghost || false;
  let post = [
    {
      type: "place",
      block: "air",
    },
    {
      type: "delay",
      s: 0.1,
    },
    {
      type: "move_towards_face",
      factor: -0.05,
    },
    {
      type: "execute",
      hide: true,
      command: `summon item ~ ~ ~ {Item:{id:"${item_out.id}",Count:${item_out.count}b}}`,
    },
  ];
  let postFake = [
    {
      type: "drop_item",
      item: item_out.id,
    },
  ]
  if (advancement != null) {
    post.push({
      type: "execute",
      hide: true,
      command: `advancement grant @a[dx=${advancementRadius},dy=${advancementRadius},dz=${advancementRadius}] until ${advancement}`,
    });
  }
  let recipe = {
    type: "lychee:block_interacting",
    item_in: solveLimitedIngredient(item_in),
    block_in: block_in,
    post: post,
    ghost: ghost,
    hidden: true,
  };
  let recipeFake = {
    type: "lychee:block_interacting",
    item_in: solveLimitedIngredient(item_in),
    block_in: block_in,
    post: postFake,
    ghost: true,
  };
  modpackRecipes.push(recipe);
  modpackRecipes.push(recipeFake);
}
function addGrow(block_out, block_in, item_in, ghost) {
  ghost = ghost || false;
  block_out = Array.isArray(block_out) ? block_out : [block_out];
  let post = [
    // {
    //   type: "place",
    //   block: block_out,
    //   offsetY: 1,
    // },
    {
      type: "execute",
      command: "particle minecraft:happy_villager ~ ~1 ~ 1 1 1 0 5",
      hide: true,
    },
    {
      type: "execute",
      command: "playsound minecraft:item.bone_meal.use block @r ~ ~1 ~",
      hide: true,
    },
  ];
  post = post.concat(
    block_out.map((block) => {
      return {
        type: "place",
        block: block,
        offsetY: 1,
      };
    })
  );
  let recipe = {
    type: "lychee:block_interacting",
    item_in: solveLimitedIngredient(item_in),
    block_in: block_in,
    post: post,
    ghost: ghost,
    hidden: true,
  };
  let fakePost = {
    type: "random",
    entries: block_out.map((block) => {
      return {
        type: "drop_item",
        item: block,
      };
    }),
  };

  let fakeRecipe = {
    type: "lychee:block_interacting",
    item_in: solveLimitedIngredient(item_in),
    block_in: block_in,
    post: fakePost,
    ghost: true,
  };
  if (!ghost)
  modpackRecipes.push(recipe);
  modpackRecipes.push(fakeRecipe);
}
// addItemInside(
//   [
//     { type: "drop_item", item: "white_dye" },
//     {
//       type: "place",
//       block: { blocks: ["water_cauldron"], state: { level: 2 } },
//     },
//   ],
//   "#forge:dyes",
//   { blocks: ["water_cauldron"], level: 3, state: {} }
// );

// addItemInside(
//   [
//     {
//       type: "drop_item",
//       item: "white_dye",
//     },
//     {
//       type: "place",
//       block: { blocks: ["water_cauldron"], state: { level: 1 } },
//     },
//   ],
//   "#forge:dyes",
//   {
//     blocks: ["water_cauldron"],
//     state: {
//       level: 2,
//     },
//   }
// );

// addItemInside(
//   [
//     {
//       type: "drop_item",
//       item: "white_dye",
//     },
//     {
//       type: "place",
//       block: "cauldron",
//     },
//   ],
//   "#forge:dyes",
//   {
//     blocks: ["water_cauldron"],
//     state: {
//       level: 1,
//     },
//   }
// );

// addItemInside(
//   [
//     {
//       type: "drop_item",
//       item: "white_dye",
//     },
//   ],
//   "#forge:dyes",
//   {
//     blocks: ["water"],
//   }
// );

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
