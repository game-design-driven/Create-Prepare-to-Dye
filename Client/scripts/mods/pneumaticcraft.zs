import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.recipe.Replacer;

//remove stone base
<item:pneumaticcraft:stone_base>.removeAndReplace(<tag:items:forge:stone>);

//remove advanced pcb
<item:pneumaticcraft:advanced_pcb>.remove();

//remove assembly
[
    <item:pneumaticcraft:assembly_laser>,
    <item:pneumaticcraft:assembly_drill>,
    <item:pneumaticcraft:assembly_io_unit_export>,
    <item:pneumaticcraft:assembly_io_unit_import>,
    <item:pneumaticcraft:assembly_platform>,
    <item:pneumaticcraft:assembly_controller>,
    <item:pneumaticcraft:assembly_program_drill_laser>,
    <item:pneumaticcraft:assembly_program_drill>,
    <item:pneumaticcraft:assembly_program_laser>
].remove();
<recipetype:pneumaticcraft:assembly_laser>.removeAll();
<recipetype:pneumaticcraft:assembly_drill>.removeAll();
var builder = <recipetype:create:sequenced_assembly>.builder("seq_test")
    .transitionTo(<item:pneumaticcraft:compressed_iron_block>.withTag({"toPressureTube": 1 as int}))
    .require(<item:pneumaticcraft:compressed_iron_block>)
    .loops(2)
    .addOutput(<item:pneumaticcraft:advanced_pressure_tube>*8, 12)
    .addOutput(<item:pneumaticcraft:ingot_iron_compressed>, 1)
    .addOutput(<item:botania:quartz_dark>, 1)
    .addOutput(<item:minecraft:quartz>, 1)
    .addOutput(<item:minecraft:iron_nugget>, 1)
    .addStep(<recipetype:create:cutting>.factory(), (rb) => rb.duration(50))
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:minecraft:quartz>));
<recipetype:create:sequenced_assembly>.addRecipe(builder);

var builderr = <recipetype:create:sequenced_assembly>.builder("seq_test2")
    .transitionTo(<item:minecraft:smooth_quartz>.withTag({"toAphorism_tile": 1 as int}))
    .loops(1)
    .require(<item:minecraft:smooth_quartz>)
    .addOutput(<item:pneumaticcraft:aphorism_tile>*8, 12)
    .addOutput(<item:minecraft:quartz>, 1)
    .addStep(<recipetype:create:cutting>.factory(), (rb) => rb.duration(50))
    .addStep(<recipetype:create:pressing>.factory(), (rb) => rb.duration(500));
<recipetype:create:sequenced_assembly>.addRecipe(builderr);

//remove etching tank
<item:pneumaticcraft:etching_tank>.remove();

//replace turbine blade, clutter intermediry
<item:pneumaticcraft:turbine_blade>.remove();
<item:pneumaticcraft:turbine_rotor>.removeRecipe();
<item:pneumaticcraft:flow_detector_module>.removeRecipe();
<recipeType:pneumaticcraft:pressure_chamber>.removeByName("pneumaticcraft:pressure_chamber/turbine_blade");
RecipeGenerator.addPressureChamber([<item:pneumaticcraft:turbine_rotor>],[<tag:items:forge:dusts/redstone>*6,<tag:items:forge:ingots/gold>*3,<item:pneumaticcraft:ingot_iron_compressed>]);
RecipeGenerator.addPressureChamber([<item:pneumaticcraft:flow_detector_module>],[<tag:items:forge:dusts/redstone>*9,<tag:items:forge:ingots/gold>*4,<item:pneumaticcraft:pressure_tube>]);

//remove pneumaticraft flour
<recipetype:pneumaticcraft:explosion_crafting>.removeByName("pneumaticcraft:explosion_crafting/wheat_flour");
<recipeType:pneumaticcraft:pressure_chamber>.removeByName("pneumaticcraft:pressure_chamber/wheat_flour");
<item:pneumaticcraft:wheat_flour>.removeAndReplace(<item:create:wheat_flour>);
<item:pneumaticcraft:sourdough>.removeRecipe();

//make compressed iron effiecieent with explosions, it's cool!
<recipetype:pneumaticcraft:explosion_crafting>.removeByName("pneumaticcraft:explosion_crafting/compressed_iron_block");
<recipetype:pneumaticcraft:explosion_crafting>.removeByName("pneumaticcraft:explosion_crafting/compressed_iron_ingot");
RecipeGenerator.addPressureChamber([<item:pneumaticcraft:ingot_iron_compressed>],[<item:minecraft:iron_ingot>]);
RecipeGenerator.addExplosion([<item:pneumaticcraft:ingot_iron_compressed>],<item:minecraft:iron_ingot>);
RecipeGenerator.addExplosion([<item:pneumaticcraft:compressed_iron_block>],<item:minecraft:iron_block>);


RecipeGenerator.addMix(<item:pneumaticcraft:sourdough>,"none",[<item:create:wheat_flour>],[<fluid:pneumaticcraft:yeast_culture> * 1000]);
RecipeGenerator.addMix(<item:pneumaticcraft:sourdough>*2,"none",[<item:create:dough>],[<fluid:pneumaticcraft:yeast_culture> * 1000]);
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

//remove uv lightbox
<item:pneumaticcraft:uv_light_box>.remove();
<item:pneumaticcraft:empty_pcb>.removeTooltip("Put in a UV Light Box to expose...");

//removing acid tank
<item:pneumaticcraft:empty_pcb>.removeTooltip("Put in an Etching Tank to develop...");
<item:pneumaticcraft:empty_pcb>.addTooltip("Put in Etching Acid to develop...");
mods.jei.JEI.addInfo(<item:pneumaticcraft:empty_pcb>, ["Put in Etching Acid to develop..."]); //TODO loclize

<item:pneumaticcraft:unassembled_pcb>.addTooltip("Made by etching an empty pcb in acid");
mods.jei.JEI.addInfo(<item:pneumaticcraft:unassembled_pcb>, ["Made by etching an empty pcb in acid"]); //TODO loclize

//remove amadrone
<recipetype:pneumaticcraft:amadron>.removeAll();
<item:pneumaticcraft:amadron_tablet>.remove();

//remove tanks
[
    <item:pneumaticcraft:huge_tank>,
    <item:pneumaticcraft:large_tank>,
    <item:pneumaticcraft:medium_tank>,
    <item:pneumaticcraft:reinforced_air_canister>
].remove();
<item:pneumaticcraft:small_tank>.removeAndReplace(<item:create:fluid_tank>);

//remove fluids
<recipetype:pneumaticcraft:thermo_plant>.removeByName("pneumaticcraft:thermo_plant/lubricant_from_biodiesel");
<recipetype:pneumaticcraft:thermo_plant>.removeByName("pneumaticcraft:thermo_plant/lubricant_from_diesel");
[
    <item:pneumaticcraft:biodiesel_bucket>,
    <item:pneumaticcraft:gasoline_bucket>,
    <item:pneumaticcraft:kerosene_bucket>,
    <item:pneumaticcraft:lpg_bucket>,
    <item:pneumaticcraft:lubricant_bucket>
].remove();
[
    <fluid:pneumaticcraft:biodiesel>,
    <fluid:pneumaticcraft:gasoline>,
    <fluid:pneumaticcraft:kerosene>,
    <fluid:pneumaticcraft:lpg>,
    <fluid:pneumaticcraft:lubricant>
].remove();

//replace refinery and fluid_mixer
<recipetype:pneumaticcraft:refinery>.removeAll();
<item:pneumaticcraft:refinery>.remove();
<recipetype:pneumaticcraft:fluid_mixer>.removeAll();
<item:pneumaticcraft:refinery_output>.remove();
<item:pneumaticcraft:glycerol>.remove();
<item:pneumaticcraft:fluid_mixer>.remove();
RecipeGenerator.addMix(<fluid:pneumaticcraft:diesel> * 10,"superheated" ,[<item:create:limesand>],[<fluid:pneumaticcraft:oil> * 10]);
RecipeGenerator.addMix(<fluid:pneumaticcraft:diesel> * 5,"heated" ,[<item:create:limesand>],[<fluid:pneumaticcraft:oil> * 10]);
RecipeGenerator.addMix(<fluid:pneumaticcraft:diesel> * 1,"none" ,[<item:create:limesand>],[<fluid:pneumaticcraft:oil> * 10]);
RecipeGenerator.addMix(<fluid:pneumaticcraft:diesel> * 25,"superheated" ,[],[<fluid:pneumaticcraft:ethanol> * 25,<fluid:pneumaticcraft:vegetable_oil> * 25]);
RecipeGenerator.addMix(<fluid:pneumaticcraft:diesel> * 50,"heated" ,[],[<fluid:pneumaticcraft:ethanol> * 25,<fluid:pneumaticcraft:vegetable_oil> * 25]);
RecipeGenerator.addMix(<fluid:pneumaticcraft:diesel> * 25,"none" ,[],[<fluid:pneumaticcraft:ethanol> * 25,<fluid:pneumaticcraft:vegetable_oil> * 25]);

<recipetype:pneumaticcraft:refinery>.addRecipe("smallref", <fluid:pneumaticcraft:diesel> * 50, [<fluid:pneumaticcraft:lpg> * 25, <fluid:pneumaticcraft:lubricant> * 25], 473);

//replace pneumatic cylinder
<item:pneumaticcraft:pneumatic_cylinder>.removeAndReplace(<item:pneumaticcraft:plastic>);

//remove manometer
<item:pneumaticcraft:manometer>.remove();

//replace cannon barel
<item:pneumaticcraft:cannon_barrel>.removeAndReplace(<item:create:fluid_pipe>);

//remove upgrade matrix
<item:pneumaticcraft:upgrade_matrix>.remove();
<recipetype:pneumaticcraft:thermo_plant>.removeByName("pneumaticcraft:thermo_plant/upgrade_matrix"); 


//pcb stuffs
//dye with fluid dye when implemented
val c = <item:minecraft:popped_chorus_fruit>;
<item:pneumaticcraft:empty_pcb>.withTag({"pneumaticcraft:uv_exposure": 50 as int}).shapeless([<item:pneumaticcraft:empty_pcb>,c,c,c,c,c,c,c,c]);
<item:pneumaticcraft:pcb_blueprint>.remove();
var builderrr = <recipetype:create:sequenced_assembly>.builder("seq_test3")
    .transitionTo(<item:pneumaticcraft:unassembled_pcb>.withTag({"toPcb": 1 as int}))
    .loops(1)
    .require(<item:pneumaticcraft:unassembled_pcb>)
    .addOutput(<item:pneumaticcraft:printed_circuit_board>, 12)
    .addOutput(<item:pneumaticcraft:failed_pcb>, 1)
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<tag:items:forge:dusts>))
    .addStep(<recipetype:create:pressing>.factory(), (rb) => rb.duration(500));

<recipetype:create:sequenced_assembly>.addRecipe(builderrr);
<item:pneumaticcraft:capacitor>.remove();
<item:pneumaticcraft:transistor>.remove();
RecipeGenerator.addInfusion(<item:pneumaticcraft:empty_pcb>.withTag({"pneumaticcraft:uv_exposure": 25 as int}),<item:pneumaticcraft:empty_pcb>,250,<block:minecraft:purple_wool>);
RecipeGenerator.addMix(<item:pneumaticcraft:empty_pcb>.withTag({"pneumaticcraft:uv_exposure": 25 as int}),"none",[<item:pneumaticcraft:empty_pcb>,<tag:items:forge:dusts/redstone>*4,<tag:items:forge:dusts/glowstone>*8]);
// <recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test_catalyst", <item:pneumaticcraft:empty_pcb>, <item:pneumaticcraft:empty_pcb>, 200, <block:botania:alchemy_catalyst>, "uv", (usualOut as IItemStack, input as IItemStack) => {print("POTATO: "+input.tag.asMap()["pneumaticcraft:uv_exposure"].getString()); return usualOut.withTag(input.tag); });

//remove pneumaticraft stone stuff
<item:pneumaticcraft:reinforced_bricks>.removeAndReplace(<tag:items:forge:ingots/compressed_iron>);
<item:pneumaticcraft:reinforced_stone>.removeAndReplace(<tag:items:forge:ingots/compressed_iron>);
<item:pneumaticcraft:reinforced_brick_wall>.removeAndReplace(<tag:items:forge:ingots/compressed_iron>);
<item:pneumaticcraft:reinforced_stone_slab>.removeAndReplace(<tag:items:forge:ingots/compressed_iron>);
<item:pneumaticcraft:reinforced_brick_stairs>.remove();
<item:pneumaticcraft:reinforced_brick_slab>.remove();
//remove bandade
<item:pneumaticcraft:bandage>.remove();

//remove manual
<item:patchouli:guide_book>.withTag({"patchouli:book": "pneumaticcraft:book" as string}).remove();

//change gps tool recipe
<item:pneumaticcraft:gps_tool>.removeRecipe();
<item:pneumaticcraft:gps_tool>.shaped([
    [<item:minecraft:air>, <item:minecraft:redstone_torch>, <item:minecraft:air>],
    [<tag:items:pneumaticcraft:plastic_sheets>, <item:create:electron_tube>, <tag:items:pneumaticcraft:plastic_sheets>],
    [<tag:items:pneumaticcraft:plastic_sheets>, <item:create:precision_mechanism>, <tag:items:pneumaticcraft:plastic_sheets>]
]);

//remove security + logistics
[
    <item:pneumaticcraft:pneumatic_door>,
    <item:pneumaticcraft:pneumatic_door_base>,
    <item:pneumaticcraft:stop_worm>,
    <item:pneumaticcraft:nuke_virus>,
    <item:pneumaticcraft:network_api>,
    <item:pneumaticcraft:network_data_storage>,
    <item:pneumaticcraft:network_io_port>,
    <item:pneumaticcraft:network_registry>,
    <item:pneumaticcraft:network_node>,
    <item:pneumaticcraft:drone>,
    <item:pneumaticcraft:logistics_drone>,
    <item:pneumaticcraft:harvesting_drone>,
    <item:pneumaticcraft:guard_drone>,
    <item:pneumaticcraft:collector_drone>,
    <item:pneumaticcraft:logistics_core>,
    <item:pneumaticcraft:diagnostic_subroutine>,
    <item:pneumaticcraft:network_api>,
    <item:pneumaticcraft:logistics_module>,
    <item:pneumaticcraft:logistics_frame_requester>,
    <item:pneumaticcraft:logistics_frame_storage>,
    <item:pneumaticcraft:logistics_frame_default_storage>,
    <item:pneumaticcraft:logistics_frame_passive_provider>,
    <item:pneumaticcraft:logistics_frame_active_provider>,
    <item:pneumaticcraft:transfer_gadget>,
    <item:pneumaticcraft:programmer>,
    <item:pneumaticcraft:tag_workbench>,
    <item:pneumaticcraft:tag_filter>,
    <item:pneumaticcraft:display_table>,
    <item:pneumaticcraft:standby_upgrade>,
    <item:pneumaticcraft:reinforced_chest_kit>,
    <item:pneumaticcraft:security_station>,
    <item:pneumaticcraft:logistics_configurator>,
    <item:pneumaticcraft:camo_applicator>,
    <item:pneumaticcraft:remote>,
    <item:pneumaticcraft:programming_puzzle>,
    <item:pneumaticcraft:gps_area_tool>,
    <item:pneumaticcraft:programmable_controller>
].remove();

//remove assembly

//remove rf interaction
<item:pneumaticcraft:flux_compressor>.remove();
<item:pneumaticcraft:pneumatic_dynamo>.remove();
<item:pneumaticcraft:compressed_iron_gear>.remove();
<item:pneumaticcraft:electrostatic_compressor>.remove();

//remove elevator
<item:pneumaticcraft:elevator_base>.remove();
<item:pneumaticcraft:elevator_frame>.remove();
<item:pneumaticcraft:elevator_caller>.remove();

//remove hoppers
<item:pneumaticcraft:omnidirectional_hopper>.removeAndReplace(<item:minecraft:hopper>);
<item:pneumaticcraft:liquid_hopper>.remove();

//crop support
<item:pneumaticcraft:crop_support>.remove();

//remove minigun and turret
<item:pneumaticcraft:minigun>.remove();
<item:pneumaticcraft:gun_ammo>.remove();
<item:pneumaticcraft:gun_ammo_incendiary>.remove();
<item:pneumaticcraft:gun_ammo_weighted>.remove();
<item:pneumaticcraft:gun_ammo_ap>.remove();
<item:pneumaticcraft:gun_ammo_explosive>.remove();
<item:pneumaticcraft:gun_ammo_freezing>.remove();
<item:pneumaticcraft:minigun_upgrade>.remove();
<item:pneumaticcraft:sentry_turret>.remove();

//remove pnc lego
[
    <item:pneumaticcraft:plastic_brick_lime>,
    <item:pneumaticcraft:plastic_brick_blue>,
    <item:pneumaticcraft:plastic_brick_light_blue>,
    <item:pneumaticcraft:plastic_brick_pink>,
    <item:pneumaticcraft:plastic_brick_brown>,
    <item:pneumaticcraft:plastic_brick_orange>,
    <item:pneumaticcraft:plastic_brick_gray>,
    <item:pneumaticcraft:plastic_brick_green>,
    <item:pneumaticcraft:plastic_brick_magenta>,
    <item:pneumaticcraft:plastic_brick_light_gray>,
    <item:pneumaticcraft:plastic_brick_red>,
    <item:pneumaticcraft:plastic_brick_white>,
    <item:pneumaticcraft:plastic_brick_cyan>,
    <item:pneumaticcraft:plastic_brick_black>,
    <item:pneumaticcraft:plastic_brick_yellow>,
    <item:pneumaticcraft:plastic_brick_purple>,
].remove();
//remve lamps
[
    <item:pneumaticcraft:wall_lamp_white>,
    <item:pneumaticcraft:wall_lamp_inverted_white>,
    <item:pneumaticcraft:wall_lamp_orange>,
    <item:pneumaticcraft:wall_lamp_inverted_orange>,
    <item:pneumaticcraft:wall_lamp_magenta>,
    <item:pneumaticcraft:wall_lamp_inverted_magenta>,
    <item:pneumaticcraft:wall_lamp_light_blue>,
    <item:pneumaticcraft:wall_lamp_inverted_light_blue>,
    <item:pneumaticcraft:wall_lamp_yellow>,
    <item:pneumaticcraft:wall_lamp_inverted_yellow>,
    <item:pneumaticcraft:wall_lamp_lime>,
    <item:pneumaticcraft:wall_lamp_inverted_lime>,
    <item:pneumaticcraft:wall_lamp_pink>,
    <item:pneumaticcraft:wall_lamp_inverted_pink>,
    <item:pneumaticcraft:wall_lamp_gray>,
    <item:pneumaticcraft:wall_lamp_inverted_gray>,
    <item:pneumaticcraft:wall_lamp_light_gray>,
    <item:pneumaticcraft:wall_lamp_inverted_light_gray>,
    <item:pneumaticcraft:wall_lamp_cyan>,
    <item:pneumaticcraft:wall_lamp_inverted_cyan>,
    <item:pneumaticcraft:wall_lamp_purple>,
    <item:pneumaticcraft:wall_lamp_inverted_purple>,
    <item:pneumaticcraft:wall_lamp_blue>,
    <item:pneumaticcraft:wall_lamp_inverted_blue>,
    <item:pneumaticcraft:wall_lamp_brown>,
    <item:pneumaticcraft:wall_lamp_inverted_brown>,
    <item:pneumaticcraft:wall_lamp_green>,
    <item:pneumaticcraft:wall_lamp_inverted_green>,
    <item:pneumaticcraft:wall_lamp_red>,
    <item:pneumaticcraft:wall_lamp_inverted_red>,
    <item:pneumaticcraft:wall_lamp_black>,
    <item:pneumaticcraft:wall_lamp_inverted_black>
].remove();

//remove pnc jackhammer
<recipetype:pneumaticcraft:thermo_plant>.removeByName("pneumaticcraft:thermo_plant/compressed_iron_drill_bit"); 
<recipetype:pneumaticcraft:thermo_plant>.removeByName("pneumaticcraft:thermo_plant/iron_drill_bit");
<recipetype:pneumaticcraft:thermo_plant>.removeByName("pneumaticcraft:thermo_plant/diamond_drill_bit");
<item:pneumaticcraft:jackhammer>.remove();
[<item:pneumaticcraft:drill_bit_iron>,
<item:pneumaticcraft:drill_bit_netherite>,
<item:pneumaticcraft:drill_bit_diamond>,
<item:pneumaticcraft:drill_bit_compressed_iron>].remove();

//replace compressed armor
<item:pneumaticcraft:compressed_iron_helmet>.removeAndReplace(<item:minecraft:leather_helmet>.withNameAndColor("Synthetic Cap",16383998));
<item:pneumaticcraft:compressed_iron_chestplate>.removeAndReplace(<item:minecraft:leather_chestplate>.withNameAndColor("Synthetic Tunic",16383998));
<item:pneumaticcraft:compressed_iron_leggings>.removeAndReplace(<item:minecraft:leather_leggings>.withNameAndColor("Synthetic Pants",16383998));
<item:pneumaticcraft:compressed_iron_boots>.removeAndReplace(<item:minecraft:leather_boots>.withNameAndColor("Synthetic Boots",16383998));

