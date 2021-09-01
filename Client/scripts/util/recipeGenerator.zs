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
    public static addAltar(output as IItemStack, inputs as IIngredient[],mana as int = 2500) as void{
        <recipetype:botania:runic_altar>.addRecipe(output.genRecipeName("runic_altar"), output, mana, inputs);
    }
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
        <recipetype:botania:pure_daisy>.addRecipe(output.genRecipeName("pure_daisy"), //TODO replace with new system
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

    
    public static addBlockExplosion(output as MCBlock,input as MCBlock,emptyWeightAgainst100 as int = 0) as void{
        <recipetype:interactio:block_explode>.addJSONRecipe(output.genRecipeName("block_explode"),{
        "input": {
            "block": input.registryName
        },
        "output": {
            "type": "block",
            "entries": [{
                "result": {
                "block": output.registryName
                },
                "weight": 100
            }],
            "empty_weight": emptyWeightAgainst100
        }
        });
    }
    //make items by blowing up other items
    //example 
    public static addItemExplosion(output as MCWeightedItemStack[],input as MCTagWithAmount<MCItemDefinition>[], emptyWeight as int = 0) as void{
        val outputsData = new List<IData>();
        for item in output{
            outputsData.add({
                    "result": {
                        "item": item.stack.registryName,
                        "count": item.stack.amount,
                        "nbt": item.stack.getOrCreate
                    },
                    "weight": item.weight
                }
            );
        }
        val inputsData =new List<IData>();
        for item in input{
            inputsData.add({"tag": item.tag.id,  "count": item.amount});
        }
        <recipetype:interactio:item_explode>.addJSONRecipe(output.genRecipeName("item_explode"),{
        "inputs": inputsData as IData[],
        "output": {
            "type": "block",
            "entries": outputsData as IData[],
            "empty_weight": emptyWeight,
        }
        });
    }
    public static addAnvilSmashBlock(output as MCBlock,input as MCBlock,damage as int = 1,weight as int = 1, emptyWeight as int = 0) as void{
        <recipetype:interactio:block_anvil_smashing>.addJSONRecipe(output.genRecipeName("block_anvil_smashing"),{
            "input": {
                 "block":input.registryName
            },
            "output": {
                "type": "block",
                "entries": [{
                    "result": {
                    "block": output.registryName
                    },"weight": weight
                }]
            },
            "damage": damage,
            "empty_weight": emptyWeight
        });
    }
    public static addAnvilSmashItem(output as MCWeightedItemStack[],input as MCTagWithAmount<MCItemDefinition>[],damage as int = 1, emptyWeight as int = 0) as void{
        val outputsData = new List<IData>();
        for item in output{
            outputsData.add({
                    "result": {
                        "item": item.stack.registryName,
                        "count": item.stack.amount,
                        "nbt": item.stack.getOrCreate
                    },
                    "weight": item.weight
                }
            );
        }
        val inputsData =new List<IData>();
        for item in input{
            inputsData.add({"tag": item.tag.id,  "count": item.amount});
        }
        <recipetype:interactio:item_anvil_smashing>.addJSONRecipe(output.genRecipeName("item_anvil_smashing"),{
            "inputs": inputsData as IData[],
            "output": {
                "entries": outputsData as IData[],
                "empty_weight": emptyWeight
            },
            "damage": damage
        });
    }
    //making a fluid by putting something in another fluid
    // example Recipes.addFluidToFluid(<fluid:create:honey>, <fluid:minecraft:water>, [<tag:items:forge:ingots>*2,<tag:blocks:forge:dirt>]);
    public static addFluidToFluid(output as MCFluid, input as MCFluid, catalysts as MCTagWithAmount<MCItemDefinition>[]) as void{
        var items = new List<IData>();
        for item in catalysts{
            items.add({
                "tag": item.tag.id,
                "count": item.getAmount(),
            });
        }
        <recipetype:interactio:fluid_fluid_transform>.addJSONRecipe(output.genRecipeName("fluid_fluid_transform"),{
            "items": items as IData[],
            "input": {"fluid": input.registryName},
            "output": {
                "entries": [{
                    "result": {
                    "fluid": output.registryName
                    },"weight": 1
                }]
            }
        });

    }
    //making items by putting items in a fluid
    // Recipes.addFluidToItem([(<item:minecraft:iron_ingot> * 60).weight(1),<item:minecraft:iron_ingot>.weight(2)],[<tag:items:forge:nuggets>*2], <fluid:minecraft:lava>);
    public static addFluidToItem(output as MCWeightedItemStack[], input as MCTagWithAmount<MCItemDefinition>[], fluid as MCFluid = <fluid:minecraft:water>,rolls as int = 1,emptyWeight as int =0) as void{
        val inputsData = new List<IData>();
        for item in input{ //item is MCTagWithAmount
            inputsData.add({
                "tag": item.tag.id,
                "count": item.amount
			});
        }
        val outputsData = new List<IData>();
        for item in output{
            outputsData.add({
                "result":{
                    "item":item.stack.registryName,
                    "count":item.stack.amount,
                    "nbt": item.stack.getOrCreate
                },
                "weight":item.weight
            });
        }
        <recipetype:interactio:item_fluid_transform>.addJSONRecipe(output.genRecipeName("item_fluid_transform"),{
            "inputs":inputsData as IData[],
            "fluid":{"fluid":fluid.registryName},
            "output":{"entries":outputsData as IData[]},
            "empty_weight": emptyWeight,
            "rolls": rolls
        });
    }
}
Recipes.addAnvilSmashBlock(<block:minecraft:oak_log>,<block:minecraft:shulker_box>);
Recipes.addFluidToItem([(<item:minecraft:shulker_box>.withTag({BlockEntityTag: {x: 0 as int, y: 0 as int, z: 0 as int, Items: [{Slot: 0 as byte, id: "minecraft:iron_ingot" as string, Count: 64 as byte}], id: "minecraft:shulker_box" as string}}) * 2).weight(1)],[<tag:items:forge:nuggets>*2], <fluid:minecraft:water>);
Recipes.addItemExplosion([(<item:minecraft:shulker_box>.withTag({BlockEntityTag: {x: 0 as int, y: 0 as int, z: 0 as int, Items: [{Slot: 0 as byte, id: "minecraft:iron_ingot" as string, Count: 64 as byte}], id: "minecraft:shulker_box" as string}}) * 2).weight(1)],[<tag:items:forge:nuggets>*2]);
Recipes.addAnvilSmashItem([(<item:minecraft:shulker_box>.withTag({BlockEntityTag: {x: 0 as int, y: 0 as int, z: 0 as int, Items: [{Slot: 0 as byte, id: "minecraft:iron_ingot" as string, Count: 64 as byte}], id: "minecraft:shulker_box" as string}}) * 2).weight(1)],[<tag:items:forge:nuggets>*2]);
class testObject {

}