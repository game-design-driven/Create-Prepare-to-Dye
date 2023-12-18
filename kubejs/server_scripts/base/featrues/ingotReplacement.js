//priority: -1

if (feature('Gold is 4 nuggets')) {

  removeRecipe({id:"create:splashing/crushed_raw_gold"})
  addSplashing(['4x gold_nugget', 'ae2:large_quartz_bud %5'], 'create:crushed_raw_gold')

  removeRecipe({id: "minecraft:gold_ingot_from_nuggets"})
  replaceShapeless('gold_ingot', ['4x minecraft:gold_nugget'])
  
  removeRecipe({id: "minecraft:gold_nugget"})
  addShapeless('4x minecraft:gold_nugget', 'gold_ingot')
  
  removeRecipe({id: "create:crushing/nether_gold_ore"})
  addCrushing(['8x gold_nugget', 'create:experience_nugget %75', 'netherrack %10'])

}

//this bit is still being bad! i don't know why!!
//*
if(feature('No More Ingots')){

  //this went over relatively smoothly
  removeAndReplace("minecraft:iron_ingot","create:iron_sheet");
  removeAndReplace("#forge:ingots/iron","create:iron_sheet");

  removeRecipe({id: "create:pressing/iron_ingot"})
  addPressing("create:iron_sheet","minecraft:raw_iron");
  addShapeless("create:iron_sheet",["9x #forge:nuggets/iron"])
  
  replaceOutputForRecipes("minecraft:copper_ingot","ptdye:copper_tubes");
  removeAndReplace("#forge:ingots/copper","ptdye:orange_tubes");
  removeAndReplace("#forge:plates/copper","ptdye:orange_tubes");

  removeRecipe({id: "create:pressing/copper_ingot"})
  removeRecipe({output: "create:fluid_pipe"})
  addStonecutting("create:fluid_pipe","ptdye:orange_tubes");
  addShapeless("ptdye:orange_tubes","create:fluid_pipe");
  
  removeAndReplace("minecraft:copper_block","ptdye:orange_tube_block");
  
  addShapeless("create:iron_sheet",["9x #forge:nuggets/iron"]);

  addCompacting("4x minecraft:gold_ingot","4x minecraft:raw_gold");
  
  //TODO: this needs ballencing!!!! i just felt like it didn't make sense to have it be processed in a press anymore, and it's a very fluid-oriented material.
  addMixing(["ptdye:orange_tubes",Item.of("minecraft:clay").withChance(0.5)],"minecraft:raw_copper","NONE",300,Fluid.of("minecraft:water").withAmount(10),Fluid.of("minecraft:milk").withAmount(10))
  addSplashing("ptdye:orange_tubes","minecraft:raw_copper");
  
}
//*/