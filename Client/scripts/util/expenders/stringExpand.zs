import crafttweaker.api.item.IItemStack;

public expand string[IItemStack]{
    public addTips() as string[IItemStack]{
        for key in this{
            key.addTip(this[key]);
        }
        return this;
    }
}
// public expand IItemStack[] {
//   public hide() as IItemStack[] {for item in this{item.hide();}return this;}
//   public remove() as IItemStack[] {for item in this{item.remove();}return this;}
// }