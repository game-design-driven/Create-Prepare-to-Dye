#priority -100

import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.Ingredient;
import crafttweaker.api.item.IIngredientWithAmount;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.util.NameUtils;
import stdlib.List;
import mods.jei.JEI;
import crafttweaker.api.recipe.Replacer;
public expand IItemStack {
  public withNameAndColor(name as string, color as int)as IItemStack{ //yes I wrote a function for just a few uses, kill me
    return this.withTag({
      display: {
        color: color as int,
        Name: "{\"text\":\""+name+"\",\"italic\":\"false\"}" as string
         as string
      }
    });
  }
  public withName(name as string) as IItemStack{ //this not a good way to set names to stuff TODO #41 use datapack instead
    return this.withTag({
      display: {
        Name: "{\"text\":\""+name+"\",\"italic\":\"false\"}" as string
         as string
      }
    });
  }
  
  public shaped(input as IIngredient[][]) as IItemStack{
    RecipeGenerator.shaped(this, input);
    return this;
  } 
  public hide() as IItemStack {
      JEI.hideItem(this);
      return this;
  }
  public removeRecipe() as IItemStack{
    print("removing recipe for --- "+this as string);
    recipes.removeRecipe(this);
    return this;
  }
  public remove() as IItemStack{
    removeRecipe();
    hide();
    return this;
  } 
  public replace(replacement as IIngredient) as IItemStack{
    Replacer.forAllTypes().suppressWarnings().replace(this, replacement).execute();
    return this;
  }
  public removeAndReplace(replacement as IIngredient) as IItemStack{
    // remove();
    replace(replacement);
    hide();
    return this;
  }
  public getNiceName() as string{
      return NameUtils.fixing(this.registryName);
  }
}
public expand IItemStack[] {
  public hide() as IItemStack[] {for item in this{item.hide();}return this;}
  public remove() as IItemStack[] {for item in this{item.remove();}return this;}
}