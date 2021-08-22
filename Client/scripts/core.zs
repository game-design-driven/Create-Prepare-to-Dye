// import scripts.settings;
import mods.jei.JEI;
import crafttweaker.api.item.ItemStack;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.Replacer;
import crafttweaker.api.item.IIngredient;

#priority 10
public class core{
  public static hide(itemToHide as IItemStack) as void{
      JEI.hideItem(itemToHide);
  }
  public static hideBulk(items as IItemStack[]) as void{
    for item in items {
      hide(item);
    }
  }

  public static removeItem(itemToRemove as IItemStack) as void{
    recipes.removeRecipe(itemToRemove);
    hide(itemToRemove);
  }
  public static removeItems(itemsToRemove as IItemStack[]) as void{
      for item in itemsToRemove{
          removeItem(item);
      }
  }

  public static removeAndReplaceItem(itemToRemove as IIngredient, replacement as IIngredient) as void{
    replace(itemToRemove, replacement);
    removeItem(itemToRemove);
  }

  public static replace(itemToReplace as IItemStack, replacement as IItemStack)as void{
    Replacer.forAllTypes().replace(itemToReplace, replacement).execute();
  }
}





//

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
