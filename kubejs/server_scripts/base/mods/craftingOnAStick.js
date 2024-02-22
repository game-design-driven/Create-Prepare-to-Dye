if (feature('Remove crafting tables on a stick')) {
    removeRecipe({mod:'crafting_on_a_stick'})
    let namespace = (string) => {
      return 'crafting_on_a_stick:' + string
    }
    removeItems([
      namespace('crafting_table'),
      namespace('loom'),
      namespace('grindstone'),
      namespace('cartography_table'),
      namespace('smithing_table'),
      namespace('anvil'),
      namespace('chipped_anvil'),
      namespace('damaged_anvil')
    ])
    addShaped(namespace('stonecutter'), ['s','r'], { s: 'minecraft:stonecutter', r: '#forge:rods' })
}