//priority: -1

if (feature('Gold is 4 nuggets')) {

  removeRecipe({id:"create:splashing/crushed_raw_gold"})
  addSplashing(['4x gold_nugget', 'ae2:large_quartz_bud %5'], 'create:crushed_raw_gold')

  removeRecipe({id: "minecraft:gold_ingot_from_nuggets"})
  replaceShapeless('gold_ingot', ['4x minecraft:gold_nugget'])
  
  removeRecipe({id: "minecraft:gold_nugget"})
  addShapeless('4x minecraft:gold_nugget', 'gold_ingot')
  
  removeRecipe({id: "create:crushing/nether_gold_ore"})
  addCrushing(['8x gold_nugget', 'create:experience_nugget %75', 'netherrack %10'], 'nether_gold_ore')

}

//this bit is still being bad! i don't know why!!
// if(feature('No More Ingots')){

//   //this went over relatively smoothly
//   removeAndReplace("minecraft:iron_ingot","create:iron_sheet");

//   removeRecipe({input:"create:iron_sheet",output:"create:iron_sheet"});
//   addPressing("create:iron_sheet","minecraft:raw_iron");
//   addShapeless("create:iron_sheet",["9x #forge:nuggets/iron"])

  
//   //for some reason two remove and replaces seems to get rid of copper tubes...
//   removeAndReplace("minecraft:copper_ingot","ptdye:copper_tubes");
//   replaceInputForRecipes("create:copper_sheet","ptdye:copper_tubes");
  
//   //TODO: this needs ballencing!!!! i just felt like it didn't make sense to have it be processed in a press anymore, and it's a very fluid-oriented material.
//   addMixing(["ptdye:orange_tubes",Item.of("minecraft:clay").withChance(0.5)],"create:crushed_raw_copper","NONE",300,Fluid.of("minecraft:water").withAmount(10),Fluid.of("minecraft:milk").withAmount(10))
  
//   removeAndReplace("minecraft:copper_block","ptdye:orange_tube_block");
// }