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

//shouldn't really need to be neccesary...
replaceInputForRecipes("botania:manasteel_ingot","#botania:manasteel_ingots")
replaceInputForRecipes("botania:terrasteel_ingot","#botania:terrasteel_ingots")



//*
if(feature('No More Ingots')){

  //this went over relatively smoothly
  removeAndReplace("#forge:ingots/iron","#forge:plates/iron");

  removeRecipe({id: "create:pressing/iron_ingot"})
  addPressing("create:iron_sheet","minecraft:raw_iron");
  addShapeless("create:iron_sheet",["9x #forge:nuggets/iron"]);
  
  let sRAW =   {infuse_cost:1.6,terra_cost:0.9,f:(material)=>`#forge:raw_materials/${material.material}`,i:(material)=>`${material.mod}:raw_${material.material}`}
  let sSHEET = {infuse_cost:1.0,terra_cost:1.0,f:(material)=>`#forge:plates/${material.material}`,i:(material)=>`${material.mod}:${material.material}_sheet`}
  let sDISK =  {infuse_cost:0.7,terra_cost:4.0,f:(material)=>`#ptdye:disks/${material.material}`,i:(material)=>`${material.mod}:${material.material}_disk`}

  let mIRON = {
    material:"iron",mod:"minecraft",
    press_efficiency: 0.0, press_byproduct: "minecraft:iron_nugget",
    saw_efficiency:   0.0, saw_byproduct:   "minecraft:glass",
  }
  let mMANASTEEL = {
    material:"manasteel",mod:"botania",
    press_efficiency: 0.0, press_byproduct: "minecraft:iron_nugget",
    saw_efficiency:   0.0, saw_byproduct:   "botania:manasteel_powder",
  }
  let mTERRASTEEL = {
    material:"terrasteel",mod:"botania",
    press_efficiency: 0.0, press_byproduct: "minecraft:iron_nugget",
    saw_efficiency:   0.0, saw_byproduct:   "botania:terrasteel_powder",
  }

  let materials = [mIRON,mMANASTEEL,mTERRASTEEL];
  let shapes = [sRAW,sSHEET,sDISK];

  ServerEvents.tags("item",event=>{
    shapes.forEach(shape=>{
      materials.forEach(material=>{
        event.add(shape.f(material).replace("#",""),shape.i(material))
      })
    })
    event.remove("botania:manasteel_ingots","botania:manasteel_ingot")
    event.add("botania:manasteel_ingots","botania:manasteel_disk")
    event.remove("botania:terrasteel_ingots","botania:terrasteel_ingot")
    event.add("botania:terrasteel_ingots","botania:terrasteel_disk")
  })

  if(feature("Megatree Processing Hell") && false){
  
    materials.forEach(material=>{
      addPressing(sSHEET.f(material),sRAW.f(material));
      addProcessingRecipe('create:cutting', [solveResult(sDISK.f(material)),solveResult(material.saw_byproduct).withChance(0.25)], [solveLimitedIngredient(sSHEET.f(material))], 150)
    })
    shapes.forEach(shape=>{
      addInfusion(shape.f(mMANASTEEL),shape.f(mIRON),1000*shape.infuse_cost);
      ServerEvents.recipes(event=>{
        event.custom({
          "type": "botania:terra_plate",
          "ingredients": [
            {
              "item": Item.of(shape.f(mMANASTEEL)).id
            },
            {
              "item": "botania:mana_pearl"
            },
            {
              "item": "botania:mana_diamond"
            }
          ],
          "mana": 500000*shape.terra_cost,
          "result": {
            "item": Item.of(shape.f(mTERRASTEEL)).id
          }
        })
      })
      addProcessingRecipe("botania:terra_plate",solveResult(shape.f(mTERRASTEEL)),["botania:mana_pearl","botania:mana_diamond",shape.f(mMANASTEEL)].map(solveIngredient)).mana = 500000

      replaceInputForRecipes("botania:manasteel_ingot","#ptdye:disks/manasteel")
      replaceInputForRecipes("botania:terrasteel_ingot","#ptdye:disks/terrasteel")
      //removeAndReplace("botania:manasteel_ingot","#ptdye:disks/manasteel")
      //removeAndReplace("botania:terrasteel_ingot","#ptdye:disks/terrasteel")
    })
  }else{
    addPressing("#forge:plates/iron","minecraft:raw_iron")
    addInfusion("#ptdye:disks/manasteel","#forge:plates/iron")
    removeAndReplace("botania:manasteel_ingot","#ptdye:disks/manasteel")
    removeAndReplace("#botania:manasteel_ingots","#ptdye:disks/manasteel")
    removeAndReplace("botania:terrasteel_ingot","#ptdye:disks/terrasteel")
    removeAndReplace("#botania:terrasteel_ingots","#ptdye:disks/terrasteel")
  }

  
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
