if (global.feature('Replace mystical flowers with dyes')) {
}

if (global.feature('overgrowth_seed recipes')) {
    addFilling('botania:overgrowth_seed', Item.of('minecraft:bone_meal').withCount(6), '500x milk')
    addItemExplode('botania:overgrowth_seed', ['4x #forge:seeds', Item.of('minecraft:potion', '{Potion:"minecraft:strength"}')])
}
if (global.feature('Petal processing') &&
    !global.feature('Replace mystical flowers with dyes')) {
    addCrushing(['fern%25', 'grass%25', 'seagrass%25', 'wheat_seeds%10'], '#botania:petals')
}
if (global.feature('Replace colored quartz')) {
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
        removeRecipe({ output: quartzBlock })
        addShaped('8x ' + quartzBlock, ['###', '#i#', '###'], { '#': 'quartz_block', 'i': quartzMap[quartzBlock] })
    }
    //need to remove the quartz itself
    removeAndReplace('botania:quartz_elven', 'botania: dragonstone')
    removeItems([
        'botania:quartz_dark',
        'botania:quartz_lavender',
        'botania:quartz_sunny',
        'botania:quartz_blaze',
        'botania:quartz_red',
        'botania:quartz_mana',
    ])
}
if (global.feature('Tiara recipes use quartz blocks instead of quartz')) {
    const ingredients = ['quartz_block', 'botania:dark_quartz', 'botania:mana_quartz', 'botania:blaze_quartz', 'botania:lavender_quartz', 'botania:red_quartz', 'botania:elf_quartz', 'botania:sunny_quartz']
    for (i = 1; i <= 8; i++) {
        removeRecipe({ id: ('botania:flighttiara_' + i) })
        addShapeless(
            Item.of('botania:flight_tiara', { "variant": i }),
            ['botania:flight_tiara', ingredients[i - 1]]
        )
    }
}