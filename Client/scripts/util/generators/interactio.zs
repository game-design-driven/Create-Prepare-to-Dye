
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.FluidIngredient;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.item.MCWeightedItemStack;
import crafttweaker.api.item.IIngredientWithAmount;
import crafttweaker.api.data.IData;
import crafttweaker.api.blocks.MCBlockState;
import crafttweaker.api.blocks.MCBlock;
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.MCItemDefinition;
import crafttweaker.api.tag.MCTagWithAmount;
import crafttweaker.api.fluid.MCFluid;
import stdlib.List;
public expand Recipes{
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
    public static addItemExplosion(output as MCWeightedItemStack[],input as MCTagWithAmount<MCItemDefinition>[],rolls as int = 1, emptyWeight as int = 0) as void{
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
            "rolls": rolls
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
    public static addFluidToItem(output as MCWeightedItemStack[], input as MCTagWithAmount<MCItemDefinition>[], fluid as MCFluid = <fluid:minecraft:water> as MCFluid,consumeChance as float = 0.0,rolls as int = 1,emptyWeight as int =0) as void{
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
            "consume_fluid": consumeChance,
            "output":{
                "entries":outputsData as IData[],
                "empty_weight": emptyWeight,
                "rolls": rolls
            },
            
        });
    }
}
//examples
// Recipes.addAnvilSmashBlock(<block:minecraft:oak_log>,<block:minecraft:shulker_box>);
// Recipes.addFluidToItem([(<item:minecraft:shulker_box>.withTag({BlockEntityTag: {x: 0 as int, y: 0 as int, z: 0 as int, Items: [{Slot: 0 as byte, id: "minecraft:iron_ingot" as string, Count: 64 as byte}], id: "minecraft:shulker_box" as string}}) * 2).weight(1)],[<tag:items:forge:nuggets>*2], <fluid:minecraft:water>);
// Recipes.addItemExplosion([(<item:minecraft:shulker_box>.withTag({BlockEntityTag: {x: 0 as int, y: 0 as int, z: 0 as int, Items: [{Slot: 0 as byte, id: "minecraft:iron_ingot" as string, Count: 64 as byte}], id: "minecraft:shulker_box" as string}}) * 2).weight(1)],[<tag:items:forge:nuggets>*2]);
// Recipes.addAnvilSmashItem([(<item:minecraft:shulker_box>.withTag({BlockEntityTag: {x: 0 as int, y: 0 as int, z: 0 as int, Items: [{Slot: 0 as byte, id: "minecraft:iron_ingot" as string, Count: 64 as byte}], id: "minecraft:shulker_box" as string}}) * 2).weight(1)],[<tag:items:forge:nuggets>*2]);