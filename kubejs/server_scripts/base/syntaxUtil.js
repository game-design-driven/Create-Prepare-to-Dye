//priority : 101
let recipeIdNumber = 0;
let allIds = [];
let recipeIdSuffix = "pack";

function solveResults(items) {
  var outArr = [];
  Array.isArray(items)
    ? items.forEach((item) => {
        outArr.push(solveResult(item));
      })
    : outArr.push(solveResult(items));
  return outArr;
}
function solveResult(item) {
  if (!item || item == "") return;
  if (typeof item === "string") {
    //is string, apply custom syntax
    if (item.includes("mb ")) {
      //fluid

      let amount = parseInt(item.split("mb ")[0]);
      return Fluid.of(item.split("mb ")[1]).withAmount(amount).toJson();
    }
    if (item.includes(" %")) {
      return {
        item: item.split(" %")[0],
        chance: parseFloat(item.split(" %")[1]) / 100,
      };
    }
    // }else if (item.includes('x ')) {
    //     return {
    //         item: item.split('x ')[1],
    //         count: parseInt(item.split('x ')[0])
    //     }
    // }else{
    //     return {
    //         item: item
    //     }
    // }
  }
  return Item.of(item); //.toResultJson() doesn't need to be converted to keep metadata unlike ingredient
}
function solveLimitedIngredients(limitedIngredients) {
  if (!limitedIngredients || limitedIngredients == "") return [];
  var outArr = [];
  // return empty if
  if (Array.isArray(limitedIngredients)) {
    limitedIngredients.forEach((limitedIngredient) => {
      if (
        typeof limitedIngredient === "string" &&
        limitedIngredient.includes("x ")
      ) {
        let times = parseInt(limitedIngredient.split("x ")[0]);
        for (let i = 1; i < times; i++) {
          // starts from one because we'll push the default one later anyways
          outArr.push(solveLimitedIngredient(limitedIngredient.split("x ")[1]));
        }
      }
      outArr.push(solveLimitedIngredient(limitedIngredient));
    });
  } else return solveLimitedIngredients([limitedIngredients]); //if not array, restart with it as array
  return outArr;
}
function solveLimitedIngredient(limitedIngredient) {
  //an ingredient that isn't allowed to have count
  if (typeof limitedIngredient === "string") {
    if (limitedIngredient.includes("x "))
      return solveIngredient(limitedIngredient.split("x ")[1]);
  }
  return solveIngredient(limitedIngredient);
}

function solveIngredients(ingredients) {
  var outArr = [];
  Array.isArray(ingredients)
    ? ingredients.forEach((ingredient) => {
        if (typeof ingredient === "string") {
          //is string, apply custom syntax
          if (ingredient.includes("x ")) {
            let times = parseInt(ingredient.split("x ")[0]);
            for (let i = 0; i < times; i++) {
              // starts from one because we'll push the default one later anyways
              outArr.push(solveIngredient(ingredient.split("x ")[1]));
            }
          } else {
            outArr.push(solveIngredient(ingredient));
          }
        }
      })
    : outArr.push(solveIngredient(ingredients));
  return outArr;
}
function solveIngredient(ingredient) {
  // if (!ingredient) return //experimental
  if (typeof ingredient === "string") {
    if (ingredient.includes("mb ")) {
      //fluid

      let amount = parseInt(ingredient.split("mb ")[0]);
      return Fluid.of(ingredient.split("mb ")[1]).withAmount(amount).toJson();
    }
    //is string, apply custom syntax
  }
  return Ingredient.of(ingredient).toJson(); //experimental, the toJson can cause problems!
}
function solveFluids(fluids) {
  if (!fluids) return [];
  var outArr = [];
  Array.isArray(fluids)
    ? fluids.forEach((fluid) => {
        outArr.push(solveFluid(fluid));
      })
    : outArr.push(solveFluid(fluids));
  return outArr;
}
function solveFluid(fluid) {
  if (!fluid) return;
  let amount = fluid.amount || parseInt(1000); //for some reason can't be 1000 //it turns 1000 into nothing because it thinks it's default
  if (typeof fluid === "string") {
    //is string, apply custom syntax
    if (fluid.includes("x ")) {
      amount = parseInt(fluid.split("x ")[0]);
      fluid = fluid.split("x ")[1];
    }
    if (!fluid.includes(":")) fluid = "minecraft:" + fluid;
    return {
      fluid: fluid,
      amount: amount,
    };
  }
  return Fluid.of(fluid).withAmount(amount).toJson();
}

let global_recipe_counter = 0;
function getUniqueRecipeName(recipe, prefix) {
  //doesn't
  let result = null;
  if (recipe.originalRecipe != null) {
    result = recipe.getOriginalRecipeResult().getId().split(":")[1];
  } else {
    result = "recipe";
  }
  prefix = prefix? prefix + "/" : "";
  // let name = recipe.getType() + "/" + prefix + result;
  let name = "ptdye:modpack" + "/" + prefix + result;
  name = name.split("'")[0];
  name = name + "" + "/" + global_recipe_counter;
  global_recipe_counter++;
  allIds.push(name);
  return name + "/" + recipeIdSuffix;
}

String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, "g"), replacement);
};

function removeAirFromRecipe(recipe) {
  if (Array.isArray(recipe.ingredients)) {
    recipe.ingredients.forEach((ingredient) => {
      if ((ingredient + "").includes("minecraft:air")) {
        recipe.ingredients = recipe.ingredients.filter((i) => i !== ingredient);
      }
    });
  }
}
