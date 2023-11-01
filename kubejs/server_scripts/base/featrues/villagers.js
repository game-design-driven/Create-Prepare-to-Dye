
hideRecipeType('easy_villagers:breeding')
removeItem('easy_villagers:breeder')
hideRecipeType('easy_villagers:converting')
removeItem('easy_villagers:converter')
hideRecipeType('easy_villagers:incubating')
removeItem('easy_villagers:incubator')
removeItem('easy_villagers:trader')
removeItem('easy_villagers:farmer')
removeItem('easy_villagers:iron_farm')
let vil = 'easy_villagers:villager'
addElvenTrade(vil, ['milk_bucket', '2x emerald', Ingredient.of(['create:honeyed_apple', 'pumpkin_pie', 'create:sweet_roll'])])