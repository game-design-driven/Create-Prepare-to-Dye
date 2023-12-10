//priority: 0
let extraPlayerItems = [
    Item.of('create:andesite_casing', 8),
    Item.of('create:brass_casing', 8),
    Item.of('create:copper_casing', 8),
    Item.of('ptdye:cobblestone_casing', 8),
    Item.of('ptdye:redstone_casing', 8),
]
function automatonAttributes(player){
    player.setAttributeBaseValue('forge:swim_speed', 3)
    player.setAttributeBaseValue('forge:reach_distance', 30)
    player.setAttributeBaseValue('forge:attack_range', 30)
    player.setAttributeBaseValue('minecraft:generic.attack_damage', 8)
    Utils.server.runCommandSilent(`curios remove belt ${player.displayName.getString()}`)
    Utils.server.runCommandSilent(`curios remove body ${player.displayName.getString()}`)
Utils.server.runCommandSilent(`curios remove charm ${player.displayName.getString()}`)
    Utils.server.runCommandSilent(`curios remove necklace ${player.displayName.getString()}`)
    Utils.server.runCommandSilent(`curios remove ring ${player.displayName.getString()}`)
    Utils.server.runCommandSilent(`curios remove ring ${player.displayName.getString()}`)
    Utils.server.runCommandSilent(`curios replace crafting_on_a_stick 0 ${player.displayName.getString()} with crafting_on_a_stick:stonecutter`)
    Utils.server.runCommandSilent(`curios replace head 0 ${player.displayName.getString()} with create:goggles`)
    player.tell(Text.of('Use ').aqua().append(Text.of('V').red().append(Text.of(' to open your built-in device assembler').aqua())))
}
if (feature('starter items')) {
    PlayerEvents.loggedIn((event) => {
        automatonAttributes(event.player)
        
        if (!event.player.getPersistentData().getBoolean('starter'))
        {
            event.player.give(Item.of('create:wrench', 1))
            event.player.give(Item.of('create:clipboard', "{Pages:[{Entries:[{Checked:1b,Text:'{\"text\":\"Pet Betsy\"}'},{Checked:1b,Text:'{\"text\":\"Engine safety checks\"}'},{Checked:0b,Text:'{\"text\":\"Landing systems safety checks\"}'},{Checked:1b,Text:'{\"text\":\"Make sure Pure Daisy is ready for landing (!!)\"}'},{Checked:0b,Text:'{\"text\":\"Don\\'t crash\"}'},{Checked:0b,Text:'{\"text\":\"Ponder life\"}'},{Checked:1b,Text:'{\"text\":\"Fix wrench\"}'},{Checked:1b,Text:'{\"text\":\"Check automated milking system (critical, can't automate without milk!)\"}'},{Checked:0b,Text:'{\"text\":\"Decide what to automate first\"}'}]}],PreviouslyOpenedPage:0,RepairCost:0,Type:1,display:{Name:'{\"text\":\"Day 931 - Landing!\",\"italic\":\"false\"}'}}"))
            event.player.getPersistentData().putBoolean('starter', true)
            event.player.getPersistentData().putBoolean('new_devices_comp', true)

            if (event.server.getPersistentData().getBoolean('existing_world'))
            {
                extraPlayerItems.forEach(element => {
                    event.player.give(element) 
                })
            }
            event.server.getPersistentData().putBoolean('existing_world', true)
        }
        if (!event.player.getPersistentData().getBoolean('new_devices_comp'))
        {
            event.player.getPersistentData().putBoolean('new_devices_comp', true)
            let devices =['8x ptdye:sealed_device', '12x ptdye:logic_device', '8x ptdye:smart_device', '8x ptdye:mechanical_device', '8x ptdye:sturdy_device']
            devices.forEach(element => {
                event.player.give(element) 
            });
        }
    })
}