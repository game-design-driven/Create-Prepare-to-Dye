#priority 0

import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.IFluidStack;

<item:pneumaticcraft:wheat_flour>.removeAndReplace(<item:create:wheat_flour>);
RecipeGenerator.removePressureChamber(<item:pneumaticcraft:wheat_flour>);

<item:pneumaticcraft:sourdough>.removeRecipe();
RecipeGenerator.shapeless({
    <item:pneumaticcraft:sourdough> :[<item:create:wheat_flour>,<item:pneumaticcraft:yeast_culture_bucket>],
    <item:pneumaticcraft:sourdough>*2 :[<item:create:dough>,<item:pneumaticcraft:yeast_culture_bucket>],
});
RecipeGenerator.shaped({
    <item:pneumaticcraft:range_upgrade> :[
        [<tag:items:pneumaticcraft:upgrade_components>, <tag:items:minecraft:arrows>, <tag:items:pneumaticcraft:upgrade_components>],
        [<tag:items:minecraft:arrows>, <item:minecraft:piston>, <tag:items:minecraft:arrows>],
        [<tag:items:pneumaticcraft:upgrade_components>, <tag:items:minecraft:arrows>, <tag:items:pneumaticcraft:upgrade_components>]
    ]
});
RecipeGenerator.addMix(<item:pneumaticcraft:sourdough>,"none",[<item:create:wheat_flour>],[<fluid:pneumaticcraft:yeast_culture> * 1000]);
RecipeGenerator.addMix(<fluid:pneumaticcraft:vegetable_oil>*150,"none", [<tag:items:crafttweaker:anoyying_seeds>]);
// <recipetype:create:mixing>.addRecipe("veg", "none", <fluid:pneumaticcraft:vegetable_oil> * 150, [<tag:items:crafttweaker:anoyying_seeds>]);
