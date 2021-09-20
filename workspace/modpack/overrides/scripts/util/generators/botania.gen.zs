
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.blocks.MCBlockState;
import mods.botania.StateIngredient;

public expand Recipes{
    public static addAltar(output as IItemStack, inputs as IIngredient[],mana as int = 2500) as void{
        <recipetype:botania:runic_altar>.addRecipe(output.genRecipeName("runic_altar"), output, mana, inputs);
    }
    public static addInfusion(output as IItemStack, input as IIngredient, catalyst as StateIngredient,mana as int = 1000) as void{
        <recipetype:botania:mana_infusion>.addRecipe(output.genRecipeName("infusion"),
            output, input, mana, catalyst
        );
    }
    public static addInfusion(output as IItemStack, input as IIngredient,mana as int = 1000) as void{
        <recipetype:botania:mana_infusion>.addRecipe(output.genRecipeName("infusion"),
            output, input, mana
        );
    }
    public static addPurify(output as MCBlockState, input as StateIngredient,time as int = 150) as void{
        <recipetype:botania:pure_daisy>.addRecipe(output.genRecipeName("pure_daisy"), //TODO replace with new system
            output,input,time
        );
    }
    public static addTrade(output as IItemStack[],input as IIngredient[]) as void{
        <recipetype:botania:elven_trade>.addRecipe(output.genRecipeName("trading"), output, input);
    }
}