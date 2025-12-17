// Create a custom trigger
AdvJSEvents.trigger(event => {
    event.create("advjs:get_adv")
        // How many matches you defined, how many tests you should put in
        // In this example, we defined 2 matches
        .match(advancement => advancement.getId() == "minecraft:story/smelt_iron")
        .match(playerName => playerName == "Dev")
})
