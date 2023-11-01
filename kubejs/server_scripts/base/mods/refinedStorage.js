// Ingredient.of('@refinedstorage').stacks.forEach(item => {
    
// });
if(feature('Remove all uneeded things from rfined storage')){
    let keep = [
        'refinedstorage:silicon',
        'refinedstorage:controller',
        'refinedstorage:grid',
        'refinedstorage:crafting_grid',
        'refinedstorage:storage_monitor',
        'refinedstorage:external_storage',
        'refinedstorage:cable',
    ];

    Ingredient.of('@refinedstorage').itemIds.forEach(item => {
        if (!keep.includes(item)){
            removeItem(item)
        }
    })

    let hideAndRemoveRecipes = [
        'refinedstorage:white_grid',
        'refinedstorage:orange_grid',
        'refinedstorage:magenta_grid',
        'refinedstorage:yellow_grid',
        'refinedstorage:lime_grid',
        'refinedstorage:pink_grid',
        'refinedstorage:gray_grid',
        'refinedstorage:light_gray_grid',
        'refinedstorage:cyan_grid',
        'refinedstorage:purple_grid',
        'refinedstorage:blue_grid',
        'refinedstorage:brown_grid',
        'refinedstorage:green_grid',
        'refinedstorage:red_grid',
        'refinedstorage:black_grid',
        'refinedstorage:white_crafting_grid',
        'refinedstorage:orange_crafting_grid',
        'refinedstorage:magenta_crafting_grid',
        'refinedstorage:yellow_crafting_grid',
        'refinedstorage:lime_crafting_grid',
        'refinedstorage:pink_crafting_grid',
        'refinedstorage:gray_crafting_grid',
        'refinedstorage:light_gray_crafting_grid',
        'refinedstorage:cyan_crafting_grid',
        'refinedstorage:purple_crafting_grid',
        'refinedstorage:blue_crafting_grid',
        'refinedstorage:brown_crafting_grid',
        'refinedstorage:green_crafting_grid',
        'refinedstorage:red_crafting_grid',
        'refinedstorage:black_crafting_grid'
    ];
    hideAndRemoveRecipes.forEach(item => {
        removeRecipe({output: item})
        hideItem(item)
    });


}

if (feature('refinedstorage cable recipes')){
    let cable = 'refinedstorage:cable'
    removeRecipe({output: cable})
    addShaped('4x refinedstorage:cable', [
        'PPP',
        'RRR',
        'PPP'
    ], {P: 'refinedstorage:silicon',R: 'create:polished_rose_quartz'})
    addShaped('2x refinedstorage:cable', [
        'PPP',
        'RDR',
        'PPP'
    ], {P: '#forge:glass',R: 'create:polished_rose_quartz',D: 'diamond'})
    addAssembly(['4x refinedstorage:cable %8', '2x refinedstorage:silicon %1','create:polished_rose_quartz %1'], 'create:polished_rose_quartz',[
        addDeploying(cable, 'create:polished_rose_quartz', 'refinedstorage:silicon'),
        addPressing(cable, 'create:polished_rose_quartz'),
        addCutting(cable, 'create:polished_rose_quartz')
    ], 3)
    
    addShaped('refinedstorage:external_storage', ['cps'],{
        c: cable,
        p: 'minecraft:piston',
        s: 'minecraft:sticky_piston'
    })

    //controller
    addShaped('refinedstorage:controller', [
        'AAA',
        'CDC',
        'AAA'
    ], { A: 'create:andesite_casing', C: '#forge:ingots/copper', D: '#forge:dusts/mana' })
    
    //grid
    addShaped('refinedstorage:grid', [
        'AAG',
        'CDG',
        'AAG'
    ], { A: 'create:andesite_casing', C: '#forge:ingots/copper', D: '#forge:dusts/mana', G: '#forge:glass' })

    //storage_monitor
    addShaped('refinedstorage:storage_monitor', [
        'AAG',
        'CD#',
        'AAG'
    ], { A: 'create:andesite_casing', C: '#forge:ingots/copper', D: '#forge:dusts/mana', G: '#forge:glass', '#': 'minecraft:comparator' })

    addItemApplication('refinedstorage:crafting_grid', 'refinedstorage:grid', 'minecraft:crafting_table')
}