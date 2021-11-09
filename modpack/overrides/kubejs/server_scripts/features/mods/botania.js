if (feature('Replace mystical flowers and petals with dyes')) {
    removeAndReplace('botania:fertilizer', 'bone_meal')
    global.colors.forEach(color => {
        addToTag(('botania:petals/' + color), 'minecraft:' + color + '_dye')
        removeItem('botania:' + color + '_petal_block')
        removeItem('botania:' + color + '_shiny_flower')
        removeItem('botania:' + color + '_mystical_flower')
        removeItem('botania:' + color + '_floating_flower')
        removeItem('botania:' + color + '_double_flower')
        removeAndReplace('botania:' + color + '_petal', 'minecraft:' + color + '_dye')
        removeAndReplace('botania:' + color + '_mushroom', 'minecraft:' + color + '_dye')
    });
    //TODO rename petal apothecary to just apothecary
    //remove flower that makes mystical flowers
    removeItem('botania:jaded_amaranthus')
    removeItem('botania:floating_jaded_amaranthus')
    removeItem('botania:flower_bag')
    removeItem('botania:pestle_and_mortar')
    //
    let functionalFlowers = [
        'pure_daisy', 'manastar', 'hydroangeas', 'endoflame', 'thermalily', 'rosa_arcana', 'munchdew', 'entropinnyum', 'kekimurus', 'gourmaryllis', 'narslimmus', 'spectrolus', 'dandelifeon', 'rafflowsia', 'shulk_me_not', 'bellethorn', 'bergamute', 'dreadthorn', 'heisei_dream', 'tigerseye', 'jaded_amaranthus', 'orechid', 'fallen_kanade', 'exoflame', 'agricarnation', 'hopperhock', 'tangleberrie', 'jiyuulia', 'rannuncarpus', 'hyacidus', 'pollidisiac', 'clayconia', 'loonium', 'daffomill', 'vinculotus', 'spectranthemum', 'medumone', 'marimorphosis', 'bubbell', 'solegnolia', 'orechid_ignem', 'labellia',
        'bellethorn_chibi', 'agricarnation_chibi', 'hopperhock_chibi', 'rannuncarpus_chibi', 'clayconia_chibi', 'marimorphosis_chibi', 'bubbell_chibi', 'solegnolia_chibi',
    ]
    functionalFlowers.forEach(flower => {
        replaceShapeless('botania:floating_' + flower, ['botania:' + flower, '#forge:dirt', 'botania:grass_seeds'])
    });
}
if (feature('overgrowth_seed recipes')) {
    addFilling('botania:overgrowth_seed', 'minecraft:bone_meal', '750x milk')
    addItemExplode('botania:overgrowth_seed', ['4x #forge:seeds', Item.of('minecraft:potion', '{Potion:"minecraft:strength"}')])
}
if (feature('Petal processing') &&
    !feature('Replace mystical flowers with dyes')) {
    addCrushing(['fern%25', 'grass%25', 'seagrass%25', 'wheat_seeds%10'], '#botania:petals')
}
if (feature('Replace colored quartz')) {
    const quartzMap = {
        'botania:elf_quartz': 'create:refined_radiance',
        'botania:dark_quartz': '#minecraft:coals',
        'botania:lavender_quartz': '#forge:dyes/magenta',
        'botania:sunny_quartz': 'minecraft:sunflower',
        'botania:blaze_quartz': 'blaze_powder',
        'botania:red_quartz': 'redstone',
        'botania:mana_quartz': 'botania:mana_bottle',
    }
    for (let quartzBlock in quartzMap) {
        replaceShaped('8x ' + quartzBlock, ['###', '#i#', '###'], { '#': 'quartz_block', 'i': quartzMap[quartzBlock] })
    }
    removeAndReplace('botania:quartz_elven', 'botania:dragonstone')
    removeItems([
        'botania:quartz_dark',
        'botania:quartz_lavender',
        'botania:quartz_sunny',
        'botania:quartz_blaze',
        'botania:quartz_red',
        'botania:quartz_mana',
    ])
    removeRecipe({ id: 'botania:elven_trade/elf_quartz' })

}
if (feature('Tiara recipes use quartz blocks instead of quartz')) {
    const ingredients = ['quartz_block', 'botania:dark_quartz', 'botania:mana_quartz', 'botania:blaze_quartz', 'botania:lavender_quartz', 'botania:red_quartz', 'botania:elf_quartz', 'botania:sunny_quartz']
    for (i = 1; i <= 8; i++) {
        replaceShapeless(
            Item.of('botania:flight_tiara', { "variant": i }),
            ['botania:flight_tiara', ingredients[i - 1]]
        )
    }
}
if (feature('Remove manaweave cloth')) {
    removeAndReplace('botania:manaweave_cloth', 'botania:spell_cloth')
    replaceShaped('botania:spell_cloth', [' s ', 'sms', ' s '], { s: 'string', m: 'botania:mana_pearl' })
    addMixing('4x botania:spell_cloth', ['botania:mana_pearl', '6x white_wool'], temperature.heated)
}
if (feature('Replace_mana_string')) {
    removeAndReplace('botania:mana_string', 'string')
}
if (feature('Replace_elementium_with_refined_radiance')) {
    removeRecipe({ id: 'botania:elven_trade/elementium' })
    removeRecipe({ output: 'botania:elementium_ingot' })
    removeAndReplace('botania:elementium_ingot', 'create:refined_radiance')
    replaceInputForRecipes('#forge:ingots/elementium', 'create:refined_radiance')
    addElvenTrade('create:refined_radiance', ['2x botania:manasteel_ingot', 'bread'])
    removeRecipe({ id: 'botania:elven_trade/elementium_block' })
    removeItem('botania:elementium_block')
    removeItem('botania:elementium_nugget')
    removeItems([
        'botania:elementium_shears',
        'botania:elementium_sword',
        'botania:elementium_axe',
        'botania:elementium_hoe',
        'botania:elementium_shovel',
        'botania:elementium_pickaxe',
        'botania:elementium_boots',
        'botania:elementium_leggings',
        'botania:elementium_chestplate',
        'botania:elementium_helmet',
    ])
}
if (feature('Remove livingwood bow')) {
    //it's just a more powerful bow, doesn't bring much else to the table
    removeItem('botania:livingwood_bow')
}
if (feature('Remove assembly halo and change manufactory halo recipe')) {
    removeItem('botania:crafting_halo')
    addShaped('botania:auto_crafting_halo', ['pcp', 'mtm', ' m '],
        { p: 'botania:mana_pearl', c: 'create:cogwheel', t: 'crafting_table', m: 'botania:manasteel_ingot' })
}
if (feature('Rebalance regular infusion recipes')) {
    removeRecipe({ id: "botania:mana_infusion/mana_powder_dye" })
}
if (feature('Remove garden of glass items that are not in use')) {
    removeItem('botania:pebble')
    removeItem('botania:living_root')
}

//modpack

function addAlchemyRecipe(output, input, mana) {
    addInfusion(output, input, mana, 'create:blaze_burner[blaze=fading]')
    addInfusion(output, input, mana * 4, 'create:blaze_burner[blaze=kindled]')
}
