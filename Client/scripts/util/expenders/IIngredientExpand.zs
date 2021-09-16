import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.Ingredient;
import crafttweaker.api.item.IIngredientWithAmount;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.util.NameUtils;
import stdlib.List;
import mods.jei.JEI;
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.recipe.Replacer;

public expand IIngredient{
  public replace(replacement as IIngredient) as IIngredient{
    Replacer.forAllTypes().suppressWarnings().replace(this, replacement).execute();
    return this;
  }
}
// public expand MCTag<IItemStack>{
//     public getJsonName() as string{
//         // print("LOG: "+this.commandString);
//         return "";
//         // return this.id.namespace+":"+this.id.path;

//     }
// }
// <tag:items:forge:ingots> as MCTag<IItemStack>.getJsonName().printMe();
public expand IIngredient[][][IItemStack]{
    public genShaped() as IIngredient[][][IItemStack]{
        for output, recipe in this{
            Recipes.shaped(output,recipe);
        }
        return this;
    }

}
public expand IIngredient[][IItemStack]{
    public genShapeless() as IIngredient[][IItemStack]{
        for output, recipe in this{
            Recipes.shapeless(output,recipe);
        }
        return this;
    }
}
public expand IIngredient[IIngredient]{
    public replace() as IIngredient[IIngredient]{
        for from, to in this{
            to.replace(to);
        }
        return this;
    }
}
public expand IIngredient[]{
    public fakeAmount() as IIngredientWithAmount[]{
        var output =new List<IIngredientWithAmount>();
        for ingredient in this{
            output.add(ingredient * 1);
        }
        return output;
    }
}   
