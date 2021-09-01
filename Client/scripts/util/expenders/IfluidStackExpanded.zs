import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.util.NameUtils;
import crafttweaker.api.fluid.MCFluid;

public expand MCFluid{
    public getNiceName() as string{
        return NameUtils.fixing(this.registryName);
    }
    public genRecipeName(recipeType as string)as string{
        return recipeType+"_"+this.getNiceName()+"/"+getNewId();
    }
    public static var recipeID = 0;
    public getNewId() as int{return(recipeID++);}
}
public expand IFluidStack{
    public hide() as IFluidStack{
        mods.jei.JEI.hideFluid(this);
        return this;    
    }
    public remove() as IFluidStack{
        hide();
        return this;
    }
    public getNiceName() as string{
        return NameUtils.fixing(this.registryName);
    }

    public genRecipeName(recipeType as string)as string{
        return recipeType+"_"+this.getNiceName()+"/"+getNewId();
    }
    public getJsonName() as string{
        return this.registryName.namespace+":"+this.registryName.path;
    }
    public static var recipeID = 0;
    public getNewId() as int{return(recipeID++);}
}
public expand IFluidStack[]{
    public remove() as IFluidStack[]{
        for fluid in this{
            fluid.remove();
        }
        return this;
    }
}