# Design of CPD
## Definitions
In minecraft, to achieve a goal, there are a few elements you can produce.
- Craftables
    - Ingredients
    - Devices (tile entities)
    - Products
        - Tools
        - Food
        - Decorative
- Buildables / farms
    - Crop farms
    - Animal farms
    - Mob farms
    - Tree farms
    - Ore farms
    - Mana farms
    - Power farms

Usually modded minecraft complicates the craftables part with slight complication to the buildables part, depending on the mod. For example, thermal expansions adds a lot of complicated and interesting craftable recipes, but to connect the machines is trivial, the cables/logistics are easy, energy is easy, just need to connect the dots. It's still fun, I love TE a lot, but we are noting that the emphisis is on the craftables. Compare that the a mod like botania, where the buildables are complicated. The mana generation is complicated, the automation is complicated, the logistics is complicated. Or compare it to create, which takes the consept of buildables to the next level, in create, the buildables are very complicated, and so fun and interesting, in create, unlike in botania, the craftables are generally simple.

My core concept here, is to take make the buildables a big focus, and reduce the craftables to a minimum. Some sub categories of the craftables are: ingredients, devices, products. To make buildables more complicated while reducing the craftables, I need the devices to be easy to build. I want products to still be complicated, otherwize I don't need the buildables. For that, I believe I need to split ingredients to product ingredients and device ingredients, that way I can make sure the player can interact and engage with the buildables gameplay loop as fast as possible, and I make sure that the buildables are necessary and complex by making those buildables produce intricate Ingredients and products.

Example:
lets take a tree farm with botania for example.
- The buildables are the tree farm itself, the mana generation, the mana storage, the mana distribution.
- The craftables here are an issue, becuase to make the tree farm, you'll need some mana generating flowers, some functional flowers etc. Each costing runes and such, which are hard to get, let alone automate. All of that is fine, again, but not a part of the game play loop we are trying to go for so, if we go in with a first principles aproach, that means that flowers, of any kind, should not cost runes. I know, this is blasphamy, but this is what we have to do if we want to focus on the buildables. 
## Craftables
### Products 
Products are gonna be the main thing sold and traded. Those can and should be complex. Those are the goals, the advanced things you automate in most of the gameplay loop of the game. 
- food
- tools
- armor
- books
- decoration 
### Devices
Things like functional flowers, create devicds, etc. Those should be cheap, but with limited usefulness 
### Product ingredients
Those can have the widest array of complexity and can sometimes be the same ones in device ingredients 
### Device ingredients 
Because devices are cheap. Those should either be cheap, or completely removed when possible to make possible the ideal 

