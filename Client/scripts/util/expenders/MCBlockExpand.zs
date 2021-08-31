import crafttweaker.api.blocks.MCBlock;
import crafttweaker.api.blocks.MCBlockState;
import crafttweaker.util.NameUtils;

public expand MCBlock{
  public getNiceName() as string{
      return NameUtils.fixing(this.registryName);
  }
  public getJsonName() as string{
      // var blockRef as string = block.registryName.namespace+":"+block.registryName.path;
    return this.registryName.namespace+":"+this.registryName.path;
  }
  public genRecipeName(recipeType as string)as string{
    return recipeType+"_"+this.getNiceName()+"/"+getNewId();
  }
  public static var recipeID = 0;
  public getNewId() as int{
      return(recipeID++);
  }
}
public expand MCBlock{
}