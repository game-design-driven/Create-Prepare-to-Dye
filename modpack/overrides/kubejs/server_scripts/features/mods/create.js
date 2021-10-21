if (feature('Remove powdered_obsidian')) {
    removeItem('create:powdered_obsidian')
    removeRecipe({ id: 'create:mixing/chromatic_compound' })
    addMixing('create:chromatic_compound', ['3x obsidian', '3x glowstone_dust', 'create:polished_rose_quartz'], temperature.superHeated)
    addAltar('create:chromatic_compound', ['2x create:polished_rose_quartz', 'obsidian'], 7500)
}
if (feature('Remove tree fertilizer')) {
    removeItem('create:tree_fertilizer')
}