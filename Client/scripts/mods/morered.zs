
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.IFluidStack;

//remove boring gatecrafting
<recipetype:morered:gatecrafting>.removeAll();
<item:morered:gatecrafting_plinth>.remove();

//remove red alloy ingot
<item:morered:red_alloy_ingot>.removeAndReplace(<tag:items:forge:ingots/copper>);

RecipeGenerator.shapeless({
    <item:morered:red_alloy_wire> * 8:[
        <tag:items:forge:ingots/copper>, <tag:items:forge:ingots/copper> , <tag:items:forge:ingots/copper>
    ]
});
