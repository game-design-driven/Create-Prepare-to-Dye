//priority: 0
if (feature('starter items')) {
    PlayerEvents.loggedIn((event) => {
        event.player.setAttributeBaseValue('forge:swim_speed', 3)


        if (!event.player.getPersistentData().getBoolean('starter'))
        {
            event.player.give(Item.of('create:wrench', 1))
            event.player.give(Item.of('create:clipboard', "{Pages:[{Entries:[{Checked:1b,Text:'{\"text\":\"Feed Betsy\"}'},{Checked:1b,Text:'{\"text\":\"Engine safety checks\"}'},{Checked:0b,Text:'{\"text\":\"Landing systems safety checks\"}'},{Checked:1b,Text:'{\"text\":\"Make sure Pure Daisy is ready for landing (!!)\"}'},{Checked:0b,Text:'{\"text\":\"Don\\'t crash\"}'},{Checked:0b,Text:'{\"text\":\"Ponder life\"}'},{Checked:1b,Text:'{\"text\":\"Fix wrench\"}'},{Checked:1b,Text:'{\"text\":\"Check automated milking system\"}'},{Checked:0b,Text:'{\"text\":\"Decide what to automate first\"}'}]}],PreviouslyOpenedPage:0,RepairCost:0,Type:1,display:{Name:'{\"text\":\"Day 931 - Landing!\",\"italic\":\"false\"}'}}"))
            event.player.getPersistentData().putBoolean('starter', true)
            event.player.getPersistentData().putBoolean('new_trade_engine_comp', true)
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