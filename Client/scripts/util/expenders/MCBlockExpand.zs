import crafttweaker.api.blocks.MCBlock;
import crafttweaker.util.NameUtils;

public expand MCBlock{
  public getNiceName() as string{
      return NameUtils.fixing(this.registryName);
  }
}