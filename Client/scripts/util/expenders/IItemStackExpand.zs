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
    public shaped(input as IIngredient[][]) as IItemStack{
      RecipeGenerator.shaped(this, input);
      return this;
    } 
    public hide() as IItemStack {
        JEI.hideItem(this);
        return this;
    }
    public removeRecipe() as IItemStack{
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
      remove();
      replace(replacement);
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