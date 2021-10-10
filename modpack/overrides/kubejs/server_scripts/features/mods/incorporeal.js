if(global.feature('incorporeal removal')) {
    removeItems(["incorporeal:natural_comparator","incorporeal:natural_repeater","incorporeal:soul_core_frame"])

    removeRecipe({output:"incorporeal:ender_soul_core"})
    removeRecipe({output:"incorporeal:corporea_soul_core"})
    removeRecipe({output:"incorporeal:potion_soul_core"})


    addAltar("incorporeal:ender_soul_core",["botania:ender_hand","botania:spell_cloth","botania:spell_cloth","minecraft:packed_ice","botania:dragonstone","botania:dragonstone"],25000)
    addAltar("incorporeal:corporea_soul_core",["botania:corporea_spark","botania:spell_cloth","botania:spell_cloth","minecraft:packed_ice","botania:dragonstone","botania:dragonstone"],25000)
    addAltar("incorporeal:potion_soul_core",["botania:blood_pendant","botania:spell_cloth","botania:spell_cloth","minecraft:packed_ice","botania:dragonstone","botania:dragonstone"],25000)

}