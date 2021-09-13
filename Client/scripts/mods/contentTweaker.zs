import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;

//oxidized gunpowder
Recipes.addMix(<item:contenttweaker:oxidized_gunpowder>,"heated",[tag.oxidiesers,<item:minecraft:gunpowder>]);

// plastic
var plastic = <recipetype:create:sequenced_assembly>.builder("plastic_assembly")
    .transitionTo(<item:minecraft:slime_ball>.withNameAndColor("Slimy oil",color.darkGreen))
    .require(<tag:items:forge:slimeballs>)
    .loops(1)
    .addOutput(<item:contenttweaker:plastic_nurdle>, 1)
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:contenttweaker:oil> * 1000))   
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:contenttweaker:acid> * 250))
    // .addStep(<recipetype:create:emptying>.factory(), (rb) => rb.output(<fluid:minecraft:water> * 1000))
    .addStep(<recipetype:create:cutting>.factory())    
    .addStep(<recipetype:create:pressing>.factory())
;
var plasticPearl = <recipetype:create:sequenced_assembly>.builder("plastic_assembly_pearl")
    .transitionTo(<item:minecraft:ender_pearl>.withNameAndColor("viscous  oil",color.darkGreen))
    .require(<tag:items:forge:ender_pearls>)
    .loops(5)
    .addOutput(<item:contenttweaker:plastic_nurdle>, 2)
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:contenttweaker:oil> * 1000))   
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:contenttweaker:acid> * 25))
    .addStep(<recipetype:create:cutting>.factory())    
    .addStep(<recipetype:create:pressing>.factory())
; 
<recipetype:create:sequenced_assembly>.addRecipe(plastic);
<recipetype:create:sequenced_assembly>.addRecipe(plasticPearl);

//acid
Recipes.addFluidToFluid(<fluid:contenttweaker:acid>,<fluid:minecraft:water>,[<tag:items:forge:acidic>]);

var acid = <recipetype:create:sequenced_assembly>.builder("acid")
    .transitionTo(<item:minecraft:milk_bucket>.withNameAndColor("Lactic acid",color.darkGreen))
    .require(<item:minecraft:milk_bucket>)
    .loops(10)
    .addOutput(<item:contenttweaker:acid_bucket>, 7)
    .addOutput(<item:minecraft:crimson_fungus>, 1)
    .addOutput(<item:minecraft:brown_mushroom>, 1)
    .addOutput(<item:minecraft:red_mushroom>, 1)
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:minecraft:rotten_flesh>))   
    .addStep(<recipetype:create:pressing>.factory())
; 
<recipetype:create:sequenced_assembly>.addRecipe(acid);

Recipes.addTrade([<item:contenttweaker:acid_bucket>],[<item:minecraft:lava_bucket>,<item:minecraft:spider_eye>]);

//oil
Recipes.addMix(<fluid:contenttweaker:oil>*25, "heated",[<tag:items:forge:seeds>]);
Recipes.addFluidToItem([<item:contenttweaker:oil_bucket>],[<tag:items:forge:fish_bucket>],<fluid:contenttweaker:acid>);
Recipes.addTrade([<item:contenttweaker:oil_bucket>],[<item:minecraft:bucket>,<item:minecraft:porkchop>]);