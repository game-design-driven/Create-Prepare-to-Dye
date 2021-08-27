import crafttweaker.api.fluid.IFluidStack;

public expand IFluidStack{
    public hide() as IFluidStack{
        mods.jei.JEI.hideFluid(this);
        return this;
    }
    public remove() as IFluidStack{
        hide();
        return this;
    }
}
public expand IFluidStack[]{
    public remove() as IFluidStack[]{
        for fluid in this{
            fluid.remove();
        }
        return this;
    }
}