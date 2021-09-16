#priority -100

import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.Ingredient;
import crafttweaker.api.item.IIngredientWithAmount;
import crafttweaker.api.item.MCWeightedItemStack;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.util.NameUtils;
import crafttweaker.api.item.tooltip.ITooltipFunction;
import stdlib.List;
import mods.jei.JEI;
import crafttweaker.api.util.text.MCTextComponent;
import crafttweaker.api.recipe.Replacer;

public expand MCWeightedItemStack{
  public getNiceName() as string{
      return NameUtils.fixing(this.stack.registryName);
  }
  public static var recipeID = 0;
  public genRecipeName(recipeType as string)as string{
    return recipeType+"_"+this.getNiceName()+"/"+recipeID++;
  }
}
public expand IItemStack {
  public getJsonName() as string{
      return this.registryName.namespace+":"+this.registryName.path;
  }
  public murdurFamily() as IItemStack{ // removes item and any child recipes
    this.remove();
    craftingTable.removeRecipeByInput(this);
    return this;
  }
  public addTip(t as string) as IItemStack{ //todo move to itemdefinition
    if (settings.tooltipRequireSneak){
      this.modifyShiftTooltip((stack as IItemStack, tooltip as List<MCTextComponent>, advanced as bool) as void => {
        for s in t.wrapToList(settings.tooltipWrap){
          tooltip.add(s.tooltipColor());
        }
        // tooltip.add("");
        }, (stack as IItemStack, tooltip as List<MCTextComponent>, advanced as bool) as void => {
          if (!tooltip.contains(settings.tooltip_prompt as MCTextComponent)){
            tooltip.add(settings.tooltip_prompt);
          }
        });
    }else{
      this.modifyTooltip((stack, tooltip, advanced) => {
        for s in t.wrapToList(){
          tooltip.add(s.tooltipColor());
        }
      });

    }
    return this;
  }
  public withNameAndColor(name as string, color as int)as IItemStack{ //yes I wrote a function for just a few uses, kill me
    return this.withTag({
      display: {
        color: color as int,
        Name: "{\"text\":\""+name+"\",\"italic\":\"false\"}" as string
         as string
      }
    });
  }
  public withName(name as string) as IItemStack{ //this not a good way to set names to stuff TODO #41 use datapack instead
    return this.withTag({
      display: {
        Name: "{\"text\":\""+name+"\",\"italic\":\"false\"}" as string
         as string
      }
    });
  }
  
  public shaped(input as IIngredient[][]) as IItemStack{
    Recipes.shaped(this, input);
    return this;
  } 
  public shapeless(input as IIngredient[]) as IItemStack{
    Recipes.shapeless(this,input);
    return this;
  }
  public hide() as IItemStack {
    if (settings.debug_showHiddenItems){

    }else{
      JEI.hideItem(this);
    }
    return this;
  }
  public removeRecipe() as IItemStack{
    print("removing recipe for --- "+this as string);
    recipes.removeRecipe(this);
    return this;
  }
  public removeCraftingRecipe() as IItemStack{
    print("removing recipe for --- "+this as string);
    craftingTable.removeRecipe(this);
    return this;
  }
  public remove() as IItemStack{
    this.addTooltip("removed!".red());//TODO #60 change to red
    for tag in <tagManager:items>.getAllTagsFor(this){
      tag.remove(this);
    }
    removeRecipe();
    hide();
    return this;
  } 
  public replace(replacement as IIngredient) as IItemStack{
    Replacer.forAllTypes().suppressWarnings().replace(this, replacement).execute();
    return this;
  }
  public removeAndReplace(replacement as IIngredient) as IItemStack{
    replace(replacement);
    remove();
    // hide();
    return this;
  }
  public getNiceName() as string{
      return NameUtils.fixing(this.registryName);
  }
  public static var recipeID = 0;
  public genRecipeName(recipeType as string)as string{
    return recipeType+"_"+this.getNiceName()+"/"+recipeID++;
  }

}
public expand IItemStack[] {
  public hide() as IItemStack[] {for item in this{item.hide();}return this;}
  public remove() as IItemStack[] {for item in this{item.remove();}return this;}
  public addTip(tip as string) as IItemStack[] {for item in this{item.addTip(tip);}return this;}
  public genRecipeName(recipeType as string) as string{
    var name as string= "arr.";
    for item in this{
      name += "_"+item.genRecipeName(recipeType);
    }
    return name;
  }
}
public expand IItemStack[IItemStack]{
  public removeAndReplace() as IItemStack[IItemStack] {
    for subject, replacement in this{
      subject.removeAndReplace(replacement);
    }
    return this;
  }
  public shapeless(recipe as IIngredient[]) as IItemStack[IItemStack]{
    for uniqueInput,subject in this{
      var r =new List<IIngredient>();
      for ingredient in recipe{
        if (ingredient==<item:minecraft:barrier>){
          r.add(uniqueInput);
        }else{
          r.add(ingredient);
        }
      }
      subject.shapeless(r);
    }
    return this;
  }
}
public expand MCWeightedItemStack[] {
  public genRecipeName(recipeType as string) as string{
    var name as string= "arr.";
    for item in this{
      name += "_"+item.stack.genRecipeName(recipeType);
    }
    return name;
  }
}
