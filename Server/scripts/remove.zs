#priority 1
import crafttweaker.api.item.IItemStack;
// mods.jei.JEI.hideItem(<item:minecraft:dirt>);
mods.jei.JEI.hideMod("effortlessbuilding");
craftingTable.removeByModid("effortlessbuilding");
mods.jei.JEI.hideItem(<item:pneumaticcraft:wheat_flour>);
craftingTable.removeByName("minecraft:tnt");
craftingTable.removeByName("minecraft:piston");
craftingTable.removeByName("minecraft:hopper");
craftingTable.removeRecipe(<item:minecraft:paper>);




