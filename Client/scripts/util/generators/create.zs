
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.FluidIngredient;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.item.MCWeightedItemStack;
import crafttweaker.api.item.IIngredientWithAmount;

public expand Recipes{
    public static addMix(output as IItemStack, heat as string = "none", itemInputs as IIngredientWithAmount[] , fluidInputs as IFluidStack[] = [], duration as int = 100) as void{
        <recipetype:create:mixing>.addRecipe(output.genRecipeName("mixing"), heat, output, itemInputs,fluidInputs,duration);
    }
    public static addMix(output as IFluidStack,heat as string = "none", itemInputs as IIngredientWithAmount[] , fluidInputs as IFluidStack[] = [], duration as int = 100) as void{
        <recipetype:create:mixing>.addRecipe(output.genRecipeName("mixing"), heat, output, itemInputs,fluidInputs,duration);
    }
    public static addCompact(output as IItemStack,itemInputs as IIngredientWithAmount[],fluidInputs as IFluidStack[] = [], heat as string = "none", duration as int = 250) as void{
        <recipetype:create:compacting>.addRecipe(output.genRecipeName("compacting"), heat, output, itemInputs, fluidInputs, duration);
    }
    public static removeMix(output as IItemStack) as void{
        <recipetype:create:mixing>.removeRecipe(output);
    }
    public static addMechanicalCrafting(output as IItemStack, input as IIngredient[][])as void{
        <recipetype:create:mechanical_crafting>.addRecipe(output.genRecipeName("mechanical_crafting"), output, input);
    }
    public static addCrushing(output as MCWeightedItemStack[],input as IIngredient, duration as int = 100)as void{
        <recipetype:create:crushing>.addRecipe(output.genRecipeName("crushing"), output, input);
    }
    public static addMilling(output as MCWeightedItemStack[],input as IIngredient, duration as int = 100)as void{
        <recipetype:create:milling>.addRecipe(output.genRecipeName("milling"), output, input);
    }
    public static addFill(output as IItemStack, input as IIngredient,fluidInput as IFluidStack,duration as int = 100) as void{
        <recipetype:create:filling>.addRecipe(output.genRecipeName("filling"), output, input, fluidInput);
    }
    public static addDeploy(outputs as MCWeightedItemStack[],input as IIngredient, activator as IIngredient) as void{
        <recipetype:create:deploying>.addRecipe(outputs.genRecipeName("deploying"), input, activator, outputs);
    }
}