
mods.jei.JEI.hideCategory("easy_villagers:breeding");
<item:easy_villagers:breeder>.remove();
mods.jei.JEI.hideCategory("easy_villagers:converting");
<item:easy_villagers:converter>.remove();
mods.jei.JEI.hideCategory("easy_villagers:incubating");
<item:easy_villagers:incubator>.remove();

<item:easy_villagers:trader>.remove();
<item:easy_villagers:farmer>.remove();
<item:easy_villagers:iron_farm>.remove();
val vil = <item:easy_villagers:villager>.withTag({villager: {Brain: {memories: {}}, Age: settings.villagerBabyAge},
    display: {
        Name: "{\"text\":\""+settings.villagerBabyName+"\",\"italic\":\"false\"}" as string
    }});

//TODO: Add function to package ingridients in shulker boxes
Recipes.addTrade([vil],[
    <item:minecraft:white_shulker_box>.withTag({BlockEntityTag: {Items: [{Slot: 0 as byte, id: "create:honeyed_apple" as string, Count: 32 as byte}]}})|
    <item:minecraft:white_shulker_box>.withTag({BlockEntityTag: {Items: [{Slot: 0 as byte, id: "minecraft:pumpkin_pie" as string, Count: 32 as byte}]}})|
    <item:minecraft:white_shulker_box>.withTag({BlockEntityTag: {Items: [{Slot: 0 as byte, id: "create:sweet_roll" as string, Count: 64 as byte}]}})
]);