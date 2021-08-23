// import scripts.settings;
import mods.jei.JEI;
import crafttweaker.api.item.ItemStack;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.Replacer;
import crafttweaker.api.item.IIngredient;

#priority 10
public class core{
  public static hide(itemToHide as IItemStack) as void{
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

  public static removeAndReplaceItem(itemToRemove as IItemStack, replacement as IIngredient) as void{
    replaceItem(itemToRemove, replacement);
    removeItem(itemToRemove);
  }

  public static replaceItem(itemToReplace as IItemStack, replacement as IIngredient)as void{
    Replacer.forAllTypes().suppressWarnings().replace(itemToReplace, replacement).execute();
  }
}

public expand IItemStack {
    public hide() as IItemStack {
        JEI.hideItem(this);
        return this;
    }
    public remove() as IItemStack{
      recipes.removeRecipe(this);
      hide();
      return this;
    } 
    public replace(replacement as IIngredient) as IItemStack{
      Replacer.forAllTypes().suppressWarnings().replace(this, replacement).execute();
      return this;
    }
    public removeAndReplace(replacement as IIngredient) as IItemStack{
      remove();
      replace(replacement);
      return this;
    }
}
public expand IItemStack[] {
  public hide() as IItemStack[] {for item in this{item.hide();}return this;}
  public remove() as IItemStack[] {for item in this{item.remove();}return this;}
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
