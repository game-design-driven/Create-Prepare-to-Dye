if (feature('Pillager heads can be processed')) {
    let pillagerHead = Item.of('minecraft:player_head', '{SkullOwner:{Id:[I;449435050,1190088049,-1334360732,942410307],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGFlZTZiYjM3Y2JmYzkyYjBkODZkYjVhZGE0NzkwYzY0ZmY0NDY4ZDY4Yjg0OTQyZmRlMDQ0MDVlOGVmNTMzMyJ9fX0="}]}}}').weakNBT()
    addCrushing(['gray_dye', 'bone', 'gunpowder'], [pillagerHead])
    addCutting('4x bone', pillagerHead)
    addBlasting('4x gray_dye', pillagerHead)
    addCompacting('4x gunpowder', pillagerHead)
}