// Ingredient.of('@refinedstorage').stacks.forEach(item => {
    
// });
if (feature('Remove ae2 recipe types')) {
    removeRecipe({ type: "ae2:inscriber"})
    removeRecipe({ type: "ae2:entropy"})
    removeRecipe({ type: "ae2:condenser"})
    removeRecipe({ type: "ae2:matter_cannon"})
}
if(feature('Remove all uneeded things from ae2')){
    let keep = [
        'ae2:silicon',
        'ae2:terminal',
        'ae2:fluix_smart_cable',
        'ae2:storage_bus',
        'ae2:energy_cell',
        'ae2:toggle_bus',
        'ae2:inverted_toggle_bus',
        'ae2:storage_monitor',
        'ae2:chipped_budding_quartz',
        'ae2:damaged_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:small_quartz_bud',
        'ae2:medium_quartz_bud',
        'ae2:large_quartz_bud',
        'ae2:quartz_crystal',
        'ae2:quartz_cluster',
        'ae2:quartz_fiber',
        'ae2:quartz_block',
        'ae2:level_emitter',
    ];

    Ingredient.of('@ae2').itemIds.forEach(item => {
        if (!keep.includes(item)){
            removeItem(item)
        }
    })
}

if (feature('Quartz recipes')) {
    removeRecipe({ id: 'create:crushing/diorite' })
    addCrushing(['ae2:small_quartz_bud % 10'], 'diorite')
    removeRecipe({ id: 'create:splashing/soul_sand' })
    addSplashing(['4x ae2:large_quartz_bud %10', 'gold_nugget %2'], 'soul_sand')
    removeRecipe({ id: 'create:crushing' })
    // addItemInsidePlace('ae2:flawed_budding_quartz', ['ae2:chipped_budding_quartz', 'create:polished_rose_quartz'], 'minecraft:water')
    // addItemInsidePlace('ae2:chipped_budding_quartz', ['ae2:damaged_budding_quartz', 'create:polished_rose_quartz'], 'minecraft:water')
    // addItemInsidePlace('ae2:damaged_budding_quartz', ['quartz_block', 'create:polished_rose_quartz'], 'minecraft:water')
    addItemApplication('ae2:flawed_budding_quartz', 'ae2:chipped_budding_quartz', 'create:polished_rose_quartz')
    addItemApplication('ae2:chipped_budding_quartz', 'ae2:quartz_block', 'create:polished_rose_quartz')
    
    let buds=  ['ae2:small_quartz_bud', 'ae2:medium_quartz_bud', 'ae2:large_quartz_bud']
    buds.forEach(bud => {
        addShapeless('quartz', bud)
    })
    // addFilling('ae2:chipped_budding_quartz', ['ae2:damaged_budding_quartz', 'create:polished_rose_quartz'], 'minecraft:water')
    // addFilling('ae2:flawed_budding_quartz', ['ae2:chipped_budding_quartz', 'create:polished_rose_quartz'], 'minecraft:water')
    // addFilling('ae2:damaged_budding_quartz', ['quartz_block', 'create:polished_rose_quartz'], 'minecraft:water')
}

if (feature('silicon slow smelting from quartz')) {
    removeRecipe({id: 'ae2:smelting/silicon_from_certus_quartz_dust'})
    removeRecipe({id: 'ae2:blasting/silicon_from_certus_quartz_dust'})
    addSmelting('ae2:silicon', 'quartz', 0.1, 3600)
}

if (feature('Energy cell recycling')) {
    addCrushing(['9x quartz %75', '4x redstone %50', 'sand %40'], 'ae2:energy_cell')
}

if (feature('Slime from silicon')) {
    addFilling('minecraft:slime_ball', ['ae2:silicon'], "1x create_enchantment_industry:experience")
    addInfusion('minecraft:slime_ball', 'ae2:silicon', 5000)
    addMixing('2x minecraft:slime_ball', ['ae2:silicon', 'lime_dye'])
}

if (feature('Silicon from slime')) {
    addAssembly('3x ae2:silicon', 'minecraft:slime_ball', [
        addFilling('ae2:silicon', 'minecraft:slime_ball','250x create_enchantment_industry:ink'),
        addPressing('stick', 'stick')
    ])
}