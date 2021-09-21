import crafttweaker.api.item.MCItemDefinition;
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IIngredient;

public expand MCTag<MCItemDefinition>[MCTag<MCItemDefinition>]{
    public toIngridientMap() as IIngredient[IIngredient]{
        var result = {} as IIngredient[IIngredient];
        for A,B in this{
            result[A] = B;
        }
        return result;
    }
    public add() as MCTag<MCItemDefinition>[MCTag<MCItemDefinition>]{
        for tag, addition in this{
            tag.add(addition);
        }
        return this;
    }
}