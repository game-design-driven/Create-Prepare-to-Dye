#priority 1

import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.IFluidStack;


<item:morered:red_alloy_ingot>.removeAndReplace(<tag:items:forge:ingots/copper>);

RecipeGenerator.shapeless({
    <item:morered:red_alloy_wire> * 8:[
        <tag:items:forge:ingots/copper>, <tag:items:forge:ingots/copper> , <tag:items:forge:ingots/copper>
    ]
});
