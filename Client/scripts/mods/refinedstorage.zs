import crafttweaker.api.item.IItemStack;
import crafttweaker.api.mods.ModInfo;
import crafttweaker.api.mods.Mods;
import stdlib.List;


val itemsThatWeKeep as IItemStack[]= [
    <item:refinedstorage:silicon>,
    <item:refinedstorage:controller>,
    <item:refinedstorage:grid>,
    <item:refinedstorage:crafting_grid>,
    <item:refinedstorage:storage_monitor>,
    <item:refinedstorage:external_storage>,
    <item:refinedstorage:cable>,
];
val itemsThatWeHide = [
    <item:refinedstorage:white_grid>,
    <item:refinedstorage:orange_grid>,
    <item:refinedstorage:magenta_grid>,
    <item:refinedstorage:yellow_grid>,
    <item:refinedstorage:lime_grid>,
    <item:refinedstorage:pink_grid>,
    <item:refinedstorage:gray_grid>,
    <item:refinedstorage:light_gray_grid>,
    <item:refinedstorage:cyan_grid>,
    <item:refinedstorage:purple_grid>,
    <item:refinedstorage:blue_grid>,
    <item:refinedstorage:brown_grid>,
    <item:refinedstorage:green_grid>,
    <item:refinedstorage:red_grid>,
    <item:refinedstorage:black_grid>,
    <item:refinedstorage:white_crafting_grid>,
    <item:refinedstorage:orange_crafting_grid>,
    <item:refinedstorage:magenta_crafting_grid>,
    <item:refinedstorage:yellow_crafting_grid>,
    <item:refinedstorage:lime_crafting_grid>,
    <item:refinedstorage:pink_crafting_grid>,
    <item:refinedstorage:gray_crafting_grid>,
    <item:refinedstorage:light_gray_crafting_grid>,
    <item:refinedstorage:cyan_crafting_grid>,
    <item:refinedstorage:purple_crafting_grid>,
    <item:refinedstorage:blue_crafting_grid>,
    <item:refinedstorage:brown_crafting_grid>,
    <item:refinedstorage:green_crafting_grid>,
    <item:refinedstorage:red_crafting_grid>,
    <item:refinedstorage:black_crafting_grid>
];

for item in loadedMods.getMod("refinedstorage").items{
    var remove = true;
    for itemToKeep in itemsThatWeKeep{
        if (itemToKeep==item){
            remove = false;
        }
    }
    for itemThatWeHide in itemsThatWeHide{
        if (itemThatWeHide==item){
            remove=false;
            itemsThatWeHide.hide();
        }
    }
    if (remove){
        item.remove();
    }
}