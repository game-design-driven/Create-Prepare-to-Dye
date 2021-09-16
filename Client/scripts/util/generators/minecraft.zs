import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
public expand Recipes{
    public static addSmoking(input as IItemStack, output as IIngredient,xp as float = 1.0,time as int = 30) as void{
        smoker.addRecipe(input.genRecipeName("smoking"), output, input, xp, time);
    }
    public static shaped(output as IItemStack, recipe as IIngredient[][])as void{
        craftingTable.addShaped(output.genRecipeName("shaped"),output,recipe);
        // Recipes.addMechanicalCrafting(output,recipe); //it seems they do add themselves auautomatically, they just don't show up in JEI
    }
    public static shaped(recipes as IIngredient[][][IItemStack])as void{
        for output, recipe in recipes{
            Recipes.shaped(output,recipe);
        }
    }
    public static shapeless(output as IItemStack, recipe as IIngredient[])as void{
        Recipes.addMix(output, "none",recipe.fakeAmount());
        craftingTable.addShapeless(output.genRecipeName("shapeless"),output,recipe);
    }
    public static shapeless(recipes as IIngredient[][IItemStack])as void{
        for output, recipe in recipes{
            Recipes.shapeless(output,recipe);
        }
    }
    public static addSmelting(output as IItemStack, input as IIngredient,cookTime as int = 10,xp as float = 0.15) as void{
        furnace.addRecipe(output.genRecipeName("smelting"),output,input,xp,cookTime);
    }
    //note: should use IItemStackExpand functions instead
}