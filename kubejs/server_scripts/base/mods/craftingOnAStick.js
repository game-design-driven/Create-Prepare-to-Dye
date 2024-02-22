if (feature('Remove crafting tables on a stick')) {
    removeRecipe({mod:'crafting_on_a_stick'})
    removeItems([
      'crafting_on_a_stick:crafting_table',
      'crafting_on_a_stick:loom',
      'crafting_on_a_stick:grindstone',
      'crafting_on_a_stick:cartography_table',
      'crafting_on_a_stick:smithing_table',
      'crafting_on_a_stick:anvil',
      'crafting_on_a_stick:chipped_anvil',
      'crafting_on_a_stick:damaged_anvil'
    ])
    addShaped(namespace('stonecutter'), ['s','r'], { s: 'minecraft:stonecutter', r: '#forge:rods' })
}