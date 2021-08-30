
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
RecipeGenerator.addTrade([vil],[<item:pneumaticcraft:cod_n_chips>*16|<item:create:honeyed_apple>*32|<item:pneumaticcraft:salmon_tempura>*32|<item:minecraft:pumpkin_pie>*32|<item:create:sweet_roll>*64|<item:pneumaticcraft:sourdough_bread>*64]);