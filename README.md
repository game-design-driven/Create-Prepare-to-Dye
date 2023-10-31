# ⚙️Create.run         [![](http://cf.way2muchnoise.eu/versions/518606_latest.svg)](https://minecraft.curseforge.com/projects/518606)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/PandaBoy444/Create.run)](https://github.com/PandaBoy444/Create.run/releases)
[![GitHub issues](https://img.shields.io/github/issues/PandaBoy444/Create.run)](https://github.com/PandaBoy444/Create.run/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc)
[![GitHub last commit](https://img.shields.io/github/last-commit/PandaBoy444/Create.run)](https://github.com/PandaBoy444/Create.run/commits)
[![CurseForge page](http://cf.way2muchnoise.eu/518606.svg)](https://minecraft.curseforge.com/projects/518606)

Create.run is an opinionated, minimalistic modpack centered around complex and interesting automation.

    A small but ambitious project to give create the stage it deserves
## About the project
### Core values
<details>
  <summary>Complex and unique automation</summary>
  
Using Create and Botanias natural automation focus as a loose base, we are constructing processing lines with depth and options.
* Create - A core part of the pack, the unique logistics and processes of the mod allow us to explore new territory in problem solving and creative automation*1
* Botania - Another core element of the run experience.
* Quark + oddities
* Supplementaries
---
</details>
<details>
  <summary>Radical simplification</summary>

No clutter. Every item and block has ~~a reason~~ at least a few reasons to be in the game. Otherwise it gets yeeted
</details>
<details>
  <summary>Low amount of tasks that aren't "making cool stuff"</summary>
  
* Effortless building - with the configs that allow you to build and destroy huge things right out of the gate.
* Refined Storage - without any automation parts, it is just a fancy way to access your storage to make your life easier without taking away any of the cool automation
</details>
<details>
  <summary>Lightweight</summary>
  
The pack has around 60 mods, takes less than a minute to boot!
</details>
<details>
  <summary>Heavily Documented, in game</summary>
  
JEI is a core gameplay element. Imagine playing botania without needing to open a book or a wiki
</details>
<details>
  <summary>A new take on progression</summary>
  
Consistency and fun, sense based processes over realistic ones
</details>

<details>
  <summary>Customization and Modularity</summary>
  
we have a clear gameplay loop we try to enforce, but if there is something that doesn't fit, you should be able to change it easily.
Out script base uses a feature based aproach, where you can enable and disable features of the pack, and even add your own using our recipe managers. Examples:
```javascript
if (feature('Manapool-crafting-table recipes for single ingredient crafting')) {
    forEachRecipe([{ type: 'minecraft:crafting_shapeless' }], recipe => {
        let ingredients = recipe.getOriginalRecipeIngredients();
        if (ingredients.length != 1) return;

        let resultId = recipe.getOriginalRecipeResult().getId();
        let ingredientId = ingredients[0].getItemIds()[0];

        let hasRemovedItems = [resultId, ingredientId].some(id => global.itemsToRemove.includes(id));
        if (hasRemovedItems) return;

        if (manapool_single_crafting_blacklist.includes(recipe.getId())) return;
        console.info('recipe: ' + resultId + ' ' + ingredientId + ' ' + recipe.getId()+ 'removed: ' + recipe.removed)
        if (recipe.removed) return;
        addInfusion(recipe.getOriginalRecipeResult(), ingredients[0], 500, 'minecraft:crafting_table');
        console.info('Adding infusion for "' + resultId + '" and "' + ingredientId+'"');
    });
}
```
This is an example feature that adds all crafting table recipes that have one ingredient to a new process of using a mana pool with a crafting table underneath.

If you don't like this feature, or any other feature, you can use `disabledFeature('Manapool-crafting-table recipes for single ingredient crafting')` in your script to disable it.
</details>






[Course forge page](https://www.curseforge.com/minecraft/modpacks/create-run)

# Roadmap
|Goal                              	    |Estimated Progress           |Priority  |Alpha Ready	|Description |
|--------------------------------------|:---------------------------------:|-----------:|-------------:|------------------------:|
|Core Mod List                         | ![](https://progress-bar.dev/85)  | Critical   | ✔				| The mods that help construct the core gameplay loop|
|Core Gameplay loop                    | ![](https://progress-bar.dev/80)  | Critical   | ✔				| The basic elements that repeats and evolve as the game loops|
|Loop Entry Point / Game Start and End | ![](https://progress-bar.dev/30)  | High       |   			| A goal for the player to push them into the game and give them a reason to enter the core gameplay loop|
|Documentation                         | ![](https://progress-bar.dev/30)  | High       |   			| The player can figure out easily what every game element does and how fast, and without tabbing out of the game or reading a lot of text. Books should be optional if added value |
|Script base                           | ![](https://progress-bar.dev/100)  | Critical   | ✔			| The scripting tools and libraries needed to develop and modify the pack efficiently are implemented|
|Modularity                            | ![](https://progress-bar.dev/90)  | Standard   |   			| All core aspects of the pack are configurable|
|Performance                           | ![](https://progress-bar.dev/90)  | Low       	|   			| The pack starts up fast and can run on low end pcs well even through the end game|
