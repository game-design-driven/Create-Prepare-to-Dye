#priority 1
import crafttweaker.api.item.IItemStack;
// mods.jei.JEI.hideItem(<item:minecraft:dirt>);
mods.jei.JEI.hideMod("effortlessbuilding");
craftingTable.removeByModid("effortlessbuilding");
mods.jei.JEI.hideItem(<item:pneumaticcraft:wheat_flour>);

remove(<item:morered:gatecrafting_plinth>);
remove(<item:morered:red_alloy_ingot>);
remove(<item:toms_storage:ts.inventory_proxy>);
remove(<item:toms_storage:ts.inventory_hopper_basic>);
remove(<item:toms_storage:ts.level_emitter>);
craftingTable.removeByName("minecraft:tnt");
craftingTable.removeByName("minecraft:piston");
craftingTable.removeByName("minecraft:hopper");
craftingTable.removeRecipe(<item:minecraft:paper>);
craftingTable.removeRecipe(<item:morered:red_alloy_wire>);
craftingTable.removeRecipe(<item:morered:redwire_post_plate>);
craftingTable.removeRecipe(<item:morered:redwire_post_relay_plate>);
craftingTable.removeRecipe(<item:morered:redwire_post>);


function remove(a as IItemStack) as void{
  craftingTable.removeRecipe(a);
  mods.jei.JEI.hideItem(a);
}
