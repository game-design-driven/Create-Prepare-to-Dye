// Ingredient.of('@refinedstorage').stacks.forEach(item => {

// });
if (feature("Remove all uneeded things from storage drawers")) {
  let keep = [
    "storagedrawers:drawer_key",
    "storagedrawers:oak_full_drawers_1",
    "storagedrawers:oak_full_drawers_2",
    "storagedrawers:oak_full_drawers_4",
    "storagedrawers:oak_half_drawers_1",
    "storagedrawers:oak_half_drawers_2",
    "storagedrawers:oak_half_drawers_4",
    "storagedrawers:controller",
  ];

  Ingredient.of("@storagedrawers").itemIds.forEach((item) => {
    if (!keep.includes(item)) {
      removeItem(item);
    }
  });

}

// if (feature('Drawer from any wood')) {
//   removeRecipe({id: 'storagedrawers:oak_full_drawers_1'})
//   addShaped('2x storagedrawers:oak_full_drawers_1', [
//     'AC',
//     'CA',
//   ], {
//     A: '#minecraft:planks',
//     C: 'minecraft:chest'
//   })
// }
