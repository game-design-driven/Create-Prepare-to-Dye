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

public class RecipeGenerator{
    public static var recipeID = 0;
    public static getNewId() as int{
        return(recipeID++);
    }
    public static addSmoking(input as IItemStack, output as IIngredient,xp as float = 1.0,time as int = 30) as void{
        smoker.addRecipe(input.genRecipeName("smoking"), output, input, xp, time);
    }
    public static shaped(output as IItemStack, recipe as IIngredient[][])as void{
        craftingTable.addShaped(output.genRecipeName("shaped"),output,recipe);
        // RecipeGenerator.addMechanicalCrafting(output,recipe); //it seems they do add themselves auautomatically, they just don't show up in JEI
    }
    public static shaped(recipes as IIngredient[][][IItemStack])as void{
        for output, recipe in recipes{
            RecipeGenerator.shaped(output,recipe);
        }
    }
    public static shapeless(output as IItemStack, recipe as IIngredient[])as void{
        RecipeGenerator.addMix(output, "none",recipe.fakeAmount());
        craftingTable.addShapeless(output.genRecipeName("shapeless"),output,recipe);
    }
    public static shapeless(recipes as IIngredient[][IItemStack])as void{
        for output, recipe in recipes{
            RecipeGenerator.shapeless(output,recipe);
        }
    }
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

    public static addPressureChamber(output as IItemStack[], input as IIngredientWithAmount[], pressure as float = 2.0)as void{
        <recipetype:pneumaticcraft:pressure_chamber>.addRecipe(output.genRecipeName("pressure_chamber"), input, output, pressure);
        //todo post an issiue about the pneumaticraft 
    }
    
    public static addExplosion(output as IItemStack[],input as IIngredientWithAmount, lossRate as int = 0) as void{
        <recipetype:pneumaticcraft:explosion_crafting>.addRecipe(output.genRecipeName("explosion"), input, output, lossRate);
    }

    public static addCrushing(output as MCWeightedItemStack[],input as IIngredient, duration as int = 100)as void{
        <recipetype:create:crushing>.addRecipe(output.genRecipeName("crushing"), output, input);
    }

    public static addInfusion(output as IItemStack, input as IIngredient, mana as int = 1000, catalyst as StateIngredient) as void{
        <recipetype:botania:mana_infusion>.addRecipe(output.genRecipeName("infusion"),
            output, input, mana, catalyst
        );
    // ManaInfusion.addRecipe(name as string, output as IItemStack, input as IIngredient, mana as int, catalyst as StateIngredient, group as string, function as RecipeFunctionSingle) as void
    }
    public static addPurify(output as MCBlockState, input as StateIngredient,time as int = 150) as void{
        val recipeType = "infusion";
        <recipetype:botania:pure_daisy>.addRecipe(recipeType+"_"+output.block.getNiceName()+"_"+getNewId(), //TODO replace with new system
            output,input,time
        );
    }
    public static addTrade(output as IItemStack[],input as IIngredient[]) as void{
        <recipetype:botania:elven_trade>.addRecipe(output.genRecipeName("trading"), output, input);
    }
    public static addFill(output as IItemStack, input as IIngredient,fluidInput as IFluidStack,duration as int = 100) as void{
        <recipetype:create:filling>.addRecipe(output.genRecipeName("filling"), output, input, fluidInput);
    }

    public static addThermo(output as IItemStack, fluidOutput as IFluidStack, input as IIngredient, fluidInputs as FluidIngredient,pressure as float = 2, minTemp as int = 0,maxTemp as int = 2147483647,speedMultiplier as float = 1.0,isExothermic as bool = false) as void{
        <recipetype:pneumaticcraft:thermo_plant>.addRecipe(output.genRecipeName("thermo_plant"), fluidInputs, input, fluidOutput, output, pressure, minTemp, maxTemp,speedMultiplier,isExothermic);
    }



}




//     val gatecrafting = <recipetype:morered:gatecrafting>;
//     val elvenTrade = <recipetype:botania:elven_trade>;
//     val manaInfusion = <recipetype:botania:mana_infusion>;
//     val pureDaisy = <recipetype:botania:pure_daisy>;
//     val brew = <recipetype:botania:brew>;
//     val petalApothecary = <recipetype:botania:petal_apothecary>;
//     val runicAltar = <recipetype:botania:runic_altar>;
//     val terraPlate = <recipetype:botania:terra_plate>;
//     val mechanicalCrafting = <recipetype:create:mechanical_crafting>;
//     val conversion = <recipetype:create:conversion>;
//     val crushing = <recipetype:create:crushing>;
//     val cutting = <recipetype:create:cutting>;
//     val milling = <recipetype:create:milling>;
//     val basin = <recipetype:create:basin>;
//     val mixing = <recipetype:create:mixing>;
//     val compacting = <recipetype:create:compacting>;
//     val pressing = <recipetype:create:pressing>;
//     val sandpaperPolishing = <recipetype:create:sandpaper_polishing>;
//     val splashing = <recipetype:create:splashing>;
//     val deploying = <recipetype:create:deploying>;
//     val filling = <recipetype:create:filling>;
//     val emptying = <recipetype:create:emptying>;
//     val sequencedSssembly = <recipetype:create:sequenced_assembly>;
//     val amadron = <recipetype:pneumaticcraft:amadron>;
//     val assemblyLaser = <recipetype:pneumaticcraft:assembly_laser>;
//     val assemblyDrill = <recipetype:pneumaticcraft:assembly_drill>;
//     val assemblyDrillLaser = <recipetype:pneumaticcraft:assembly_drill_laser>;
//     val explosionCrafting = <recipetype:pneumaticcraft:explosion_crafting>;
//     val heatFrameCooling = <recipetype:pneumaticcraft:heat_frame_cooling>;
//     val pressureChamber = <recipetype:pneumaticcraft:pressure_chamber>;
//     val refinery = <recipetype:pneumaticcraft:refinery>;
//     val thermoPlant = <recipetype:pneumaticcraft:thermo_plant>;
//     val fluidMixer = <recipetype:pneumaticcraft:fluid_mixer>;
//     val fuelQuality = <recipetype:pneumaticcraft:fuel_quality>;
//     val heatProperties = <recipetype:pneumaticcraft:heat_properties>;