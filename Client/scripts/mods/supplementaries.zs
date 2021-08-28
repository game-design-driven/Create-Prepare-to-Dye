import crafttweaker.api.util.text.MCStyle;
import crafttweaker.api.util.text.MCTextComponent;
import crafttweaker.api.text.TextFormatting;
import crafttweaker.api.item.IItemStack;

<item:supplementaries:cog_block>.remove();

val thingsToRemove = {
    <item:supplementaries:cog_block> : "Glasses are a decoration and redstone component. You can fill it with any kind of sand\n, dust or powder (even modded ones!) and it will work like a real hourglass. You can use a comparator to get a signal that depends on the elapsed time. To reset it, you can either use hoppers or dispensers, or you can rotate it using a turn table on its side. It should be an useful block to make redstone clocks. Also note that the time it takes to deplete depends on the type of dust: for example sugar will be the fastest and honey the slowest.",
}.addTips();

// [
//     <item:toms_storage:ts.inventory_connector>,
//     <item:toms_storage:ts.trim>,
//     <item:toms_storage:ts.inventory_cable>,
//     <item:toms_storage:ts.inventory_cable_framed>,
//     <item:toms_storage:ts.inventory_cable_connector>,
//     <item:toms_storage:ts.inventory_cable_connector_filtered>,
//     <item:toms_storage:ts.inventory_proxy>,
//     <item:toms_storage:ts.inventory_hopper_basic>,
//     <item:toms_storage:ts.level_emitter>,
//     <item:toms_storage:ts.paint_kit>
// ].remove();