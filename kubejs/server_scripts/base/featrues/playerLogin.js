//priority: 0
let extraPlayerItems = [
    Item.of('create:andesite_casing', 8),
    Item.of('create:brass_casing', 8),
    Item.of('create:copper_casing', 8),
    Item.of('ptdye:cobblestone_casing', 8),
    Item.of('ptdye:redstone_casing', 8),
]
if (feature('starter items')) {
    PlayerEvents.loggedIn((event) => {
        event.player.setAttributeBaseValue('forge:swim_speed', 3)
        event.player.setAttributeBaseValue('forge:reach_distance', 30)
        event.player.setAttributeBaseValue('forge:attack_range', 30)
        event.player.setAttributeBaseValue('minecraft:generic.attack_damage', 8)

        // /curios replace crafting_on_a_stick 0 YardenZmr with crafting_on_a_stick:anvil
        Utils.server.runCommandSilent(`curios remove belt ${event.player.displayName.getString()}`)
        Utils.server.runCommandSilent(`curios remove body ${event.player.displayName.getString()}`)
        Utils.server.runCommandSilent(`curios remove charm ${event.player.displayName.getString()}`)
        Utils.server.runCommandSilent(`curios remove necklace ${event.player.displayName.getString()}`)
        Utils.server.runCommandSilent(`curios remove ring ${event.player.displayName.getString()}`)
        Utils.server.runCommandSilent(`curios remove ring ${event.player.displayName.getString()}`)
        Utils.server.runCommandSilent(`curios replace crafting_on_a_stick 0 ${event.player.displayName.getString()} with crafting_on_a_stick:stonecutter`)
        Utils.server.runCommandSilent(`curios replace head 0 ${event.player.displayName.getString()} with create:goggles`)
        

        if (!event.player.getPersistentData().getBoolean('starter'))
        {
            event.player.give(Item.of('create:wrench', 1))
            event.player.give(Item.of('create:clipboard', "{Pages:[{Entries:[{Checked:1b,Text:'{\"text\":\"Feed Betsy\"}'},{Checked:1b,Text:'{\"text\":\"Engine safety checks\"}'},{Checked:0b,Text:'{\"text\":\"Landing systems safety checks\"}'},{Checked:1b,Text:'{\"text\":\"Make sure Pure Daisy is ready for landing (!!)\"}'},{Checked:0b,Text:'{\"text\":\"Don\\'t crash\"}'},{Checked:0b,Text:'{\"text\":\"Ponder life\"}'},{Checked:1b,Text:'{\"text\":\"Fix wrench\"}'},{Checked:1b,Text:'{\"text\":\"Check automated milking system\"}'},{Checked:0b,Text:'{\"text\":\"Decide what to automate first\"}'}]}],PreviouslyOpenedPage:0,RepairCost:0,Type:1,display:{Name:'{\"text\":\"Day 931 - Landing!\",\"italic\":\"false\"}'}}"))
            event.player.getPersistentData().putBoolean('starter', true)
            event.player.getPersistentData().putBoolean('new_trade_engine_comp', true)

            if (event.server.getPersistentData().getBoolean('existing_world'))
            {
                extraPlayerItems.forEach(element => {
                    event.player.give(element) 
                })
            }
            event.server.getPersistentData().putBoolean('existing_world', true)
        }
        if (!event.player.getPersistentData().getBoolean('new_trade_engine_comp'))
        {
            event.player.getPersistentData().putBoolean('new_trade_engine_comp', true)
            global.starterDeals.forEach(element => {
                event.player.give(element.item) 
            });
        }
    })
}