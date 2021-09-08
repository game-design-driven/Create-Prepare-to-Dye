#priority 99
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.Ingredient;
import crafttweaker.api.fluid.FluidIngredient;
import crafttweaker.api.item.IIngredientWithAmount;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.item.MCWeightedItemStack;
import crafttweaker.util.NameUtils;
import mods.botania.PureDaisy;
import mods.botania.StateIngredient;
import stdlib.List;
import crafttweaker.api.blocks.MCBlockState;
import mods.jei.JEI;
import crafttweaker.api.SmokerManager;
import crafttweaker.api.recipe.Replacer;
import crafttweaker.api.data.IData;
import crafttweaker.api.blocks.MCBlockState;
import crafttweaker.api.blocks.MCBlock;
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.MCItemDefinition;
import crafttweaker.api.tag.MCTagWithAmount;
import crafttweaker.api.fluid.MCFluid;
public class Recipes{
    

    public static addPressureChamber(output as IItemStack[], input as IIngredientWithAmount[], pressure as float = 2.0)as void{
        <recipetype:pneumaticcraft:pressure_chamber>.addRecipe(output.genRecipeName("pressure_chamber"), input, output, pressure);
        //todo post an issiue about the pneumaticraft 
    }
    
    public static addExplosion(output as IItemStack[],input as IIngredientWithAmount, lossRate as int = 0) as void{
        <recipetype:pneumaticcraft:explosion_crafting>.addRecipe(output.genRecipeName("explosion"), input, output, lossRate);
    }


    public static addThermo(output as IItemStack, fluidOutput as IFluidStack, input as IIngredient, fluidInputs as FluidIngredient,pressure as float = 2, minTemp as int = 0,maxTemp as int = 2147483647,speedMultiplier as float = 1.0,isExothermic as bool = false) as void{
        <recipetype:pneumaticcraft:thermo_plant>.addRecipe(output.genRecipeName("thermo_plant"), fluidInputs, input, fluidOutput, output, pressure, minTemp, maxTemp,speedMultiplier,isExothermic);
    }

    
    
}
