import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.Ingredient;
import crafttweaker.api.item.IIngredientWithAmount;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.util.NameUtils;
import stdlib.List;
import mods.jei.JEI;

public expand IIngredient[][][IItemStack]{
    public genShaped() as IIngredient[][][IItemStack]{
        for output, recipe in this{
            RecipeGenerator.shaped(output,recipe);
        }
        return this;
    }

}
public expand IIngredient[][IItemStack]{
    public genShapeless() as IIngredient[][IItemStack]{
        for output, recipe in this{
            RecipeGenerator.shapeless(output,recipe);
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