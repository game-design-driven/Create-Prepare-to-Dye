#priority 99
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.Ingredient;
import crafttweaker.api.item.IIngredientWithAmount;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.item.MCWeightedItemStack;
import crafttweaker.util.NameUtils;
import mods.botania.StateIngredient;
import stdlib.List;
import mods.jei.JEI;
import crafttweaker.api.recipe.Replacer;

public class RecipeGenerator{
    public static var recipeID = 0;
    public static getNewId() as int{
        return(recipeID++);
    }
    public static shaped(output as IItemStack, recipe as IIngredient[][])as void{
        var recipeName = "shaped_"+output.getNiceName()+"_"+getNewId();
        craftingTable.addShaped(recipeName,output,recipe);
        // RecipeGenerator.addMechanicalCrafting(output,recipe); //it seems they do add themselves auautomatically, they just don't show up in JEI
    }
    public static shaped(recipes as IIngredient[][][IItemStack])as void{
        for output, recipe in recipes{
            RecipeGenerator.shaped(output,recipe);
        }
    }
    public static shapeless(output as IItemStack, recipe as IIngredient[])as void{
        var recipeName = "shaped_"+output.getNiceName()+"_"+getNewId();
        RecipeGenerator.addMix(output, "none",recipe.fakeAmount());
        craftingTable.addShapeless(recipeName,output,recipe);
    }
    public static shapeless(recipes as IIngredient[][IItemStack])as void{
        for output, recipe in recipes{
            RecipeGenerator.shapeless(output,recipe);
        }
    }
    public static addMix(output as IItemStack, heat as string = "none", itemInputs as IIngredientWithAmount[] , fluidInputs as IFluidStack[] = [], duration as int = 100) as void{
        val recipeType = "mixing";
        val recipeName = recipeType+"_"+output.getNiceName()+"_"+getNewId(); 
        <recipetype:create:mixing>.addRecipe(recipeName, heat, output, itemInputs,fluidInputs,duration);
    }
    public static addMix(output as IFluidStack,heat as string = "none", itemInputs as IIngredientWithAmount[] , fluidInputs as IFluidStack[] = [], duration as int = 100) as void{
        val recipeType = "mixing";
        val recipeName = recipeType+"_"+NameUtils.fixing(output.registryName)+getNewId(); 
        <recipetype:create:mixing>.addRecipe(recipeName, heat, output, itemInputs,fluidInputs,duration);
    }
    public static removeMix(output as IItemStack) as void{
        <recipetype:create:mixing>.removeRecipe(output);
    }
    public static addMechanicalCrafting(output as IItemStack, input as IIngredient[][])as void{
        val recipeType = "mechanical_crafting";
        <recipetype:create:mechanical_crafting>.addRecipe(recipeType+"_"+output.getNiceName()+"_"+getNewId(), output, input);
    }

    public static addPressureChamber(output as IItemStack[], input as IIngredientWithAmount[], pressure as float = 2.0)as void{
        val recipeType = "pressure_chamber";
        <recipetype:pneumaticcraft:pressure_chamber>.addRecipe(recipeType+"_"+output[0].getNiceName()+"_"+getNewId(), input, output, pressure);
        //todo post an issiue about the pneumaticraft 
    }
    
    public static addExplosion(output as IItemStack[],input as IIngredientWithAmount, lossRate as int = 0) as void{
        val recipeType = "explosion";
        <recipetype:pneumaticcraft:explosion_crafting>.addRecipe(recipeType+"_"+output[0].getNiceName()+"_"+getNewId(), input, output, lossRate);
    }

    public static addCrushing(output as MCWeightedItemStack[],input as IIngredient, duration as int = 100)as void{
        val recipeType = "crushing";
        <recipetype:create:crushing>.addRecipe(recipeType+"_"+output[0].stack.getNiceName()+"_"+getNewId(), output, input);
    }

    public static addInfusion(output as IItemStack, input as IIngredient, mana as int = 1000, catalyst as StateIngredient) as void{
        val recipeType = "infusion";
        <recipetype:botania:mana_infusion>.addRecipe(recipeType+"_"+output.getNiceName()+"_"+getNewId(),
            output, input, mana, catalyst
        );
    // ManaInfusion.addRecipe(name as string, output as IItemStack, input as IIngredient, mana as int, catalyst as StateIngredient, group as string, function as RecipeFunctionSingle) as void
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
//     val cauldron = <recipetype:inspirations:cauldron>;
//     val cauldronTransform = <recipetype:inspirations:cauldron_transform>;