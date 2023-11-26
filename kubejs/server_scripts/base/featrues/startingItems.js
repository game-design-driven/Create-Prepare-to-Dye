if (feature('starter items')) {
    PlayerEvents.loggedIn((event) => {
        if (!event.player.getPersistentData().getBoolean('starter'))
        {
            event.player.give(Item.of('create:wrench', 1))
            event.player.give(Item.of(Item.of('create:clipboard', "{Pages:[{Entries:[{Checked:1b,Text:'{\"text\":\"Feed Betsy\"}'},{Checked:1b,Text:'{\"text\":\"Engine safty checks\"}'},{Checked:0b,Text:'{\"text\":\"Landing systems saftey checks\"}'},{Checked:1b,Text:'{\"text\":\"Water Pure Daisy\"}'},{Checked:0b,Text:'{\"text\":\"Think of cool name for company\"}'},{Checked:0b,Text:'{\"text\":\"Don\\'t crash\"}'},{Checked:0b,Text:'{\"text\":\"Ponder life\"}'},{Checked:1b,Text:'{\"text\":\"Fix wrench\"}'},{Checked:1b,Text:'{\"text\":\"Check automated milking system\"}'},{Checked:0b,Text:'{\"text\":\"Decide what to automate first\"}'}]}],PreviouslyOpenedPage:0,RepairCost:0,Type:1,display:{Name:'{\"text\":\"Day 931 - Landing!\",\"italic\":\"false\"}'}}"), 1))
            event.player.getPersistentData().putBoolean('starter', true)
            event.player.getPersistentData().putBoolean('compensated', true)
        }
        if (!event.player.getPersistentData().getBoolean('compensated') && event.player.displayName.getString() == 'toastonrye')
        {
            event.player.give(Item.of('ae2:energy_cell'))
            event.player.getPersistentData().putBoolean('compensated', true)
        }
    })
}