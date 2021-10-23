[<item:charm:kiln>,
<item:charm:refined_obsidian_stairs>,
<item:charm:refined_obsidian_slab>,
<item:charm:refined_obsidian_wall>].remove();

<item:charm:netherite_nugget>.removeRecipe();
(<item:charm:netherite_nugget>*6).shapeless([<tag:items:forge:ingots/netherite>]);

var netheriteNugget = <recipetype:create:sequenced_assembly>.builder("seq_netherite_nugget")
    .transitionTo(<item:minecraft:netherite_ingot>.withTag({"netherite in a process": 1 as int}))
    .require(<item:minecraft:netherite_ingot>)
    .loops(1)
    .addOutput(<item:charm:netherite_nugget>*9,1)
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:contenttweaker:acid> * 25))
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:minecraft:water> * 1000));
<recipetype:create:sequenced_assembly>.addRecipe(netheriteNugget);

Recipes.addInfusion(<item:charm:netherite_nugget>*9,<item:minecraft:netherite_ingot>,<blockstate:minecraft:bedrock>);
<item:charm:glowball>.remove(); //doesn't seem to actually do light?
<item:minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: "charm:tinted" as string}]}).remove();