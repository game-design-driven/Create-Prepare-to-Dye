// Ingredient.of('@refinedstorage').stacks.forEach(item => {
    
// });
if(feature('Remove all uneeded things from ae2')){
    let keep = [
        'ae2:silicon',
        'ae2:terminal',
        'ae2:crafting_terminal',
        'ae2:fluix_smart_cable',
        'ae2:storage_bus',
        'ae2:energy_cell',
        'ae2:toggle_bus',
        'ae2:inverted_toggle_bus',
        'ae2:storage_monitor',
    ];

    Ingredient.of('@ae2').itemIds.forEach(item => {
        if (!keep.includes(item)){
            removeItem(item)
        }
    })
}

if (feature('ae2 recipes')) {
    addShapeless(Item.of('ae2:energy_cell', '{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}'), ['9x create:polished_rose_quartz'])
    addShaped('4x ae2:fluix_smart_cable', [
        'PPP',
        'RRR',
        'PPP'
    ], {P: 'refinedstorage:silicon',R: 'create:polished_rose_quartz'})
    addShaped('2x ae2:fluix_smart_cable', [
        'PPP',
        'RDR',
        'PPP'
    ], {P: '#forge:glass',R: 'create:polished_rose_quartz',D: 'diamond'})
    addAssembly(['4x ae2:fluix_smart_cable %8', '2x ae2:silicon %1','create:polished_rose_quartz %1'], 'create:polished_rose_quartz',[
        addDeploying('ae2:fluix_smart_cable', 'create:polished_rose_quartz', 'ae2:silicon'),
        addPressing('ae2:fluix_smart_cable', 'create:polished_rose_quartz'),
        addCutting('ae2:fluix_smart_cable', 'create:polished_rose_quartz')
    ], 3)

    addShaped('ae2:storage_bus', ['cps'],{
        c: 'ae2:fluix_smart_cable',
        p: 'minecraft:piston',
        s: 'minecraft:sticky_piston'
    })
    addShaped('ae2:terminal', [
        'AAG',
        'CDG',
        'AAG'
    ], { A: 'create:andesite_casing', C: '#forge:ingots/copper', D: '#forge:dusts/mana', G: '#forge:glass' })
    addShapeless('ae2:crafting_terminal', ['ae2:terminal', 'minecraft:crafting_table'])
    addShaped('ae2:storage_monitor', [
        'AAG',
        'CD#',
        'AAG'
    ], { A: 'create:andesite_casing', C: '#forge:ingots/copper', D: '#forge:dusts/mana', G: '#forge:glass', '#': 'minecraft:comparator' })
    removeRecipe({id: 'ae2:network/parts/storage_bus'})
    removeRecipe({id: 'ae2:smelting/silicon_from_certus_quartz_dust'})
    addSmelting('ae2:silicon', 'quartz', 0.1, 3600)

}