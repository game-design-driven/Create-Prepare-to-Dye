import crafttweaker.api.blocks.MCBlock;
import crafttweaker.api.blocks.MCBlockState;
import crafttweaker.util.NameUtils;

public expand MCBlock{
  public genRecipeName(recipeType as string)as string{
    return recipeType+"_"+NameUtils.fixing(this.registryName)+"/"+recipeID++;
  }
  public static var recipeID = 0;
}
public expand MCBlockState{
  public genRecipeName(recipeType as string)as string{
    return recipeType+"_"+NameUtils.fixing(this.block.registryName)+"/"+recipeID++;
  }
  public static var recipeID = 0;
}