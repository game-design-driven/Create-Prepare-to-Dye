if (feature('Recycle copper')) {
    addCrushing(['orange_dye %25'], 'minecraft:cut_copper')
    addCrushing(['orange_dye %75'], 'minecraft:copper_block')
    addCrushing(['orange_dye %5'], 'create:copper_shingles')
    addCrushing(['orange_dye %5'], 'create:copper_tiles')    
    addCrushing(['light_blue %5'], 'create:oxidized_copper_shingles')
    addCrushing(['light_blue %5'], 'create:oxidized_copper_tiles')
    addCrushing(['orange_dye %75'], 'minecraft:copper_block')
    addCrushing(['light_blue %15', 'green_dye %15', 'lime_dye %15'], 'minecraft:oxidized_copper')
    addCrushing(['light_blue %2', 'green_dye %2', 'lime_dye %10'], 'minecraft:oxidized_cut_copper')
    addCrushing(['light_blue %2', 'green_dye %2', 'lime_dye %10'], 'minecraft:weathered_copper')
}

if (feature('Recycle iron')) {
    addCrushing(['gray_dye %25'], 'quark:iron_plate')
    addCrushing(['white_dye %90'], 'minecraft:iron_block')
    addCrushing(['white_dye %5'], 'minecraft:iron_bars')
}

if (feature('Recycle gold')) {
    addCrushing(['5x yellow_dye'], 'minecraft:gold_block')
}

if (feature('Recycle diamond')) {
    addCrushing(['2x cyan_dye'], 'minecraft:diamond_block')
}

if (feature('Recycle emerald')) {
    addCrushing(['2x green_dye', 'lime_dye %25'], 'minecraft:emerald_block')
}

if (feature('Recycle lapis')) {
    addCrushing(['blue_dye %50'], 'minecraft:lapis_block')
}