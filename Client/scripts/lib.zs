// import scripts.settings;
import mods.jei.JEI;

#priority 90


// static disabledItems as IItemStack[]= [];
//
// function disableItem(item as IItemStack){
//   //any operation on a disabled item happends here
//   item.addTooltip(settings.toolTipForDisabled);
//   disabledItems += item;
//   //furnace
//   Smelting.remove(item);
//   //crafting table removal
//   if (!settings.showDisabled){
//     JEI.removeAndHide(item);
//   }else{
//     Crafting.remove(item,false);
//   }
// }
//
// function isDisabled(item as IItemStack) as bool{
//   if (disabledItems has item){
//     return true;
//   }
//   return false;
// }
//
// function disableItems(items as IItemStack[]){
//   for item in items {
//     disableItem(item);
//   }
// }
//
// function hideBulk(items as IItemStack[]){
//   for item in items {
//     JEI.hide(item);
//   }
// }
//
// function rename(item as IItemStack, newName as string){
//   item.displayName = newName;
// }
//
// function renameBulk(list as string[IItemStack]){
//   for item, newName in list{
//     rename(item,newName);
//   }
// }
//
// function removeFromBlueprintBulk(items as IItemStack[]){
//   for item in items {
//     Blueprint.removeRecipe(item);
//   }
// }
//
// function removeRecipeBulk(items as IItemStack[]){
//   for item in items {
//     recipes.remove(item);
//   }
// }
//
// function restrictItem(item as IItemStack, stage as string){
//
// }
//
// function hideForSurvival(item as IItemStack){
//
// }
// function hideForSurvivalBulk(items as IItemStack[]){
//
// }
